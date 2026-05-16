# Shelby Windows & Doors — Session Handoff

## Project
- **Client:** Shelby Windows & Doors Inc. (Vick)
- **Site:** shelbywindows.ca (live on Vercel — not custom domain yet)
- **GitHub:** github.com/papasauce11/shelby-windows (private)
- **Stack:** Vite + React + Tailwind v4 (`@tailwindcss/vite`, `@theme` in `index.css`)
- **Router:** React Router v6
- **Repo path:** `C:\Users\Varai\Desktop\Varaico\shelby-windows`
- **Bash path (update each session):** check `ls /sessions/*/mnt/` to find current mount

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
- `shelby_logo3.png` + `shelbybranding_.png` — logo pair (used together in Header + Footer)
- `canada_flag.png` — maple leaf icon (small, inline)
- `proudly_canadian.png` — circular badge (used in Home + About floating badge)
- Supplier logos: `golden_windows_logo.png`, `vinylbilt_logo.png`, `entryguard_logo.png`
- ⚠️ All asset imports must use exact lowercase filenames — Linux build will fail otherwise

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
- No product images yet — all placeholder gradient

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

**Current doors (3):**
| Name | Slug |
|---|---|
| Sliding Patio Doors | `sliding-patio` |
| Terrace Doors | `terrace` |
| Entry Doors | `entry` |

Entry Doors description covers fiberglass, steel, and NHP high performance steel.

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
- Doors preview: 3 cards, Browse all link
- Wave dividers between sections (hardcoded fill colors)
- Supplier strip: all 3 suppliers
- Proudly Canadian: large badge + updated human-sounding copy
- Financing: photo left (with text-shadow overlay), feature cards right (white bg, shadow-sm)
- Reviews: **3 placeholder skeleton cards** — needs real Google reviews from Vick
- Instagram: 5 posts, **all `image: null`** — needs real downloaded images
- CTA: CTASection default

### `About.jsx`
- No HeroBanner
- Story section: text left / photo right (3.png, aspect-[4/5])
- Floating Canadian badge: `absolute -bottom-8 -left-8 hidden lg:block w-28 h-28`
- Values: 4 cards on `bg-warm-50`, hover:border-teal-200
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
- 8 project cards, **all `image: null`** — needs real project photos
- Numbered captions (01–08)

### `ProductCategory.jsx`
- HeroBanner + intro strip + stat block + product grid
- Windows: teal-50 strip, teal-700 stat; Doors: warm-50 strip, warm-800 stat

### `ProductDetail.jsx`
- Split hero: image placeholder left | content right
- Description, Features grid, Suppliers, Related products, CTA

### `SupplierDetail.jsx`
- Custom editorial header (teal-50 bg, logo in white box)
- Description, products grid on warm-50

---

## Visual Polish (completed)
- ProductCard: `shadow-sm` base, `shadow-xl` hover
- HeroBanner: gradient overlay (not flat), text-shadow on title + subtitle
- Home hero h1: `[text-shadow:0_2px_20px_rgba(0,0,0,0.5)]`
- CTASection: text-shadow on heading + body text
- Financing overlay text: text-shadow on heading + label
- Financing feature cards: `bg-white shadow-sm hover:shadow-md` (was flat warm-50)
- All hero copy and trust strip labels rewritten (non-AI sounding)

---

## Remaining Build Plan

| Step | Phase | Status |
|---|---|---|
| 1 | Content Collection (Vick) | ⏳ Waiting on Vick |
| 2 | Polish + Depth Pass | 🟡 Visual done — copy rewrites remain |
| 3 | Our Work Page Rebuild (hero + IG grid) | ⏳ Needs IG photos |
| 4 | Content Integration (product images, reviews, team photo, maps) | ⏳ Needs Step 1 |
| 5 | Form Backend (Formspree/EmailJS) | 🟢 Can start now |
| 6 | QA + SEO (meta tags, 404, OG tags, favicon) | 🟢 Can start now |
| 7 | Launch (shelbywindows.ca, DNS, SSL, Search Console) | ⏳ Last step |

### Step 1 — Content needed from Vick
- [ ] Photo of each window type (8 types)
- [ ] Photo of each door type (3 types)
- [ ] Team photo (for About page)
- [ ] 5 Instagram post images (for Home feed)
- [ ] 8 past project photos (for Our Work)
- [ ] Real Google reviews (3+ for Home page)
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
- All `instagramPosts` images in `Home.jsx` → `null`
- All product images in `ProductCard` → placeholder gradient
- All 8 OurWork project images → `null`
- Reviews section → skeleton placeholder cards
- Team photo in `About.jsx` → placeholder text box
- About story copy → marked PLACEHOLDER
- Contact form → no email sending (frontend only)
