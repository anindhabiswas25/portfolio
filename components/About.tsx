import { aboutLines } from "@/lib/data";
import { FullLine } from "./Divider";

export default function About() {
  return (
    <section>
      <div className="w-full h-10 mt-5 flex items-center px-3">
        <p className="font-serif-display text-3xl text-white dark:text-black">
          About
        </p>
      </div>
      <FullLine />
      <ul className="w-full py-4 px-3 sm:px-6 flex flex-col justify-center text-white dark:text-black gap-5 text-sm sm:text-[16px] leading-relaxed">
        {aboutLines.map((line, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-neutral-500 select-none mt-[1px]">•</span>
            <p>
              {line.pre}
              {line.highlight && (
                <span className="font-bold underline underline-offset-3">
                  {line.highlight}
                </span>
              )}
              {line.post}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
