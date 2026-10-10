import assert from "node:assert/strict";
import test from "node:test";
import { parseCalendar } from "../app/api/github/route.js";
import { calendarWeeks } from "../lib/github-calendar.js";

test("reads daily counts from GitHub's current table tooltips", () => {
  const markup = `
    <td data-date="2026-07-01" id="day-one" data-level="0"></td>
    <tool-tip for="day-one">No contributions on July 1st.</tool-tip>
    <td data-date="2026-07-02" id="day-two" data-level="2"></td>
    <tool-tip for="day-two">3 contributions on July 2nd.</tool-tip>
    <td data-date="2025-12-31" id="old-day" data-level="4"></td>
    101 contributions in 2026
  `;

  assert.deepEqual(parseCalendar(markup, 2026), {
    days: [
      { date: "2026-07-01", level: 0, count: 0 },
      { date: "2026-07-02", level: 2, count: 3 },
    ],
    total: 101,
  });
});

test("keeps SVG data-count support", () => {
  const markup = '<rect data-date="2026-10-10" data-level="4" data-count="12" />';
  assert.deepEqual(parseCalendar(markup, 2026).days, [
    { date: "2026-10-10", level: 4, count: 12 },
  ]);
});

test("includes yesterday and today and ends in the current week", () => {
  const weeks = calendarWeeks([
    { date: "2026-10-10", level: 1, count: 1 },
    { date: "2026-10-11", level: 2, count: 2 },
  ], 2026, "2026-10-11");
  const days = weeks.flat().filter(Boolean);
  assert.equal(days.at(-2).date, "2026-10-10");
  assert.equal(days.at(-1).date, "2026-10-11");
  assert.equal(days.at(-1).count, 2);
  assert.equal(weeks.at(-1).length, 7);
});
