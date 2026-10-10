"use client";

const COLORS = ["#2b2b2b", "#0e4429", "#006d32", "#26a641", "#39d353"];

export default function ContributionGraph({ weeks, total, year }) {
  return (
    <>
      <div className="overflow-x-auto pb-3">
        <div
          role="img"
          aria-label={`${total ?? "GitHub"} contributions in ${year}, shown by day through today`}
          className="flex w-max gap-[3px] sm:gap-1"
        >
          {weeks.map((week, index) => (
            <div key={index} className="flex flex-col gap-[3px] sm:gap-1">
              {week.map((day, row) => (
                <span
                  key={day?.date ?? row}
                  aria-hidden="true"
                  className="h-[11px] w-[11px] rounded-full sm:h-[13px] sm:w-[13px]"
                  style={day ? { backgroundColor: COLORS[day.level] } : undefined}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-end gap-2 font-mono text-xs text-[#9eb4ca] sm:text-sm">
        <span>Less</span>
        {COLORS.map((color) => <span key={color} className="h-3 w-3 rounded-full sm:h-4 sm:w-4" style={{ backgroundColor: color }} />)}
        <span>More</span>
      </div>
    </>
  );
}
