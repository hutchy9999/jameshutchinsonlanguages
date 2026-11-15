import authorPhoto from "@/assets/james-photo.jpg";


export const AboutAuthor = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Who am I?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={authorPhoto}
              alt="James Hutchinson, author"
              className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-book" />

          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">James Hutchinson</h3>
              <p className="text-base sm:text-lg leading-relaxed text-foreground/90">I spent years studying languages without real progress because I kept doing the wrong activities.</p>
              <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
                Once I changed what I practised each day my speaking improved quickly.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
                Now I share what I've learned through a book, a conversation platform, and a free email course.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};