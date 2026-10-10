import { Cloud, Code2, Server } from "lucide-react";

const competencies = [
  {
    title: "Frontend Development",
    icon: Code2,
    accent: "#39d353",
    badges: ["Angular 21", "React.js", "Next.js", "NgRx", "RxJS", "Tailwind CSS"],
    description: "I build responsive client applications and production UI flows, including Angular SPAs with NgRx state management and React interfaces.",
  },
  {
    title: "Backend & Serverless",
    icon: Server,
    accent: "#70d9e8",
    badges: ["TypeScript", "Node.js", "Express.js", "FastAPI", "AWS Lambda", "REST APIs"],
    description: "I design schema-driven APIs, serverless workflows, and service integrations with clear contracts, validation, and reliable deployment.",
  },
  {
    title: "Databases & Cloud",
    icon: Cloud,
    accent: "#c977ec",
    badges: ["DynamoDB", "MongoDB", "PostgreSQL", "AWS S3", "CloudFront", "Terraform"],
    description: "I work across data stores and cloud infrastructure, from encrypted file workflows to infrastructure as code for production services.",
  },
];

export default function TechStack() {
  return (
    <section id="expertise" className="site-section">
      <div className="section-heading">
        <span className="section-eyebrow">WHAT I DO</span>
        <h2 className="section-title">Core <span>Competencies</span></h2>
        <p className="section-copy">Technologies I have used to build full-stack products, cloud services, and practical data systems.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {competencies.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="dark-surface rounded-2xl border-2 border-white bg-[#101010] p-6 text-white shadow-[6px_6px_0_0_#fff] sm:p-8">
              <div className="mb-6 flex items-start justify-between">
                <Icon className="h-8 w-8" style={{ color: item.accent }} aria-hidden="true" />
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.accent }} />
              </div>
              <h3 className="font-mont text-xl font-black sm:text-2xl">{item.title}</h3>
              <div className="my-5 flex flex-wrap gap-2">
                {item.badges.map((badge) => <span key={badge} className="rounded-full border border-white/30 px-3 py-1 font-mono text-[10px] font-bold uppercase text-gray-200">{badge}</span>)}
              </div>
              <p className="text-sm leading-relaxed text-gray-300">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
