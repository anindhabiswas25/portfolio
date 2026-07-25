import Link from "next/link";
import Navbar from "@/components/Navbar";
import MoviesGallery from "@/components/MoviesGallery";
import { ArrowLeftIcon } from "@/components/icons";

export const metadata = {
  title: "Movies | Anindha Biswas",
};

export default function MoviesPage() {
  return (
    <div className="flex flex-col items-center relative min-h-screen w-full">
      {/* frame lines */}
      <div className="absolute border-t w-screen border-[#272727] dark:border-neutral-200 border-dashed left-0 top-12 z-10" />
      <div className="border-x border-dashed border-[#272727] dark:border-neutral-200 bg-transparent absolute z-10 top-0 bottom-0 w-full max-w-200 pointer-events-none" />

      <Navbar />

      <div className="w-screen min-h-screen flex items-center flex-col relative bg-[#0F0E0E] dark:bg-white">
        <div className="block border-y h-5 bg-white/2 dark:bg-black/2 border-[#272727] dark:border-neutral-200 border-dashed w-screen absolute top-28 left-0" />

        <div className="w-full max-w-200 px-4 md:px-6 pt-18 pb-18 min-h-screen flex flex-col justify-start z-20">
          <div className="flex items-center justify-between w-full mb-8">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white dark:hover:text-black transition-colors font-mono tracking-wider uppercase"
            >
              <ArrowLeftIcon className="size-3.5" /> Home
            </Link>
          </div>

          <div className="w-full flex flex-col mb-8 mt-7">
            <div className="gap-1 flex flex-col">
              <h1 className="font-serif-display text-4xl md:text-5xl text-white dark:text-black tracking-tight">
                Movies
              </h1>
              <p className="text-neutral-500 text-sm">
                A curated archive of my favourite movies.
              </p>
            </div>
          </div>

          <MoviesGallery />
        </div>
      </div>
    </div>
  );
}
