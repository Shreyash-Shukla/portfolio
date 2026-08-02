"use client";

import { X, Download, Printer, Briefcase, GraduationCap, Code, Trophy } from "lucide-react";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#1A1A1A] w-full max-w-4xl max-h-[90vh] rounded-3xl border-4 border-black dark:border-[#00FF6A] brutal-shadow-lg flex flex-col overflow-hidden text-gray-900 dark:text-white">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 bg-gray-100 dark:bg-[#0D0D0D] border-b-4 border-black dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#00FF6A]"></div>
            <h2 className="font-mono font-black text-xl tracking-wider text-gray-900 dark:text-white">SHREYASH SHUKLA - RESUME</h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-mono text-xs font-bold border border-black hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <Printer className="w-4 h-4" />
              <span>PRINT</span>
            </button>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Downloading Shreyash_Shukla_Resume.pdf");
              }}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-[#00FF6A] text-black rounded-lg font-mono text-xs font-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD PDF</span>
            </a>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold"
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
              Software Engineering Intern @ Quicko | B.Tech CSE @ PDEU (CGPA: 9.72 / 10)
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-light max-w-3xl text-xs sm:text-sm">
              Gandhinagar, Gujarat • +91 76983 35369 • 23bcp089@sot.pdpu.ac.in • linkedin.com/in/shreyash-shukla • github.com/Shreyash-Shukla
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-mono text-xs font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#00FF6A]" />
              EDUCATION
            </h3>
            <div className="bg-gray-50 dark:bg-[#0D0D0D] p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex justify-between items-start">
              <div>
                <h4 className="font-bold text-base text-gray-900 dark:text-white">Pandit Deendayal Energy University (PDEU)</h4>
                <p className="text-xs font-mono text-gray-600 dark:text-gray-400">B.Tech in Computer Science and Engineering</p>
              </div>
              <div className="text-right">
                <span className="font-mono text-xs font-bold text-green-700 dark:text-[#00FF6A]">CGPA: 9.72 / 10</span>
                <p className="text-[11px] text-gray-500 font-mono">July 2023 – May 2027</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-mono text-xs font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#00FF6A]" />
              WORK EXPERIENCE
            </h3>

            <div className="border-l-2 border-[#00FF6A] pl-4 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white">Quicko – Software Engineering Intern</h4>
                  <p className="text-xs font-mono text-gray-600 dark:text-gray-400">Ahmedabad, Gujarat</p>
                </div>
                <span className="font-mono text-xs bg-green-500/10 text-green-700 dark:text-[#00FF6A] px-2.5 py-1 rounded font-bold">May 2026 – June 2026</span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-gray-700 dark:text-gray-300 font-light text-xs sm:text-sm leading-relaxed">
                <li>Developed and deployed three production-grade financial tools live on Quicko's platform: PAN Verification Tool, PAN-Aadhaar Link Status Checker, and Tax Payment Status Checker.</li>
                <li>Built scalable, schema-driven serverless APIs using TypeScript, Node.js, and AWS Lambda, with Middy middleware for request validation and error handling.</li>
                <li>Applied TSyringe for dependency injection across services and wrote unit & integration test suites with Jest.</li>
                <li>Provisioned cloud-native infrastructure on AWS DynamoDB with Terraform, enforcing IAM least-privilege policies.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-mono text-xs font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-[#00FF6A]" />
              TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs bg-gray-50 dark:bg-[#0D0D0D] p-4 rounded-xl border border-gray-200 dark:border-gray-800">
              <div>
                <strong className="text-gray-900 dark:text-white">Languages:</strong> C++, Python, TypeScript, JavaScript, Java, C
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">Frontend:</strong> Angular 21, React.js, Next.js, NgRx, RxJS, Tailwind CSS, Angular Material
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">Backend & APIs:</strong> Node.js, Express.js, FastAPI, AWS Lambda, REST APIs, Serverless
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">Cloud & DevOps:</strong> AWS, Terraform, Docker, Jenkins, Git, GitHub, Linux, DynamoDB, MongoDB
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="font-mono text-xs font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#00FF6A]" />
              ACHIEVEMENTS & HONORS
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-light">
              <li><strong>1st Place at Nirma Hackathon</strong> for developing an innovative tech solution.</li>
              <li><strong>2nd Position at Breach Hackathon</strong> for building a full-stack project.</li>
              <li>Solved <strong>400+ DSA problems</strong> across LeetCode & GeeksforGeeks.</li>
              <li>Qualified <strong>JEE Mains, JEE Advanced, and GATE</strong> examinations.</li>
              <li>Awarded <strong>Government of Gujarat Scholarship</strong> for academic excellence in 12th grade.</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-gray-100 dark:bg-[#0D0D0D] border-t-2 border-black dark:border-gray-800 text-center font-mono text-xs text-gray-600 dark:text-gray-400">
          <span>PRESS ESC OR CLICK THE CLOSE BUTTON TO RETURN</span>
        </div>

      </div>
    </div>
  );
}
