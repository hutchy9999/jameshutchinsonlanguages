import { useState } from "react";
const VIDEO_URL = "https://dgyrcyyjcfpboeqfsowe.supabase.co/storage/v1/object/public/videos/Overcome%20your%20speaking%20struggles.mp4";
export const VideoSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  return <section className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-8 sm:mb-12">You want to learn a language, but life keeps getting in the way</h2>
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-muted/20">
          {isLoading && <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>}
          
        </div>
        
        <ul className="mt-8 sm:mt-10 space-y-3 text-lg sm:text-xl text-foreground/90">
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">✓</span>
            <span>Learn how to fit practice into your busiest days</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">✓</span>
            <span>Make real progress in just 10-15 minutes a day</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">✓</span>
            <span>Stop feeling guilty about not having enough time</span>
          </li>
        </ul>
      </div>
    </section>;
};