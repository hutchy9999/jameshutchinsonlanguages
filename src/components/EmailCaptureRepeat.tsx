import { Button } from "@/components/ui/button";
export const EmailCaptureRepeat = () => {
  return <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-5xl space-y-8 sm:space-y-10">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Stop guessing what to study</h2>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-base sm:text-lg leading-relaxed">You should know exactly what to do when you sit down to learn.</p>
          </div>
        </div>
        <div className="text-center space-y-2">
          <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8" asChild>
            <a href="https://calendly.com/jameshutchinson92/free-20minutes" target="_blank" rel="noopener noreferrer">
              Join the waitlist
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">Limited spots. Starting April 2026.</p>
        </div>
      </div>
    </section>;
};
