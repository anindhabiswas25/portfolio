"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { FullLine } from "./Divider";
import { ContrastIcon } from "./icons";
import { playTone } from "@/lib/tone";

const avatars = ["/avatar.jpg", "/avatar2.jpg"];

function RotatingRoles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % profile.roles.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  const role = profile.roles[index];

  return (
    <span
      key={role}
      className="flex gap-0.25 overflow-hidden text-xs sm:text-lg font-semibold text-neutral-500 w-auto"
    >
      {role.split("").map((ch, i) => (
        <span
          key={i}
          className="letter-in"
          style={{ animationDelay: `${i * 30}ms` }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [dp, setDp] = useState(0);

  return (
    <section id="home">
      {/* banner */}
      <div className="w-full h-32 sm:h-52 overflow-hidden relative z-0 rounded-xs">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/banner.gif"
          alt="Banner"
          className="w-full h-full object-cover object-bottom rounded-xs"
        />
      </div>

      <FullLine className="mt-3" />

      {/* avatar + name row */}
      <div className="flex flex-row gap-3 sm:gap-7 items-center w-full h-auto sm:h-38 py-3 sm:py-0">
        <div className="relative ml-3 sm:ml-4 bg-neutral-700 dark:bg-neutral-200 overflow-hidden shrink-0 rounded-[12px] w-27 h-27 sm:w-30 sm:h-30">
          <div className="rounded-[12px] size-25 sm:size-28">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatars[dp]}
              alt={profile.name}
              className="absolute inset-0 m-auto w-25 h-25 sm:w-28 sm:h-28 rounded-lg shadow-sm object-cover"
            />
          </div>
        </div>

        <div className="flex flex-row justify-between w-full items-center gap-3 pr-3 sm:pr-0 min-w-0 flex-1">
          <div className="flex flex-col items-start text-left min-w-0 flex-1">
            <div
              onClick={() => {
                playTone();
                setDp((d) => (d + 1) % avatars.length);
              }}
              className="cursor-pointer mb-2 text-white dark:text-neutral-600"
            >
              <ContrastIcon
                className={`size-[1em] ${dp === 0 ? "rotate-180" : "rotate-0"}`}
              />
            </div>
            <p className="font-serif-display text-[23px] sm:text-4xl text-white dark:text-black leading-tight sm:leading-none sm:truncate max-w-full">
              {profile.name}
            </p>
            <div className="mt-1">
              <RotatingRoles />
            </div>
            <p className="text-[9px] sm:text-xs text-neutral-500 font-semibold mt-0.5 truncate max-w-full">
              {profile.location}
            </p>
          </div>

          <div className="flex shrink-0">
            <div className="h-30 w-auto pr-1 sm:pr-7 pt-2">
              <div className="flex gap-1 items-center text-neutral-600 dark:text-neutral-500 cursor-default overflow-hidden">
                <div className="relative h-4 sm:h-5 flex items-center justify-start min-w-[30px]">
                  <span className="font-mono text-xs sm:text-[13px] animate-pulse">
                    {profile.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
