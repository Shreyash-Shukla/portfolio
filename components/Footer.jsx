"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon, LeetCodeIcon } from "@/components/SocialIcons";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="border-t border-white/20 bg-[#111] px-4 py-10 text-white sm:px-6">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <p className="font-mont text-lg font-black">Shreyash Shukla<span className="text-[#39d353]">.</span></p>
          <p className="mt-1 text-sm text-gray-400">Computer Science at PDEU · Former SWE intern at Quicko</p>
        </div>
        <p className="font-mono text-xs text-gray-400">© {new Date().getFullYear()} Shreyash Shukla. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Shreyash-Shukla" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-[#39d353]"><GitHubIcon size={19} /></a>
          <a href="https://www.linkedin.com/in/shreyash-shukla-6a3b5a309/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-[#39d353]"><LinkedInIcon size={19} /></a>
          <a href="https://x.com/Shreyash_twt" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-gray-300 hover:text-[#39d353]"><XIcon size={19} /></a>
          <a href="https://leetcode.com/u/shreyash_shukla/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-gray-300 hover:text-[#39d353]"><LeetCodeIcon size={19} /></a>
        </div>
      </div>
      {showTop && <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black bg-[#39d353] text-black shadow-[5px_5px_0_0_#111] transition-transform hover:-translate-y-1"><ArrowUp size={24} /></button>}
    </footer>
  );
}
