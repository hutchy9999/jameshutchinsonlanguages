import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    title: "No Bullsh*t Language Learning",
    label: "The Book",
    description: "A practical toolkit for learning any language if you're a busy person.",
    href: "https://www.amazon.co.uk/dp/B0GX3DLKHW",
  },
  {
    title: "Conversation Platform",
    label: "online platform",
    description: "Practise real conversations with AI. Build the confidence to actually speak.",
    href: "https://www.speakwithvoco.com/",
  },
  {
    title: "Free 5-Day Email Course",
    label: "Free",
    description: "Five emails to help you get comfortable having conversations.",
    href: "https://conversations.jameshutchinsonlanguages.com",
  },
];

export const ProductLinks = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12">
          How I can help you
        </h2>
        <div className="flex flex-col gap-4 sm:gap-5">
          {products.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-book transition-all hover:border-primary hover:-translate-y-0.5"
            >
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold">{p.label}</p>
                <h3 className="text-lg sm:text-xl font-bold">{p.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{p.description}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          ))}
          <Link
            to="/coaching"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-book transition-all hover:border-primary hover:-translate-y-0.5"
          >
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wider text-primary font-semibold">£39 for 60 minutes</p>
              <h3 className="text-lg sm:text-xl font-bold">One-to-one language coaching</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Moving abroad? Let's work out what to practise before you go.</p>
            </div>
            <ArrowUpRight aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
};
