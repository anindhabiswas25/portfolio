import { FullLine } from "./Divider";

const allMonths = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// deterministic pseudo-random fallback so server and client render identically
function seeded(i: number) {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

const levels = [
  "bg-neutral-800 dark:bg-neutral-200",
  "bg-emerald-900 dark:bg-emerald-200",
  "bg-emerald-700 dark:bg-emerald-400",
  "bg-emerald-500 dark:bg-emerald-500",
  "bg-emerald-400 dark:bg-emerald-600",
];

function levelFor(i: number) {
  const r = seeded(i);
  if (r < 0.45) return 0;
  if (r < 0.65) return 1;
  if (r < 0.8) return 2;
  if (r < 0.92) return 3;
  return 4;
}

// number of trailing weeks to show on mobile (~4 months)
const MOBILE_WEEKS = 17;

type ApiDay = { date: string; count: number; level: number };

// distinct month labels, in order, across a run of week-start month indices
function monthsFor(weekMonths: number[]): string[] {
  const out: string[] = [];
  let prev = -1;
  for (const m of weekMonths) {
    if (m !== prev) {
      out.push(allMonths[m]);
      prev = m;
    }
  }
  return out;
}

async function getContributions(): Promise<{
  weeks: number[][];
  weekMonths: number[];
  total: number;
  months: string[];
} | null> {
  try {
    const res = await fetch(
      "https://github-contributions-api.jogruber.de/v4/anindhabiswas25?y=last",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data: { total: { lastYear: number }; contributions: ApiDay[] } =
      await res.json();
    const days = data.contributions;
    if (!days?.length) return null;

    // pad so the first column starts on Sunday, like GitHub's graph
    const pad = new Date(days[0].date).getUTCDay();
    const cells: (number | null)[] = [
      ...Array.from({ length: pad }, () => null),
      ...days.map((d) => d.level),
    ];
    const weeks: number[][] = [];
    const weekMonths: number[] = [];
    for (let i = 0; i < cells.length; i += 7) {
      weeks.push(cells.slice(i, i + 7).map((l) => l ?? 0));
      const dayIndex = Math.max(0, i - pad);
      weekMonths.push(new Date(days[dayIndex].date).getUTCMonth());
    }

    const startMonth = new Date(days[0].date).getUTCMonth();
    const months = [
      ...allMonths.slice(startMonth),
      ...allMonths.slice(0, startMonth),
    ];

    return { weeks, weekMonths, total: data.total.lastYear, months };
  } catch {
    return null;
  }
}

function Legend({ total }: { total: number }) {
  return (
    <div className="flex justify-between items-center mt-2 px-1">
      <p className="text-[11px] text-neutral-500">
        {total} contributions in the last year
      </p>
      <div className="flex items-center gap-1 text-[11px] text-neutral-500">
        <span>Less</span>
        {levels.map((l, i) => (
          <div key={i} className={`w-[10px] h-[10px] rounded-[2px] ${l}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

function Grid({
  weeks,
  months,
  total,
  cell,
  gap,
}: {
  weeks: number[][];
  months: string[];
  total: number;
  cell: string;
  gap: string;
}) {
  return (
    <div className="w-fit max-w-full p-2 flex flex-col gap-2 shrink-0">
      <div className="flex justify-between px-1 text-[9px] md:text-[10px] text-neutral-500 select-none">
        {months.map((m, i) => (
          <span key={`${m}-${i}`}>{m}</span>
        ))}
      </div>
      <div className={`flex ${gap}`}>
        {weeks.map((week, w) => (
          <div key={w} className={`flex flex-col ${gap}`}>
            {week.map((level, d) => (
              <div key={d} className={`${cell} ${levels[level]}`} />
            ))}
          </div>
        ))}
      </div>
      <Legend total={total} />
    </div>
  );
}

export default async function GithubActivity() {
  const live = await getContributions();

  const weeks =
    live?.weeks ??
    Array.from({ length: 52 }, (_, w) =>
      Array.from({ length: 7 }, (_, d) => levelFor(w * 7 + d))
    );
  const weekMonths =
    live?.weekMonths ?? weeks.map((_, w) => Math.floor((w / 52) * 12) % 12);
  const total = live?.total ?? weeks.flat().filter((l) => l > 0).length * 3;
  const months = live?.months ?? allMonths;

  const mobileWeeks = weeks.slice(-MOBILE_WEEKS);
  const mobileMonths = monthsFor(weekMonths.slice(-MOBILE_WEEKS));

  return (
    <section className="w-full min-h-57 h-auto px-3">
      <div className="w-full h-12 flex items-center">
        <p className="font-serif-display text-3xl text-white dark:text-black">
          GitHub Activity
        </p>
      </div>
      <FullLine />
      <div className="mt-2 w-full flex justify-center">
        {/* mobile: last ~4 months, static, fits the screen */}
        <div className="md:hidden">
          <Grid
            weeks={mobileWeeks}
            months={mobileMonths}
            total={total}
            cell="w-[14px] h-[14px] rounded-[3px]"
            gap="gap-[3px]"
          />
        </div>
        {/* desktop: full year */}
        <div className="hidden md:block">
          <Grid
            weeks={weeks}
            months={months}
            total={total}
            cell="w-[11px] h-[11px] rounded-[2px]"
            gap="gap-[3px]"
          />
        </div>
      </div>
    </section>
  );
}
