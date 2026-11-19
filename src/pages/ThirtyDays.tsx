import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const signupEndpoint = "https://language-course-signup-production.up.railway.app/subscribe";

const ThirtyDays = () => {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<"subscribed" | "confirmation" | null>(null);
  const submitting = useRef(false);
  const successHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "30 Days and 30 Ways | James Hutchinson Languages";
    return () => { document.title = previousTitle; };
  }, []);

  useEffect(() => {
    if (success) successHeading.current?.focus();
  }, [success]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting.current) return;
    const address = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) {
      setError("Please enter a valid email address.");
      return;
    }

    submitting.current = true;
    setLoading(true);
    setError("");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20_000);
    try {
      const response = await fetch(signupEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: address, website }),
        credentials: "omit",
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        setError(response.status === 429
          ? "Too many attempts. Please wait a few minutes and try again."
          : "We couldn't sign you up just now. Please try again.");
        return;
      }
      setSuccess(result.confirmationRequired ? "confirmation" : "subscribed");
      setEmail("");
    } catch {
      setError("We couldn't connect. Please check your connection and try again.");
    } finally {
      window.clearTimeout(timeout);
      submitting.current = false;
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-hero px-5 [overflow-wrap:anywhere] sm:px-8">
      <div className="mx-auto max-w-3xl pb-12 sm:pb-16">
        <header className="py-4 sm:py-10">
          <Link to="/" className="inline-flex min-h-11 items-center rounded-sm text-base font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            James Hutchinson<span className="ml-1.5 text-primary">Languages</span>
          </Link>
        </header>

        <section aria-labelledby="course-title" className="pt-2 sm:pt-8">
          <h1 id="course-title" className="text-[1.875rem] leading-[1.12] sm:text-5xl sm:leading-[1.1]">
            30 Days and 30 Ways to Get Fluent in Your Target Language
          </h1>
          <p className="mt-4 text-base leading-relaxed text-foreground/95 sm:mt-7 sm:text-xl">
            Over the next 30 days I'll send you daily, actionable insights via email, to help you get fluent in your target language faster than you can imagine. Completely free.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4">
            Based on my 13 years of language learning experience. Works for any language because the principles are the same.
          </p>
        </section>

        <section aria-labelledby="signup-heading" className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-book sm:mt-10 sm:p-8">
          {success ? (
            <div role="status" className="space-y-3 py-2">
              <CheckCircle2 aria-hidden="true" className="size-8 text-primary" />
              <h2 id="signup-heading" ref={successHeading} tabIndex={-1} className="text-2xl outline-none sm:text-3xl">
                {success === "confirmation" ? "Check your inbox" : "You're signed up!"}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {success === "confirmation"
                  ? "Please click the confirmation link in your email to start receiving the course. Check your spam folder if you don't see it."
                  : "Keep an eye on your inbox for your language learning emails. Check your spam folder if you don't see them."}
              </p>
            </div>
          ) : (
            <>
              <h2 id="signup-heading" className="text-2xl leading-tight sm:text-3xl">Where should I send the emails?</h2>
              <p id="signup-note" className="mb-5 mt-2 text-base text-muted-foreground">No spam. Unsubscribe anytime.</p>
              <form onSubmit={handleSubmit} aria-busy={loading} className="space-y-3">
                <label htmlFor="course-email" className="block text-base font-medium">Email</label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    id="course-email" name="email" type="email" autoComplete="email" inputMode="email"
                    placeholder="Enter your email" required maxLength={254} value={email}
                    onChange={(event) => { setEmail(event.target.value); setError(""); }}
                    disabled={loading} aria-describedby={error ? "signup-note signup-error" : "signup-note"}
                    aria-invalid={Boolean(error)}
                    className="h-14 min-w-0 flex-1 border-border bg-background text-base"
                  />
                  <Button type="submit" disabled={loading} className="h-14 w-full bg-primary px-8 text-base font-bold text-background hover:bg-primary/90 sm:w-auto">
                    {loading && <Loader2 aria-hidden="true" className="mr-2 size-4 animate-spin" />}
                    {loading ? "Signing up..." : "Continue"}
                  </Button>
                </div>
                <div hidden aria-hidden="true">
                  <label htmlFor="course-website">Leave this field empty</label>
                  <input id="course-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
                </div>
                {error && <p id="signup-error" role="alert" className="text-base text-red-300">{error}</p>}
              </form>
            </>
          )}
        </section>
        <footer className="pt-7 text-sm text-muted-foreground">James Hutchinson Languages</footer>
      </div>
    </main>
  );
};

export default ThirtyDays;
