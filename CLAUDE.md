# Shelby Windows & Doors — Session Handoff

## Project
- **Client:** Shelby Windows & Doors Inc. (Vick)
- **Site:** shelbywindows.ca (live on Vercel — not custom domain yet)
- **GitHub:** github.com/papasauce11/shelby-windows (private)
- **Stack:** Vite + React + Tailwind v4 (`@tailwindcss/vite`, `@theme` in `index.css`)
- **Router:** React Router v6
- **Repo path:** `C:\Users\Varai\Desktop\Varaico\shelby-windows`
- **Bash path (update each session):** check `ls /sessions/*/mnt/` to find current mount
- **Push workflow:** Always provide a single copy-paste PowerShell command to commit and push. Format: `git add -A; git commit -m "message"; git push origin main`

---

## Architecture

### Routes
| Path | Component |
|---|---|
| `/` | `Home.jsx` |
| `/about` | `About.jsx` |
| `/windows` | `ProductCategory.jsx` |
| `/doors` | `ProductCategory.jsx` |
| `/windows/:slug` | `ProductDetail.jsx` |
| `/doors/:slug` | `ProductDetail.jsx` |
| `/suppliers/:slug` | `SupplierDetail.jsx` |
| `/our-work` | `OurWork.jsx` |
| `/faq` | `FAQ.jsx` |
| `/contact` | `Contact.jsx` |

### Layout
- `Layout.jsx` wraps all pages: `Header` + `main pt-20` + `Footer` + sticky bottom CTA bar
- Header is `fixed top-0 h-20`, so all pages need `pt-20` on main (handled by Layout)
- Sticky bar appears after 500px scroll, slides up from bottom
- IntersectionObserver scroll animations via `.animate-on-scroll` class (added in Layout)

### Tailwind Custom Colors
- `warm-50` through `warm-900` — warm neutral scale (stone/beige tones)
- `teal-*` — brand accent

### Assets (`src/assets/`)
- `1.png`–`6.png` — lifestyle photos
- `hero.png` — home page hero (**lowercase h** — Vercel is Linux/case-sensitive)
- `10.png` — financing section photo
- `2.png` — OurWork hero
- `shelby_logo.png`, `shelby_logo2.png`, `shelby_logo3.png` — logo variants
- `shelbybranding_.png` — branding text (used with `shelby_logo3.png` in Header + Footer)
- `canada_flag.png` — maple leaf icon (small, inline)
- `maple-leaf.png` — alternate maple leaf asset
- `proudly_canadian.png` — circular badge (used in Home + About floating badge)
- `proudly-canadian-badge.png` — alternate Canadian badge asset
- Supplier logos: `golden_windows_logo.png`, `vinylbilt_logo.png`, `entryguard_logo.png`
- `windows/` — 8 window product images (awning, bay, casement, double-hung, single-hung, sliding, custom, tilt)
- `doors/fiberglass/shaker.jpg` — local copy of fiberglass door image
- `instagram/` — 5 downloaded IG post images (`ig_post_1.jpg` through `ig_post_5.jpg`)
- ⚠️ All asset imports must use exact filenames — Vercel is Linux/case-sensitive (note: `custom windows.PNG` and `Tilt windows.png` have uppercase extensions)

---

## Key Components

### `Header.jsx`
- Fixed, `z-50`, `bg-white/95 backdrop-blur-sm border-b border-warm-200 shadow-sm`
- Desktop: mega dropdown for Products (3-col: Windows / Doors / Suppliers)
- Mobile: hamburger → fullscreen overlay from `top-20`, accordion for Products
- Logo: `shelbyBranding` + `shelbyLogo` side by side, `h-[66px]`
- CTAs: "Get a Quote" pill + "Financing Available" link

### `Footer.jsx`
- Dark (`bg-warm-900`), 12-col grid: brand (3 cols) + 4 nav columns (9 cols)
- Columns: **Pages** (pl-[30px]), **Products**, **Contact**, **Hours**
- Hours: `w-8` day abbrev + time, tight `space-y-1.5`
- Bottom bar: copyright + "Website by Varaico" with link

