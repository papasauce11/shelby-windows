# Shelby Windows & Doors -- Session Handoff

## Quick Reference (start every session here)

**Find your bash mount path:**
```bash
ls /sessions/*/mnt/
```

**Build command** (EPERM on `dist/`, always use alt output dir):
```bash
cd /sessions/<session>/mnt/shelby-windows && npx vite build --outDir /tmp/shelby-build
```

**Push command** (give this to Josh as PowerShell):
```powershell
cd C:\Users\Varai\Desktop\Varaico\shelby-windows; git add -A; git commit -m "message"; git push origin main
```

**Gotchas:**
- The Edit tool injects null bytes (`\x00`) into files frequently. Fix: `perl -pi -e 's/\x00//g' file` then check `tail` for truncation. For critical edits, prefer writing via `cat > file << 'EOF'` in bash.
- After null byte cleanup, always check if the file got truncated (`tail -10 file`). Rebuild the ending via bash if needed.
- Vercel is Linux/case-sensitive -- asset filenames must match exactly (note: `custom windows.PNG` and `Tilt windows.png` have uppercase extensions).
- Vercel CDN caches aggressively -- if Josh sees stale content on another device, tell him Ctrl+Shift+R or incognito.
- Sandbox disk fills up after many builds. Clean with `rm -rf /tmp/shelby-build*` or use a single output dir name.
- **NEVER do bulk file operations across the codebase in a single session.** A previous optimization attempt corrupted 60 files by truncating every one. One change at a time, build-verify after each.
- **NEVER convert external CDN image URLs to different formats.** We don't control supplier servers. If `goldenwindows.com` serves `.jpg`, that's what we use. Only local assets in `src/assets/` can be format-converted.
- **After ANY bulk edit, run the file integrity check** (see Incident Log below) before pushing.

---

## Project
- **Client:** Shelby Windows & Doors Inc. (Vick)
- **Site:** shelbywindows.ca (live on Vercel -- not custom domain yet)
- **GitHub:** github.com/papasauce11/shelby-windows (private)
- **Stack:** Vite + React + Tailwind v4 (`@tailwindcss/vite`, `@theme` in `index.css`)
- **Router:** React Router v6
- **Repo path:** `C:\Users\Varai\Desktop\Varaico\shelby-windows`
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
- `1.png`, `2.png`, `3.png`, `5.png`, `6.png` — lifestyle photos (no `4.png`)
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
- Contact column includes team contacts: Vick Mandla (CEO & Founder, 647 997 6935) and Emily Petch (Operations Manager, 905 308 5185), separated by a `border-t border-warm-800` divider
- Hours: `w-8` day abbrev + time, tight `space-y-1.5`
- Bottom bar: copyright + "Website by Varaico" linking to `https://varaico.ca` (NOT varaico.com)

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
- Heading uses Cormorant Garamond italic (`fontFamily: "'Cormorant Garamond', serif"`, `italic font-light tracking-wide`)
- Heading: `[text-shadow:0_2px_12px_rgba(0,0,0,0.3)]`
- Body text: `[text-shadow:0_1px_6px_rgba(0,0,0,0.2)]`
- Default heading text: "Experience the Shelby Way"
- Minimal variant: plain, text + single button
- Padding: `py-14 md:py-24`

---

## Data Files

### `navigation.js`
- `navigation.main` — nav structure with Products mega-menu children
- `companyInfo` — address, phone, email, hours, social
  - Postal code `L4K 2C8` — confirmed

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
- Each: `slug`, `name`, `shortName`, `website`, `description`, `productsOffered[]`, `theme`, `tagline`, `heroImage`, `featuredProducts[]`
- Themes: amber (Golden Windows), teal (Vinyl Bilt), navy (Entryguard)
- Logos are NOT in the data file — they're mapped by slug in `SupplierLogo.jsx`
- Helper functions: `getSupplierBySlug()`, `getSuppliersForProduct()`

### `faq.js`
- 13 items — removed heritage homes Q, softened unverified claims
- Removed specific timeline hours/days, ENERGY STAR/argon claims

---

## Page-by-Page State

