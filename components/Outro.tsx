import { profile, quote } from "@/lib/data";
import { FullLine } from "./Divider";

export function ScrolledTooFar() {
  return (
    <section className="w-full min-h-69 h-auto px-3 mt-6 flex flex-col gap-2">
      <div className="w-full h-11 flex items-center">
        <p className="font-serif-display text-3xl text-white dark:text-black">
          Scrolled Too Far
        </p>
      </div>
      <FullLine />
      <div className="flex w-full h-53 lg:h-60 lg:mt-0 -mt-1 items-center justify-center gap-4 flex-col">
        <p className="text-[21px] text-center tracking-tight text-neutral-400 dark:text-neutral-600">
          Since you&apos;ve made it this far, you might want to see what
          I&apos;ve been building.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="group relative overflow-hidden flex items-center justify-center gap-2 cursor-pointer w-48 h-11 bg-white dark:bg-black text-black dark:text-white rounded-md font-semibold text-sm"
        >
          <div className="absolute inset-0 w-[60%] h-full bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent animate-shimmer" />
          Let&apos;s Talk
        </a>
      </div>
    </section>
  );
}

export function Quote() {
  return (
    <section className="w-full min-h-55 px-3 -mt-2 lg:mt-4 md:mt-10 flex justify-center">
      <div className="w-full rounded-lg px-6 flex flex-col items-center justify-center gap-3 relative">
        <p className="text-[20px] md:text-[30px] text-center italic font-normal tracking-wide leading-snug text-neutral-300 dark:text-neutral-700">
          {quote.text}
        </p>
        <div className="flex flex-wrap items-center gap-3 w-full justify-center mt-2">
          <div className="h-[1px] w-8 bg-neutral-800 dark:bg-neutral-300" />
          <p className="text-sm text-neutral-500 text-center">{quote.author}</p>
          <div className="h-[1px] w-8 bg-neutral-800 dark:bg-neutral-300" />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="w-full">
      <div className="w-screen -mx-4 opacity-100 sm:opacity-0 h-5 bg-white/2 dark:bg-black/2 border-y border-dashed border-[#272727] dark:border-neutral-200" />
      <div className="w-full h-30 -mt-4 flex items-center justify-center flex-col gap-2 -mb-3">
        <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">
          Built by{" "}
          <span className="text-neutral-300 dark:text-neutral-600 font-semibold">
            {profile.name}
          </span>
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">
          © 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