### `HeroBanner.jsx`
- Props: `title`, `subtitle`, `cta`, `ctaLink`, `large` (bool), `image` (optional)
- `image` prop → photo bg + gradient overlay `from-black/65 via-black/35 to-black/20`; no image → dark gradient + `bg-black/20`
- Heights: large=`min-h-[70vh] sm:min-h-[85vh]`, default=`min-h-[36vh] sm:min-h-[45vh]`
- Title: `[text-shadow:0_2px_16px_rgba(0,0,0,0.4)]`
- Subtitle: `text-white/80` + `[text-shadow:0_1px_8px_rgba(0,0,0,0.5)]`

### `ProductCard.jsx`
- Shows actual product image when `product.image` exists; falls back to placeholder gradient
- Supports `imageContain` flag: uses `object-contain p-4 bg-white` for cutout/diagram images
- Placeholder image area: teal-50→warm-100 gradient, product name centered
- Base: `shadow-sm border border-warm-100`
- Hover: `border-teal-200 shadow-xl`, scale image 105%
- Used in Home (featured), ProductCategory (grid), ProductDetail (related)

### `SupplierLogo.jsx`
- Props: `supplier`, `size` ("default"/"large"), `linkable` (bool, default true)
- `linkable={false}` renders plain div instead of Link (used in SupplierDetail)

### `CTASection.jsx`
- Default variant: teal gradient bg, two white pill buttons (full-width on mobile)
- Heading: `[text-shadow:0_2px_12px_rgba(0,0,0,0.3)]`
- Body text: `[text-shadow:0_1px_6px_rgba(0,0,0,0.2)]`
- Minimal variant: plain, text + single button
- Padding: `py-14 md:py-24`

---

## Data Files

### `navigation.js`
- `navigation.main` — nav structure with Products mega-menu children
- `companyInfo` — address, phone, email, hours, social
  - ⚠️ **Postal code `L4K 2C8` is a PLACEHOLDER** — confirm with Vick

### `products.js`
- `products.windows[]` and `products.doors[]`
- Each product: `slug`, `name`, `category`, `shortDescription`, `description`, `features[]`, `suppliers[]`, `relatedProducts[]`
- Optional image flags: `imageContain` (bool, for cutout images), `imagePosition` (CSS object-position string for crop control)
- Door products with enriched data have: `heroImage`, `image`, `collections[]`, `brochures[]`
- Entry door images are external URLs from EntryGuard's CDN (permission granted)
- Sliding patio + terrace door images are external URLs from Golden Windows' CDN (permission granted)
- Window products now have local images imported from `src/assets/windows/` (all 8 types)

**Current windows (8):**
| Name | Slug |
|---|---|
| Awning Windows | `awning` |
| Bay Windows | `bay` |
| Casement Windows | `casement` |
| Double-Hung Windows | `double-hung` |
| Single Hung Windows | `single-hung` |
| Sliding Windows | `sliding` |
| Custom Shape Windows | `custom-shape` |
| Tilt Windows | `tilt` |

**Current doors (5):**
| Name | Slug |
|---|---|
| Sliding Patio Doors | `sliding-patio` |
| Terrace Doors | `terrace` |
| Fiberglass Entry Doors | `fiberglass-entry-doors` |
| Steel Entry Doors | `steel-entry-doors` |
| NHP High Performance Steel Doors | `nhp-steel-entry-doors` |

Entry doors are split into 3 separate products with Entryguard content:
- **Fiberglass**: 6 collections (Shaker, Modern, Grand, Classic, Vista, Stainless) with images + 3 brochure PDFs
- **Steel**: hero image + 5 brochure PDFs (Novatech Glass, Trimlite Glass, Solid Door, Classic Glass, Executive Panel)
- **NHP**: hero image + 1 brochure PDF

Golden Windows door products enriched with images + collections + brochures:
- **Sliding Patio**: 3 collections (GoldenVinyl, GoldenClad, GoldenWood) with images + 5 brochure PDFs
- **Terrace**: 2 collections (GoldenClad, GoldenWood) with images + 4 brochure PDFs

### `suppliers.js`
- 3 suppliers: `golden-windows`, `vinyl-bilt`, `entryguard-doors`
- Each: `slug`, `name`, `logo`, `website`, `description`, `products[]`

### `faq.js`
- 13 items — removed heritage homes Q, softened unverified claims
- Removed specific timeline hours/days, ENERGY STAR/argon claims

---

## Page-by-Page State

