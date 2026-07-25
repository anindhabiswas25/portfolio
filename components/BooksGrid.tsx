"use client";

import { books } from "@/lib/data";

function openSearch(query: string) {
  window.open(
    `https://www.google.com/search?q=${encodeURIComponent(query)}`,
    "_blank"
  );
}

export default function BooksGrid() {
  return (
    <div className="relative w-full">
      {/* center divider on mobile 2-col layout */}
      <div className="absolute top-0 bottom-0 left-1/2 border-r border-dashed border-[#272727] dark:border-neutral-200 pointer-events-none md:hidden" />
      <div className="grid grid-cols-2 md:grid-cols-3 -mx-1 mt-1 gap-5">
        {books.map((book) => (
          <div
            key={book.title}
            className="w-full flex flex-col items-center justify-center border-dashed border-[#272727] dark:border-neutral-200 transition-all duration-300 pb-5 border-b md:border-none md:p-0 md:border-r md:pr-5 md:border-b md:pb-5"
          >
            <div
              onClick={() => openSearch(book.query)}
              className="relative w-36 h-56 md:w-48 md:h-72 cursor-pointer select-none [perspective:1000px] group"
            >
              <div className="relative w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(-12deg)] transition-transform duration-500 ease-out">
                {/* page stack behind the cover */}
                <div className="absolute inset-y-1.5 right-1 w-[90%] bg-neutral-200 border-y border-r border-neutral-300 rounded-r-xs shadow-sm pointer-events-none origin-left [transform:translateZ(2px)] group-hover:[transform:rotateY(-6deg)_translateZ(2px)_translateX(4px)] transition-transform duration-500 ease-out group-hover:delay-50" />
                <div className="absolute inset-y-1.5 right-1.5 w-[89%] bg-neutral-100 border-y border-r border-neutral-300 rounded-r-xs shadow-sm pointer-events-none origin-left [transform:translateZ(4px)] group-hover:[transform:rotateY(-12deg)_translateZ(4px)_translateX(8px)] transition-transform duration-500 ease-out group-hover:delay-75" />
                <div className="absolute inset-y-1.5 right-2 w-[88%] bg-[#F5F5F5] border-y border-r border-neutral-300 rounded-r-xs shadow-md pointer-events-none origin-left [transform:translateZ(6px)] group-hover:[transform:rotateY(-18deg)_translateZ(6px)_translateX(12px)] transition-transform duration-500 ease-out group-hover:delay-100 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-y-0 right-1 w-[1px] bg-neutral-200" />
                  <div className="absolute inset-y-0 right-2 w-[1px] bg-neutral-200" />
                  <div className="flex flex-col gap-1 w-2/3 opacity-30 scale-75">
                    <div className="h-1 bg-neutral-400 rounded-xs w-full" />
                    <div className="h-1 bg-neutral-400 rounded-xs w-5/6" />
                    <div className="h-1 bg-neutral-400 rounded-xs w-4/5" />
                    <div className="h-1 bg-neutral-400 rounded-xs w-11/12" />
                  </div>
                </div>

                {/* front cover */}
                <div className="absolute inset-0 w-full h-full rounded-sm overflow-hidden origin-left [transform:translateZ(8px)] group-hover:[transform:rotateY(-30deg)_translateZ(8px)] transition-transform duration-500 ease-out shadow-[0_8px_24px_rgba(0,0,0,0.35)] bg-[#F5F5F5] dark:bg-[#1C1C1C] text-neutral-950 dark:text-white flex flex-col justify-center items-center p-6">
                  <div className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/35 via-black/5 to-transparent pointer-events-none z-15" />
                  <div className="absolute inset-y-0 left-2 w-[1px] bg-white/10 dark:bg-white/5 pointer-events-none z-15" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={book.cover}
                    alt={book.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover z-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20 flex flex-col gap-0.5 pointer-events-none text-center items-center">
                    <p className="font-serif-display text-white text-sm font-bold leading-tight line-clamp-2">
                      {book.title}
                    </p>
                    <p className="text-neutral-300 text-[9px] uppercase font-mono tracking-widest">
                      {book.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
