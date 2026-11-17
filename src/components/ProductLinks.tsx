import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "No Bullsh*t Language Learning",
    description: "A practical toolkit for learning any language if you're a busy person.",
    href: "https://www.amazon.co.uk/dp/B0GX3DLKHW",
  },
  {
    title: "Conversation Platform",
    description: "Practise real conversations with AI. Build the confidence to actually speak.",
    href: "https://www.speakwithvoco.com/",
  },
  {
    title: "Free 5-Day Email Course",
    description: "Five emails to help you get comfortable having conversations.",
    href: "https://conversations.jameshutchinsonlanguages.com",
  },
];

export const ProductLinks = () => {
  return (
    <section id="resources" tabIndex={-1} aria-labelledby="resources-heading" className="scroll-mt-6 px-4 py-8 sm:px-6 lg:py-10">
      <div className="mx-auto max-w-6xl">
        <h2 id="resources-heading" className="mb-4 text-2xl sm:mb-6 sm:text-3xl">
          How I can help you
        </h2>
        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {products.map(({ title, description, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-3 rounded-xl border border-border bg-card p-4 shadow-book transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:p-5"
            >
              <div className="space-y-1.5">
                <h3 className="text-lg leading-tight">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
              <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
