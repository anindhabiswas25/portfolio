import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import GithubActivity from "@/components/GithubActivity";
import Highlights from "@/components/Highlights";
import { Footer, Quote, ScrolledTooFar } from "@/components/Outro";
import { FullBand } from "@/components/Divider";
import Oneko from "@/components/Oneko";

export default function Home() {
  return (
    <div className="flex flex-col items-center relative min-h-screen w-full">
      {/* frame lines */}
      <div className="absolute border-t w-screen border-[#272727] dark:border-neutral-200 border-dashed left-0 top-12 z-10" />
      <div className="border-x border-dashed border-[#272727] dark:border-neutral-200 bg-transparent absolute z-10 top-0 bottom-0 w-full max-w-200 pointer-events-none" />

      <Navbar />
      <Oneko />

      <div className="bg-[#0F0E0E] dark:bg-white w-full min-h-screen flex justify-center relative">
        <div className="w-full max-w-200 border-x border-[#272727] dark:border-neutral-200 border-dashed px-4 sm:px-6 md:px-2 py-3 min-h-screen flex flex-col gap-2 mt-10 z-20">
          <Hero />
          <FullBand />
          <About />
          <FullBand />
          <Contact />
          <FullBand />
          <Projects />
          <FullBand className="mt-2" />
          <TechStack />
          <FullBand />
          <GithubActivity />
          <FullBand className="mt-2" />
          <Highlights />
          <FullBand className="mt-4" />
          <ScrolledTooFar />
          <FullBand />
          <Quote />
          <Footer />
        </div>
      </div>
    </div>
  );
}
