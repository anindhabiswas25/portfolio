"use client";

import { useEffect, useState } from "react";
import { favourites, type Favourite } from "@/lib/data";
import { FilmIcon } from "./icons";

const movies = favourites.filter((f) => f.category === "movies");

function PosterCard({
  item,
  poster,
  failed,
}: {
  item: Favourite;
  poster?: string;
  failed?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-center border-dashed border-[#272727] dark:border-neutral-200 transition-all duration-300 pb-5 border-b md:border-none md:p-0 md:border-r md:pr-5 md:border-b md:pb-5">
      <div className="relative w-36 h-56 md:w-48 md:h-72 cursor-default select-none overflow-hidden rounded-sm border border-[#272727] dark:border-neutral-200 bg-neutral-900/40 dark:bg-neutral-50 group">
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-neutral-400 dark:text-neutral-500 bg-neutral-950/20 dark:bg-neutral-100/50">
            <FilmIcon className="size-8 mb-4 opacity-30 group-hover:scale-110 transition-transform duration-500" />
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              {item.title}
            </p>
            <p className="text-[10px] text-neutral-500 opacity-60 font-mono mt-1">
              {failed ? "Failed to load" : "Searching IMDb..."}
            </p>
          </div>
        )}
        {poster && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={poster}
            alt={item.title}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20 flex flex-col gap-0.5 pointer-events-none text-center items-center">
          <p className="text-white text-sm font-bold leading-tight line-clamp-2">
            {item.title}
          </p>
          <p className="text-neutral-300 text-[10px] font-medium opacity-85">
            {item.subtitle}
          </p>
          <p className="text-neutral-400 text-[9px] font-mono tracking-tight mt-1 line-clamp-2 px-1">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MoviesGallery() {
  const [posters, setPosters] = useState<Record<string, string>>({});
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    movies.forEach((item) => {
      fetch(`/api/imdb?q=${encodeURIComponent(item.title)}`)
        .then((res) => {
          if (!res.ok) throw new Error("IMDb API route error");
          return res.json();
        })
        .then((data) => {
          if (data.imageUrl) {
            setPosters((p) => ({ ...p, [item.title]: data.imageUrl }));
          } else {
            setFailed((f) => ({ ...f, [item.title]: true }));
          }
        })
        .catch(() => {
          setFailed((f) => ({ ...f, [item.title]: true }));
        });
    });
  }, []);

  return (
    <div className="relative w-full">
      <div className="absolute top-0 bottom-0 left-1/2 border-r border-dashed border-[#272727] dark:border-neutral-200 pointer-events-none md:hidden" />
      <div className="grid grid-cols-2 md:grid-cols-3 -mx-1 mt-1 gap-5">
        {movies.map((item) => (
          <PosterCard
            key={item.title}
            item={item}
            poster={posters[item.title]}
            failed={failed[item.title]}
          />
        ))}
      </div>
    </div>
  );
}
