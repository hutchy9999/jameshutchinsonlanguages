import { Button } from "@/components/ui/button";

export const WhyThisBook = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center">Who can I help the most?</h2>

          <div className="bg-card/50 border border-border rounded-2xl p-5 sm:p-8 md:p-12 space-y-5 sm:space-y-6">
            <p className="text-base sm:text-lg leading-relaxed">This community is for learners who are past beginner but not yet comfortable speaking.</p>
            <p className="text-base sm:text-lg leading-relaxed">
              You know words.{" "}
              You understand some content.{" "}
              But you hesitate in real conversations.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              You do not need more information. You need direction AND accountability to stay consistent.
            </p>
          </div>
          <div className="text-center mt-6 sm:mt-8 space-y-2">
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8" asChild>
              <a href="https://calendly.com/jameshutchinson92/free-20minutes" target="_blank" rel="noopener noreferrer">
                Join the waitlist
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">Early members get founding rate (£29/month instead of £49).</p>
          </div>
        </div>
      </div>
    </section>);

};
