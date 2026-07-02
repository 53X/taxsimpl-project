# TaxSimpl Website

Modern marketing site for [TaxSimpl Advisors LLP](https://taxsimpl.com) — built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description          |
| -------------- | -------------------- |
| `npm run dev`  | Start dev server     |
| `npm run build`| Production build     |
| `npm run start`| Run production build |
| `npm run lint` | ESLint               |

## Project structure

```
src/
├── app/              # Routes (App Router)
├── components/
│   ├── site/         # Marketing layout & sections
│   └── ui/           # shadcn/ui primitives
└── lib/              # Site config, services data, utils
```

## Contact form (Resend)

1. Create a [Resend](https://resend.com) account and add/verify the `taxsimpl.com` domain.
2. Copy `.env.example` to `.env.local` and set:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL` (must use your verified domain)
   - `CONTACT_TO_EMAIL` (defaults to `hello@taxsimpl.com` if unset)
3. In development without `RESEND_API_KEY`, submissions are logged to the server console.

## Deploy

Deploy to [Vercel](https://vercel.com), add the same env vars in project settings, and point `taxsimpl.com` when ready to replace the WordPress site.
