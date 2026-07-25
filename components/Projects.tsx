import { projects, type Project } from "@/lib/data";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";
import { FullLine } from "./Divider";

const cardBorders = [
  "border-b border-dashed md:border-r",
  "border-b border-dashed md:border-l",
  "border-b border-dashed md:border-b-0 md:border-t md:border-r",
  "md:border-t md:border-l border-dashed",
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className={`w-full h-auto min-h-110 ${cardBorders[index % 4]} border-[#272727] dark:border-neutral-200 flex p-3 flex-col justify-start`}
    >
      <a href={project.href}>
        <div
          className={`w-full -mr-3 h-58 rounded-md bg-neutral-900 dark:bg-neutral-200 cursor-pointer overflow-hidden relative group ${project.gradient}`}
        >
          {index === 0 && project.badge && (
            <div className="absolute -right-20 top-8 rotate-45 overflow-hidden h-10 z-1">
              <p className="text-black font-semibold tracking-tight text-xs mt-3 mb-2 bg-amber-300 py-1 px-20 border border-amber-400 shadow">
                {project.badge}
              </p>
            </div>
          )}
          <div className="border-5 border-white/20 absolute rounded-xl -right-13 -bottom-5 group-hover:-right-10 group-hover:-bottom-3 transition-all duration-500">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              width={340}
              height={220}
              className="rounded-lg"
            />
          </div>
        </div>
      </a>

      <div className="flex flex-col w-full mt-3">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-white dark:text-black text-md font-semibold text-xl">
              {project.title}
            </p>
            <p className="text-neutral-400 text-xs dark:text-neutral-500">
              {project.tagline}
            </p>
          </div>
          {project.live && (
            <div className="flex items-center justify-center">
              <p className="text-neutral-500 text-sm font-semibold text-center flex justify-center items-center gap-1.5">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Live
              </p>
            </div>
          )}
        </div>
        <div>
          <p className="text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm mt-3 mb-2">
            {project.description}
          </p>
        </div>
        <div className="min-h-13 h-auto py-2 w-full grid grid-cols-[1fr_auto] items-center">
          <div className="flex flex-wrap gap-1.5 items-center py-1">
            {project.tags.map((tag) => (
              <p
                key={tag}
                className="text-[11px] sm:text-xs px-2 py-1 border-dotted bg-white/2 dark:bg-black/2 border-[#272727] dark:border-neutral-300 border rounded-sm text-neutral-400 dark:text-neutral-600"
              >
                {tag}
              </p>
            ))}
          </div>
          <div className="flex justify-end items-center gap-1">
            <a href={project.github}>
              <div className="rounded-md size-10 flex cursor-pointer justify-center items-center hover:bg-white/4 dark:hover:bg-black/4 transition-all duration-200 text-neutral-400 dark:text-neutral-500">
                <GitHubIcon className="size-4.5" />
              </div>
            </a>
            <a href={project.href}>
              <div className="rounded-md size-10 flex cursor-pointer justify-center items-center hover:bg-white/4 dark:hover:bg-black/4 transition-all duration-200 text-neutral-400 dark:text-neutral-500">
                <ArrowUpRightIcon className="size-4.5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full min-h-130 mt-4">
      <div className="flex px-3 items-center w-full h-10 justify-between">
        <p className="font-serif-display text-3xl text-white dark:text-black">
          Projects
        </p>
        <a href="#">
          <div className="flex gap-1 items-center group cursor-pointer px-2 py-1">
            <p className="text-sm text-neutral-500 dark:text-black group-hover:text-white transition-all duration-200 dark:group-hover:text-neutral-600">
              View all
            </p>
            <ArrowUpRightIcon className="size-3.5 text-neutral-500 dark:text-black group-hover:text-white dark:group-hover:text-neutral-600 transition-all duration-200" />
          </div>
        </a>
      </div>

      <FullLine />

      <div className="grid grid-cols-1 md:grid-cols-2 -mx-1 mt-1 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
