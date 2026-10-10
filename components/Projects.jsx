import { ArrowRight, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/SocialIcons";

const projects = [
  {
    title: "DriveMesh",
    subtitle: "Encrypted and Distributed Cloud Storage",
    accent: "#39d353",
    githubUrl: "https://github.com/Shreyash-Shukla/DriveMesh",
    tags: ["Python", "Flask", "Google Drive API", "OAuth 2.0", "Fernet"],
    description: "Pools multiple Google Drive accounts into one encrypted storage layer. Files are split into 5 MB chunks, encrypted, and distributed across accounts with parallel transfers.",
  },
  {
    title: "DAGent",
    subtitle: "AI Workflow Orchestration",
    accent: "#c977ec",
    githubUrl: "https://github.com/Shreyash-Shukla/DAGent",
    tags: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Redux Toolkit"],
    description: "Turns natural-language requests into executable DAG workflows, runs independent tool nodes in parallel, and connects to Google services through OAuth-secured integrations.",
  },
  {
    title: "Smart Expense Tracker",
    subtitle: "Personal Finance Analytics",
    accent: "#70d9e8",
    githubUrl: "https://github.com/Shreyash-Shukla/Smart-Expense-Tracker",
    tags: ["React.js", "Node.js", "MongoDB", "Chart.js", "JWT"],
    description: "A full-stack expense and budget tracker with secure accounts, category analysis, interactive charts, and a persistent REST API.",
  },
  {
    title: "Network Log Analyzer",
    subtitle: "Security Analytics Pipeline",
    accent: "#f0c96d",
    githubUrl: "https://github.com/Shreyash-Shukla/Network-Log-Analyzer",
    tags: ["Python", "Pandas", "Regex", "Security", "Data Pipeline"],
    description: "Processes large network logs to surface traffic anomalies and suspicious patterns, with filtering, aggregation, and visual reports.",
  },
  {
    title: "Quicko Financial Suite",
    subtitle: "Production Tools",
    accent: "#39d353",
    tags: ["TypeScript", "AWS Lambda", "DynamoDB", "Terraform", "Middy"],
    description: "Four production financial tools shipped during my software engineering internship at Quicko, backed by schema-driven serverless APIs and infrastructure as code.",
    tools: [
      { label: "PAN-Aadhaar Link Status", url: "https://quicko.com/tools/check-pan-aadhaar-link-status" },
      { label: "Verify PAN Details", url: "https://quicko.com/tools/verify-pan-details" },
      { label: "Tax Payment Status", url: "https://quicko.com/tools/check-tax-payment-status" },
      { label: "e-Verify ITR", url: "https://quicko.com/tools/e-verify-itr" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="site-section">
      <div className="section-heading">
        <span className="section-eyebrow">SELECTED WORK</span>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <p className="section-copy">Products and systems built for real users, from personal tools to production software.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.title} className={`dark-surface relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-white bg-[#111] p-6 text-white shadow-[6px_6px_0_0_#fff] sm:p-8 ${index === projects.length - 1 ? "md:col-span-2" : ""}`}>
            <div>
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="font-mono text-xs font-bold tracking-widest text-[#9eb4ca]">PROJECT {String(index + 1).padStart(2, "0")}</span>
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: project.accent }} />
              </div>
              <p className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: project.accent }}>{project.subtitle}</p>
              <h3 className="mt-2 font-mont text-2xl font-black sm:text-3xl">{project.title}</h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/30 px-3 py-1 font-mono text-[10px] font-bold uppercase text-gray-200">{tag}</span>)}
              </div>
              {project.tools && (
                <div className="mt-7 grid gap-2 sm:grid-cols-2">
                  {project.tools.map((tool) => <a key={tool.url} href={tool.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-2 font-mono text-xs font-bold hover:border-[#39d353] hover:text-[#39d353]">{tool.label}<ArrowUpRight size={14} /></a>)}
                </div>
              )}
            </div>
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-[#39d353] px-4 py-2 font-mono text-xs font-black text-black hover:bg-[#67ee7d]"><GitHubIcon size={16} /> VIEW CODE <ArrowUpRight size={15} /></a>}
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="https://github.com/Shreyash-Shukla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-md border border-gray-900 px-6 py-3 font-mono text-xs font-black text-gray-900 transition-colors hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black sm:text-sm">
          EXPLORE ALL PROJECTS <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
