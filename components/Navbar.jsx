"use client";

import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

// Authentic Batman SVG Symbol — Classic DC Comics wide-wing bat silhouette
function BatmanSymbol() {
  return (
    <svg
      viewBox="0 0 300 130"
      className="w-14 h-7"
      style={{ filter: "drop-shadow(0 0 6px rgba(245,208,97,0.8))" }}
    >
      {/* Classic batman logo — wide wings, pointed ears, notched lower edge */}
      <path
        fill="#F5D061"
        d="
          M150 18
          C145 30 135 38 118 36
          C100 34 80 24 55 14
          C62 30 72 46 82 54
          C70 52 55 52 44 56
          C52 60 65 63 76 63
          C68 68 56 74 48 82
          C60 78 76 74 88 74
          C94 78 100 82 108 85
          C116 82 124 78 132 74
          C138 74 144 74 150 74
          C156 74 162 74 168 74
          C176 78 184 82 192 85
          C200 82 206 78 212 74
          C224 74 240 78 252 82
          C244 74 232 68 224 63
          C235 63 248 60 256 56
          C245 52 230 52 218 54
          C228 46 238 30 245 14
          C220 24 200 34 182 36
          C165 38 155 30 150 18 Z
        "
      />
    </svg>
  );
}

// Authentic Superman Shield SVG — Classic pentagon with bold diagonal S
function SupermanSymbol() {
  return (
    <svg
      viewBox="0 0 80 95"
      className="w-7 h-8"
      style={{ filter: "drop-shadow(0 0 6px rgba(229,9,20,0.8))" }}
    >
      {/* Outer shield — classic pentagon shape */}
      <path d="M40 2 L74 20 L74 60 L40 93 L6 60 L6 20 Z" fill="#CC0000" stroke="#FFCC00" strokeWidth="4" strokeLinejoin="round"/>
      {/* Inner yellow frame */}
      <path d="M40 12 L66 26 L66 57 L40 82 L14 57 L14 26 Z" fill="#FFCC00"/>
      {/* Red S shape — top half */}
      <path d="M52 20 C58 20 63 25 63 31 C63 37 58 41 52 43 L38 43 C35 43 33 45 33 48 C33 51 35 53 38 53 L54 53 C52 55 48 57 44 57 L30 57 C24 57 19 52 19 46 C19 40 24 36 30 34 L44 34 C47 34 49 32 49 29 C49 26 47 24 44 24 L30 24 C32 22 36 20 40 20 Z" fill="#CC0000"/>
      {/* Red S shape — bottom half */}
      <path d="M28 57 C22 57 17 52 17 46 C17 43 18 41 20 39 L34 39 C31 39 29 41 29 44 C29 47 31 49 34 49 L48 49 L48 53 L32 53 C36 53 38 55 40 57 Z" fill="#CC0000" opacity="0"/>
    </svg>
  );
}


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
              SHREYASH<span className="text-[#00FF6A]">.DEV</span>
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
              className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-[#00FF6A] transition-colors hover:underline decoration-2 underline-offset-4"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-3 pr-3 border-r border-gray-300 dark:border-gray-700">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-[#1DA1F2] hover:scale-110 transition-transform">
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

          {/* Batman / Superman Toggle — Symbol Only */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label={isDarkMode ? "Switch to Light Mode (Superman)" : "Switch to Dark Mode (Batman)"}
            title={isDarkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
            className={`flex items-center justify-center px-3 py-2 rounded-xl border-2 transition-all hover:scale-105 active:scale-95 ${
              isDarkMode
                ? "bg-[#1A1A1A] border-[#F5D061]/50 shadow-[0_0_12px_rgba(245,208,97,0.3)]"
                : "bg-gray-900 border-[#FFCC00]/50 shadow-[0_0_12px_rgba(229,9,20,0.3)]"
            }`}
          >
            {isDarkMode ? <BatmanSymbol /> : <SupermanSymbol />}
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
        </div>
      )}
    </header>
  );
}
