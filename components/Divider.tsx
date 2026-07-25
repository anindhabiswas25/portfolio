/* Full-width dashed dividers rendered in the page flow (between sections
   and under section headings), so they always sit in the gaps and never
   overlap content. */
export function FullLine({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative left-1/2 -translate-x-1/2 w-screen border-t border-dashed border-[#272727] dark:border-neutral-200 ${className}`}
    />
  );
}

export function FullBand({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative left-1/2 -translate-x-1/2 w-screen h-5 bg-white/2 dark:bg-black/2 border-y border-dashed border-[#272727] dark:border-neutral-200 ${className}`}
    />
  );
}
