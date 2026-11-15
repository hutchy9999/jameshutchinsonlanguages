import bookCover from "@/assets/book-cover-hero.png";

const BOOK_URL = "https://www.amazon.co.uk/dp/B0GX3DLKHW";

export const BookSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex justify-center">
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-[1.02]">
              <img
                src={bookCover}
                alt="No Bullsh*t Language Learning by James Hutchinson"
                className="w-full max-w-sm rounded-lg shadow-book"
              />
            </a>
          </div>

          <div className="space-y-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              No Bullsh*t <span className="text-primary">Language Learning</span>
            </h2>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-foreground/90">
              <p>
                Most people don't fail at learning a language because they're not smart enough or there's not enough resources to learn. They fail because life gets in the way. They have a busy schedule and can't find the time to commit to language learning.
              </p>
              <p>
                If you've tried apps, classes, and YouTube tutorials and still can't hold a conversation, the problem isn't you. It's the methods. I've written this book to condense my years of experience and psychological research into one place. It doesn't teach any particular language. It's a toolkit, a set of techniques and principles that can be applied to learning any language. It's ideal for all levels but particularly beginners who struggle getting started.
              </p>
            </div>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary font-semibold underline underline-offset-4 hover:opacity-80"
            >
              View on Amazon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
