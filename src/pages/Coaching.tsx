import { useEffect, useLayoutEffect } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link, useLocation, useNavigationType } from "react-router-dom";
import { CoachingAbout } from "@/components/CoachingAbout";
import { trackCoaching } from "@/lib/coachingAnalytics";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const CALENDLY_BOOKING_URL = "https://calendly.com/james-jameshutchinsonlanguages/language-coaching";
const sessionPrice = "£40 per 60-minute session";
const bookingButtonClass = "h-auto min-h-12 w-full whitespace-normal bg-primary px-4 py-3.5 text-lg font-bold text-background hover:bg-primary/90 sm:w-auto sm:px-8 sm:py-2 sm:text-sm";

const movingAbroadWorries = [
  "What if I mess up on the phone and can't explain what I need?",
  "I can get through a lesson, but when someone replies, my mind goes blank.",
  "I know a bit already. What should I actually practise first?",
  "I've got a move to organise. When am I supposed to fit in language practice?",
];

const sessionTakeaways = [
  {
    title: "A clear understanding of what's holding you back",
    description: "We'll identify why you're struggling to make progress and what needs to change, so you can stop wasting time on methods that aren't working for you.",
  },
  {
    title: "A personalised roadmap for your move abroad",
    description: "A realistic plan built around your current level, available time and moving date, with clear priorities and milestones to work towards.",
  },
  {
    title: "A system to stay consistent and track your progress",
    description: "Know what to practise, how to measure improvement and what to do when motivation drops or life gets in the way.",
  },
];

const offerIncludes = [
  { title: "A 60-minute one-to-one session", detail: " built around your situation and where you get stuck" },
  { title: "A clear understanding of what's holding you back", detail: ", so you stop wasting time on what isn't working" },
  { title: "A personalised roadmap for life abroad", detail: ", with priorities and milestones that fit your level and your time" },
  { title: "A simple system to stay consistent", detail: " and track your progress, even when motivation dips" },
  { title: "Free access to Voco", detail: ", my conversation practice platform, to rehearse the situations we pick together" },
  { title: "The option of follow-ups", detail: " to review what you managed and adjust the plan together" },
];

const faqs = [
  {
    question: "Can I book if I'm starting from scratch?",
    answer: "Yes. We'll start with the first few conversations you're likely to have and work out what you can practise now. If you've already been learning for a while, we can focus on where you tend to get stuck.",
  },
  {
    question: "What language is the session in?",
    answer: "We'll talk in English. Whatever language you're learning, I'll help you decide what to practise, how to get more comfortable speaking and how to fit it into your week.",
  },
  {
    question: "What should I bring?",
    answer: "Just an idea of where you're moving and when. If there's a conversation you keep worrying about, bring that too. It gives us somewhere concrete to start.",
  },
  {
    question: "Do I have to commit to more sessions?",
    answer: `No. It's ${sessionPrice}. We'll use that hour to make a plan you can get started on yourself.`,
  },
  {
    question: "How often should I do this?",
    answer: "That's up to you. Each session is 1 hour and for the first session, we'll dive into your roadmap and your routine going forwards. After that, you could have a session once a week or as often as you like, so that we can work together and keep you on track and help you overcome any struggles you have.",
  },
];

