"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Hackathons from "@/components/Hackathons";
import Projects from "@/components/Projects";
import GithubActivity from "@/components/GithubActivity";
import Pipeline from "@/components/Pipeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import dynamic from "next/dynamic";
const EasterEgg = dynamic(() => import("@/components/EasterEgg"), { ssr: false });

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen w-full relative cyber-grid">
      {/* Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <TechStack />
        <Hackathons />
        <Projects />
        <GithubActivity />
        <Pipeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Easter Eggs: cursor trail, Konami code, right-click menu */}
      <EasterEgg />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
