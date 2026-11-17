import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import jamesPortrait from "@/assets/james-portrait.jpg";
import { CoachingAbout } from "@/components/CoachingAbout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const CALENDLY_BOOKING_URL = "https://calendly.com/james-jameshutchinsonlanguages/language-coaching";
const bookingButtonClass = "min-h-12 bg-primary font-bold text-background hover:bg-primary/90";

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
    answer: "No. £39 covers one 60-minute session. We'll use that hour to make a plan you can get started on yourself.",
  },
];

const Coaching = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Language coaching for moving abroad | James Hutchinson";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main>
      <section className="bg-gradient-hero px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center gap-2 py-6 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to home
          </Link>

          <div className="grid items-center gap-8 pb-8 pt-4 md:grid-cols-[1.6fr_1fr] md:pb-12 md:pt-8 lg:gap-12">
            <div>
              <p className="mb-4 font-semibold text-primary">One-to-one language coaching</p>
              <h1 className="text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
                Moving abroad? <span className="text-primary">Leave with a plan for what to practise before you go.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/90 sm:text-lg">
                If you're moving in the next one to six months, we'll pick the conversations you'll need first and build a weekly practice plan around what you already know and the time you have.
              </p>
              <div className="mt-5 space-y-3">
                <p className="font-semibold">£39 for one 60-minute session</p>
                <Button asChild size="lg" className={bookingButtonClass}>
                  <a href={CALENDLY_BOOKING_URL}>Choose a time <ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>
            </div>
            <img
              src={jamesPortrait}
              alt="James Hutchinson"
              className="hidden aspect-square w-full max-w-sm justify-self-end rounded-2xl object-cover shadow-book md:block"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-8 sm:px-6 md:py-12" aria-labelledby="audience-heading">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[2fr_3fr] lg:gap-10">
          <div>
            <h2 id="audience-heading" className="text-3xl sm:text-4xl">Who is this for?</h2>
            <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
              This is for you if you're moving abroad soon and still feel nervous about using the language day to day.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {movingAbroadWorries.map((worry) => (
              <li key={worry} className="border-l-2 border-primary/70 pl-3 leading-relaxed text-foreground/90">
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
        <div className="mx-auto max-w-3xl rounded-2xl border border-primary/40 bg-gradient-hero px-5 py-10 text-center shadow-book sm:p-12">
          <h2 id="booking-heading" className="text-3xl sm:text-4xl">Book your coaching session</h2>
          <p className="mb-6 mt-3 text-lg text-muted-foreground">60 minutes with James, in English, for £39.</p>
          <Button asChild size="lg" className={bookingButtonClass}>
            <a href={CALENDLY_BOOKING_URL}>Choose a time <ArrowRight aria-hidden="true" /></a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Coaching;
