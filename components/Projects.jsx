"use client";

import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "MovieSpace",
      bgHex: "bg-[#00FF6A]",
      image: "/moviespace.png",
      liveUrl: "https://moviespace-demo.vercel.app",
      githubUrl: "https://github.com/Shreyash-Shukla/MovieSpace",
      isLive: true,
      tags: ["Live AWS App", "Angular 21", "NgRx", "AWS Lambda", "DynamoDB"],
      description:
        "Engineered a serverless movie catalog platform with JWT-based authentication and DynamoDB-backed services. Implemented centralized state management using NgRx Store & Effects, built responsive UI with Angular Material & Tailwind CSS, and hosted globally on AWS S3 + CloudFront.",
      quickoTools: null,
    },
    {
      title: "Quicko Financial Suite",
      bgHex: "bg-[#00E5FF]",
      image: "/quicko_tools.png",
      liveUrl: "https://quicko.com/tools",
      githubUrl: "https://github.com/Shreyash-Shukla",
      isLive: true,
      tags: ["Production @ Quicko", "4 Live Tools", "TypeScript", "AWS Lambda", "Terraform"],
      description:
        "As a Software Engineering Intern at Quicko (May–June 2026), developed and shipped 4 production-grade financial tools live on Quicko's platform. Built schema-driven serverless APIs with TypeScript, Middy middleware, AWS DynamoDB, and Terraform infrastructure-as-code.",
      quickoTools: [
        { label: "PAN-Aadhaar Link Status", url: "https://quicko.com/tools/check-pan-aadhaar-link-status" },
        { label: "Verify PAN Details", url: "https://quicko.com/tools/verify-pan-details" },
        { label: "Tax Payment Status", url: "https://quicko.com/tools/check-tax-payment-status" },
        { label: "e-Verify ITR", url: "https://quicko.com/tools/e-verify-itr" },
      ],
      hideButtons: true,
    },
    {
      title: "Smart Expense Tracker",
      bgHex: "bg-[#FF90E8]",
      image: "/expense_tracker.png",
      liveUrl: "https://github.com/Shreyash-Shukla/Smart-Expense-Tracker",
      githubUrl: "https://github.com/Shreyash-Shukla/Smart-Expense-Tracker",
      isLive: false,
      tags: ["Full Stack MERN", "React.js", "Chart.js Analytics", "Node.js", "MongoDB"],
      description:
        "Built a full-stack personal finance tracker with category-wise expense tracking and budget management. Implemented secure JWT-based authentication, interactive visual analytics dashboards using Chart.js, and persistent MongoDB REST APIs.",
      quickoTools: null,
    },
    {
      title: "Network Log Analyzer",
      bgHex: "bg-[#B388FF]",
      image: "/expense_tracker.png",
      liveUrl: "https://github.com/Shreyash-Shukla/Network-Log-Analyzer",
      githubUrl: "https://github.com/Shreyash-Shukla/Network-Log-Analyzer",
      isLive: false,
      tags: ["Python", "Pandas", "Regex Filtering", "Log Analytics", "Data Pipeline"],
      description:
        "Analyzed large-scale network logs to detect traffic anomalies and suspicious security patterns. Utilized Pandas for data aggregation and insight generation, with custom Regex filtering for high-speed log parsing and visual reporting.",
      quickoTools: null,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-12 max-w-[1440px] mx-auto">
      {/* Header Tag */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-3.5 h-3.5 rounded-full bg-green-500 dark:bg-[#00FF6A] animate-pulse"></div>
        <span className="font-mono text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest">
          FEATURED PROJECTS & PRODUCTS
        </span>
      </div>

      {/* Project Cards List */}
      <div className="flex flex-col gap-16">
        {projects.map((proj, index) => (
          <article
            key={index}
            className={`w-full flex flex-col lg:flex-row items-center justify-between rounded-3xl border-4 border-black dark:border-white ${proj.bgHex} brutal-shadow-lg hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-300 p-6 md:p-10 text-black relative z-10 overflow-hidden`}
          >
            {/* Left Column: Image & Badges */}
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-4">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {proj.tags.map((tag, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex items-center gap-1.5 border-2 border-black bg-white px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {tIdx === 0 && (
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse border border-black"></span>
                    )}
                    <span className="font-mono text-[11px] font-black uppercase tracking-wider text-black">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              {/* Image Preview Container */}
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group cursor-pointer overflow-hidden rounded-2xl border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative block"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </a>
            </div>

            {/* Right Column: Title, Description & Action Buttons */}
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-between lg:pl-10 pt-6 lg:pt-0">
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
              >
                <h2 className="text-3xl sm:text-4xl font-black font-mont text-black group-hover:underline decoration-4 underline-offset-4 transition-all">
                  {proj.title}
                </h2>
                <ExternalLink className="w-7 h-7 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <p className="my-4 text-sm sm:text-base font-medium text-black border-l-4 border-black pl-4 leading-relaxed bg-white/60 rounded-r-xl py-3 shadow-sm">
                {proj.description}
              </p>

              {/* Quicko Tool Links — shown for Quicko project */}
              {proj.quickoTools && (
                <div className="flex flex-wrap gap-2 mb-2 -mt-1">
                  <span className="font-mono text-[10px] font-black text-black/60 uppercase tracking-wider w-full">
                    🔗 Live Tools Built:
                  </span>
                  {proj.quickoTools.map((tool, ti) => (
                    <a
                      key={ti}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-white/90 border-2 border-black px-3 py-1 rounded-full font-mono text-[10px] font-black text-black hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                    >
                      <ExternalLink className="w-2.5 h-2.5" />
                      {tool.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Action Buttons — hidden for Quicko (tool chips are sufficient) */}
              {!proj.hideButtons && (
                <div className="flex flex-wrap gap-4 mt-4 w-full">
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-black py-3 px-6 font-mono font-black text-sm sm:text-base rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                  >
                    <span>{proj.isLive ? "LIVE DEMO" : "VIEW PROJECT"}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-black text-white py-3 px-6 font-mono font-black text-sm sm:text-base rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>GITHUB REPO</span>
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Explore All Projects CTA */}
      <div className="flex items-center justify-center w-full py-16">
        <a
          href="https://github.com/Shreyash-Shukla"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-[#00FF6A] text-black border-4 border-black py-4 px-10 font-mono font-black text-xl rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,255,106,0.4)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all"
        >
          <span>EXPLORE SHREYASH'S GITHUB</span>
          <ArrowRight className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