### `Home.jsx`
- Hero: `min-h-[70vh] sm:min-h-[90vh]`, full-bleed `hero.png`, two teal CTA buttons with tight drop shadows
- Hero layers (bottom to top): `bg-warm-100` fill → hero image (extends `-bottom-4`, `object-[47%_center] sm:object-center`) → dark overlay (25% black, fades to transparent at top 10% and bottom 90%)
- Hero section uses `-mb-1` and image extends past bounds to prevent gap with trust strip
- Hero h1: `[text-shadow:0_1px_4px_rgba(0,0,0,0.6),0_2px_10px_rgba(0,0,0,0.3)]`
- Hero subtitle: tight multi-layer text-shadow for pop; uses `&nbsp;` to prevent "warranties" orphaning
- Hero buttons: `bg-teal-600`, `min-w-[240px] sm:min-w-0`, tight custom box-shadows
- Trust strip: `bg-warm-100`, includes "Experience the Shelby Way" motto (Cormorant Garamond italic, `text-[1.35rem] sm:text-4xl`, `text-warm-400`) above 4 icon cards
- Trust strip padding: `pt-0 -mt-9 sm:mt-0 sm:pt-5` (overlaps into hero on mobile)
- Windows preview: 4 cards, Browse all link, `pt-8` mobile
- Doors heading: "Every entrance tells a story"
- Doors preview: all 5 door cards, Browse all link, `bg-warm-75`
- Supplier strip: all 3 suppliers, `pt-[60px]`, centered
- Proudly Canadian: large badge + updated human-sounding copy, `bg-warm-75`
- Financing: photo left (with text-shadow overlay), feature cards right (white bg, shadow-sm)
- Reviews: 3 real Google reviews, `bg-warm-75`, compact with "see more" toggle
- Instagram: 5 posts with real downloaded images, carousel with dot nav
- CTA: "Experience the Shelby Way" heading (Cormorant Garamond italic)

### `About.jsx`
- No HeroBanner
- Story section: text left / photo right (3.png, aspect-[4/5])
- Floating Canadian badge: `absolute -bottom-8 -left-8 hidden lg:block w-28 h-28`
- Values: 3 cards (Canadian Products, Quality Installation, Full-Service Experience) on `bg-warm-50`, no icons, `sm:grid-cols-3 max-w-5xl`
- Founder Spotlight: Vick Mandla headshot (`Vick Headshot.PNG`, portrait cutout with transparent bg) left, text right
- Header: "CEO & Founder" label + "Vick Mandla" heading
- Copy emphasizes personal involvement start-to-finish, includes italic quote
- Headshot uses `drop-shadow-xl`, sized `w-64 sm:w-80 lg:w-96`
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
- Home hero: layered bg (warm-100 → image → 25% dark overlay fading to transparent at edges), tight text-shadows
- Home hero image position: `object-[47%_center]` on mobile, `object-center` on desktop
- CTASection: Cormorant Garamond italic heading, text-shadow on heading + body text
- "Experience the Shelby Way" motto: appears in trust strip (above cards) and as CTA heading, both in Cormorant Garamond italic
- Financing overlay text: text-shadow on heading + label
- Financing feature cards: `bg-white shadow-sm hover:shadow-md` (was flat warm-50)
- All hero copy and trust strip labels rewritten (non-AI sounding)
- Supplier pages: full-bleed hero imagery with 10% themed tint, white text + drop shadows
- About values: 3 cards (no icons), clean `sm:grid-cols-3` layout
- Section backgrounds alternate: white / `bg-warm-75` / `bg-warm-100` for visual separation
- Sticky CTA bar: mobile only
- Google Fonts: DM Serif Display, Plus Jakarta Sans, DM Sans, Cormorant Garamond (italic 300/400)

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
- [x] Confirm postal code — `L4K 2C8` confirmed by Vick
- [ ] Real Google Maps embed URL for 10 Planchet Rd, Unit 4, Vaughan

### Step 2 — Remaining copy work
- Rewrite all product descriptions (8 windows + 3 doors) to sound human/non-AI
- Write About page story from Vick's actual input
- Rewrite FAQ answers where needed

### Step 5 — Form backend
- ✅ Contact form wired to Web3Forms (access key: `73f9bfa3-d56f-4ae6-864d-8e1c2ae5fca4`)
- Sends: name, email, phone, reason, message to info@shelbywindows.ca

---

## Pricing (Varaico internal)
- 12 × $115/mo + $750 setup = **$2,130 value**
- Offer: **$2,000 all-in** if Vick is happy
- Floor: **$1,500** if hesitant

