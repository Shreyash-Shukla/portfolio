"use client";

import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: "FraudShield",
      subtitle: "1st Place — HackNUthon 6.0",
      bgHex: "bg-[#8B9CFF]",
      image: "/hacknuthon.jpg",
      githubUrl: "https://github.com/Shreyash-Shukla/FraudShield",
      tags: ["🏆 1st Place", "Hackathon Winner", "Full Stack", "React.js", "Node.js"],
      description:
        "Secured 1st Place at Nirma Hackathon — built a full-stack web application from scratch within a strict time limit, demonstrating rapid prototyping, robust system architecture, and end-to-end deployment skills under high-pressure competitive conditions.",
      quickoTools: null,
    },
    {
      title: "TrustChain",
      subtitle: "2nd Place — Breach Hackathon",
      bgHex: "bg-[#FF90E8]",
      image: "/breach.jpg",
      githubUrl: "https://github.com/Shreyash-Shukla/TrustChain",
      tags: ["🥈 2nd Place", "Hackathon Winner", "Cybersecurity", "Python", "Full Stack"],
      description:
        "Achieved 2nd Position at Breach Hackathon — engineered a cybersecurity-focused full-stack platform within a strict 24-hour sprint. Built real-time threat detection, network visualization, and security monitoring dashboards under competitive pressure.",
      quickoTools: null,
    },
    {
      title: "DriveMesh",
      subtitle: "Encrypted & Distributed Cloud Storage",
      bgHex: "bg-[#00E5FF]",
      image: "/drivemesh.jpg",
      githubUrl: "https://github.com/Shreyash-Shukla/DriveMesh",
      tags: ["Python", "Flask", "Google Drive API", "OAuth 2.0", "Fernet Encryption"],
      description:
        "Built a Python/Flask application that pools multiple Google Drive accounts into a single encrypted, distributed storage layer with drag-and-drop UI. Engineered a chunking pipeline splitting files into 5MB blocks, encrypted with Fernet, distributed round-robin across accounts via Google Drive API v3. Parallelized transfers with ThreadPoolExecutor.",
      quickoTools: null,
    },
    {
      title: "DAGent",
      subtitle: "AI Workflow Orchestration Platform",
      bgHex: "bg-[#B388FF]",
      image: "/dagent.jpg",
      githubUrl: "https://github.com/Shreyash-Shukla/DAGent",
      tags: ["Next.js 14", "TypeScript", "MongoDB", "NextAuth", "Redux Toolkit"],
      description:
        "AI-powered workflow orchestration platform that converts natural-language requests into executable DAG workflows, running independent tool nodes in parallel. Integrated MCP tool integrations (Drive, Gmail, Contacts) secured with Google OAuth 2.0 via NextAuth, with auto-refreshing tokens stored through a custom MongoDB adapter.",
      quickoTools: null,
    },
    {
      title: "Smart Expense Tracker",
      subtitle: "Full Stack Personal Finance App",
      bgHex: "bg-[#00E5FF]",
      image: "/expense_tracker.png",
      githubUrl: "https://github.com/Shreyash-Shukla/Smart-Expense-Tracker",
      tags: ["Full Stack MERN", "React.js", "Chart.js Analytics", "Node.js", "MongoDB"],
      description:
        "Built a full-stack personal finance tracker with category-wise expense tracking and budget management. Implemented secure JWT-based authentication, interactive visual analytics dashboards using Chart.js, and persistent MongoDB REST APIs.",
      quickoTools: null,
    },
    {
      title: "Network Log Analyzer",
      subtitle: "Security-Focused Log Analytics Pipeline",
      bgHex: "bg-[#B388FF]",
      image: "/network_analyzer.jpg",
      githubUrl: "https://github.com/Shreyash-Shukla/Network-Log-Analyzer",
      tags: ["Python", "Pandas", "Regex Filtering", "Log Analytics", "Data Pipeline"],
      description:
        "Analyzed large-scale network logs to detect traffic anomalies and suspicious security patterns. Utilized Pandas for data aggregation and insight generation, with custom Regex filtering for high-speed log parsing and visual reporting.",
      quickoTools: null,
    },
    {
      title: "Quicko Financial Suite",
      subtitle: "4 Production Financial Tools",
      bgHex: "bg-[#FFC900]",
      image: "/quicko_tools.png",
      githubUrl: null,
      tags: ["Production @ Quicko", "4 Live Tools", "TypeScript", "AWS Lambda", "Terraform"],
      description:
        "As a Software Engineering Intern at Quicko (May–June 2026), developed and shipped 4 production-grade financial tools live on Quicko's platform. Built schema-driven serverless APIs with TypeScript, Middy middleware, AWS DynamoDB, and Terraform infrastructure-as-code.",
      quickoTools: [
        { label: "PAN-Aadhaar Link Status", url: "https://quicko.com/tools/check-pan-aadhaar-link-status" },
        { label: "Verify PAN Details", url: "https://quicko.com/tools/verify-pan-details" },
        { label: "Tax Payment Status", url: "https://quicko.com/tools/check-tax-payment-status" },
        { label: "e-Verify ITR", url: "https://quicko.com/tools/e-verify-itr" },
      ],
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 xl:px-12">
      {/* Header Tag */}
      <div className="flex items-center gap-3 mb-12">
        <div className="h-3.5 w-3.5 rounded-full bg-indigo-500 animate-pulse"></div>
        <span className="font-mono text-sm font-bold text-gray-700 dark:text-gray-400 uppercase tracking-widest">
          FEATURED PROJECTS &amp; PRODUCTS
        </span>
      </div>

      {/* Project Cards List */}
      <div className="flex flex-col gap-10 sm:gap-16">
        {projects.map((proj, index) => (
          <article
            key={index}
            className={`relative z-10 flex w-full flex-col items-center justify-between overflow-hidden rounded-2xl border-4 border-black p-4 text-black transition-all duration-300 hover:translate-x-1 hover:translate-y-1 sm:rounded-3xl sm:p-6 md:p-8 lg:flex-row lg:p-10 ${proj.bgHex} brutal-shadow-lg`}
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
                      <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full border border-black bg-indigo-500 animate-pulse"></span>
                    )}
                    <span className="font-mono text-[11px] font-black uppercase tracking-wider text-black">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              {/* Image Preview Container */}
              {proj.githubUrl ? (
                <a
                  href={proj.githubUrl}
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
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl font-mono font-black text-sm border-2 border-black">
                      <GithubIcon />
                      VIEW ON GITHUB
                    </div>
                  </div>
                </a>
              ) : (
                <div className="w-full overflow-hidden rounded-2xl border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative block">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Title, Description & Action Button */}
            <div className="flex w-full flex-col items-start justify-between pt-6 lg:w-1/2 lg:pl-8 lg:pt-0 xl:pl-10">
              <div className="mb-1">
                <p className="font-mono text-xs font-bold text-black/70 uppercase tracking-widest mb-1">
                  {proj.subtitle}
                </p>
                {proj.githubUrl ? (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3"
                  >
                    <h2 className="text-3xl sm:text-4xl font-black font-mont text-black group-hover:underline decoration-4 underline-offset-4 transition-all">
                      {proj.title}
                    </h2>
                    <ExternalLink className="w-7 h-7 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                ) : (
                  <h2 className="text-3xl sm:text-4xl font-black font-mont text-black">
                    {proj.title}
                  </h2>
                )}
              </div>

              <p className="my-4 text-sm sm:text-base font-medium text-black border-l-4 border-black pl-4 leading-relaxed bg-white/70 rounded-r-xl py-3 shadow-sm">
                {proj.description}
              </p>

              {/* Quicko Tool Links */}
              {proj.quickoTools && (
                <div className="flex flex-wrap gap-2 mb-2 -mt-1">
                  <span className="font-mono text-[11px] font-black text-black uppercase tracking-wider w-full mb-1">
                    🔗 4 Live Tools Shipped:
                  </span>
                  {proj.quickoTools.map((tool, ti) => (
                    <a
                      key={ti}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white border-2 border-black px-3.5 py-1.5 rounded-full font-mono text-xs font-black text-black hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                    >
                      <ExternalLink className="w-3 h-3 flex-shrink-0" />
                      <span>{tool.label}</span>
                    </a>
                  ))}
                </div>
              )}

              {/* Single Action Button (for projects with GitHub repository) */}
              {proj.githubUrl && (
                <div className="mt-3">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-black text-white py-3 px-7 font-mono font-black text-sm sm:text-base rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                  >
                    <GithubIcon />
                    <span>VIEW CODE</span>
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Explore All Projects CTA */}
      <div className="flex w-full items-center justify-center py-12 sm:py-16">
        <a
          href="https://github.com/Shreyash-Shukla"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border-4 border-black bg-indigo-400 px-5 py-4 text-center font-mono text-sm font-black text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none sm:w-auto sm:px-10 sm:text-xl dark:bg-[#8B9CFF]"
        >
          <span>EXPLORE SHREYASH&apos;S GITHUB</span>
          <ArrowRight className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
