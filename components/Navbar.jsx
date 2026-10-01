"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Menu } from "lucide-react";

export default function Navbar({ isDarkMode, setIsDarkMode, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "[ EXPERTISE ]", href: "#expertise" },
    { name: "[ HACKATHONS ]", href: "#hackathons" },
    { name: "[ PROJECTS ]", href: "#projects" },
    { name: "[ PROCESS ]", href: "#pipeline" },
    { name: "[ CONTACT ]", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0D0D0D]/95 border-b-2 border-black dark:border-[#2C2C2C] shadow-md backdrop-blur-md py-4"
          : "bg-white/80 dark:bg-[#0D0D0D]/80 border-b border-gray-200 dark:border-[#2C2C2C]/50 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-black dark:bg-[#00FF6A] text-white dark:text-black rounded-lg flex items-center justify-center font-mono font-black text-xl border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-black text-lg text-gray-900 dark:text-white tracking-wider">
              SHREYASH<span className="text-emerald-600 dark:text-[#00FF6A]">.DEV</span>
            </span>
            <span className="font-mono text-[10px] text-gray-600 dark:text-gray-400 font-bold uppercase tracking-widest hidden sm:inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              GANDHINAGAR, GUJARAT
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs font-bold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-900 dark:text-gray-200 hover:text-black dark:hover:text-[#00FF6A] transition-colors hover:underline decoration-2 underline-offset-4"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenResume}
            className="font-mono text-xs font-bold bg-black text-[#00FF6A] dark:bg-[#00FF6A] dark:text-black px-4 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all uppercase tracking-widest"
          >
            [ RESUME ]
          </button>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-3 pr-3 border-r border-gray-300 dark:border-gray-700">
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="text-[#1DA1F2] hover:scale-110 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://github.com/Shreyash-Shukla" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-900 dark:text-white hover:scale-110 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/shreyash-shukla-6a3b5a309/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#0A66C2] hover:scale-110 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#E4405F] hover:scale-110 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Batman Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Batman Mode"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="group flex items-center justify-center p-1.5 transition-all cursor-pointer"
          >
            {isDarkMode ? (
              <Image
                src="/batman.png"
                alt="Batman Mode"
                width={48}
                height={48}
                className="w-10 h-10 transition-all duration-300 group-hover:scale-125 invert-[92%] sepia-[94%] saturate-[6179%] hue-rotate-[352deg] brightness-[101%] contrast-[106%]"
              />
            ) : (
              <Image
                src="/batman.png"
                alt="Batman Mode"
                width={48}
                height={48}
                className="w-10 h-10 transition-all duration-300 group-hover:scale-125 grayscale opacity-50"
              />
            )}
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-black text-white dark:bg-white dark:text-black border-2 border-black flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0D0D0D] border-b-4 border-black dark:border-[#00FF6A] px-6 py-6 font-mono font-bold flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-lg text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 hover:text-[#00FF6A]"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
            className="py-2 text-lg text-left text-emerald-600 dark:text-[#00FF6A] font-black border-b border-gray-100 dark:border-gray-800 font-mono uppercase tracking-widest"
          >
            [ RESUME ]
          </button>
        </div>
      )}
    </header>
  );
}
