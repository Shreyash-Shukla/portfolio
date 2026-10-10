import assert from "node:assert/strict";
import test from "node:test";
import { parseCalendar } from "../app/api/github/route.js";

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
