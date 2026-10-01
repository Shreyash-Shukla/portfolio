"use client";

import { useEffect } from "react";
import { X, Download, ExternalLink, Briefcase, GraduationCap, Code, Trophy } from "lucide-react";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Shreyash_Shukla_Resume.pdf";
    link.download = "Shreyash_Shukla_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white dark:bg-[#1A1A1A] w-full max-w-4xl max-h-[90vh] rounded-3xl border-4 border-black dark:border-[#00FF6A] brutal-shadow-lg flex flex-col overflow-hidden text-gray-900 dark:text-white">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 bg-gray-100 dark:bg-[#0D0D0D] border-b-4 border-black dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#00FF6A]"></div>
            <h2 className="font-mono font-black text-xl tracking-wider text-gray-900 dark:text-white">SHREYASH SHUKLA — RESUME</h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:shreyash.shukla.dev@gmail.com"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-mono text-xs font-bold border border-black hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <ExternalLink className="w-4 h-4" />
              <span>CONTACT</span>
            </a>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-400 dark:bg-[#00FF6A] text-black rounded-lg font-mono text-xs font-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD</span>
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold hover:opacity-80 transition-opacity"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Resume Preview */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans space-y-8 text-sm sm:text-base">
          
          {/* Header Contact */}
          <div className="border-b-2 border-gray-200 dark:border-gray-800 pb-6">
            <h1 className="text-3xl font-black font-mont mb-1 text-gray-900 dark:text-white">SHREYASH SHUKLA</h1>
            <p className="font-mono text-xs font-bold text-green-700 dark:text-[#00FF6A] uppercase tracking-wider mb-3">
              SWE Intern @ Quicko · B.Tech CSE @ PDEU · CGPA: 9.72 / 10
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-700 dark:text-gray-300 text-xs font-mono">
              <span>📍 Gandhinagar, Gujarat</span>
              <span>📞 +91 76983 35369</span>
              <a href="mailto:shreyash.shukla.dev@gmail.com" className="hover:text-emerald-600 dark:hover:text-[#00FF6A] transition-colors">✉ shreyash.shukla.dev@gmail.com</a>
              <a href="https://linkedin.com/in/shreyash-shukla-6a3b5a309" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-[#00FF6A] transition-colors">🔗 LinkedIn</a>
              <a href="https://github.com/Shreyash-Shukla" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-[#00FF6A] transition-colors">🐙 GitHub</a>
              <a href="https://shreyashshukla.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-[#00FF6A] transition-colors">🌐 Portfolio</a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="font-mono text-xs font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-1">
              SUMMARY
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
              Computer Science undergraduate (CGPA 9.72) with hands-on <strong className="text-gray-900 dark:text-white">AWS</strong> and <strong className="text-gray-900 dark:text-white">Python</strong> experience, building <strong className="text-gray-900 dark:text-white">serverless, schema-driven data services</strong> in production and workflow-orchestration pipelines. Seeking a Cloud Data Engineer role to grow in SQL, PySpark, data warehousing, and multi-cloud data platforms.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-mono text-xs font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-1">
              <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-[#00FF6A]" />
              EDUCATION
            </h3>
            <div className="bg-gray-50 dark:bg-[#0D0D0D] p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex justify-between items-start">
              <div>
                <h4 className="font-bold text-base text-gray-900 dark:text-white">Pandit Deendayal Energy University (PDEU)</h4>
                <p className="text-xs font-mono text-gray-600 dark:text-gray-400">B.Tech in Computer Science and Engineering</p>
              </div>
              <div className="text-right ml-4 flex-shrink-0">
                <span className="font-mono text-xs font-bold text-green-700 dark:text-[#00FF6A] block">CGPA: 9.72 / 10</span>
                <p className="text-[11px] text-gray-500 font-mono">July 2023 – May 2027</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-mono text-xs font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-1">
              <Code className="w-4 h-4 text-emerald-600 dark:text-[#00FF6A]" />
              TECHNICAL SKILLS
            </h3>
            <div className="space-y-2 font-mono text-xs bg-gray-50 dark:bg-[#0D0D0D] p-4 rounded-xl border border-gray-200 dark:border-gray-800">
              {[
                { label: "Languages", value: "Python, SQL, TypeScript, JavaScript (ES6+), C++, Java, C" },
                { label: "Data & Analytics", value: "Pandas, NumPy, Matplotlib, JSON & API Data Processing, Data Validation, Schema Design" },
                { label: "Databases", value: "PostgreSQL, MySQL, DynamoDB, MongoDB" },
                { label: "Cloud & DevOps", value: "AWS (Lambda, DynamoDB, S3, CloudFront, IAM), Terraform, Docker, Jenkins, Git, Linux" },
                { label: "Backend & APIs", value: "Node.js, Express.js, FastAPI, Flask, REST APIs, Serverless Architecture, OpenAPI" },
                { label: "GenAI & Orchestration", value: "LLM-driven workflows, DAG-based orchestration, MCP tool integrations" },
                { label: "Frontend & Testing", value: "Angular, React.js, Next.js, NgRx, Tailwind CSS, Jest" },
              ].map((skill) => (
                <div key={skill.label} className="flex gap-2">
                  <strong className="text-gray-900 dark:text-white min-w-[140px] sm:min-w-[180px] flex-shrink-0">{skill.label}:</strong>
                  <span className="text-gray-700 dark:text-gray-300">{skill.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-mono text-xs font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-1">
              <Briefcase className="w-4 h-4 text-emerald-600 dark:text-[#00FF6A]" />
              WORK EXPERIENCE
            </h3>

            <div className="border-l-2 border-emerald-500 dark:border-[#00FF6A] pl-4 space-y-2">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white">Quicko</h4>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 italic">Software Engineering Intern · Ahmedabad, Gujarat</p>
                </div>
                <span className="font-mono text-xs bg-green-500/10 text-green-700 dark:text-[#00FF6A] px-2.5 py-1 rounded font-bold border border-green-500/30 flex-shrink-0">May 2026 – June 2026</span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-gray-700 dark:text-gray-300 font-light text-xs sm:text-sm leading-relaxed mt-2">
                <li>Developed and deployed <strong className="text-gray-900 dark:text-white">four production-grade financial tools</strong> live on Quicko's platform: PAN Verification Tool, PAN-Aadhaar Link Status Checker, Tax Payment Status Checker, and e-Verify ITR Tool.</li>
                <li>Designed cloud-native data workflows on <strong className="text-gray-900 dark:text-white">AWS DynamoDB</strong> and built scalable <strong className="text-gray-900 dark:text-white">serverless APIs</strong> with TypeScript, Node.js, and AWS Lambda, using Middy middleware for request validation, error handling, and logging.</li>
                <li>Enforced <strong className="text-gray-900 dark:text-white">schema-driven data validation</strong> using OpenAPI Specifications and JSON Schemas, with automated code generation.</li>
                <li>Provisioned infrastructure as code with <strong className="text-gray-900 dark:text-white">Terraform</strong>, enforcing least-privilege access through AWS IAM roles.</li>
                <li>Applied <strong className="text-gray-900 dark:text-white">TSyringe</strong> for dependency injection and wrote unit/integration tests with Jest.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-mono text-xs font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-1">
              PROJECTS
            </h3>
            <div className="space-y-4">
              {[
                {
                  name: "DriveMesh — Encrypted & Distributed Cloud Storage",
                  tech: "Python, Flask, Google Drive API, OAuth 2.0",
                  link: "https://github.com/Shreyash-Shukla/distributed-drive-client",
                  bullets: [
                    "Built a Python/Flask application pooling multiple Google Drive accounts into a single encrypted, distributed storage layer with drag-and-drop UI.",
                    "Engineered a chunking pipeline splitting files into 5MB blocks, encrypted with Fernet, distributed round-robin via Google Drive API v3.",
                    "Parallelized uploads/downloads with ThreadPoolExecutor (up to 5 threads per account) for significantly faster large-file transfers.",
                  ]
                },
                {
                  name: "DAGent — AI Workflow Orchestration Platform",
                  tech: "Next.js 14, TypeScript, MongoDB, NextAuth, Redux Toolkit",
                  link: "https://github.com/Shreyash-Shukla/tictechtoe",
                  bullets: [
                    "Built DAGent, an AI-powered platform converting natural-language requests into executable DAG workflows with parallel execution.",
                    "Integrated MCP tool integrations (Drive, Gmail, Contacts) secured with Google OAuth 2.0 via NextAuth, with auto-refreshing MongoDB-backed tokens.",
                    "Built interactive dashboard with chat panel, live DAG canvas, and log viewer using Redux Toolkit and Zustand.",
                  ]
                },
                {
                  name: "MovieSpace — Serverless Movie Catalog",
                  tech: "Angular 21, NgRx, TypeScript, AWS Lambda, DynamoDB",
                  link: "https://dwvc9bm4d2i5q.cloudfront.net/movies",
                  isLive: true,
                  bullets: [
                    "Engineered a serverless movie catalog platform on AWS Lambda and DynamoDB with JWT-based authentication, deployed via S3/CloudFront.",
                    "Implemented centralized state management with NgRx Store and Effects; styled with Angular Material and Tailwind CSS.",
                  ]
                },
              ].map((proj) => (
                <div key={proj.name} className="bg-gray-50 dark:bg-[#0D0D0D] p-4 rounded-xl border border-gray-200 dark:border-gray-800">
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white">{proj.name}</h4>
                      <p className="font-mono text-[10px] text-gray-500 dark:text-gray-500 italic">{proj.tech}</p>
                    </div>
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono font-bold text-green-700 dark:text-[#00FF6A] hover:underline flex items-center gap-1 flex-shrink-0">
                      {proj.isLive ? "🔗 Live" : "GitHub ↗"}
                    </a>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 font-light text-xs leading-relaxed">
                    {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="font-mono text-xs font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-1">
              <Trophy className="w-4 h-4 text-emerald-600 dark:text-[#00FF6A]" />
              ACHIEVEMENTS &amp; HONORS
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-light">
              <li>Earned the <strong className="text-gray-900 dark:text-white">Knight</strong> badge on <strong className="text-gray-900 dark:text-white">LeetCode</strong>, demonstrating strong problem-solving and algorithmic skills.</li>
              <li><strong className="text-gray-900 dark:text-white">1st Place at Nirma Hackathon</strong> and <strong className="text-gray-900 dark:text-white">2nd Position at Breach Hackathon</strong>.</li>
              <li>Qualified <strong className="text-gray-900 dark:text-white">JEE Mains, JEE Advanced, and GATE</strong>; awarded the <strong className="text-gray-900 dark:text-white">Government of Gujarat Scholarship</strong>.</li>
              <li>Completed <strong className="text-gray-900 dark:text-white">Entrepreneurship and Incubation</strong> certification — <strong className="text-gray-900 dark:text-white">NPTEL (IIT Bombay)</strong>.</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-gray-100 dark:bg-[#0D0D0D] border-t-2 border-black dark:border-gray-800 flex items-center justify-between font-mono text-xs text-gray-700 dark:text-gray-400">
          <span>PRESS ESC OR CLICK OUTSIDE TO CLOSE</span>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-400 dark:bg-[#00FF6A] text-black rounded-lg font-mono text-xs font-black border border-black hover:opacity-90 transition-opacity"
          >
            <Download className="w-3 h-3" />
            DOWNLOAD RESUME
          </button>
        </div>

      </div>
    </div>
  );
}
