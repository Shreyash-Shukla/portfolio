"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const SpaceShooter = dynamic(() => import("./SpaceShooter"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-[380px] h-[440px] rounded-2xl border-2 border-[#00FF6A]/30 bg-[#070714] flex items-center justify-center">
      <span className="font-mono text-[#00FF6A] text-sm animate-pulse">Loading game...</span>
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
  const [displayed, setDisplayed] = useState("");
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
        setIsDeleting(false);
        setRoleIndex((r) => (r + 1) % ROLES.length);
      }
    }
    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const stats = [
    { value: "9.72", label: "CGPA / 10" },
    { value: "Knight", label: "on LeetCode" },
    { value: "4", label: "Production Tools" },
    { value: "2x", label: "Hackathon Winner" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 lg:pt-16 pb-10 px-6 lg:px-12 max-w-[1440px] mx-auto"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── Left: Game ── */}
        <div className="flex flex-col items-center lg:items-start gap-2.5 order-2 lg:order-1 lg:-mt-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-emerald-700 dark:text-[#00FF6A] bg-emerald-500/10 dark:bg-[#00FF6A]/10 border border-emerald-500/30 dark:border-[#00FF6A]/30 rounded-full px-3 py-1 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-[#00FF6A] animate-pulse"></span>
            MINI GAME — BUG BLASTER
          </div>
          <SpaceShooter />
          <p className="font-mono text-xs text-gray-700 dark:text-gray-400 text-center font-medium">
            A developer who ships code AND squashes bugs 🐛
          </p>
        </div>

        {/* ── Right: Bio ── */}
        <div className="order-1 lg:order-2 flex flex-col gap-7">
          {/* Tag */}
          <div className="flex flex-wrap gap-2">
            <span className="font-mono text-xs font-bold bg-black text-[#00FF6A] dark:bg-[#00FF6A]/10 dark:text-[#00FF6A] border border-[#00FF6A] px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
              B.Tech CSE · PDEU
            </span>
            <span className="font-mono text-xs font-bold bg-gray-200 text-gray-800 dark:bg-white/5 dark:text-gray-300 border border-gray-400 dark:border-gray-700 px-3 py-1 rounded-full uppercase tracking-widest">
              Ex-Intern @ Quicko
            </span>
          </div>

          {/* Name */}
          <div>
            <p className="font-mono text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-[0.25em] mb-1">
              Hello, World! I&apos;m
            </p>
            <h1 className="font-mono font-black text-5xl lg:text-6xl xl:text-7xl text-gray-900 dark:text-white leading-tight tracking-tight">
              SHREYASH
              <br />
              <span className="text-emerald-600 dark:text-[#00FF6A]">SHUKLA</span>
              <span className="text-gray-900 dark:text-white">.</span>
            </h1>
          </div>

          {/* Typewriter */}
          <div className="h-10 flex items-center">
            <span className="font-mono text-lg lg:text-xl text-gray-800 dark:text-gray-200 font-semibold">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-emerald-600 dark:bg-[#00FF6A] ml-0.5 animate-pulse"></span>
            </span>
          </div>

          {/* Bio */}
          <p className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed max-w-lg">
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
                className="bg-white dark:bg-white/5 border-2 border-gray-300 dark:border-white/10 rounded-xl p-3 text-center hover:border-green-500 dark:hover:border-[#00FF6A]/50 transition-colors shadow-sm"
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
          <div className="flex flex-wrap gap-3 mt-1">
            <button
              onClick={onOpenResume}
              className="neo-btn font-mono font-black text-sm bg-emerald-400 dark:bg-[#00FF6A] text-black px-7 py-3 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all uppercase tracking-widest"
            >
              View Resume
            </button>
            <a
              href="#contact"
              className="neo-btn font-mono font-black text-sm bg-white dark:bg-black text-gray-900 dark:text-white px-7 py-3 rounded-xl border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all uppercase tracking-widest"
            >
              Hire Me
            </a>
          </div>

          {/* Scroll hint */}
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-400 font-mono text-xs">
            <span>Scroll to explore</span>
            <span className="animate-bounce text-emerald-600 dark:text-[#00FF6A] font-bold">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
