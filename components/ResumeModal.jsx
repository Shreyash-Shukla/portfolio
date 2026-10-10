"use client";

import { useEffect } from "react";
import { X, Download, Briefcase, GraduationCap, Code, Trophy } from "lucide-react";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume_new.pdf";
    link.download = "resume_new.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div role="dialog" aria-modal="true" aria-labelledby="resume-title" className="dark flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border-[3px] border-white bg-[#0d0d0d] text-white shadow-[8px_8px_0_0_#fff] sm:max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-2 border-b border-white/25 bg-[#151515] p-4 sm:p-6">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="h-4 w-1.5 shrink-0 rounded-full bg-[#39d353] animate-pulse sm:w-4"></div>
            <h2 id="resume-title" className="truncate font-mont text-base font-black tracking-wider text-white sm:text-xl">
              <span className="sm:hidden">RESUME</span>
              <span className="hidden sm:inline">SHREYASH SHUKLA — RESUME</span>
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 rounded-md bg-[#39d353] px-3 py-2 font-mono text-xs font-black text-black transition-colors hover:bg-[#67ee7d] sm:px-4"
            >
              <Download className="w-4 h-4" />
              <span className="hidden min-[390px]:inline">DOWNLOAD</span>
            </button>

            <button
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/50 bg-transparent font-bold text-white transition-colors hover:bg-white hover:text-black"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Resume Preview */}
        <div className="space-y-8 overflow-y-auto p-5 font-sans text-sm sm:p-10 sm:text-base">
          
          {/* Header Contact */}
          <div className="border-b-2 border-gray-200 dark:border-gray-800 pb-6">
            <h1 className="mb-1 font-mont text-2xl font-black text-gray-900 sm:text-3xl dark:text-white">SHREYASH SHUKLA</h1>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-[#39d353] dark:text-[#39d353]">
              SWE Intern @ Quicko · B.Tech CSE @ PDEU · CGPA: 9.72 / 10
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-700 dark:text-gray-300 text-xs font-mono">
              <span>📍 Gandhinagar, Gujarat</span>
              <span>📞 +91 76983 35369</span>
              <a href="mailto:shreyash.shukla.dev@gmail.com" className="transition-colors hover:text-[#39d353] dark:hover:text-[#39d353]">✉ shreyash.shukla.dev@gmail.com</a>
              <a href="https://linkedin.com/in/shreyash-shukla-6a3b5a309" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#39d353] dark:hover:text-[#39d353]">🔗 linkedin.com/in/shreyash-shukla</a>
              <a href="https://github.com/Shreyash-Shukla" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#39d353] dark:hover:text-[#39d353]">🐙 github.com/Shreyash-Shukla</a>
              <a href="https://shreyashshukla.vercel.app" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#39d353] dark:hover:text-[#39d353]">🌐 shreyashshukla.vercel.app</a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="font-mono text-xs font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-1">
              SUMMARY
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
              Computer Science undergraduate (CGPA 9.72) with hands-on experience building <strong className="text-gray-900 dark:text-white">full-stack applications</strong>, <strong className="text-gray-900 dark:text-white">cloud-native backends</strong>, and <strong className="text-gray-900 dark:text-white">AI/ML systems</strong>, including production tools shipped during a software engineering internship. <strong className="text-gray-900 dark:text-white">1st Place</strong> at HackNUthon 6.0 and <strong className="text-gray-900 dark:text-white">2nd Place</strong> at Breach 2025, backed by strong fundamentals in <strong className="text-gray-900 dark:text-white">data structures, algorithms, and system design</strong>.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-mono text-xs font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-1">
              <GraduationCap className="w-4 h-4 text-[#39d353] dark:text-[#39d353]" />
              EDUCATION
            </h3>
            <div className="bg-gray-50 dark:bg-[#0D0D0D] p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex justify-between items-start">
              <div>
                <h4 className="font-bold text-base text-gray-900 dark:text-white">Pandit Deendayal Energy University</h4>
                <p className="text-xs font-mono text-gray-600 dark:text-gray-400">Gandhinagar, Gujarat · B.Tech in Computer Science and Engineering</p>
              </div>
              <div className="text-right ml-4 flex-shrink-0">
                <span className="block font-mono text-xs font-bold text-[#39d353] dark:text-[#39d353]">CGPA: 9.72 / 10</span>
                <p className="text-[11px] text-gray-500 font-mono">July 2023 – May 2027</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-mono text-xs font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-1">
              <Code className="w-4 h-4 text-[#39d353] dark:text-[#39d353]" />
              TECHNICAL SKILLS
            </h3>
            <div className="space-y-2 font-mono text-xs bg-gray-50 dark:bg-[#0D0D0D] p-4 rounded-xl border border-gray-200 dark:border-gray-800">
              {[
                { label: "Languages", value: "Python, TypeScript, JavaScript (ES6+), SQL, C++, Java, C" },
                { label: "Backend & Frontend", value: "Node.js, Express.js, FastAPI, Flask, REST, OpenAPI, Serverless, JWT Auth, Next.js, React.js, Angular, Jest" },
                { label: "Cloud & DevOps", value: "AWS (Lambda, DynamoDB, S3, CloudFront, IAM), Terraform (IaC), Docker, Jenkins, Git, GitHub, Linux" },
                { label: "Databases", value: "PostgreSQL, MySQL, DynamoDB, MongoDB" },
                { label: "Data & ML", value: "Pandas, NumPy, Matplotlib, XGBoost, Random Forest, GNNs, API Data Processing, Data Validation, Schema Design" },
                { label: "AI & Concepts", value: "LLM Workflows, RAG, DAG Orchestration, MCP, DSA, OOP, DBMS, Operating Systems, System Design" },
              ].map((skill) => (
                <div key={skill.label} className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                  <strong className="w-full flex-shrink-0 text-gray-900 sm:w-auto sm:min-w-[170px] dark:text-white">{skill.label}:</strong>
                  <span className="text-gray-700 dark:text-gray-300">{skill.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-mono text-xs font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-1">
              <Briefcase className="w-4 h-4 text-[#39d353] dark:text-[#39d353]" />
              EXPERIENCE
            </h3>

            <div className="space-y-2 border-l-2 border-[#39d353] pl-4 dark:border-[#39d353]">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white">Quicko</h4>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 italic">Software Engineering Intern · Ahmedabad, Gujarat</p>
                </div>
                <span className="flex-shrink-0 rounded border border-[#39d353]/30 bg-[#39d353]/10 px-2.5 py-1 font-mono text-xs font-bold text-[#39d353] dark:text-[#39d353]">May 2026 – June 2026</span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-gray-700 dark:text-gray-300 font-light text-xs sm:text-sm leading-relaxed mt-2">
                <li>
                  Developed and deployed <strong className="text-gray-900 dark:text-white">four production-grade financial tools</strong> live on Quicko&apos;s platform: a{" "}
                  <a href="https://quicko.com/tools/verify-pan-details" target="_blank" rel="noopener noreferrer" className="font-bold text-[#39d353] hover:underline dark:text-[#39d353]">PAN Verification Tool ↗</a>, a{" "}
                  <a href="https://quicko.com/tools/check-pan-aadhaar-link-status" target="_blank" rel="noopener noreferrer" className="font-bold text-[#39d353] hover:underline dark:text-[#39d353]">PAN-Aadhaar Link Status Checker ↗</a>, a{" "}
                  <a href="https://quicko.com/tools/check-tax-payment-status" target="_blank" rel="noopener noreferrer" className="font-bold text-[#39d353] hover:underline dark:text-[#39d353]">Tax Payment Status Checker ↗</a>, and an{" "}
                  <a href="https://quicko.com/tools/e-verify-itr" target="_blank" rel="noopener noreferrer" className="font-bold text-[#39d353] hover:underline dark:text-[#39d353]">e-Verify ITR Tool ↗</a>.
                </li>
                <li>
                  Designed cloud-native data workflows on <strong className="text-gray-900 dark:text-white">AWS DynamoDB</strong> and built scalable <strong className="text-gray-900 dark:text-white">serverless APIs</strong> with <strong className="text-gray-900 dark:text-white">TypeScript</strong>, <strong className="text-gray-900 dark:text-white">Node.js</strong>, and <strong className="text-gray-900 dark:text-white">AWS Lambda</strong>, using Middy middleware for validation, error handling, and logging.
                </li>
                <li>
                  Enforced <strong className="text-gray-900 dark:text-white">schema-driven data validation</strong> across services using <strong className="text-gray-900 dark:text-white">OpenAPI Specifications</strong> and <strong className="text-gray-900 dark:text-white">JSON Schemas</strong>, with automated code generation.
                </li>
                <li>
                  Provisioned infrastructure as code with <strong className="text-gray-900 dark:text-white">Terraform</strong>, enforcing least-privilege access through <strong className="text-gray-900 dark:text-white">AWS IAM</strong> roles and policies.
                </li>
                <li>
                  Applied <strong className="text-gray-900 dark:text-white">TSyringe</strong> for dependency injection; wrote <strong className="text-gray-900 dark:text-white">Jest</strong> unit/integration tests for reliability.
                </li>
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
                  name: "FraudShield — AI Fraud Detection (1st Place, HackNUthon 6.0)",
                  tech: "Python, FastAPI, XGBoost, GNN, RAG, Next.js, MongoDB",
                  link: "https://github.com/Shreyash-Shukla/FraudShield",
                  bullets: [
                    "Co-built a real-time fraud detection system that ranked 1st among 300+ teams and 1000+ participants at HackNUthon 6.0.",
                    "Designed a compliance-first pipeline: every transaction is verified against online-banking regulations before fraud detection, then scored with XGBoost, Random Forest, and Linear Regression (timestamp features, weighted classes) to flag anomalies.",
                    "Added Graph Neural Networks to detect complex patterns such as circular transactions, producing a risk score and routing flagged cases to an admin review queue.",
                    "Built RAG-based explanations with compliance reasoning, improving LLM accuracy via structured prompt engineering and better embeddings; served through low-latency FastAPI endpoints with a Next.js dashboard and MongoDB.",
                  ],
                },
                {
                  name: "TrustChain — AI + Blockchain Fraud Prevention (2nd Place, Breach 2025)",
                  tech: "Python, FastAPI, DeepFace, Solidity, Next.js, MongoDB",
                  link: "https://github.com/Shreyash-Shukla/TrustChain",
                  bullets: [
                    "Built a fraud-prevention platform combining biometric face-recognition authentication (OpenCV, DeepFace), ML fraud detection, and blockchain audit trails.",
                    "Trained a Random Forest classifier on a public Ethereum transactions dataset (Kaggle) to flag fraudulent transactions.",
                    "Secured records with immutable Solidity smart contracts (ThirdWeb, MetaMask) on a Next.js, Node.js, FastAPI stack.",
                  ],
                },
                {
                  name: "DriveMesh — Encrypted & Distributed Cloud Storage over GDrive",
                  tech: "Python, Flask, Google Drive API, OAuth 2.0",
                  link: "https://github.com/Shreyash-Shukla/DriveMesh",
                  bullets: [
                    "Built a Python/Flask app that pools multiple Google Drive accounts into one encrypted, distributed storage layer with a drag-and-drop file manager.",
                    "Engineered a chunking pipeline that splits files into 5MB blocks, encrypts each with Fernet, and distributes them round-robin across accounts via the Google Drive API v3, parallelized with ThreadPoolExecutor (up to 5 threads per account).",
                    "Maintained JSON metadata registries to reconstruct, delete, or reorganize files, with multi-account OAuth 2.0 token refresh.",
                  ],
                },
                {
                  name: "DAGent — AI Workflow Orchestration Platform",
                  tech: "Next.js 14, TypeScript, MongoDB, NextAuth, Redux Toolkit",
                  link: "https://github.com/Shreyash-Shukla/DAGent",
                  bullets: [
                    "Built an AI workflow orchestration platform that converts natural-language requests into executable DAG workflows, running independent tool nodes in parallel.",
                    "Integrated MCP tools (Drive, Gmail, Contacts) secured with Google OAuth 2.0 via NextAuth, with auto-refreshing tokens stored in a custom MongoDB adapter.",
                    "Designed Mongoose schemas for chats, workflow graphs, and credentials.",
                    "Built the interactive dashboard — chat panel, live DAG canvas, log viewer — with Redux Toolkit and Zustand for state and Framer Motion/GSAP for animation.",
                  ],
                },
              ].map((proj) => (
                <div key={proj.name} className="bg-gray-50 dark:bg-[#0D0D0D] p-4 rounded-xl border border-gray-200 dark:border-gray-800">
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white">{proj.name}</h4>
                      <p className="font-mono text-[10px] text-gray-600 dark:text-gray-400 italic">{proj.tech}</p>
                    </div>
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="flex flex-shrink-0 items-center gap-1 font-mono text-[10px] font-bold text-[#39d353] hover:underline dark:text-[#39d353]">
                      GitHub ↗
                    </a>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 font-light text-xs leading-relaxed">
                    {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div>
            <h3 className="font-mono text-xs font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-1">
              <Trophy className="w-4 h-4 text-[#39d353] dark:text-[#39d353]" />
              ACHIEVEMENTS &amp; CERTIFICATIONS
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-light">
              <li>
                Earned the <strong className="text-gray-900 dark:text-white">Knight</strong> badge on <strong className="text-gray-900 dark:text-white">LeetCode</strong>; Qualified <strong className="text-gray-900 dark:text-white">JEE Mains</strong>, <strong className="text-gray-900 dark:text-white">JEE Advanced</strong>, and <strong className="text-gray-900 dark:text-white">GATE</strong>; Awarded the <strong className="text-gray-900 dark:text-white">Government of Gujarat Merit Scholarship</strong>.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Certificate</strong> in Entrepreneurship and Incubation — <strong className="text-gray-900 dark:text-white">NPTEL (IIT Bombay)</strong>.
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between gap-3 border-t border-white/25 bg-[#151515] p-4 font-mono text-xs text-gray-400">
          <span>PRESS ESC OR CLICK OUTSIDE TO CLOSE</span>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 rounded-md bg-[#39d353] px-3 py-2 font-mono text-xs font-black text-black transition-colors hover:bg-[#67ee7d]"
          >
            <Download className="w-3 h-3" />
            DOWNLOAD RESUME
          </button>
        </div>

      </div>
    </div>
  );
}
