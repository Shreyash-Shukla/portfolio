"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const SpaceShooter = dynamic(() => import("./SpaceShooter"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-[540px] aspect-[19/22] rounded-2xl border-2 border-[#8B9CFF]/30 bg-[#070714] flex items-center justify-center">
      <span className="font-mono text-[#8B9CFF] text-sm animate-pulse">Loading game...</span>
    </div>
  ),
});

const ROLES = [
  "Full Stack Developer",
  "Professional Bug Squasher 🦟",
  "CSE @ PDEU (9.72 CGPA)",
  "AWS Lambda Architect",
  "Surviving JEE like a config file 🥲",
  "React & Angular Builder",
  "Open Source Contributor",
  "Software Engineering Intern @ Quicko",
];

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!isDeleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => setCharIndex((c) => c + 1), 75);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % ROLES.length);
        }, 0);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const displayed = ROLES[roleIndex].slice(0, charIndex);

  const stats = [
    { value: "9.72", label: "CGPA / 10" },
    { value: "Knight", label: "on LeetCode" },
    { value: "4", label: "Production Tools" },
    { value: "2x", label: "Hackathon Winner" },
  ];

  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen max-w-[1440px] items-center px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10 xl:px-12"
    >
      <div className="grid w-full grid-cols-1 items-center gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:gap-10 2xl:gap-12">

        {/* ── Left: Game ── */}
        <div className="order-2 flex min-w-0 flex-col items-center gap-2.5 xl:items-end">
          <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-[#39d353]/40 bg-[#39d353]/10 px-3 py-1 font-mono text-[10px] font-bold text-[#176c2d] sm:text-xs dark:text-[#39d353]">
            <span className="h-2 w-2 rounded-full bg-[#39d353] animate-pulse"></span>
            MINI GAME — BUG BLASTER
          </div>
          <SpaceShooter />
          <p className="font-mono text-xs text-gray-700 dark:text-gray-400 text-center font-medium">
            A developer who ships code AND squashes bugs 🐛
          </p>
        </div>

        {/* ── Right: Bio ── */}
        <div className="order-1 flex min-w-0 flex-col gap-6 xl:gap-7">
          {/* Name */}
          <div>
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#269d47] dark:text-[#39d353]">
              Hello, World! I&apos;m
            </p>
            <h1 className="font-mont text-[clamp(2.65rem,10vw,5.5rem)] font-black leading-[1.02] tracking-[-0.05em] text-gray-900 dark:text-white">
              SHREYASH
              <br />
              <span className="text-[#209c45] dark:text-[#39d353]">SHUKLA</span>
              <span className="text-gray-900 dark:text-white">.</span>
            </h1>
          </div>

          {/* Typewriter */}
          <div className="h-10 flex items-center">
            <span className="font-mono text-lg lg:text-xl text-gray-800 dark:text-gray-200 font-semibold">
              {displayed}
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-[#39d353]"></span>
            </span>
          </div>

          {/* Bio */}
          <p className="max-w-xl text-base leading-relaxed text-gray-800 dark:text-gray-300 sm:text-lg">
            I&apos;m a Computer Science student at{" "}
            <span className="text-gray-900 dark:text-white font-bold">
              Pandit Deendayal Energy University
            </span>{" "}
            (CGPA: 9.72/10), based in{" "}
            <span className="text-gray-900 dark:text-white font-bold">Gandhinagar, Gujarat</span>
            . I build production-grade full-stack apps, architect serverless systems on AWS, and
            hold a Knight badge on LeetCode.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-gray-300 bg-white p-3 text-center dark:border-white/20 dark:bg-[#111]"
              >
                <p className="font-mono font-black text-xl sm:text-2xl text-gray-900 dark:text-white">
                  {s.value}
                </p>
                <p className="font-mono text-[10px] text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-1 grid grid-cols-1 gap-3 min-[390px]:grid-cols-2 sm:flex sm:flex-wrap">
            <button
              onClick={onOpenResume}
              className="rounded-md bg-[#39d353] px-5 py-3 font-mono text-sm font-black uppercase tracking-widest text-black transition-colors hover:bg-[#67ee7d] sm:px-7"
            >
              View Resume
            </button>
            <a
              href="#contact"
              className="rounded-md border border-black bg-white px-7 py-3 font-mono text-sm font-black uppercase tracking-widest text-gray-900 transition-colors hover:bg-gray-100 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              Hire Me
            </a>
          </div>

          {/* Scroll hint */}
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-400 font-mono text-xs">
            <span>Scroll to explore</span>
            <span className="animate-bounce font-bold text-[#39d353]">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
