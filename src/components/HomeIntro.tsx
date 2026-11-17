import { ArrowDown } from "lucide-react";
import jamesCloseUp from "@/assets/james-close-up.jpg";

export const HomeIntro = () => (
  <div className="border-b border-border bg-gradient-hero px-4 sm:px-6">
    <div className="mx-auto max-w-6xl">
      <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-border py-3">
        <p className="text-sm font-bold sm:text-base">James Hutchinson</p>
        <a
          href="#resources"
          className="inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          How I can help <ArrowDown aria-hidden="true" className="h-4 w-4" />
        </a>
      </header>

      <section
        aria-labelledby="intro-heading"
        className="grid grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 gap-y-3 py-7 sm:grid-cols-[minmax(0,1fr)_7rem] md:grid-cols-[minmax(0,1fr)_10rem] md:gap-x-10 md:py-9"
      >
        <h1 id="intro-heading" className="text-4xl leading-tight md:self-end md:text-5xl">
          Hi, I'm <span className="text-primary">James.</span>
        </h1>
        <img
          src={jamesCloseUp}
          alt="James Hutchinson"
          width={500}
          height={500}
          className="col-start-2 row-start-1 aspect-square w-full rounded-xl object-cover shadow-book md:row-span-2 md:rounded-2xl"
        />
        <p className="col-span-2 max-w-2xl text-lg leading-relaxed text-foreground/90 md:col-span-1 md:self-start">
          I've spent 13 years learning Spanish and Italian and working out what helps me speak with more confidence. I share what I've learnt through coaching, Voco and my book.
        </p>
      </section>
    </div>
  </div>
);
