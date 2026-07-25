import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PaperclipIcon,
  XIcon,
} from "./icons";
import { FullLine } from "./Divider";

const contacts = [
  { label: "GitHub", href: "https://github.com/anindhabiswas25", icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anindha-biswas-819138337",
    icon: LinkedInIcon,
  },
  { label: "Twitter", href: "https://x.com/AnindhaBiswas", icon: XIcon },
  { label: "Mail", href: "mailto:funnypost00@gmail.com", icon: MailIcon },
  { label: "Resume", href: "#", icon: PaperclipIcon },
];

export default function Contact() {
  return (
    <section className="w-full mt-1 gap-1 flex flex-col">
      <div className="w-full h-10 px-3 flex items-center">
        <p className="font-serif-display text-3xl text-white dark:text-black">
          Contact
        </p>
      </div>
      <FullLine />
      <div className="w-full h-16 grid grid-cols-5 gap-1">
        {contacts.map((c) => {
          const Icon = c.icon;
          return (
            <a key={c.label} href={c.href} className="w-full h-full">
              <div className="w-full h-full flex items-center justify-center md:justify-start md:px-3 gap-2 border-x border-dashed border-[#272727] dark:border-neutral-200 cursor-pointer hover:bg-white/2 dark:hover:bg-black/2 transition-all duration-200 group text-white dark:text-black">
                <div className="size-10 rounded-lg border-2 border-[#272727] dark:border-neutral-200 flex justify-center items-center bg-white/2 group-hover:bg-white/3 dark:bg-black/2 dark:group-hover:bg-black/3 shrink-0">
                  <Icon className="size-5" />
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <p className="text-md">{c.label}</p>
                  <ArrowUpRightIcon className="size-4 text-neutral-400 dark:text-neutral-500 group-hover:text-white dark:group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
