# TaxSimpl Brand Guidelines v1.0

> Last updated: 2026-06-29  
> Status: Active — synced from site implementation (`src/app/globals.css`, logo assets)

## Quick Reference

| Element | Value |
|---------|-------|
| Brand Name | TaxSimpl (capital **S** — never "Tax Simpl" or "Taxsimpl") |
| Legal Name | TaxSimpl Advisors LLP |
| Tagline | Tax Simplified. Business Amplified. |
| Primary Color | #2D6DA3 |
| Secondary Color | #1B4466 |
| Accent Color | #5D9BD3 |
| Primary Font | Work Sans |
| Heading Font | Instrument Serif |
| Voice | Trust-first, plain language, expert, approachable |

---

## 1. Color Palette

Logo-derived palette (source of truth for web):

| Role | Hex | Usage |
|------|-----|-------|
| Primary Blue | #2D6DA3 | CTAs, links, primary buttons, chart-1 |
| Primary Dark | #1B4466 | Hover emphasis, OG dark accent |
| Accent Blue | #5D9BD3 | Highlights, chart-2, nav underlines |
| Light Blue | #95C1E6 | Soft accents, chart fills |
| Background | #F7F8F9 | Page background (`--background`) |
| Foreground | #152E47 | Headings, body text (approx. `hsl(210 55% 18%)`) |
| Muted Text | #5A7289 | Captions, secondary copy |

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Primary Blue | #2D6DA3 | rgb(45, 109, 163) | CTAs, primary buttons, ring, links |
| Primary Dark | #1B4466 | rgb(27, 68, 102) | Hover states, dark surfaces |

### Secondary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Secondary Blue | #315D81 | rgb(49, 93, 129) | Eyebrows, section labels (`--secondary`) |
| Secondary Dark | #1B4466 | rgb(27, 68, 102) | Deep emphasis |

### Accent Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Accent Blue | #5D9BD3 | rgb(93, 155, 211) | Accents, interactive highlights |
| Accent Light | #95C1E6 | rgb(149, 193, 230) | Soft fills, decorative accents |

### Neutral Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | #F7F8F9 | rgb(247, 248, 249) | Page backgrounds |
| Surface | #FFFFFF | rgb(255, 255, 255) | Cards, popovers |
| Muted Surface | #EEF1F5 | rgb(238, 241, 245) | Muted sections (approx. `hsl(210 25% 94%)`) |
| Border | #B8C9D9 | rgb(184, 201, 217) | Borders, inputs (approx. `hsl(207 30% 82%)`) |
| Text Primary | #152E47 | rgb(21, 46, 71) | Headings, primary text |
| Text Secondary | #5A7289 | rgb(90, 114, 137) | Muted foreground |

### Semantic Colors

| State | Hex | Usage |
|-------|-----|-------|
| Success | #22C55E | Positive confirmations |
| Warning | #EAB308 | Cautions, pending states |
| Error | #EF4444 | Destructive actions (`--destructive`) |
| Info | #5D9BD3 | Informational messages |

### Accessibility