const Coaching = () => {
  const { hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => { trackCoaching("coaching_view"); }, []);

  useLayoutEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant" });
    } else if (navigationType !== "POP") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [hash, navigationType]);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Language coaching for moving abroad | James Hutchinson";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="[overflow-wrap:anywhere]">
      <section className="bg-gradient-hero px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="inline-flex min-h-12 items-center gap-2 rounded-sm text-base text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:py-6 sm:text-sm">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to home
          </Link>

          <div className="grid items-center gap-8 pb-12 pt-7 sm:pb-8 sm:pt-4 md:grid-cols-[1fr_1fr] md:pb-12 md:pt-8 lg:gap-12">
            <div>
              <p className="mb-4 font-semibold text-primary">One-to-one language coaching</p>
              <h1 className="text-4xl leading-[1.12] min-[380px]:text-[2.625rem] sm:text-4xl sm:leading-[1.1] lg:text-5xl">
                Feel more at home <span className="mt-1 block text-primary sm:mt-0 sm:inline">when you move abroad.</span>
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/90 sm:mt-5">
                Being able to ask for help, chat to a neighbour or join in at dinner can change how a new place feels. I help you feel ready to have those conversations.
              </p>
              <div className="mt-7 space-y-4 sm:mt-5 sm:space-y-3">
                <Button asChild size="lg" className={bookingButtonClass}>
                  <a href={CALENDLY_BOOKING_URL} onClick={() => trackCoaching("booking_hero")}>Choose a time <ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>
            </div>
            <video
              className="aspect-video w-full justify-self-end rounded-2xl bg-black object-cover shadow-book"
              src="/coaching-intro.mp4"
              poster="/coaching-intro-poster.jpg"
              autoPlay
              muted
              playsInline
              controls
              preload="auto"
              aria-label="James introduces one-to-one language coaching"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 md:py-12" aria-labelledby="approach-heading">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[2fr_3fr] lg:gap-10">
          <h2 id="approach-heading" className="text-[2rem] leading-tight sm:text-4xl">How I’ll help you get there</h2>
          <div className="max-w-3xl space-y-3 text-lg leading-relaxed text-foreground/90">
            <p>
              We’ll start with where you’re moving, what you’ve tried and where you get stuck. I’ll draw on my 13 years of language experience to help you decide what’s worth practising before you go. We’ll agree on a few milestones so you know whether you’re making progress.
            </p>
            <p>
              If you book a follow-up, we’ll look at what you managed, talk through what got in the way and adjust the plan together.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-10 sm:px-6 sm:py-8 md:py-12" aria-labelledby="audience-heading">
        <div className="mx-auto grid max-w-6xl gap-6 sm:gap-5 lg:grid-cols-[2fr_3fr] lg:gap-10">
          <div>
            <h2 id="audience-heading" className="text-[2rem] leading-tight sm:text-4xl">Who is this for?</h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
              This is for you if you're moving abroad in the near future and still feel nervous about using the language day to day.
            </p>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 sm:gap-4">
            {movingAbroadWorries.map((worry) => (
              <li key={worry} className="border-l-2 border-primary/70 pl-4 text-lg leading-relaxed text-foreground/90 sm:pl-3 sm:text-base">
                &ldquo;{worry}&rdquo;
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 md:py-12" aria-labelledby="session-heading">
        <div className="mx-auto max-w-6xl">
          <h2 id="session-heading" className="text-3xl sm:text-4xl">What you'll leave with</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {sessionTakeaways.map(({ title, description }) => (
              <div key={title} className="rounded-2xl border bg-card p-6 shadow-book">
                <Check aria-hidden="true" className="mb-4 h-5 w-5 text-primary" />
                <h3 className="text-xl">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-primary/40 bg-card p-5 sm:p-6">
            <h3 className="text-xl">Free access to Voco</h3>
            <p className="mt-2 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Your session includes free access to Voco, the conversation practice platform I built. After the call, you can use it to practise the situations we pick together, like calling a landlord, booking an appointment or chatting to a new neighbour.
            </p>
          </div>
        </div>
      </section>

      <CoachingAbout />

      <section className="px-4 py-14 sm:px-6 sm:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl">A few questions you might have</h2>
          <Accordion type="single" collapsible className="mt-5">
            {faqs.map(({ question, answer }) => (
              <AccordionItem key={question} value={question}>
                <AccordionTrigger className="gap-4 py-5 text-left text-lg hover:text-primary">{question}</AccordionTrigger>
                <AccordionContent className="max-w-2xl text-base leading-relaxed text-muted-foreground">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="book" tabIndex={-1} className="scroll-mt-6 px-4 pb-16 sm:px-6 sm:pb-20" aria-labelledby="booking-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="booking-heading" className="text-[2rem] leading-[1.1] sm:text-5xl">
            Imagine feeling like you <span className="text-primary">belong where you live.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Chatting to a neighbour, asking for help, joining in at dinner. Whether you're about to move or already there, get ready for those moments so they start to feel normal.
          </p>
          <div className="mt-8 rounded-2xl border border-primary/40 bg-gradient-hero px-5 py-8 text-left shadow-book sm:p-10">
            <h3 className="text-center text-2xl sm:text-3xl">Your one-to-one coaching session</h3>
            <p className="mx-auto mb-7 mt-2 max-w-md text-center text-muted-foreground">
              One hour to work out what to practise, and a plan you can start on straight away.
            </p>
            <ul className="mb-8 space-y-4">
              {offerIncludes.map(({ title, detail }) => (
                <li key={title} className="flex items-start gap-3.5 leading-relaxed text-foreground/90">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Check aria-hidden="true" className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span><strong className="font-semibold text-foreground">{title}</strong>{detail}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className={`${bookingButtonClass} mx-auto flex max-w-md`}>
              <a href={CALENDLY_BOOKING_URL} onClick={() => trackCoaching("booking_footer")}>Choose a time <ArrowRight aria-hidden="true" /></a>
            </Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">{sessionPrice} · No commitment to more sessions</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Coaching;
