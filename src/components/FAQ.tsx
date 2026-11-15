import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Which languages can you help with?",
    answer: "Any language. I do not teach a language directly. I map out the right daily activities for your stage so you always know what to do next."
  },
  {
    question: "What happens during the session?",
    answer: "We spend 30 minutes working out what you should be doing each day. You leave with a 30 day plan and a weekly structure so you never have to guess what to study."
  },
  {
    question: "How is this different from a language tutor?",
    answer: "A tutor teaches you words and grammar. I figure out which activities will actually move you forward and build a plan around your schedule."
  },
  {
    question: "What if the plan is not clear?",
    answer: "I will refund you. Email me at james@jameshutchinsonlanguages.com and you get your money back."
  },
  {
    question: "Is this only for intermediate learners?",
    answer: "It works best for learners who are past beginner but not yet comfortable speaking. If you study regularly but still feel stuck, this is for you."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-4 sm:px-6"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-medium py-4 sm:py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5 break-words">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
