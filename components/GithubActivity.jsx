"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { BookMarked, Building2, MapPin, Users, UserRoundPlus, ExternalLink } from "lucide-react";
import ContributionGraph from "./ContributionGraph";
import { calendarWeeks } from "../lib/github-calendar";

const PROFILE_URL = "https://github.com/Shreyash-Shukla";

export default function GithubActivity() {
  const [data, setData] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const load = () => fetch("/api/github", { signal: controller.signal, cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub unavailable");
        return response.json();
      })
      .then((result) => { setData(result); setFailed(false); })
      .catch((error) => {
        if (error.name !== "AbortError") setFailed(true);
      });
    load();
    const refresh = setInterval(() => {
      if (document.visibilityState === "visible") load();
    }, 300000);
    const onVisible = () => {
      if (document.visibilityState === "visible") load();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      controller.abort();
      clearInterval(refresh);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  const profile = data?.profile;
  const weeks = useMemo(() => data?.calendar.days.length ? calendarWeeks(data.calendar.days, data.year, data.today) : [], [data]);

  return (
    <section id="github" className="site-section">
      <div className="section-heading">
        <span className="section-eyebrow">LIVE FROM GITHUB</span>
        <h2 className="section-title">GitHub <span>Activity</span></h2>
        <p className="section-copy">Current profile stats and contributions, refreshed from GitHub.</p>
      </div>

      <div className="dark-surface rounded-[28px] border-[3px] border-white bg-[#0d0d0d] p-5 text-white shadow-[8px_8px_0_0_#ffffff] sm:p-9 lg:p-10">
        <div className="flex flex-wrap items-center gap-5">
          {profile?.avatarUrl ? (
            <Image src={profile.avatarUrl} alt="Shreyash Shukla's GitHub avatar" width={72} height={72} className="h-[72px] w-[72px] rounded-full border-2 border-white object-cover" />
          ) : (
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-white bg-[#242424] font-mont text-xl font-black" aria-hidden="true">SS</div>
          )}
          <div className="min-w-0">
            <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 font-mont text-2xl font-black hover:text-[#39d353] sm:text-3xl">
              {profile?.name ?? "Shreyash Shukla"}
              <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100" aria-hidden="true" />
            </a>
            <p className="font-mono text-base text-[#9eb4ca] sm:text-lg">@{profile?.login ?? "Shreyash-Shukla"}</p>
          </div>
        </div>

        {profile?.bio && <p className="mt-6 text-lg sm:text-xl">{profile.bio}</p>}

        {profile && (
          <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#9eb4ca] sm:text-lg">
            {profile.company && <span className="inline-flex items-center gap-2"><Building2 className="h-5 w-5" aria-hidden="true" /><span className="font-semibold text-[#39d353]">{profile.company}</span></span>}
            {profile.location && <span className="inline-flex items-center gap-2"><MapPin className="h-5 w-5" aria-hidden="true" />{profile.location}</span>}
          </div>
        )}

        {profile && (
          <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#9eb4ca] sm:text-lg">
            <span className="inline-flex items-center gap-2"><BookMarked className="h-5 w-5" aria-hidden="true" /><strong className="text-white">{profile.publicRepos}</strong> repos</span>
            <span className="inline-flex items-center gap-2"><Users className="h-5 w-5" aria-hidden="true" /><strong className="text-white">{profile.followers}</strong> followers</span>
            <span className="inline-flex items-center gap-2"><UserRoundPlus className="h-5 w-5" aria-hidden="true" /><strong className="text-white">{profile.following}</strong> following</span>
          </div>
        )}

        <div className="mt-8 border-t-2 border-dashed border-white/20 pt-7">
          <div className="mb-5 flex items-end justify-between gap-3 text-[#9eb4ca]">
            <h2 className="text-base sm:text-xl">Contributions this year</h2>
            {data?.calendar.total !== null && data?.calendar.total !== undefined && <strong className="font-mont text-2xl text-white sm:text-3xl">{data.calendar.total.toLocaleString()}</strong>}
          </div>

          {weeks.length > 0 ? (
            <ContributionGraph weeks={weeks} total={data.calendar.total} year={data.year} />
          ) : (
            <p className="text-sm text-[#9eb4ca]">{failed ? "GitHub activity is temporarily unavailable." : data ? "Contribution activity is temporarily unavailable." : "Loading GitHub activity…"} <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">View profile</a></p>
          )}
        </div>
      </div>
    </section>
  );
}
