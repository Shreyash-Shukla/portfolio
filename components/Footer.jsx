"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t-4 border-black bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-10 xl:px-12 dark:border-[#2C2C2C] dark:bg-[#0D0D0D]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 font-mono">

        {/* Left: Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-black text-base text-gray-900 dark:text-white tracking-wider">
            SHREYASH SHUKLA <span className="text-indigo-600 dark:text-[#8B9CFF]">// PORTFOLIO</span>
          </span>
          <span className="text-xs text-gray-700 dark:text-gray-300">
            Computer Science @ PDEU, Gandhinagar · Ex-SWE Intern @ Quicko
          </span>
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-1">
            <a
              href="https://github.com/Shreyash-Shukla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/shreyash-shukla-6a3b5a309/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-700 dark:text-gray-400 hover:text-[#0A66C2] transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Center: Copyright */}
        <div className="text-xs text-gray-700 dark:text-gray-400 text-center leading-relaxed">
          <p>© {year} Shreyash Shukla. All rights reserved.</p>
          <p className="mt-0.5 text-gray-600 dark:text-gray-400">
            Built with <span className="text-gray-900 dark:text-white font-bold">Next.js</span> &{" "}
            <span className="text-red-500 font-bold">❤</span> in Gandhinagar, Gujarat.
          </p>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-2 rounded-xl border-2 border-black bg-black px-5 py-2.5 font-mono text-xs font-black uppercase tracking-widest text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:bg-[#8B9CFF] dark:text-black dark:shadow-[3px_3px_0px_0px_rgba(139,156,255,0.3)]"
        >
          BACK TO TOP
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
