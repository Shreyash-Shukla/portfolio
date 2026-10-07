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
      hoverColor: "hover:bg-[#8B9CFF]",
      dotBg: "bg-[#8B9CFF]",
    },
  ];

  return (
    <section id="pipeline" className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 xl:px-12">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-2.5 mb-4 font-mono text-xs font-bold text-gray-700 dark:text-gray-400 uppercase tracking-widest bg-gray-200 dark:bg-white/5 px-4 py-1.5 rounded-full border border-gray-300 dark:border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span>DEVELOPMENT PIPELINE</span>
        </div>

        <h2 className="mb-4 max-w-4xl font-mont text-3xl font-black uppercase leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
          How I Bring Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Vision</span> To Life
        </h2>

        <p className="max-w-2xl text-base sm:text-lg text-gray-700 dark:text-gray-400 font-light leading-relaxed">
          A transparent, iterative workflow focused on quality, speed, and measurable results. From requirements to deployment.
        </p>
      </div>

      {/* Accordion / Table-like Step Rows */}
      <div className="w-full divide-y-2 divide-black overflow-hidden rounded-2xl border-y-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:divide-white/10 dark:border-white/20 dark:shadow-[6px_6px_0px_0px_rgba(139,156,255,0.2)]">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`group flex items-stretch bg-white dark:bg-[#1A1A1A] ${step.hoverColor} transition-colors duration-300 cursor-default`}
          >
            {/* Number Column */}
            <div className="flex w-16 flex-shrink-0 items-center justify-center border-r-2 border-black bg-gray-100 p-3 transition-colors group-hover:bg-transparent sm:w-24 sm:p-5 md:w-32 md:p-6 dark:border-white/10 dark:bg-[#0D0D0D]">
              <span className="font-mono text-2xl font-black text-gray-500 transition-colors group-hover:text-black sm:text-4xl md:text-5xl dark:text-gray-400 dark:group-hover:text-black">
                {step.number}
              </span>
            </div>

            {/* Content Column */}
            <div className="flex min-w-0 flex-1 items-center justify-between gap-3 p-4 sm:gap-6 sm:p-6 md:p-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 rounded-full ${step.dotBg} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <h3 className="font-mont text-xl font-black text-gray-900 transition-colors group-hover:text-black sm:text-2xl md:text-3xl dark:text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 group-hover:text-black/80 font-medium leading-relaxed max-w-3xl transition-colors">
                  {step.description}
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="hidden flex-shrink-0 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
                <ArrowRight className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
