import { ArrowUpRight } from "lucide-react";
import vocoLogo from "@/assets/voco-logo.png";
import { CoachingFeature } from "@/components/CoachingFeature";

const products = [
  {
    title: "Voco - Practice speaking another language",
    description: "I built this platform that helps people practise speaking another language in a relaxed environment",
    href: "https://www.speakwithvoco.com/",
    logo: vocoLogo,
  },
  {
    title: "30 Days and 30 Ways",
    description: "Daily, actionable insights via email to help you get fluent in your target language. Completely free.",
    href: `${import.meta.env.BASE_URL}30days`,
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
        <CoachingFeature />
        <div className="mt-4 grid gap-3 lg:grid-cols-3 lg:gap-4">
          {products.map(({ title, description, href, logo }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("https://") ? "_blank" : undefined}
              rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-book transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-4 lg:p-5"
            >
              {logo && (
                <div className="grid size-[4.5rem] shrink-0 place-items-center overflow-hidden rounded-lg bg-white sm:size-24">
                  <img src={logo} alt="" loading="lazy" className="w-full scale-150" />
                </div>
              )}
              <div className="min-w-0 flex-1 space-y-1.5">
                <h3 className="text-lg leading-tight">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
              <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0 self-start text-primary" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
