"use client";

import { ArrowRight, CheckCircle } from "lucide-react";

export default function Pipeline() {
  const steps = [
    {
      number: "01",
      title: "Communicate",
      description:
        "I start by discussing your project requirements, goals, and expectations to ensure we're completely aligned with your business vision.",
      hoverColor: "hover:bg-[#FF90E8]",
      dotBg: "bg-[#FF90E8]",
    },
    {
      number: "02",
      title: "Develop",
      description:
        "I build a robust, scalable solution using modern web technologies like Next.js, React, and Node.js — carefully tailored to your specific performance needs.",
      hoverColor: "hover:bg-[#00E5FF]",
      dotBg: "bg-[#00E5FF]",
    },
    {
      number: "03",
      title: "Refine",
      description:
        "I fine-tune every feature and optimize design responsiveness to ensure everything functions seamlessly and delivers a fast, premium user experience.",
      hoverColor: "hover:bg-[#FFC900]",
      dotBg: "bg-[#FFC900]",
    },
    {
      number: "04",
      title: "Review",
      description:
        "I work closely with you to review the final build, gather feedback, and make any necessary adjustments until you're 100% satisfied.",
      hoverColor: "hover:bg-[#B388FF]",
      dotBg: "bg-[#B388FF]",
    },
    {
      number: "05",
      title: "Deploy",
      description:
        "I handle the deployment process end-to-end, ensuring your project is launched smoothly and runs with maximum availability on Vercel or AWS.",
      hoverColor: "hover:bg-[#00FF6A]",
      dotBg: "bg-[#00FF6A]",
    },
  ];

  return (
    <section id="pipeline" className="py-20 px-6 lg:px-12 max-w-[1440px] mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-2.5 mb-4 font-mono text-xs font-bold text-gray-700 dark:text-gray-400 uppercase tracking-widest bg-gray-200 dark:bg-white/5 px-4 py-1.5 rounded-full border border-gray-300 dark:border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span>DEVELOPMENT PIPELINE</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-mont text-gray-900 dark:text-white uppercase tracking-tight max-w-4xl leading-tight mb-4">
          How I Bring Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Vision</span> To Life
        </h2>

        <p className="max-w-2xl text-base sm:text-lg text-gray-700 dark:text-gray-400 font-light leading-relaxed">
          A transparent, iterative workflow focused on quality, speed, and measurable results. From requirements to deployment.
        </p>
      </div>

      {/* Accordion / Table-like Step Rows */}
      <div className="w-full border-t-2 border-b-2 border-black dark:border-white/20 divide-y-2 divide-black dark:divide-white/10 rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(0,255,106,0.2)]">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`group flex items-stretch bg-white dark:bg-[#1A1A1A] ${step.hoverColor} transition-colors duration-300 cursor-default`}
          >
            {/* Number Column */}
            <div className="flex-shrink-0 w-24 sm:w-32 flex items-center justify-center border-r-2 border-black dark:border-white/10 p-6 bg-gray-100 dark:bg-[#0D0D0D] group-hover:bg-transparent transition-colors">
              <span className="text-4xl sm:text-5xl font-black font-mono text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-black transition-colors">
                {step.number}
              </span>
            </div>

            {/* Content Column */}
            <div className="flex-1 flex items-center justify-between gap-6 p-6 sm:p-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 rounded-full ${step.dotBg} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <h3 className="text-2xl sm:text-3xl font-black font-mont text-gray-900 dark:text-white group-hover:text-black transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 group-hover:text-black/80 font-medium leading-relaxed max-w-3xl transition-colors">
                  {step.description}
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
