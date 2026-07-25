"use client";

import { useEffect, useRef, useState } from "react";
import { highlights } from "@/lib/data";
import { VerifiedIcon, XIcon } from "./icons";
import { FullLine } from "./Divider";

export default function Highlights() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ startX: 0, scrollLeft: 0 });
  const paused = useRef(false);
  const hovering = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pause = () => {
    paused.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };

  const scheduleResume = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      paused.current = false;
    }, 1500);
  };

  /* infinite marquee: the list is rendered 3 times, scroll starts at the
     middle copy and drifts right, wrapping seamlessly (same as reference) */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    const third = () => el.scrollWidth / 3;
    el.scrollLeft = third();

    const step = () => {
      if (!paused.current && !hovering.current) {
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= 2 * third()) el.scrollLeft -= third();
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const onScroll = () => {
      const d = third();
      if (el.scrollLeft >= 2 * d) el.scrollLeft -= d;
      else if (el.scrollLeft <= d - el.clientWidth) el.scrollLeft += d;
    };
    el.addEventListener("scroll", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setDragging(true);
    pause();
    drag.current = { startX: e.clientX, scrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging || !scrollRef.current) return;
    scrollRef.current.scrollLeft =
      drag.current.scrollLeft - (e.clientX - drag.current.startX) * 1.5;
  };

  const endDrag = () => {
    if (!dragging) return;
    setDragging(false);
    scheduleResume();
  };

  return (
    <section className="w-full flex flex-col gap-4 mt-2">
      <div className="w-full h-10 px-3 flex items-center">
        <p className="font-serif-display text-3xl text-white dark:text-black">
          Highlights
        </p>
      </div>
      <FullLine />
      <div
        className="w-full relative overflow-hidden py-4"
        onMouseEnter={() => (hovering.current = true)}
        onMouseLeave={() => (hovering.current = false)}
      >
        <div
          ref={scrollRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className="flex gap-4 w-full overflow-x-auto scrollbar-hide px-4 cursor-grab active:cursor-grabbing select-none [will-change:scroll-position] [transform:translateZ(0)]"
        >
          {[...highlights, ...highlights, ...highlights].map((h, i) => (
            <a
              key={`${h.handle}-${i}`}
              href={h.href}
              target="_blank"
              rel="noopener noreferrer"
              draggable={false}
              className="w-[280px] flex-shrink-0 flex flex-col p-3.5 bg-neutral-900/40 dark:bg-neutral-50/40 border border-[#272727] dark:border-neutral-200 rounded-xl hover:bg-neutral-900/70 dark:hover:bg-neutral-100/70 transition-colors duration-200"
            >
              <div className="flex justify-between items-start w-full">
                <div className="flex gap-2 items-center min-w-0 flex-1">
                  <div className="relative size-8 overflow-hidden rounded-full border border-neutral-800 dark:border-neutral-200 flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={h.avatar}
                      alt={h.name}
                      className="object-cover w-full h-full"
                      draggable={false}
                    />
                  </div>
                  <div className="flex flex-col leading-tight min-w-0">
                    <div className="flex items-center gap-0.5 min-w-0">
                      <p className="text-xs font-semibold text-white dark:text-black truncate">
                        {h.name}
                      </p>
                      {h.verified && <VerifiedIcon className="size-3.5 shrink-0" />}
                    </div>
                    <p className="text-[11px] text-neutral-500 truncate">
                      @{h.handle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                  <XIcon className="size-3.5 text-neutral-500" />
                </div>
              </div>
              <p className="text-xs mt-2.5 text-neutral-300 dark:text-neutral-700 leading-normal font-normal">
                {h.text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
