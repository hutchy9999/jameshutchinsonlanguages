import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const KeyPrinciples = () => {
  const results = [
    "Weekly accountability check-ins to keep you on track",
    "Personalized guidance on what to focus on next",
    "Curated content recommendations for your goals",
    "A community of serious learners for support",
    "Direct access to ask questions anytime",
    "Monthly group Q&A calls",
  ];
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">What you get as a member</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {results.map((result, index) => (
            <Card
              key={index}
              className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <CardContent className="p-4 sm:pt-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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
