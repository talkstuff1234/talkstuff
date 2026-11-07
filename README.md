# TalkStuff website (Next.js)

Same design and content as the HTML version, built with the Next.js App Router and TypeScript.

## Run it
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
```
Requires Node.js 18.18 or newer.

## Project layout
```
app/                 routes: / , /about , /services , /billboards , /clients , /contact
  globals.css        all styling (brand colours are at the top, under :root)
  layout.tsx         fonts, metadata, header, smooth scroll + animations
components/
  SiteEffects.tsx    Lenis smooth scroll, headline word reveals, scroll reveals, counters,
                     parallax, magnetic buttons, page transitions
  Header.tsx         responsive header with mobile menu
  ContactForm.tsx    contact form
  bits.tsx, Footer.tsx, PageShell.tsx   shared sections
lib/content.ts       services, clients, rates, stats and contact details (edit text and prices here)
```

## Common edits
- **Prices, clients, services, contact details:** `lib/content.ts`.
- **Page text:** the matching file in `app/`.
- **Colours:** the variables at the top of `app/globals.css`.

## Contact form
By default it opens the visitor's email app with the details filled in. To receive real submissions,
create a form endpoint (for example at formspree.io), copy `.env.example` to `.env.local` and set
`NEXT_PUBLIC_FORM_ENDPOINT` to its URL.

## Adding your photos
Put images in `public/` (for example `public/team.jpg`). On the About page, replace the placeholder
`<div className="ph">` content with:
```tsx
import Image from 'next/image';
<Image src="/team.jpg" alt="TalkStuff team" width={1600} height={900} />
```
The `.ph img` style crops images to fit.

## Deploy
Push to GitHub and import the repo on Vercel (zero configuration), or run `npm run build && npm start`
on any Node host. Fonts are bundled, so no external font requests are made. Footer social links are
placeholders (`#`): add your real profile URLs in `components/Footer.tsx`.
