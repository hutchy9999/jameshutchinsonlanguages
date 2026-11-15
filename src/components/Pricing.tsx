import { Button } from "@/components/ui/button";
export const Pricing = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">Join the Community</h2>
          
          <p className="text-center text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Weekly guidance, accountability, and a group of serious learners to keep you progressing.
          </p>

          <div className="bg-card border border-border rounded-2xl p-5 sm:p-8 md:p-12 space-y-5 sm:space-y-6">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <p className="text-lg sm:text-xl text-muted-foreground line-through">£49/month</p>
                <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
                  £29/month
                </p>
                <p className="text-lg sm:text-xl text-muted-foreground">founding member rate</p>
              </div>

              <div className="pt-6 space-y-3 text-base leading-relaxed">
                <p className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span> Weekly accountability check-ins
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span> Personalized guidance on what to focus on
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span> Curated content recommendations
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span> Direct access to ask questions anytime
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span> Monthly group Q&A calls
                </p>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 flex flex-col items-center gap-6">
              <div className="space-y-2 text-center">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8" asChild>
                  <a href="https://calendly.com/jameshutchinson92/free-20minutes" target="_blank" rel="noopener noreferrer">
                    Join the waitlist
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">Limited spots. Starting April 2026.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
