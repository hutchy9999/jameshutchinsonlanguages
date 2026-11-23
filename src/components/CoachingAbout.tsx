import jamesCloseUp from "@/assets/james-close-up.jpg";

const credentials = [
  { value: "13", label: "Years learning Spanish & Italian" },
  { value: "1,800+", label: "YouTube subscribers" },
  { value: "Published author", label: "No Bullsh*t Language Learning" },
  { value: "Voco", label: "Conversation practice app I built" },
];

export const CoachingAbout = () => (
  <section className="border-y bg-card px-4 py-12 sm:px-6 sm:py-16" aria-labelledby="about-heading">
    <div className="mx-auto max-w-5xl">
      <div className="grid items-center gap-8 md:grid-cols-[16rem_1fr] md:gap-12">
        <img
          src={jamesCloseUp}
          alt="James Hutchinson"
          width={500}
          height={500}
          loading="lazy"
          className="aspect-square w-full max-w-[12rem] rounded-2xl object-cover shadow-book md:max-w-none"
        />
        <div>
          <h2 id="about-heading" className="text-3xl sm:text-4xl">Hi, I'm <span className="text-primary">James.</span></h2>
          <p className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">
            <span className="text-primary">&ldquo;</span>A few words and a gesture can keep a conversation going.<span className="text-primary">&rdquo;</span>
          </p>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
            I learnt that during my Erasmus year in Spain, and I've spent 13 years since working out how to help it happen faster.
          </p>
        </div>
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {credentials.map(({ value, label }) => (
          <div key={label} className="flex flex-col-reverse justify-end rounded-xl border bg-background p-4 text-center">
            <dt className="mt-1 text-sm leading-snug text-muted-foreground">{label}</dt>
            <dd className="text-2xl font-bold leading-tight text-primary">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
