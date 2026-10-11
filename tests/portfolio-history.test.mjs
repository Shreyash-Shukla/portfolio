import assert from "node:assert/strict";
import test from "node:test";
import { chapters, comparisons, exams, parseTerminalCommand } from "../lib/portfolio-history.js";

test("the life log contains the agreed milestones in chronological order", () => {
  assert.deepEqual(chapters.map(({ id }) => id), [
    "school-2020", "crossroads-2023", "pdeu-2023", "breach-2025",
    "hacknuthon-2025", "gate-2026", "quicko-2026",
  ]);
});

test("exam results use the requested k AIR format", () => {
  assert.equal(exams.find(({ id }) => id === "class-10").label, "Class 10 · GSEB");
  assert.equal(exams.find(({ id }) => id === "class-12").label, "Class 12 · GSEB");
  assert.equal(exams.find(({ id }) => id === "jee-main").result, "96 percentile · 45k AIR");
  assert.equal(exams.find(({ id }) => id === "jee-advanced").result, "26k AIR");
  assert.equal(exams.find(({ id }) => id === "gate").result, "36/100 marks · 18k AIR");
});

test("parses chapters, exams, comparisons, and mode changes", () => {
  assert.deepEqual(parseTerminalCommand("  git  show Quicko-2026 "), { type: "show", id: "quicko-2026" });
  assert.deepEqual(parseTerminalCommand("git checkout main"), { type: "checkout", id: "main" });
  assert.deepEqual(parseTerminalCommand("git exam jee-main"), { type: "exam", id: "jee-main" });
  assert.deepEqual([comparisons.at(-1).from, comparisons.at(-1).to], ["hacknuthon-2025", "quicko-2026"]);
  assert.equal(parseTerminalCommand("git diff hacknuthon-2025..quicko-2026").type, "diff");
  assert.deepEqual(parseTerminalCommand("play"), { type: "play" });
  assert.deepEqual(parseTerminalCommand("git show unknown"), { type: "unknown-chapter", id: "unknown" });
});
