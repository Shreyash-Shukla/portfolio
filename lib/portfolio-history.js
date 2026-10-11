// Curated life chapters, not commits from the website's Git repository.
export const chapters = [
  {
    id: "school-2020",
    date: "2020",
    title: "The first spark",
    log: "A ninth-grade C course showed me what code could automate.",
    story: [
      "I earned a C certification in ninth grade and was fascinated by how code could take care of repetitive tasks. I was curious about programming, but had no software career mapped out.",
      "After scoring 88% in GSEB Class 10, I chose science and set my sights on JEE and an IIT. Which branch of engineering? I hadn't decided.",
    ],
    accent: "#70d9e8",
  },
  {
    id: "crossroads-2023",
    date: "2023",
    title: "Choosing software",
    log: "I chose PDEU CSE over an NIT core branch because I wanted to build software.",
    story: [
      "By the time I finished GSEB Class 12, learning Python and Java had become something I did for fun. The opportunities in software were hard to ignore, and I could see myself doing this work.",
      "My JEE rank could get me into an NIT in a core branch. I chose CSE at PDEU instead: by then, I knew I wanted to become a software engineer.",
    ],
    accent: "#f0c96d",
  },
  {
    id: "pdeu-2023",
    date: "2023–present",
    title: "Showing up",
    log: "PDEU gave me room to learn, build, and find my people.",
    story: [
      "College has been full of new people, good memories, and the kind of exposure that makes me want to keep learning. I've built a lot here, with others and on my own.",
      "The two-to-three-hour daily commute can leave me drained, but I keep showing up. Imposter syndrome still visits; so does the urge to learn something new.",
    ],
    accent: "#39d353",
  },
  {
    id: "breach-2025",
    date: "Mar 2025",
    title: "First hackathon",
    log: "My first hackathon taught me to build boldly and explain clearly.",
    story: [
      "I arrived at Breach with no expectations. We used AI-assisted coding heavily, and I was involved at every step: planning, discussing, building, documenting, and presenting. I also got my first real taste of blockchain.",
      "It was fun until a win started to look possible; then the pressure kicked in. The project had rough edges, but explaining what we'd built gave me confidence I hadn't had before.",
    ],
    accent: "#70d9e8",
  },
  {
    id: "hacknuthon-2025",
    date: "Apr 2025",
    title: "The simple pitch",
    log: "An all-nighter, failing APIs, and a simple pitch led to a grand prize.",
    story: [
      "HackNUthon at Nirma started with understanding the problem, planning our approach, and meeting new people. I worked across the project with my team. We built and tested through the night, even as failing APIs made the deadline feel uncomfortably close.",
      "We fixed the issues and submitted the next afternoon. Being called on stage caught us off guard, so we made the clearest pitch we could. The judges understood the project, and we won the grand prize.",
    ],
    accent: "#c977ec",
  },
  {
    id: "gate-2026",
    date: "2026",
    title: "A fundamentals check",
    log: "I took GATE to test my CS fundamentals—and qualified.",
    story: [
      "I sat GATE without dedicated preparation. I wanted to see how much of my computer science foundation had stayed with me, even after months without revision.",
      "I qualified with 36/100 marks and an 18k AIR. It was a welcome surprise and a useful measure of what I'd learned so far.",
    ],
    accent: "#f0c96d",
  },
  {
    id: "quicko-2026",
    date: "May–Jun 2026",
    title: "Software for real users",
    log: "I built four tools at Quicko that reached thousands of users.",
    story: [
      "Landing a product-company internship felt unreal. At Quicko, I worked end to end on four financial tools now used by thousands of people.",
      "Adjusting to eight-to-ten-hour workdays on top of a three-hour commute was tough. I came away knowing far more about shipping software, with new connections and some great memories too.",
    ],
    accent: "#39d353",
  },
];

