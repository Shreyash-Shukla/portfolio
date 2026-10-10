"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Award, Medal, Star, Trophy } from "lucide-react";

const wins = [
  {
    name: "FraudShield",
    result: "GRAND PRIZE WINNERS",
    event: "HackNUthon 6.0 · Nirma University",
    date: "APRIL 2025",
    location: "Nirma University, Ahmedabad",
    team: "Team Software Sigmas",
    image: "/image_nirma.jpg",
    imageAlt: "FraudShield team receiving their HackNUthon 6.0 prizes at Nirma University",
    imageFit: "object-cover",
    tone: "bg-[#c977ec]",
    post: "https://lnkd.in/p/dqGWEq8z",
    code: "https://github.com/Shreyash-Shukla/FraudShield",
    summary: "An AI-driven system for real-time fraud detection and regulatory compliance in financial transactions.",
    features: [
      "Compliance checks before fraud analysis",
      "XGBoost, Random Forest and graph-based pattern detection",
      "Risk scores, alerts and RAG-based explanations",
    ],
    stack: ["Next.js", "Tailwind CSS", "FastAPI", "MongoDB", "XGBoost", "GNN"],
    stat: "300+ teams · 1,200+ participants",
  },
  {
    name: "TrustChain",
    result: "FIRST RUNNER-UP",
    event: "Breach at Economania · PDEU",
    date: "MARCH 2025",
    location: "PDEU, Gandhinagar",
    team: "Team ChatGPTters",
    image: "/image_pdeu.jpg",
    imageAlt: "TrustChain team with their certificates at the PDEU Economania hackathon",
    imageFit: "object-contain",
    tone: "bg-[#70d9e8]",
    post: "https://lnkd.in/p/dBa8_eWt",
    code: "https://github.com/Shreyash-Shukla/TrustChain",
    summary: "A fraud prevention and identity verification system combining machine learning, biometrics and blockchain.",
    features: [
      "Real-time transaction fraud detection",
      "Biometric identity checks using DeepFace",
      "Blockchain-backed transaction security",
    ],
    stack: ["React.js", "Tailwind CSS", "FastAPI", "Scikit-learn", "DeepFace", "MongoDB"],
    stat: "First hackathon · first runner-up",
  },
];

const otherAchievements = [
  { title: "Govt of Gujarat Academic Scholarship", detail: "Academic distinction in 12th Grade higher secondary board exams.", icon: Star },
  { title: "JEE Mains, Advanced & GATE Qualified", detail: "Qualified national-level engineering examinations.", icon: Award },
  { title: "LeetCode Knight Badge", detail: "Competitive programming and problem-solving achievement.", icon: Medal },
  { title: "NPTEL IIT Bombay Certification", detail: "Entrepreneurship and Incubation certification.", icon: Trophy },
];

export default function Hackathons() {
  const [selected, setSelected] = useState(0);
  const win = wins[selected];

  return (
    <section id="hackathons" className="site-section">
      <div className="section-heading">
        <span className="section-eyebrow">VICTORY ARCHIVES</span>
        <h2 className="section-title">Hackathon <span>Proof of Work</span></h2>
        <p className="section-copy">Two team wins in 2025, from first runner-up at PDEU in March to the grand prize at Nirma in April.</p>
      </div>

      <div className="mx-auto mb-8 grid max-w-2xl grid-cols-2 gap-5 border-t-2 border-gray-700 dark:border-white/80 sm:mb-11">
        {wins.map((item, index) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setSelected(index)}
            aria-pressed={selected === index}
            className="-mt-3 flex flex-col items-center gap-2 font-mono text-[10px] font-bold tracking-wider sm:text-xs"
          >
            <span className={`flex h-7 w-7 items-center justify-center border-2 font-black ${selected === index ? "border-[#39d353] bg-[#39d353] text-black" : "border-white bg-[#1b1b1b] text-white"}`}>0{index + 1}</span>
            <span className={selected === index ? "text-[#167c38] dark:text-[#39d353]" : "text-gray-600 dark:text-gray-400"}>{item.date}</span>
          </button>
        ))}
      </div>

      <article key={win.name} className="dark-surface overflow-hidden rounded-2xl border-[3px] border-white bg-[#0e0e0e] text-white shadow-[8px_8px_0_0_#fff]">
        <div className={`flex flex-wrap items-end justify-between gap-3 px-5 py-5 text-black sm:px-7 ${win.tone}`}>
          <div>
            <span className="inline-block border-2 border-black bg-white px-2 py-1 font-mono text-[10px] font-black tracking-wider">{win.result}</span>
            <h3 className="mt-2 font-mont text-3xl font-black uppercase leading-none sm:text-4xl">{win.name}</h3>
            <p className="mt-1 text-sm font-semibold">{win.event}</p>
          </div>
          <span className="font-mono text-xs font-black">{win.date}</span>
        </div>

        <div className="grid gap-7 p-5 sm:p-7 lg:grid-cols-[1fr_1.05fr] lg:gap-9">
          <div>
            <div className="grid grid-cols-2 gap-4 border-b border-dashed border-white/20 pb-5 font-mono text-xs">
              <div><p className="text-[#9eb4ca]">LOCATION</p><p className="mt-1 font-bold text-white">{win.location}</p></div>
              <div><p className="text-[#9eb4ca]">TEAM</p><p className="mt-1 font-bold text-white">{win.team}</p></div>
            </div>
            <p className="mt-5 text-base leading-relaxed text-gray-200">{win.summary}</p>
            <h4 className="mt-6 font-mono text-xs font-black tracking-wider">KEY FEATURES</h4>
            <ul className="mt-2 space-y-2">
              {win.features.map((feature) => <li key={feature} className="border-l-[3px] border-[#39d353] bg-white/5 px-3 py-2 text-sm">{feature}</li>)}
            </ul>
            <h4 className="mt-6 font-mono text-xs font-black tracking-wider">TECH STACK</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {win.stack.map((item) => <span key={item} className="rounded-full border border-white/70 px-2.5 py-1 font-mono text-[10px] font-bold uppercase">{item}</span>)}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={win.post} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#39d353] px-4 py-2 font-mono text-xs font-black text-black hover:bg-[#67ee7d]">VIEW WIN POST <ArrowUpRight size={15} /></a>
              <a href={win.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white px-4 py-2 font-mono text-xs font-black hover:bg-white hover:text-black">VIEW CODE <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative min-h-[330px] overflow-hidden rounded-xl border-4 border-white bg-[#171717] sm:min-h-[420px]">
              <Image src={win.image} alt={win.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className={win.imageFit} />
            </div>
            <p className="border-t border-dashed border-white/20 pt-3 font-mono text-xs font-bold text-[#9eb4ca]">{win.stat}</p>
          </div>
        </div>
      </article>

      <div className="mt-16">
        <h3 className="mb-5 font-mont text-xl font-black text-gray-900 dark:text-white sm:text-2xl">More milestones</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherAchievements.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-xl border border-white/25 bg-[#161616] p-5">
                <Icon className="mb-4 h-6 w-6 text-[#39d353]" aria-hidden="true" />
                <h4 className="font-mont font-bold text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-gray-400">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