### `Home.jsx`
- Hero: `min-h-[85vh] sm:min-h-[90vh]`, full-bleed `hero.png`, two teal CTA buttons
- Hero h1: `[text-shadow:0_2px_20px_rgba(0,0,0,0.5)]`
- Hero subtitle: "Locally installed. Canadian-made. Every window and door we carry comes from manufacturers we trust — built for our winters, backed by real warranties."
- Trust strip: 4 icons — "Fast, Clean Installs" / "Free In-Home Measure" / "Manufacturer Backed" / "Hundreds of Styles"
- Windows preview: 4 cards, Browse all link
- Doors preview: all 5 door cards, Browse all link
- Gradient fade dividers between sections (replaced wave SVGs)
- Supplier strip: all 3 suppliers, no description paragraph, reduced top padding (`pt-2 sm:pt-4`), centered
- Proudly Canadian: large badge + updated human-sounding copy
- Financing: photo left (with text-shadow overlay), feature cards right (white bg, shadow-sm)
- Reviews: 3 real Google reviews (Herbert Lemcke, Petra Hamann, Nexus 303) with star ratings + "Read more on Google" link
- Instagram: 5 posts with real downloaded images (`ig_post_1.jpg`–`ig_post_5.jpg`) and real IG URLs, carousel with dot nav
- CTA: CTASection default

### `About.jsx`
- No HeroBanner
- Story section: text left / photo right (3.png, aspect-[4/5])
- Floating Canadian badge: `absolute -bottom-8 -left-8 hidden lg:block w-28 h-28`
- Values: 3 cards (Canadian Products, Quality Installation, Full-Service Experience) on `bg-warm-50`, no icons, `sm:grid-cols-3 max-w-5xl`
- Team: **placeholder box** — needs real team photo from Vick
- Team copy: placeholder, needs Vick's actual bio/quote
- Story copy: marked PLACEHOLDER, needs Vick's actual company story

### `Contact.jsx`
- No HeroBanner, section bg `bg-warm-50`
- Top row: form card (left) | image `hidden lg:block` (right)
- Form uses `useSearchParams` for `?reason=showroom`
- Form submit: **only sets `submitted=true` — does NOT send email**
- Bottom: full-width map card (`h-52`)
- **Google Maps embed URL is a placeholder** — needs real embed URL for 10 Planchet Rd

### `FAQ.jsx`
- HeroBanner with 6.png
- Two-column: accordion LEFT, sidebar RIGHT (below on mobile)
- Sidebar: "Still have questions?" card + "Free Consultation" card

### `OurWork.jsx`
- HeroBanner with 2.png
- Intro statement strip (warm-50)
- 5 project cards using real IG images with descriptive captions and links to Instagram posts
- 2-up + 3-up grid layout (first 2 large, remaining 3 smaller)

### `ProductCategory.jsx`
- HeroBanner + intro strip + stat block + product grid
- Windows: teal-50 strip, teal-700 stat; Doors: warm-50 strip, warm-800 stat

### `ProductDetail.jsx`
- Split hero: image left | content right
- Supports `imageContain` flag (object-contain + p-6 for cutout/diagram images like custom-shape, tilt)
- Supports `imagePosition` prop (CSS object-position for crop control, e.g. fiberglass-entry-doors uses `65% center`)
- Collection cards use portrait aspect ratio `aspect-[3/4]`
- Description, Features grid, Brochures (if present), Suppliers, Related products, CTA

### `SupplierDetail.jsx`
- Hero: full-bleed product imagery background + 10% themed color tint overlay
- All hero text is white with `[text-shadow]` + container-level `[filter:drop-shadow()]`
- Tagline: plain white text (no badge/fill background)
- Visit button: white bg with themed border/text colors
- Vinyl-Bilt hero uses local bay window image (not their Adobe Stock URL)
- 3 theme variants: amber (Golden Windows), teal (Vinyl Bilt), navy (Entryguard)
- Featured products grid, CTA section

---

## Visual Polish (completed)
- ProductCard: `shadow-sm` base, `shadow-xl` hover; supports `imageContain` for cutout images
- HeroBanner: gradient overlay (not flat), text-shadow on title + subtitle
- Home hero: `opacity-90` on hero image, `[text-shadow:0_2px_20px_rgba(0,0,0,0.5)]` on h1
- CTASection: text-shadow on heading + body text
- Financing overlay text: text-shadow on heading + label
- Financing feature cards: `bg-white shadow-sm hover:shadow-md` (was flat warm-50)
- All hero copy and trust strip labels rewritten (non-AI sounding)
- Supplier pages: full-bleed hero imagery with 10% themed tint, white text + drop shadows
- About values: 3 cards (no icons), clean `sm:grid-cols-3` layout
- Gradient fade dividers replaced wave SVGs site-wide
- Sticky CTA bar: mobile only