---

## Known Issues / Placeholders
- ~~Postal code~~ → `L4K 2C8` confirmed
- Google Maps iframe src in `Contact.jsx` → placeholder coordinates, not real address
- About story copy → marked PLACEHOLDER, needs Vick's actual company story
- ~~Contact form~~ → Web3Forms wired up, sends to info@shelbywindows.ca

### Resolved (previously placeholders)
- ~~Instagram images~~ → 5 real IG images downloaded and wired up
- ~~Window product images~~ → all 8 local images in `src/assets/windows/`
- ~~OurWork project images~~ → 5 projects with real IG images
- ~~Reviews section~~ → 3 real Google reviews integrated
- ~~Team photo / bio~~ → Founder spotlight with Vick's headshot + personal copy

---

## Incident Log

### May 18, 2026 — Bulk Optimization Corruption

**What happened:** A separate chat session attempted performance optimization (PNG-to-WebP conversion, lazy loading, font preloading). The bulk edit operation truncated 60 files across the entire codebase — every `.jsx`, `.js`, `.json`, `.css`, and `.html` file lost 5-15 lines each. The chat claimed it reverted via `git reset --hard` but the revert did not work.

**What broke:**
- `vite.config.js`, `package.json`, `vercel.json` — all truncated, missing closing braces
- All external image URLs (Golden Windows, Entryguard, WindowStar CDNs) were rewritten from `.jpg` to `.webp` in the built JS bundle — those `.webp` files don't exist on supplier servers, returning 503 errors
- Every door product image was broken on the live site
- Window images appeared degraded

**Root cause:** Bulk find-replace across all files without per-file verification. The Edit tool's known truncation issue compounded across 60 files. External CDN URLs were treated the same as local assets — the optimization assumed all image servers support webp, which they don't.

**How it was fixed:** Restored all 60 files from `HEAD` using a Python script that compared disk content to git content and overwrote any differences. Verified build produced correct `.png` local assets and `.jpg` external URLs.

**Prevention rules (mandatory for all future sessions):**
1. Never do bulk edits across more than 3 files without building after each file
2. Never modify external CDN URLs — we don't control those servers
3. After any multi-file edit, run the integrity check below
4. Performance optimization must be done incrementally: one optimization type at a time, build-verify, commit, then next
5. Use Python scripts via bash for any file modification — never use the Edit tool for bulk operations

---

## File Integrity Check

Run this after any multi-file edit or before any push to catch truncation/corruption:

```bash
cd /sessions/<session>/mnt/shelby-windows && python3 << 'PYCHECK'
import subprocess, os
result = subprocess.run(['git', 'ls-tree', '-r', '--name-only', 'HEAD'], capture_output=True, text=True)
tracked = result.stdout.strip().split('\n')
issues = []
for f in tracked:
    if not os.path.exists(f):
        issues.append(f"MISSING: {f}")
        continue
    git_content = subprocess.run(['git', 'show', f'HEAD:{f}'], capture_output=True)
    with open(f, 'rb') as fh:
        disk = fh.read()
    if git_content.stdout != disk:
        gl = git_content.stdout.count(b'\n')
        dl = disk.count(b'\n')
        issues.append(f"CHANGED: {f} (git:{gl}L disk:{dl}L)")
if issues:
    print(f"WARNING: {len(issues)} files differ from HEAD:")
    for i in issues: print(f"  {i}")
else:
    print("All files match HEAD. Safe to push.")
PYCHECK
```

---

## Performance Optimization — Safe Approach

If performance optimization is needed in the future, follow this order. **One step at a time, build + verify after each.**

1. **Local image optimization** — Convert `src/assets/` PNGs to WebP using a build tool (not find-replace). Update imports to match new filenames. Build. Verify images load.

2. **Lazy loading** — Add `loading="lazy"` to below-fold images only. Hero and above-fold images stay eager. Build. Verify.

3. **Font loading** — Move `@import` to `<link rel="preconnect">` + `<link rel="stylesheet">` in `index.html`. Build. Verify fonts still load.

4. **Priority hints** — Add `fetchpriority="high"` to hero image. Build. Verify.

**Never touch external URLs.** Supplier CDN images (goldenwindows.com, entryguarddoors.com, windowstar.ca) stay as-is.
