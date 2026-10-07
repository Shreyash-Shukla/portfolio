"use client";

import { Trophy, Medal, Award, Star, Sparkles } from "lucide-react";

export default function Hackathons() {
  const achievements = [
    {
      title: "1st Place – Nirma Hackathon",
      category: "Hackathon Victory",
      badge: "CHAMPION",
      badgeBg: "bg-[#8B9CFF] text-black",
      borderHex: "border-black dark:border-[#8B9CFF]",
      cardBg: "bg-white dark:bg-[#1A1A1A]",
      icon: <Trophy className="w-8 h-8 text-amber-500" />,
      description:
        "Secured 1st Place out of hundreds of engineering teams at Nirma Hackathon for engineering an innovative, scalable tech solution under high pressure.",
    },
    {
      title: "2nd Position – Breach Hackathon",
      category: "Hackathon Runner-Up",
      badge: "2ND RANK",
      badgeBg: "bg-[#00E5FF] text-black",
      borderHex: "border-black dark:border-[#00E5FF]",
      cardBg: "bg-white dark:bg-[#1A1A1A]",
      icon: <Medal className="w-8 h-8 text-cyan-500" />,
      description:
        "Achieved 2nd Position at Breach Hackathon by designing and deploying an end-to-end full-stack web project within a strict 24-hour sprint.",
    },

    {
      title: "Govt of Gujarat Academic Scholarship",
      category: "Academic Distinction",
      badge: "EXCELLENCE",
      badgeBg: "bg-[#FFC900] text-black",
      borderHex: "border-black dark:border-[#FFC900]",
      cardBg: "bg-white dark:bg-[#1A1A1A]",
      icon: <Star className="w-8 h-8 text-amber-400" />,
      description:
        "Awarded the prestigious Government of Gujarat Scholarship for outstanding academic excellence in 12th Grade higher secondary board exams.",
    },
    {
      title: "JEE Mains, Advanced & GATE Qualified",
      category: "National Level Exams",
      badge: "QUALIFIED",
      badgeBg: "bg-[#B388FF] text-black",
      borderHex: "border-black dark:border-[#B388FF]",
      cardBg: "bg-white dark:bg-[#1A1A1A]",
      icon: <Award className="w-8 h-8 text-purple-500" />,
      description:
        "Qualified all top-tier national competitive engineering examinations including JEE Mains, JEE Advanced, and GATE with exceptional analytical scores.",
    },
    {
      title: "LeetCode Knight Badge",
      category: "Competitive Programming",
      badge: "KNIGHT 🏅",
      badgeBg: "bg-[#FFC900] text-black",
      borderHex: "border-black dark:border-[#FFC900]",
      cardBg: "bg-white dark:bg-[#1A1A1A]",
      icon: <Trophy className="w-8 h-8 text-amber-500" />,
      description:
        "Earned the prestigious Knight badge on LeetCode, demonstrating exceptional problem-solving skills and strong algorithmic thinking through consistent performance in competitive programming contests.",
    },
    {
      title: "NPTEL IIT Bombay Certification",
      category: "Professional Credentials",
      badge: "CERTIFIED",
      badgeBg: "bg-blue-500 text-white",
      borderHex: "border-black dark:border-blue-400",
      cardBg: "bg-white dark:bg-[#1A1A1A]",
      icon: <Sparkles className="w-8 h-8 text-blue-500" />,
      description:
        "Completed professional certification course in 'Entrepreneurship and Incubation' conducted by IIT Bombay through NPTEL.",
    },
  ];

  return (
    <section id="hackathons" className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 xl:px-12">
      {/* Header Tag */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2.5 mb-4 font-mono text-xs font-bold text-gray-700 dark:text-gray-400 uppercase tracking-widest bg-gray-200 dark:bg-white/5 px-4 py-1.5 rounded-full border border-gray-300 dark:border-white/10">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span>HACKATHONS & ACHIEVEMENTS</span>
        </div>

        <h2 className="mb-4 font-mont text-3xl font-black uppercase tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
          Victories & <span className="text-indigo-600 dark:text-[#8B9CFF]">Milestones</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
          Demonstrated competitive engineering excellence across hackathons, algorithmic problem solving, and academic awards.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border-4 ${item.borderHex} ${item.cardBg} brutal-shadow p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300`}
          >
            <div>
              {/* Badge & Icon Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gray-100 dark:bg-black/50 border border-gray-300 dark:border-gray-800">
                  {item.icon}
                </div>
                <span className={`font-mono text-xs font-black px-3 py-1 rounded-full border border-black ${item.badgeBg}`}>
                  {item.badge}
                </span>
              </div>

              <span className="font-mono text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider block mb-1">
                {item.category}
              </span>

              <h3 className="text-xl font-black font-mont text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-800 dark:text-gray-200 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
