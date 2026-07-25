"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from "./icons";
import { profile } from "@/lib/data";
import { playTone } from "@/lib/tone";

function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setLight(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    playTone();
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <div className="text-white dark:text-neutral-500 flex cursor-pointer hover:bg-neutral-900 active:scale-98 dark:hover:bg-neutral-100 rounded-md justify-center items-center transition-all duration-200">
      <button
        onClick={toggle}
        aria-label="Toggle theme"
        className="cursor-pointer h-9 w-9 flex justify-center items-center rounded-md"
      >
        {light ? <SunIcon className="size-4.5" /> : <MoonIcon className="size-4.5" />}
      </button>
    </div>
  );
}

const links = [
  { id: "home", label: "Home", href: "/" },
  { id: "projects", label: "Projects", href: "/#projects" },
];

const moreLinks = [
  { label: "Books", href: "/books" },
  { label: "Movies", href: "/movies" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      const insideToggle = mobileRef.current?.contains(target);
      const insideMenu = menuRef.current?.contains(target);
      if (!insideToggle && !insideMenu) setMobileOpen(false);
    }
    if (mobileOpen) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [mobileOpen]);

  const active = pathname === "/" ? "home" : "more";
  const dot = hovered || active;

  return (
    <div className="flex flex-col items-center z-50">
      <div className="w-full flex justify-center items-center fixed top-0 left-0 right-0 z-50 bg-[#0F0E0E] dark:bg-white backdrop-blur-md border-b border-dashed border-[#272727] dark:border-neutral-200">
        <div className="h-12 items-center flex px-3 justify-between w-full max-w-200 pt-1 border-x border-dashed border-[#272727] dark:border-neutral-200 pb-1 relative">
          <div>
            <Link href="/">
              <p
                id="nav-logo"
                className="font-serif-display cursor-pointer text-3xl text-white dark:text-black"
              >
                {profile.logo}
              </p>
            </Link>
          </div>

          {/* desktop nav */}
          <div className="hidden md:flex gap-5 items-center">
            <div className="flex gap-5 items-center text-neutral-400 text-sm">
              {links.map((link) => {
                const isDot = dot === link.id;
                const isActive = active === link.id;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onMouseEnter={() => setHovered(link.id)}
                    onMouseLeave={() => setHovered(null)}
                    className={`relative py-1 cursor-pointer transition-colors duration-200 select-none ${
                      isActive
                        ? "text-white dark:text-black font-semibold"
                        : "text-neutral-400 dark:text-neutral-500 hover:text-white dark:hover:text-black"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isDot && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-1 rounded-full bg-white dark:bg-black"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                  </Link>
                );
              })}

              {/* More dropdown */}
              <div
                onMouseEnter={() => {
                  setHovered("more");
                  setMoreOpen(true);
                }}
                onMouseLeave={() => {
                  setHovered(null);
                  setMoreOpen(false);
                }}
                className="relative flex items-center gap-1.5 py-1 cursor-pointer"
              >
                <span
                  className={`relative transition-colors duration-200 select-none ${
                    active === "more" || moreOpen
                      ? "text-white dark:text-black"
                      : "text-neutral-400 dark:text-neutral-500 hover:text-white dark:hover:text-black"
                  }`}
                >
                  More
                  {dot === "more" && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 size-1 rounded-full bg-white dark:bg-black"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                </span>
                <ChevronDownIcon
                  className={`size-3.5 text-neutral-500 transition-transform duration-200 ${
                    moreOpen ? "rotate-180 text-white dark:text-black" : "rotate-0"
                  }`}
                />
                {moreOpen && (
                  <div className="absolute top-[80%] -right-10 pt-3 z-50">
                    <div className="w-32 bg-[#121212] dark:bg-neutral-50 border border-[#272727] dark:border-neutral-200 rounded-lg p-1.5 flex flex-col gap-0.5 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)]">
                      {moreLinks.map((m) => (
                        <Link
                          key={m.label}
                          href={m.href}
                          className="text-[13px] font-mono tracking-tight text-neutral-400 dark:text-neutral-500 hover:text-white dark:hover:text-black py-1.5 px-2.5 rounded-md hover:bg-white/5 dark:hover:bg-neutral-200 transition-all duration-150"
                        >
                          {m.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <ThemeToggle />
          </div>

          {/* mobile nav */}
          <div ref={mobileRef} className="flex md:hidden items-center gap-1.5 relative">
            <ThemeToggle />
            <div className="h-5 w-[1px] bg-neutral-800 dark:bg-neutral-300 mx-1" />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              className="text-white dark:text-black focus:outline-none p-1 rounded-md hover:bg-white/5 dark:hover:bg-black/5 cursor-pointer"
            >
              {mobileOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>

          {mobileOpen && (
            <div
              ref={menuRef}
              className="absolute top-12 right-0 left-0 md:hidden bg-[#0F0E0E] dark:bg-white border-b border-dashed border-[#272727] dark:border-neutral-200 flex flex-col px-4 py-3 gap-2"
            >
              {[...links, ...moreLinks.map((m) => ({ id: m.label, label: m.label, href: m.href }))].map(
                (link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-1.5 text-sm text-neutral-300 dark:text-neutral-600"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
