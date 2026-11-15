import { Button } from "@/components/ui/button";
export const WhatsInside = () => {
  const symptoms = [
    "You study but never feel closer to speaking",
    "You switch between apps videos and courses",
    "You never know what to do when you sit down to learn",
    "Some days you revise grammar other days vocabulary and it feels random",
    "You understand more than you can say",
    "You feel busy but not progressing",
  ];
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Does this feel familiar?</h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {symptoms.map((symptom, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg mt-0.5">•</span>
              <p className="text-base sm:text-lg leading-relaxed">{symptom}</p>
            </div>
          ))}
          <p className="text-base sm:text-lg text-muted-foreground pt-4">
            The problem is usually not effort. It is doing the wrong activity for your stage.
          </p>
        </div>

        <div className="text-center mt-10 sm:mt-12 space-y-2">
          <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8" asChild>
            <a href="https://calendly.com/jameshutchinson92/free-20minutes" target="_blank" rel="noopener noreferrer">
              Join the waitlist
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">Limited spots. Starting April 2026.</p>
        </div>
      </div>
    </section>
  );
};
