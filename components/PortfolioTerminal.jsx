"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, CornerDownLeft, TerminalSquare } from "lucide-react";
import {
  chapters,
  chapterById,
  exams,
  examById,
  comparisons,
  completions,
  parseTerminalCommand,
} from "@/lib/portfolio-history";

const SpaceShooter = dynamic(() => import("./SpaceShooter"), {
  ssr: false,
  loading: () => <div className="flex aspect-[19/22] items-center justify-center rounded-2xl border-2 border-white bg-[#0d0d0d] font-mono text-sm text-[#39d353]">Loading Bug Blaster…</div>,
});

const starterCommands = ["git log", "git exam", "git diff", "clear", "play"];
const helpCommands = [
  ["git log", "Browse my chapters"],
  ["git show <chapter>", "Read a chapter"],
  ["git checkout <chapter>", "Feature a chapter here"],
  ["git checkout main", "Return to the present"],
  ["git diff", "See available comparisons"],
  ["git exam", "See my exam timeline"],
  ["play", "Launch Bug Blaster"],
  ["history", "Review this session"],
  ["clear", "Clear terminal output"],
];

function TerminalOutput({ entry, runCommand }) {
  if (entry.kind === "command") {
    return <p className="break-words font-bold text-white"><span className="mr-2 text-[#39d353]">$</span>{entry.value}</p>;
  }
  if (entry.kind === "welcome") {
    return (
      <div className="space-y-2 text-[#c7d5df]">
        <p className="font-bold text-white">Welcome to my life log<span className="text-[#39d353]">.</span></p>
        <p>Real milestones, told like a Git history. Pick a command or type your own.</p>
        <p className="text-xs text-[#8da0af]">Curated story chapters · not repository commits</p>
      </div>
    );
  }
  if (entry.kind === "help") {
    return <div className="space-y-1"><p className="mb-3 font-bold text-[#39d353]">AVAILABLE COMMANDS</p>{helpCommands.map(([command, meaning]) => <div key={command} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-2 border-b border-white/10 py-1.5"><span className="break-words text-white">{command}</span><span className="text-[#9eb4ca]">{meaning}</span></div>)}</div>;
  }
  if (entry.kind === "log") {
    return <div className="space-y-2"><p className="font-bold text-[#39d353]">LIFE LOG · NEWEST FIRST</p>{[...chapters].reverse().map((chapter) => <button key={chapter.id} type="button" onClick={() => runCommand(`git show ${chapter.id}`)} className="group grid w-full gap-1 rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-left transition-colors hover:border-[#39d353]/70 hover:bg-[#39d353]/10 sm:grid-cols-[5.5rem_1fr]"><span className="text-[#9eb4ca]">{chapter.date}</span><span><strong className="block text-white group-hover:text-[#39d353]">{chapter.id}</strong><span className="text-[#c7d5df]">{chapter.log}</span></span></button>)}</div>;
  }
  if (entry.kind === "show") {
    const chapter = chapterById[entry.id];
    return <article className="border-l-2 pl-3" style={{ borderColor: chapter.accent }}><p className="text-xs font-bold uppercase tracking-widest text-[#9eb4ca]">{chapter.date} · {chapter.id}</p><h3 className="mt-1 font-mont text-lg font-black text-white">{chapter.title}</h3>{chapter.story.map((paragraph) => <p key={paragraph} className="mt-2 leading-relaxed text-[#d4dce2]">{paragraph}</p>)}<button type="button" onClick={() => runCommand(`git checkout ${chapter.id}`)} className="mt-3 inline-flex items-center gap-1 font-bold text-[#39d353] hover:underline">Check out this chapter <ArrowRight size={13} /></button></article>;
  }
  if (entry.kind === "checkout") {
    return <p className="text-[#c7d5df]">{entry.id === "main" ? "Back on main. The present is still being written." : `Checked out ${entry.id}. Chapter featured above.`}</p>;
  }
  if (entry.kind === "exams") {
    return <div className="space-y-2"><p className="font-bold text-[#39d353]">EXAM TIMELINE</p>{exams.map((exam) => <button key={exam.id} type="button" onClick={() => runCommand(`git exam ${exam.id}`)} className="flex w-full flex-wrap justify-between gap-x-3 gap-y-1 rounded-md border-b border-white/10 px-1 py-2 text-left hover:bg-white/5"><span className="text-white">{exam.date} · {exam.label}</span><strong className="text-[#c7d5df]">{exam.result}</strong></button>)}</div>;
  }
  if (entry.kind === "exam") {
    const exam = examById[entry.id];
    return <div className="rounded-lg border border-[#39d353]/40 bg-[#39d353]/5 p-3"><p className="text-xs text-[#9eb4ca]">{exam.date} · EXAM RECORD</p><p className="mt-1 font-mont text-lg font-bold text-white">{exam.label}</p><p className="mt-1 font-bold text-[#39d353]">{exam.result}</p></div>;
  }
  if (entry.kind === "diff-list") {
    return <div className="space-y-2"><p className="font-bold text-[#39d353]">AVAILABLE DIFFS</p>{comparisons.map((item) => <button key={`${item.from}-${item.to}`} type="button" onClick={() => runCommand(`git diff ${item.from}..${item.to}`)} className="block w-full rounded-md border border-white/10 p-2 text-left hover:border-[#39d353]/70"><span className="block break-all text-white">{item.from}..{item.to}</span><span className="text-[#9eb4ca]">{item.title}</span></button>)}</div>;
  }
  if (entry.kind === "diff") {
    const { title, before, after, constant } = entry.comparison;
    return <div className="space-y-2"><p className="font-bold text-[#39d353]">{title.toUpperCase()}</p><p className="rounded-md bg-red-400/10 px-3 py-2 text-[#ffd0d0]"><span className="mr-2 font-bold">−</span>{before}</p><p className="rounded-md bg-[#39d353]/10 px-3 py-2 text-[#c8f6d1]"><span className="mr-2 font-bold">+</span>{after}</p><p className="px-3 text-[#c7d5df]">Still true: {constant}</p></div>;
  }
  if (entry.kind === "history") return <div><p className="mb-2 font-bold text-[#39d353]">THIS SESSION</p>{entry.commands.map((command, index) => <p key={`${index}-${command}`} className="break-all text-[#c7d5df]"><span className="mr-2 text-[#8da0af]">{String(index + 1).padStart(2, "0")}</span>{command}</p>)}</div>;
  if (entry.kind === "arcade") return <p className="text-[#c7d5df]">Bug Blaster session ended · score <strong className="text-[#39d353]">{entry.score}</strong>. Your story is right where you left it.</p>;
  return <p className="text-[#f0c96d]">{entry.message}</p>;
}

export default function PortfolioTerminal() {
  const [mode, setMode] = useState("terminal");
  const [selectedChapter, setSelectedChapter] = useState("main");
  const [entries, setEntries] = useState([{ kind: "welcome" }]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [gamePromptOpen, setGamePromptOpen] = useState(false);
  const [gameInput, setGameInput] = useState("");
  const [gameMessage, setGameMessage] = useState("");
  const [gameKey, setGameKey] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const outputRef = useRef(null);
  const inputRef = useRef(null);
  const gameInputRef = useRef(null);

  useEffect(() => {
    if (mode !== "terminal" || !outputRef.current || entries.length < 2) return;
    const panel = outputRef.current;
    const latestCommand = panel.children[panel.children.length - 2];
    if (latestCommand) {
      panel.scrollTop += latestCommand.getBoundingClientRect().top - panel.getBoundingClientRect().top;
    }
  }, [entries, mode]);

  useEffect(() => {
    if (gamePromptOpen) gameInputRef.current?.focus();
  }, [gamePromptOpen]);

  useEffect(() => {
    if (mode !== "game") return;
    const onEscape = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setGamePromptOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [mode]);

  const runCommand = useCallback((raw) => {
    const value = raw.trim();
    if (!value) return;
    const parsed = parseTerminalCommand(value);
    const nextHistory = [...commandHistory, value];
    setCommandHistory(nextHistory);
    setHistoryIndex(-1);
    setInput("");

    if (parsed.type === "clear") {
      setEntries([]);
    } else if (parsed.type === "play") {
      setEntries((current) => [...current, { kind: "command", value }]);
      setGameScore(0);
      setGamePromptOpen(false);
      setGameMessage("");
      setGameKey((key) => key + 1);
      setMode("game");
    } else {
      let result = parsed;
      if (parsed.type === "history") result = { kind: "history", commands: nextHistory };
      else if (parsed.type === "unknown-chapter") result = { kind: "message", message: `No chapter named "${parsed.id}". Run git log for valid names.` };
      else if (parsed.type === "unknown-exam") result = { kind: "message", message: `No exam named "${parsed.id}". Run git exam for valid names.` };
      else if (parsed.type === "unknown-diff") result = { kind: "message", message: "That comparison is not written yet. Run git diff to see available pairs." };
      else if (parsed.type === "unknown") result = { kind: "message", message: "Command not found. Try help, git log, git exam, or play." };
      else result = { ...parsed, kind: parsed.type };
      if (parsed.type === "checkout") setSelectedChapter(parsed.id);
      setEntries((current) => [...current, { kind: "command", value }, result]);
    }
    inputRef.current?.focus();
  }, [commandHistory]);

  const onTerminalKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      runCommand(input);
    } else if (event.key === "Tab" && input.trim()) {
      const match = completions.find((command) => command.startsWith(input.trim().toLowerCase()));
      if (match) {
        event.preventDefault();
        setInput(match);
      }
    } else if (event.key === "ArrowUp" && commandHistory.length) {
      event.preventDefault();
      const index = historyIndex < 0 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(index);
      setInput(commandHistory[index]);
    } else if (event.key === "ArrowDown" && historyIndex >= 0) {
      event.preventDefault();
      const index = historyIndex + 1;
      setHistoryIndex(index < commandHistory.length ? index : -1);
      setInput(index < commandHistory.length ? commandHistory[index] : "");
    }
  };

  const onGameCommand = (raw) => {
    const command = raw.trim().toLowerCase();
    setGameInput("");
    if (command === "exit") {
      setGamePromptOpen(false);
      setMode("terminal");
      setEntries((current) => [...current, { kind: "command", value: "exit" }, { kind: "arcade", score: gameScore }]);
      requestAnimationFrame(() => inputRef.current?.focus());
    } else if (command === "restart") {
      setGameKey((key) => key + 1);
      setGameScore(0);
      setGamePromptOpen(false);
      setGameMessage("");
    } else if (command === "resume") {
      setGamePromptOpen(false);
      setGameMessage("");
    } else if (command === "help") {
      setGameMessage("Available: exit · restart · resume");
    } else {
      setGameMessage("Unknown command. Try exit, restart, or resume.");
    }
  };

  const featured = chapterById[selectedChapter];

  if (mode === "game") {
    return (
      <div className="relative w-full max-w-[540px]">
        <SpaceShooter key={gameKey} autoStart paused={gamePromptOpen} onScoreChange={setGameScore} onCommand={() => setGamePromptOpen(true)} />
        {gamePromptOpen && <div className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-black/85 p-4"><div className="w-full max-w-sm rounded-xl border-2 border-[#39d353] bg-[#0d0d0d] p-5 font-mono text-white shadow-[6px_6px_0_#000]"><p className="text-xs font-bold tracking-widest text-[#39d353]">GAME PAUSED · COMMAND MODE</p><p className="mt-3 text-xs text-[#c7d5df]">Type <b>exit</b> to return to your chapter, <b>restart</b>, or <b>resume</b>.</p><form onSubmit={(event) => { event.preventDefault(); onGameCommand(gameInput); }} className="mt-4 flex gap-2"><label htmlFor="game-command" className="sr-only">Game command</label><input ref={gameInputRef} id="game-command" value={gameInput} onChange={(event) => setGameInput(event.target.value)} className="min-w-0 flex-1 border-b border-[#39d353] bg-transparent px-2 py-2 text-sm text-white outline-none" autoComplete="off" /><button type="submit" className="rounded bg-[#39d353] px-3 font-bold text-black">RUN</button></form>{gameMessage && <p role="status" className="mt-2 text-xs text-[#f0c96d]">{gameMessage}</p>}<div className="mt-4 flex flex-wrap gap-2">{["resume", "restart", "exit"].map((command) => <button type="button" key={command} onClick={() => onGameCommand(command)} className="rounded border border-white/30 px-2 py-1 text-xs hover:border-[#39d353]">{command}</button>)}</div></div></div>}
      </div>
    );
  }

  return (
    <div className="dark-surface flex h-[530px] w-full max-w-[540px] flex-col overflow-hidden rounded-2xl border-2 border-white bg-[#0d0d0d] text-white shadow-[6px_6px_0_0_#fff] sm:h-[620px]">
      <div className="flex items-center justify-between gap-3 border-b border-white/20 bg-[#171717] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#ff6868]" /><span className="h-2.5 w-2.5 rounded-full bg-[#f0c96d]" /><span className="h-2.5 w-2.5 rounded-full bg-[#39d353]" /></div>
        <span className="truncate font-mono text-[10px] font-bold tracking-wider text-[#c7d5df] sm:text-xs">SHREYASH / LIFE.LOG</span>
        <TerminalSquare size={18} className="shrink-0 text-[#39d353]" aria-hidden="true" />
      </div>
      <div className="border-b border-white/15 bg-gradient-to-r from-[#163523] to-[#111] px-4 py-4 sm:px-5" style={featured ? { borderLeft: `4px solid ${featured.accent}` } : undefined}>
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a8bcb0]">CURRENT CHECKOUT · {selectedChapter}</p>
        <h2 className="mt-1 font-mont text-xl font-black text-white sm:text-2xl">{featured?.title ?? "Still building"}<span className="text-[#39d353]">.</span></h2>
        <p className="mt-1 font-mono text-xs text-[#c7d5df]">{featured?.date ?? "PDEU CSE · 2023–present"}</p>
      </div>
      <div ref={outputRef} role="log" aria-label="Terminal output" aria-live="polite" className="min-h-0 flex-1 space-y-5 overflow-y-auto px-4 py-5 font-mono text-xs leading-relaxed sm:px-5 sm:text-[13px]">
        {entries.map((entry, index) => <TerminalOutput key={index} entry={entry} runCommand={runCommand} />)}
      </div>
      <div className="border-t border-white/15 bg-[#111] px-4 py-3 sm:px-5">
        <div className="mb-3 flex flex-wrap gap-1.5">{starterCommands.map((command) => <button key={command} type="button" onClick={() => runCommand(command)} className="rounded-full border border-white/25 px-2.5 py-1 font-mono text-[10px] font-bold text-[#c7d5df] transition-colors hover:border-[#39d353] hover:text-[#39d353]">{command}</button>)}</div>
        <form onSubmit={(event) => { event.preventDefault(); runCommand(input); }} className="flex items-center gap-2 rounded-lg border border-[#39d353]/60 bg-black/50 px-3 py-2 font-mono text-sm focus-within:border-[#39d353]"><span className="font-bold text-[#39d353]">$</span><label htmlFor="portfolio-command" className="sr-only">Portfolio command</label><input ref={inputRef} id="portfolio-command" value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={onTerminalKeyDown} autoComplete="off" spellCheck={false} placeholder="Try git log or help" className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-[#8da0af]" /><button type="submit" aria-label="Run command" className="rounded p-1 text-[#39d353] hover:bg-[#39d353]/15"><CornerDownLeft size={17} /></button></form>
        <p className="mt-2 font-mono text-[10px] text-[#8da0af]">TAB complete · ↑↓ history · ENTER run</p>
      </div>
    </div>
  );
}
