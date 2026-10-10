export function calendarWeeks(days, year, today) {
  const byDate = new Map(days.map((day) => [day.date, day]));
  const first = new Date(Date.UTC(year, 0, 1));
  first.setUTCDate(first.getUTCDate() - first.getUTCDay());

  const lastDate = today.startsWith(`${year}-`) ? today : `${year}-12-31`;
  const last = new Date(`${lastDate}T00:00:00Z`);
  last.setUTCDate(last.getUTCDate() + 6 - last.getUTCDay());
  const weeks = [];

  for (let date = new Date(first); date <= last; date.setUTCDate(date.getUTCDate() + 7)) {
    const week = [];
    for (let row = 0; row < 7; row++) {
      const current = new Date(date);
      current.setUTCDate(current.getUTCDate() + row);
      const key = current.toISOString().slice(0, 10);
      week.push(current.getUTCFullYear() === year && key <= today
        ? (byDate.get(key) ?? { date: key, level: 0, count: 0 })
        : null);
    }
    weeks.push(week);
  }

  return weeks;
}
