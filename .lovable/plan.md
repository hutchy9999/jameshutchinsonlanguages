## Plan: Convert page into a Linktree-style personal brand hub

Keep the current background, fonts, and the "Who am I" section (James's photo and bio). Remove all community/coaching/waitlist content. Add three product cards: the book, the conversation platform, and the free 5-day email course.

### Page structure (new `src/pages/Index.tsx`)

1. Hero (revamped `BookHero.tsx`)
2. Who am I (kept `AboutAuthor.tsx`, cleaned)
3. Product links section (new `ProductLinks.tsx`) - the three cards
4. Book detail section (new `BookSection.tsx`) - cover image + full description, clickable to Amazon
5. What others are saying (kept `Testimonials.tsx`, CTA removed)
6. Footer (kept)

Removed from render: `WhatsInside`, `WhyThisBook`, `KeyPrinciples`, `TimeSaving`, `Pricing`, `FAQ`, `EmailCaptureRepeat`, `LandingVideo`, `VideoSection`. Files left on disk but unused (safe to delete later).

### File changes

**1. `src/pages/Index.tsx**` - reduce to: BookHero, AboutAuthor, ProductLinks, BookSection, Testimonials, Footer.

**2. `src/components/BookHero.tsx**` - replace text with intro:

- Headline: "Hi, I'm James."
- Subheading: "I have spent the last 13 years understanding how our brains best learn languages. I'm now sharing what I've learned with anyone who wants to connect with people around the world."
- Remove waitlist button + subtext. Keep portrait image and gradient background.
- Replace right-column CTA with a short prompt: Want to lean a language? Scroll down." (no button)

**3. `src/components/AboutAuthor.tsx**` - keep heading "Who am I?", photo, and first two paragraphs. Replace third paragraph with a neutral, product-agnostic line: "Now I share what I've learned through a book, a conversation platform, and a free email course." Remove the button and subtext entirely.

**4. `src/components/Testimonials.tsx**` - keep heading and image. Remove the "Join the waitlist" button + subtext.

**5. New `src/components/ProductLinks.tsx**` - three vertically stacked cards (Linktree-style), each full-width on mobile and in a centred column on desktop. Each card: title, 1-line description, external-link arrow. Open in new tab.

- Card 1: "The Book - No Bullsh*t Language Learning" - "A practical toolkit for learning any language if you're a busy person." Link: [https://www.amazon.co.uk/dp/B0GX3DLKHW](https://www.amazon.co.uk/dp/B0GX3DLKHW)
- Card 2: "Conversation Platform" - "Practise real conversations with AI. Build the confidence to actually speak." Link: [https://language-conversation-platform.web.app/](https://language-conversation-platform.web.app/)
- Card 3: "Free 5-Day Email Course" - "Five emails to help you get comfortable having conversations." Link: [https://conversations.jameshutchinsonlanguages.com](https://conversations.jameshutchinsonlanguages.com)

**6. New `src/components/BookSection.tsx**` - dedicated book showcase below the link cards.

- Left: uploaded book cover image, clickable to Amazon.
- Right: heading "No Bullsh*t Language Learning" + full description (the 2 paragraphs provided), then a text link "View on Amazon" pointing to [https://www.amazon.co.uk/dp/B0GX3DLKHW](https://www.amazon.co.uk/dp/B0GX3DLKHW). The whole image is also a link.
- Book cover uploaded via `lovable-assets` and referenced through a `.asset.json` pointer at `src/assets/book-cover.png.asset.json`.

### Technical notes

- Styling reuses existing tokens (bg-gradient-hero, shadow-book, text-primary, container, etc.) - no design system changes.
- All external links use `target="_blank" rel="noopener noreferrer"`.
- Book cover sourced from the uploaded image; uploaded to CDN via `lovable-assets create --file /mnt/user-uploads/Book_Cover_on_a_table.png --filename book-cover.png`.
- No backend changes. Components removed from the render tree are left in the repo untouched.