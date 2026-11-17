import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trackCoaching } from "@/lib/coachingAnalytics";

export const CoachingFeature = () => (
  <section
    aria-labelledby="coaching-feature-heading"
    className="grid items-center gap-5 rounded-2xl border border-primary/40 bg-gradient-hero p-5 shadow-book sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-8 lg:p-8"
  >
    <div>
      <p className="mb-2 text-sm font-semibold text-primary sm:text-base">Private language coaching</p>
      <h3 id="coaching-feature-heading" className="text-3xl leading-tight sm:text-4xl">
        Moving abroad soon? <span className="block text-primary sm:inline">Let's get you talking.</span>
      </h3>
      <p className="mt-3 max-w-xl leading-relaxed text-foreground/90 sm:text-lg">
        We'll work out what to practise before you go, from calling a landlord to chatting with your new neighbours.
      </p>
    </div>
    <div>
      <Button asChild size="lg" className="h-auto min-h-12 w-full whitespace-normal px-4 py-3 font-bold text-background sm:w-auto sm:px-6">
        <Link to="/coaching" onClick={() => trackCoaching("home_coaching_click")}>See how coaching works <ArrowRight aria-hidden="true" /></Link>
      </Button>
    </div>
  </section>
);
