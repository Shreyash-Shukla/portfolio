const steps = [
  { number: "01", title: "Communicate", description: "I learn the goals, constraints, and people behind the project before shaping a solution." },
  { number: "02", title: "Develop", description: "I build the product with a focus on clear interfaces and dependable behavior." },
  { number: "03", title: "Refine", description: "I improve usability, performance, and the details that make the experience feel complete." },
  { number: "04", title: "Review", description: "I test the work, gather feedback, and address the issues that matter most." },
  { number: "05", title: "Deploy", description: "I release the finished work and verify it in the environment people will use." },
];

export default function Pipeline() {
  return (
    <section id="pipeline" className="site-section">
      <div className="section-heading">
        <span className="section-eyebrow">DEVELOPMENT PIPELINE</span>
        <h2 className="section-title">How I Bring Your <span>Vision to Life</span></h2>
        <p className="section-copy">A clear process from first conversation to a working release.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {steps.map((step) => (
          <article key={step.number} className="rounded-2xl border border-white/35 bg-[#111] p-6 text-white transition-colors hover:border-[#39d353]">
            <span className="font-mono text-4xl font-black text-[#39d353]">{step.number}</span>
            <h3 className="mt-7 font-mont text-xl font-black">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
