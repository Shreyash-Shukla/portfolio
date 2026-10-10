const USERNAME = "Shreyash-Shukla";
const PROFILE_URL = `https://api.github.com/users/${USERNAME}`;

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] ?? null;
}

export function parseCalendar(markup, year) {
  const days = new Map();
  // GitHub has served both SVG rectangles and HTML table cells for this calendar.
  const cells = markup.match(/<(?:td|rect)\b[^>]*\bdata-date="\d{4}-\d{2}-\d{2}"[^>]*>/g) ?? [];
  const tooltips = new Map(
    [...markup.matchAll(/<tool-tip\b[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)]
      .map((match) => [match[1], match[2]])
  );

  for (const cell of cells) {
    const date = attribute(cell, "data-date");
    if (!date?.startsWith(`${year}-`)) continue;
    const level = Number(attribute(cell, "data-level") ?? 0);
    const tooltip = tooltips.get(attribute(cell, "id")) ?? "";
    const countMatch = tooltip.match(/([\d,]+)\s+contributions?/i);
    const count = attribute(cell, "data-count");
    days.set(date, {
      date,
      level: Math.max(0, Math.min(4, Number.isFinite(level) ? level : 0)),
      count: count !== null ? Number(count) : /^No contributions/i.test(tooltip) ? 0 : countMatch ? Number(countMatch[1].replaceAll(",", "")) : null,
    });
  }

  const totalMatch = markup.match(/([\d,]+)\s+contributions?\s+in\s+\d{4}/i);
  return {
    days: [...days.values()].sort((a, b) => a.date.localeCompare(b.date)),
    total: totalMatch ? Number(totalMatch[1].replaceAll(",", "")) : null,
  };
}

export async function GET() {
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  const year = Number(today.slice(0, 4));
  const calendarUrl = `https://github.com/users/${USERNAME}/contributions?from=${year}-01-01&to=${year}-12-31`;

  const [profileResult, calendarResult] = await Promise.allSettled([
    fetch(PROFILE_URL, {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "shreyash-portfolio" },
      next: { revalidate: 7200 },
    }),
    fetch(calendarUrl, {
      headers: { Accept: "text/html", "User-Agent": "shreyash-portfolio" },
      next: { revalidate: 300 },
    }),
  ]);

  if (profileResult.status !== "fulfilled" || !profileResult.value.ok) {
    return Response.json({ error: "GitHub profile unavailable" }, { status: 503 });
  }

  const profile = await profileResult.value.json();
  let calendar = { days: [], total: null };
  if (calendarResult.status === "fulfilled" && calendarResult.value.ok) {
    calendar = parseCalendar(await calendarResult.value.text(), year);
  }

  return Response.json({
    profile: {
      name: profile.name || profile.login,
      login: profile.login,
      avatarUrl: profile.avatar_url,
      bio: profile.bio,
      company: profile.company,
      location: profile.location,
      publicRepos: profile.public_repos,
      followers: profile.followers,
      following: profile.following,
    },
    calendar,
    year,
    today,
  });
}
