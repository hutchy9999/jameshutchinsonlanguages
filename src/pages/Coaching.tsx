import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import jamesPortrait from "@/assets/james-portrait.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const CALENDLY_BOOKING_URL = "https://calendly.com/james-jameshutchinsonlanguages/language-coaching";
const bookingButtonClass = "min-h-12 bg-primary font-bold text-background hover:bg-primary/90";

const sessionTopics = [
  {
    title: "Work out what to practise first",
    description: "We'll start with where you're moving, what you already know and what you'll need to do when you get there. Calling a landlord and chatting to a new neighbour are two very different things to practise.",
  },
  {
    title: "Find time to speak before you go",
    description: "We'll find a way to practise speaking that fits around work, packing and everything else. If you freeze when someone replies, we'll talk through how to practise that part too.",
  },
  {
    title: "Make a plan you can keep up",
    description: "We'll pick a few things to do each week and a simple way to see how often you've done them. We'll also work out what you can manage on a bad week so you can keep going when motivation dips.",
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

          <div className="grid items-center gap-10 pb-16 pt-6 sm:pb-20 sm:pt-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
            <div>
              <p className="mb-4 font-semibold text-primary">One-to-one language coaching</p>
              <h1 className="text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                Moving abroad? <span className="text-primary">Start speaking before you go.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/90 sm:text-xl">
                If you're moving in the next one to six months, I'll help you work out what to practise so you feel more at ease when it's time to make that first phone call or chat to a neighbour.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button asChild size="lg" className={bookingButtonClass}>
                  <a href="#book">
                    Book a session <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <p className="font-medium text-muted-foreground">£39 for 60 minutes</p>
              </div>
            </div>
            <img
              src={jamesPortrait}
              alt="James Hutchinson"
              className="aspect-square w-full max-w-sm rounded-2xl object-cover shadow-book lg:justify-self-end"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20" aria-labelledby="session-heading">
        <div className="mx-auto max-w-6xl">
          <h2 id="session-heading" className="text-3xl sm:text-4xl">What we'll do in your hour</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {sessionTopics.map(({ title, description }) => (
              <div key={title} className="rounded-2xl border bg-card p-6 shadow-book">
                <Check aria-hidden="true" className="mb-4 h-5 w-5 text-primary" />
                <h3 className="text-xl">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-card px-4 py-14 sm:px-6 sm:py-16" aria-labelledby="about-heading">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-[1fr_2fr] md:gap-12">
          <h2 id="about-heading" className="text-3xl sm:text-4xl">Hi, I'm <span className="text-primary">James.</span></h2>
          <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>I've spent 13 years looking into how we learn languages. For a long time I studied without getting much better at speaking. Things started to change when I changed what I practised each day.</p>
            <p>I wrote <cite>No Bullsh*t Language Learning</cite> to share what I'd learnt. In a coaching session, we can spend the time working out what makes sense for you and the move you've got coming up.</p>
          </div>
        </div>
      </section>

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
            <a href={CALENDLY_BOOKING_URL}>Choose a time on Calendly <ArrowRight aria-hidden="true" /></a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Coaching;
