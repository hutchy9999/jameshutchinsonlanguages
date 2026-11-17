import jamesCloseUp from "@/assets/james-close-up.jpg";

export const CoachingAbout = () => (
  <section className="border-y bg-card px-4 py-12 sm:px-6 sm:py-16" aria-labelledby="about-heading">
    <div className="mx-auto max-w-6xl">
      <h2 id="about-heading" className="text-3xl sm:text-4xl">Hi, I'm <span className="text-primary">James.</span></h2>

      <div className="mt-6 grid gap-7 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
        <div className="grid grid-cols-[5rem_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-6 lg:col-start-2 lg:row-start-1 lg:block">
          <img
            src={jamesCloseUp}
            alt="James Hutchinson"
            width={500}
            height={500}
            loading="lazy"
            className="aspect-square w-full rounded-xl object-cover shadow-book lg:rounded-2xl"
          />
          <dl className="grid grid-cols-2 gap-3 sm:gap-5 lg:mt-5">
            <div className="flex flex-col-reverse justify-end gap-1">
              <dt className="text-sm leading-snug text-muted-foreground">Years learning Spanish and Italian</dt>
              <dd className="text-2xl font-bold text-primary sm:text-3xl">13</dd>
            </div>
            <div className="flex flex-col-reverse justify-end gap-1">
              <dt className="text-sm leading-snug text-muted-foreground">
                <a href="https://www.youtube.com/@jameshutchinsonlangs" className="underline underline-offset-4 hover:text-primary">
                  YouTube subscribers
                </a>
              </dt>
              <dd className="text-2xl font-bold text-primary sm:text-3xl">1,800+</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-5 lg:col-start-1 lg:row-start-1 lg:space-y-6">
          <div>
            <h3 className="text-xl">Living in Spain</h3>
            <p className="mt-2 leading-relaxed text-foreground/90 sm:text-lg">
              During my Erasmus year in Spain, I remember offering someone some vodka before a night out. I got the words out in whatever order they came to me, and they understood. That was when it clicked for me. A few words and a gesture can keep a conversation going, and every time that happens, it gets a little easier to speak up again.
            </p>
          </div>
          <div className="border-t pt-5 sm:pt-6">
            <h3 className="text-xl">What learning Italian taught me</h3>
            <p className="mt-2 leading-relaxed text-foreground/90 sm:text-lg">
              In the years that followed, learning Italian gave me a chance to put some of the psychology I'd been reading about into practice. These are three things that helped me in real conversations.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-foreground/90 marker:text-primary sm:text-lg">
              <li>
                <strong>Listen for the words you know.</strong> When someone speaks quickly, I pick out familiar words and use the context to fill in the gaps. That helps me keep up with what they say next.
              </li>
              <li>
                <strong>Think in the language you're speaking.</strong> I try to form my reply in Italian as I go. It helps me stay with the conversation.
              </li>
              <li>
                <strong>Give new words something to stick to.</strong> When I learnt <i lang="it">macchina</i>, the Italian word for car, it reminded me of <i>machine</i>. That little association helped me remember it the next time I needed it.
              </li>
            </ul>
          </div>
          <div className="border-t pt-5 sm:pt-6">
            <h3 className="text-xl">From practice to Voco and the book</h3>
            <p className="mt-2 leading-relaxed text-foreground/90 sm:text-lg">
              I built Voco to get more speaking practice before visiting my partner's family in Italy, then opened it up to other learners. I published <cite>No Bullsh*t Language Learning</cite> to share what I'd learnt, and I talk about what I'm trying now on YouTube. In a coaching session, we'll work out what you can put into practice before your move.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