export const exams = [
  { id: "class-10", date: "2020", label: "Class 10 · GSEB", result: "88%" },
  { id: "class-12", date: "2023", label: "Class 12 · GSEB", result: "72%" },
  { id: "jee-main", date: "2023", label: "JEE Main", result: "96 percentile · 45k AIR" },
  { id: "jee-advanced", date: "2023", label: "JEE Advanced", result: "26k AIR" },
  { id: "pdeu", date: "2023–2027", label: "PDEU CSE", result: "9.72 CGPA through semester 6 · ongoing" },
  { id: "gate", date: "2026", label: "GATE", result: "36/100 marks · 18k AIR" },
];

export const comparisons = [
  {
    from: "school-2020",
    to: "crossroads-2023",
    title: "From curiosity to a choice",
    before: "I was curious about code, with my sights set on science and an IIT but no branch in mind.",
    after: "Python and Java had become a hobby, and I chose PDEU CSE to pursue software.",
    constant: "I wanted to understand how things worked.",
  },
  {
    from: "crossroads-2023",
    to: "quicko-2026",
    title: "A clearer sense of the work",
    before: "I chose software for the joy of coding and the possibilities I saw in the field.",
    after: "I'd helped ship tools for thousands of users and learned to pay closer attention to the choices behind them.",
    constant: "I'm still hungry to learn and willing to put in the work.",
  },
  {
    from: "breach-2025",
    to: "hacknuthon-2025",
    title: "From first try to grand prize",
    before: "At Breach, I went in with no expectations and left more confident in what I could build and explain.",
    after: "At HackNUthon, a straightforward pitch helped our overnight build win the grand prize.",
    constant: "I took part in every stage with my team, from planning to presenting.",
  },
  {
    from: "hacknuthon-2025",
    to: "quicko-2026",
    title: "From sprint to production",
    before: "At HackNUthon, I built and tested through the night to get our project ready for a single pitch.",
    after: "At Quicko, I built tools used by thousands, with work that had to last beyond a demo day.",
    constant: "I stayed involved from planning through delivery.",
  },
];

export const chapterById = Object.fromEntries(chapters.map((chapter) => [chapter.id, chapter]));
export const examById = Object.fromEntries(exams.map((exam) => [exam.id, exam]));

export function parseTerminalCommand(raw) {
  const command = raw.trim().toLowerCase().replace(/\s+/g, " ");
  if (!command) return { type: "empty" };
  if (["help", "clear", "history", "play"].includes(command)) return { type: command };
  if (command === "git log") return { type: "log" };
  if (command === "git exam") return { type: "exams" };
  if (command === "git diff") return { type: "diff-list" };
  if (command === "git checkout main") return { type: "checkout", id: "main" };

  const show = command.match(/^git show ([a-z0-9-]+)$/);
  if (show) return chapterById[show[1]] ? { type: "show", id: show[1] } : { type: "unknown-chapter", id: show[1] };

  const checkout = command.match(/^git checkout ([a-z0-9-]+)$/);
  if (checkout) return chapterById[checkout[1]] ? { type: "checkout", id: checkout[1] } : { type: "unknown-chapter", id: checkout[1] };

  const exam = command.match(/^git exam ([a-z0-9-]+)$/);
  if (exam) return examById[exam[1]] ? { type: "exam", id: exam[1] } : { type: "unknown-exam", id: exam[1] };

  const diff = command.match(/^git diff ([a-z0-9-]+)\.\.([a-z0-9-]+)$/);
  if (diff) {
    const found = comparisons.find((item) => item.from === diff[1] && item.to === diff[2]);
    return found ? { type: "diff", comparison: found } : { type: "unknown-diff" };
  }
  return { type: "unknown" };
}

export const completions = [
  "help", "git log", "git exam", "git diff", "git checkout main", "play", "clear", "history",
  ...chapters.flatMap(({ id }) => [`git show ${id}`, `git checkout ${id}`]),
  ...exams.map(({ id }) => `git exam ${id}`),
  ...comparisons.map(({ from, to }) => `git diff ${from}..${to}`),
];