## Mobile Patterns (follow these for all future work)
- **Short sentence pairs on separate lines (mobile):** When a heading or label has 2 short sentences (e.g., "Proudly Canadian. Built for Canadian homes."), insert `<br className="sm:hidden" />` between them so each sentence gets its own line on mobile. On desktop they stay inline.
- **Review cards compact with "see more":** Review cards show truncated text (3 lines via `line-clamp-3`) with a "... see more" toggle that expands to full text on tap. Keeps initial view tight on mobile.
- **Supplier logos single row:** All supplier logos must fit on one horizontal line on mobile. Use smaller sizes at mobile breakpoint (e.g., `h-16` mobile, `sm:h-24` desktop).
- **2-column product grids on mobile:** All product card grids use `grid-cols-2` as mobile default.
- **Section padding pattern:** `py-8 sm:py-12/16 lg:py-20/24` — never use `py-16`+ as the unprefixed (mobile) value.
- **ProductCard compact on mobile:** `p-3 sm:p-6`, `text-sm sm:text-lg` for title, `text-xs sm:text-sm` for description.

---

## Remaining Build Plan

| Step | Phase | Status |
|---|---|---|
| 1 | Content Collection (Vick) | 🟡 Mostly done — a few items remain |
| 2 | Polish + Depth Pass | 🟡 Visual done — copy rewrites remain |
| 3 | Our Work Page Rebuild (hero + IG grid) | ✅ Done — 5 IG projects wired up |
| 4 | Content Integration (product images, reviews, team photo, maps) | 🟡 Mostly done — team photo + maps remain |
| 4b | Mobile Optimization Pass | 🟡 Next up |
| 5 | Form Backend (Formspree/EmailJS) | 🟢 Can start now |
| 6 | QA + SEO (meta tags, 404, OG tags, favicon) | 🟢 Can start now |
| 7 | Launch (shelbywindows.ca, DNS, SSL, Search Console) | ⏳ Last step |

### Step 1 — Content needed from Vick
- [x] Photo of each window type (8 types) — ✅ all 8 in `src/assets/windows/`
- [x] 5 Instagram post images (for Home feed) — ✅ downloaded to `src/assets/instagram/`
- [x] Real Google reviews (3+ for Home page) — ✅ 3 real reviews integrated
- [ ] Team photo (for About page)
- [ ] Confirm postal code (currently `L4K 2C8` — placeholder)
- [ ] Real Google Maps embed URL for 10 Planchet Rd, Unit 4, Vaughan

### Step 2 — Remaining copy work
- Rewrite all product descriptions (8 windows + 3 doors) to sound human/non-AI
- Write About page story from Vick's actual input
- Rewrite FAQ answers where needed

### Step 5 — Form backend
- Contact form currently only sets `submitted = true` — no email sent
- Recommended: Formspree (free tier, no backend needed)
- Target email: confirm with Vick (likely info@shelbywindows.ca)

---

## Pricing (Varaico internal)
- 12 × $115/mo + $750 setup = **$2,130 value**
- Offer: **$2,000 all-in** if Vick is happy
- Floor: **$1,500** if hesitant

---

## Known Issues / Placeholders
- Postal code in `navigation.js` → `L4K 2C8` — needs confirmation
- Google Maps iframe src in `Contact.jsx` → placeholder coordinates, not real address
- Team photo in `About.jsx` → placeholder text box with "Coming Soon"
- About story copy → marked PLACEHOLDER, needs Vick's actual company story
- About team copy → marked PLACEHOLDER, needs Vick's actual bio/quote
- Contact form → no email sending (frontend only, sets `submitted=true`)

### Resolved (previously placeholders)
- ~~Instagram images~~ → 5 real IG images downloaded and wired up
- ~~Window product images~~ → all 8 local images in `src/assets/windows/`
- ~~OurWork project images~~ → 5 projects with real IG images
- ~~Reviews section~~ → 3 real Google reviews integrated