- Primary (#2D6DA3) on white: meets WCAG AA for large text and UI components
- Body text (#152E47) on background (#F7F8F9): strong contrast for readability
- Prefer `--primary-foreground` (white) on primary buttons

---

## 2. Typography

### Font Stack

```css
--font-heading: 'Instrument Serif', Georgia, serif;
--font-body: 'Work Sans', system-ui, -apple-system, sans-serif;
--font-sans: 'Work Sans', system-ui, -apple-system, sans-serif;
--font-mono: 'Geist Mono', ui-monospace, monospace;
```

### Type Scale (implementation)

| Element | Class / Pattern | Notes |
|---------|-----------------|-------|
| Hero | `.heading-hero`, `.heading-editorial` | Instrument Serif, clamp 2.5–4.5rem |
| Section | `.heading-section` | Instrument Serif, clamp 2–3rem |
| Card | `.heading-card` | Instrument Serif, 2xl |
| Body | `.text-body`, `.text-lede` | Work Sans, muted foreground |
| Eyebrow | `.section-eyebrow` | Work Sans, uppercase, tracking wide |

Headings use Instrument Serif (often italic accent via `.heading-accent` in primary blue).

---

## 3. Logo Usage

### Variants

| Variant | File | Use Case |
|---------|------|----------|
| Full Horizontal | `public/logo.png` | Header, footer (`SiteLogo`) |
| Icon Only | `public/logo-icon.png` | Favicon, apple-touch icon |

### Clear Space

Minimum clear space = height of the logo wordmark cap height.

### Minimum Size

| Context | Minimum Height |
|---------|----------------|
| Header logo | 32px (`h-8`) |
| Footer logo | 36px (`h-9`) |
| Favicon | 32×32 |

### Don'ts

- Don't write the name as "Tax Simpl", "Taxsimpl", or "TAXSIMPL" in user-facing copy
- Don't rotate, skew, or recolor the logo outside the approved blue palette
- Don't add drop shadows or effects to the logo mark
- Don't stretch or distort aspect ratio (472×117 source)

---

## 4. Voice & Tone

### Brand Personality

| Trait | Description |
|-------|-------------|
| **Trustworthy** | Credentials, process clarity, local Kolkata presence |
| **Clear** | Plain language; explain tax terms when needed |
| **Expert** | CA-led, institutional quality without jargon overload |
| **Approachable** | Responsive service; free consultation CTAs |
| **Conversion-focused** | Clear next steps: call, WhatsApp, contact form |

### Voice Chart

| Trait | We Are | We Are Not |
|-------|--------|------------|
| Trustworthy | Transparent, credential-backed | Vague, overpromising |
| Clear | Direct, plain English | Dense statutory language |
| Expert | Precise, partner-led | Generic agency filler |
| Approachable | Helpful, local | Cold, corporate |

### Tone by Context

| Context | Tone | Example |
|---------|------|---------|
| Homepage / services | Confident, benefit-led | "Proactive filings, zero notices" |
| Blog / guides | Instructional, plain | "Here's what RNOR means for returning NRIs" |
| Contact / CTAs | Warm, action-oriented | "Book a free 30-minute discovery call" |
| Legal / compliance | Formal, accurate | Statutory references when required |

### Prohibited Terms

| Avoid | Reason |
|-------|--------|
| Tax Simpl | Wrong brand spelling |
| Taxsimpl | Wrong capitalization |
| Revolutionary | Overused marketing filler |
| Best-in-class | Vague, unverifiable |
| Idea generators | Generic agency cliché (not our voice) |
| Shopping cart / basket | E-commerce language — not applicable |

### Core Attributes

| Attribute | Description |
|-----------|-------------|
| Name | Always **TaxSimpl** (one word, capital S) |
| Location | Kolkata / West Bengal — emphasize local presence |
| Audience | Startups, SMEs, professionals, NRIs across India |
| CTAs | Free consultation, phone (+91), WhatsApp, contact form |

---

## 5. Imagery Guidelines

### Photography Style

- Professional, clean, trust-building (offices, documents, Kolkata context where relevant)
- Natural lighting; avoid stock clichés (handshakes, calculators only)

### Illustrations & UI

- Editorial layout: generous whitespace, 2px borders, rounded-2xl cards
- Brand blues only; shadows use `rgba(45, 109, 163, …)` tints

### Icons

- Lucide React outlined icons, consistent stroke
- Pair with Work Sans labels

---

## AI Image Generation

### Base Prompt Template

```
Professional Indian chartered accountancy brand, clean editorial layout, palette #2D6DA3 #5D9BD3 #95C1E6 on #F7F8F9 background, trustworthy Kolkata business advisory, soft natural lighting, minimal whitespace
```

### Style Keywords

| Category | Keywords |
|----------|----------|
| **Lighting** | soft natural, bright office |
| **Mood** | trustworthy, calm, professional |
| **Composition** | minimal, editorial, whitespace |
| **Treatment** | muted blues, high clarity |
| **Aesthetic** | modern CA firm, not corporate stock |

### Visual Mood Descriptors

- Trust-first and approachable
- Kolkata / India business context when relevant
- Clean typography-forward layouts

### Visual Don'ts

| Avoid | Reason |
|-------|--------|
| Wrong brand name spelling | Breaks brand identity |
| Non-brand colors (purple, coral) | Off-palette |
| US-style phone formats | Use +91 for Indian audience |
| E-commerce UI patterns | Not a product shop |

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-06-29 | Initial guidelines derived from codebase and logo palette |
