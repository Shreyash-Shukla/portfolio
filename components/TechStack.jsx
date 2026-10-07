"use client";

import { Code2, Server, Database, Cloud, Terminal, Cpu } from "lucide-react";

export default function TechStack() {
  const competencies = [
    {
      title: "Frontend Development",
      gradient: "from-indigo-600 to-slate-800",
      icon: <Code2 className="w-8 h-8 text-white" />,
      badges: ["Angular 21", "React.js", "Next.js", "NgRx", "RxJS", "Tailwind CSS"],
      description:
        "Engineered serverless SPA client architectures with Angular Material and Tailwind CSS, utilizing NgRx Store & Effects for centralized state management.",
      highlightColor: "bg-indigo-300",
    },
    {
      title: "Backend & Serverless",
      gradient: "from-blue-600 to-indigo-800",
      icon: <Server className="w-8 h-8 text-white" />,
      badges: ["TypeScript", "Node.js", "Express.js", "FastAPI", "AWS Lambda", "REST APIs"],
      description:
        "Built schema-driven production APIs with Middy middleware, dependency injection via TSyringe, OpenAPI specs, and Jest testing suites.",
      highlightColor: "bg-blue-400",
    },
    {
      title: "Databases & Cloud DevOps",
      gradient: "from-purple-600 to-violet-800",
      icon: <Cloud className="w-8 h-8 text-white" />,
      badges: ["DynamoDB", "MongoDB", "PostgreSQL", "AWS S3 / CloudFront", "Terraform", "Docker"],
      description:
        "Provisioned cloud-native infrastructure with Terraform, DynamoDB data workflows, AWS CloudFront globally distributed delivery, and Docker containers.",
      highlightColor: "bg-purple-400",
    },
  ];

  return (
    <section id="expertise" className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 xl:px-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4 font-mono text-xs font-bold text-gray-700 dark:text-gray-400 uppercase tracking-widest bg-gray-200 dark:bg-white/5 px-4 py-1.5 rounded-full border border-gray-300 dark:border-white/10">
          <span className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-75"></span>
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-150"></span>
          </span>
          <span>TECH EXPERTISE DASHBOARD</span>
        </div>

        <h2 className="mb-4 font-mont text-3xl font-black uppercase tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
          Technical <span className="text-indigo-600 dark:text-[#8B9CFF]">Stack</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
          Production-proven technologies across full stack development, cloud infrastructure, and data analytics.
        </p>
      </div>

      {/* 3 Grid Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {competencies.map((comp, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl overflow-hidden border-4 border-black dark:border-gray-800 brutal-shadow hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div className={`bg-gradient-to-br ${comp.gradient} relative flex h-full flex-col justify-between p-6 text-white sm:p-8`}>
              <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${comp.highlightColor} animate-ping`}></div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                    {comp.icon}
                  </div>
                  <h3 className="text-xl font-bold font-mono tracking-wide">{comp.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {comp.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-3 py-1 text-xs font-mono font-semibold bg-white/10 text-white/90 rounded-lg border border-white/20 backdrop-blur-sm group-hover:bg-white/20 transition-colors"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <p className="text-white/80 text-sm leading-relaxed font-light">
                  {comp.description}
                </p>
              </div>

              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/40"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/40"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/40"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/40"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
