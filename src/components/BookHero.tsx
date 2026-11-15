import jamesPortrait from "@/assets/james-portrait.jpg";

export const BookHero = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero px-3 sm:px-6 py-12 sm:py-20 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 max-w-4xl">
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] xl:text-[4.75rem] font-black leading-[1.15] text-foreground">
            Hi, I'm <span className="text-primary">James.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto lg:mx-0">
              <img src={jamesPortrait} alt="James Hutchinson" className="w-full aspect-square object-cover shadow-book rounded-lg" />
              <div className="absolute inset-0 bg-primary/10 rounded-lg blur-3xl -z-10 transform scale-110"></div>
            </div>
          </div>

          <div className="text-center lg:text-left space-y-5 sm:space-y-6">
            <p className="text-lg sm:text-xl font-medium leading-relaxed">
              I have spent the last 13 years understanding how our brains best learn languages. I'm now sharing what I've learned with anyone who wants to connect with people around the world.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
              I can help you cut through the noise and focus on what actually moves the needle - through a book, a conversation platform, and a free email course.
            </p>
          </div>
        </div>
      </div>
    </section>;
};