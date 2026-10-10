"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";

const links = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "GitHub", href: "#github", id: "github" },
  { label: "Skills", href: "#expertise", id: "expertise" },
  { label: "Wins", href: "#hackathons", id: "hackathons" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar({ isDarkMode, setIsDarkMode, onOpenResume }) {
  const [active, setActive] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateActive = () => {
      let current = "hero";
      for (const link of links) {
        const section = document.getElementById(link.id);
        if (section && section.getBoundingClientRect().top <= 180) current = link.id;
      }
      setActive(current);
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <header className="fixed inset-x-0 top-2 z-50 px-3 sm:top-3 sm:px-5">
      <div className="nav-shell mx-auto flex min-h-16 max-w-[1440px] items-center justify-between gap-3 rounded-full px-4 sm:px-6 lg:px-8">
        <nav aria-label="Main navigation" className="hidden items-center gap-5 font-mont text-sm font-semibold lg:flex xl:gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={active === link.id ? "page" : undefined}
              className={`border-b pb-1 transition-colors ${active === link.id ? "border-[#39d353] text-[#39d353]" : "border-transparent text-gray-300 hover:text-white"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          className="inline-flex items-center gap-2 font-mont text-sm font-bold text-white lg:hidden"
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          <span>Menu</span>
        </button>

        <div className="flex items-center gap-4 sm:gap-5">
          <a href="https://github.com/Shreyash-Shukla" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-[#aab4c0] transition-colors hover:text-white">
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/shreyash-shukla-6a3b5a309/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-[#0a66c2] transition-colors hover:text-[#64a8ed]">
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-full p-1 transition-transform hover:scale-110"
          >
            <Image src="/batman.png" alt="" width={36} height={36} className={`h-7 w-7 object-contain sm:h-8 sm:w-8 ${isDarkMode ? "invert" : "grayscale"}`} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav aria-label="Mobile navigation" className="nav-shell mx-auto mt-2 max-w-[1440px] rounded-[24px] p-4 lg:hidden">
          <div className="grid grid-cols-2 gap-2">
            {links.map((link) => (
              <a key={link.id} href={link.href} onClick={() => setMobileMenuOpen(false)} className={`rounded-xl px-4 py-3 font-mont text-sm font-semibold ${active === link.id ? "bg-[#39d353] text-black" : "text-white hover:bg-white/10"}`}>
                {link.label}
              </a>
            ))}
          </div>
          <button type="button" onClick={() => { setMobileMenuOpen(false); onOpenResume(); }} className="mt-3 w-full rounded-xl border border-white/30 px-4 py-3 text-left font-mont text-sm font-semibold text-white">
            View resume
          </button>
        </nav>
      )}
    </header>
  );
}
