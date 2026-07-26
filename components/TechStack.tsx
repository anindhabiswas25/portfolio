"use client";

import { useState } from "react";
import { techStack, type TechCategory } from "@/lib/data";
import { FullLine } from "./Divider";
import { playTone } from "@/lib/tone";

const filters = [
  "All",
  "Web3",
  "Chains",
  "Frontend",
  "Backend",
  "Design",
  "Tools",
] as const;

const notes = [
  261.63, 293.66, 329.63, 392, 440, 523.25, 587.33, 659.25, 783.99, 880,
  1046.5, 1174.66, 1318.51, 1567.98, 1760, 2093,
];

export default function TechStack() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible =
    active === "All"
      ? techStack
      : techStack.filter((t) => t.category === (active as TechCategory));

  return (
    <section className="w-full min-h-74 lg:min-h-60 md:min-h-48 mt-9 md:mt-9 lg:mt-5 px-3">
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 h-auto sm:h-12 pb-2 md:pb-0">
        <div className="flex flex-row items-baseline gap-2">
          <p className="font-serif-display text-3xl text-white dark:text-black">
            Tech Stack
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
            ( hover to play )
          </p>
        </div>
        <div className="sm:flex flex-wrap gap-1 hidden">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-2.5 py-1 text-xs font-semibold rounded-sm transition-all duration-200 cursor-pointer border ${
                active === f
                  ? "bg-white text-black dark:bg-black dark:text-white border-white dark:border-black"
                  : "bg-transparent text-neutral-400 dark:text-neutral-500 border-[#272727] dark:border-neutral-300 hover:text-white dark:hover:text-black"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <FullLine />

      <div className="flex flex-wrap gap-2 mt-4 w-full items-start pb-6 min-h-49 md:min-h-30 lg:min-h-44">
        <div className="flex flex-wrap gap-1 sm:gap-2 w-full items-start min-h-auto">
          {visible.map((tech, i) => (
            <a
              key={tech.name}
              className="group"
              href="#"
              onMouseEnter={() => {
                if (window.matchMedia("(hover: hover)").matches) {
                  playTone(notes[i % notes.length]);
                }
              }}
            >
              <div className="hover:text-white text-neutral-400 dark:text-neutral-600 hover:dark:text-black border border-[#272727] dark:border-neutral-300 rounded-md px-2.5 py-1.5 flex items-center gap-2 transition-all duration-200 hover:bg-white/2 dark:hover:bg-black/2 cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.icon ?? `https://cdn.simpleicons.org/${tech.slug}`}
                  alt=""
                  className="size-3.5 sm:size-4 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <p className="text-[11px] sm:text-sm">{tech.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
