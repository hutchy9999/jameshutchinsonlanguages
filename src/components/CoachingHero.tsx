import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import jamesPortrait from "@/assets/james-portrait.jpg";
import { Button } from "@/components/ui/button";

export const CoachingHero = () => (
  <div className="border-b border-border bg-gradient-hero px-4 sm:px-6">
    <div className="mx-auto max-w-6xl">
      <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-border py-3">
        <p className="text-sm font-bold sm:text-base">James Hutchinson</p>
        <a
          href="#resources"
          className="inline-flex min-h-10 items-center gap-1.5 rounded-sm text-sm text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Other resources <ArrowDown aria-hidden="true" className="h-4 w-4" />
        </a>
      </header>

      <section
        aria-labelledby="coaching-hero-heading"
        className="grid items-center gap-7 pb-8 pt-8 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-16 lg:pb-10 lg:pt-10"
      >
        <div>
          <p className="mb-3 text-sm font-semibold text-primary sm:text-base">Private language coaching</p>
          <h1 id="coaching-hero-heading" className="text-[2rem] leading-[1.1] sm:text-[2.5rem] lg:text-[3.25rem] xl:text-6xl">
            Moving abroad soon?
            <span className="block text-primary">Let's get you talking.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/90 sm:text-lg">
            We'll work out what to practise before you go, from calling a landlord to chatting with your new neighbours.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-6">
            <Button asChild size="lg" className="min-h-12 px-4 font-bold text-background sm:px-6">
              <Link to="/coaching">See how coaching works <ArrowRight aria-hidden="true" /></Link>
            </Button>
            <p className="text-sm font-medium text-muted-foreground">£39 for 60 minutes</p>
          </div>
        </div>

        <figure className="flex items-center gap-3 border-t border-border pt-4 md:block md:border-0 md:pt-0">
          <img
            src={jamesPortrait}
            alt="James Hutchinson"
            className="h-[4.5rem] w-[4.5rem] shrink-0 rounded-lg object-cover object-[50%_40%] md:aspect-[6/5] md:h-auto md:w-full md:rounded-2xl md:shadow-book"
          />
          <figcaption className="md:mt-3">
            <p className="font-semibold">Hi, I'm James.</p>
            <p className="mt-1 text-sm leading-snug text-muted-foreground">
              I've spent 13 years figuring out how we learn languages and what helps us feel ready to speak.
            </p>
          </figcaption>
        </figure>
      </section>
    </div>
  </div>
);
