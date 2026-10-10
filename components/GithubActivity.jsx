"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BookMarked, Building2, MapPin, Users, UserRoundPlus, ExternalLink } from "lucide-react";

const PROFILE_URL = "https://github.com/Shreyash-Shukla";
const LEVEL_COLORS = ["#292929", "#0e4429", "#006d32", "#26a641", "#39d353"];

function calendarWeeks(days, year) {
  const byDate = new Map(days.map((day) => [day.date, day]));
  const today = new Date().toISOString().slice(0, 10);
  const first = new Date(Date.UTC(year, 0, 1));
  first.setUTCDate(first.getUTCDate() - first.getUTCDay());
  const last = new Date(Date.UTC(year, 11, 31));
  last.setUTCDate(last.getUTCDate() + (6 - last.getUTCDay()));
  const weeks = [];

  for (let date = new Date(first); date <= last; date.setUTCDate(date.getUTCDate() + 7)) {
    const week = [];
    for (let row = 0; row < 7; row++) {
      const current = new Date(date);
      current.setUTCDate(current.getUTCDate() + row);
      const key = current.toISOString().slice(0, 10);
      week.push(current.getUTCFullYear() === year && key <= today ? (byDate.get(key) ?? { date: key, level: 0, count: null }) : null);
    }
    weeks.push(week);
  }
  return weeks;
}

export default function GithubActivity() {
  const [data, setData] = useState(null);
  const [failed, setFailed] = useState(false);
  const [activeDay, setActiveDay] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/github", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub unavailable");
        return response.json();
      })
      .then(setData)
      .catch((error) => {
        if (error.name !== "AbortError") setFailed(true);
      });
    return () => controller.abort();
  }, []);

  const profile = data?.profile;
  const weeks = data?.calendar.days.length ? calendarWeeks(data.calendar.days, data.year) : [];

  return (
    <section id="github" className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 xl:px-12">
      <div className="mb-10 flex items-center gap-3">
        <span className="h-3.5 w-3.5 rounded-full bg-[#39d353]" />
        <span className="font-mono text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-400">GITHUB ACTIVITY</span>
      </div>

      <div className="rounded-[28px] border-4 border-white bg-[#0d0d0d] p-5 text-white shadow-[10px_10px_0_0_#ffffff] sm:p-9 lg:p-10">
        <div className="flex flex-wrap items-center gap-5">
          <Image src={profile?.avatarUrl ?? "https://github.com/Shreyash-Shukla.png"} alt="Shreyash Shukla's GitHub avatar" width={72} height={72} className="h-[72px] w-[72px] rounded-full border-2 border-white object-cover" />
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
            <div className="overflow-x-auto pb-2">
              <div className="flex w-max gap-[3px] sm:gap-1" role="group" aria-label={`${data.calendar.total ?? "GitHub"} contributions in ${data.year}`}>
                {weeks.map((week, index) => (
                  <div key={index} className="flex flex-col gap-[3px] sm:gap-1">
                    {week.map((day, row) => day ? (
                      <button
                        key={day.date}
                        type="button"
                        aria-label={`${day.date}: ${day.count === null ? `activity level ${day.level}` : `${day.count} contribution${day.count === 1 ? "" : "s"}`}`}
                        onMouseEnter={() => setActiveDay(day)}
                        onMouseLeave={() => setActiveDay(null)}
                        onFocus={() => setActiveDay(day)}
                        onBlur={() => setActiveDay(null)}
                        className="h-[11px] w-[11px] shrink-0 cursor-pointer rounded-full p-0 transition-transform hover:scale-125 focus-visible:scale-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-[13px] sm:w-[13px]"
                        style={{ backgroundColor: LEVEL_COLORS[day.level] }}
                      />
                    ) : <span key={row} className="h-[11px] w-[11px] sm:h-[13px] sm:w-[13px]" />)}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-[#9eb4ca]">{failed ? "GitHub activity is temporarily unavailable." : data ? "Contribution activity is temporarily unavailable." : "Loading GitHub activity…"} <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">View profile</a></p>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#9eb4ca] sm:text-sm">
            <span aria-live="polite">{activeDay ? `${activeDay.date}: ${activeDay.count === null ? `activity level ${activeDay.level}` : `${activeDay.count} contribution${activeDay.count === 1 ? "" : "s"}`}` : "Hover or focus a dot for details ;)"}</span>
            <div className="flex items-center gap-2"><span>Less</span>{LEVEL_COLORS.map((color) => <span key={color} className="h-3 w-3 rounded-full sm:h-4 sm:w-4" style={{ backgroundColor: color }} />)}<span>More</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
