# Mobile Optimization Brief — Shelby Windows & Doors

## Objective
Comprehensive mobile optimization pass. The site looks great on desktop but needs a dedicated mobile polish to feel elegant, modern, and fast on phones. The goal is a site that feels intentionally designed for mobile, not just a responsive shrink-down.

**Live site:** https://shelby-windows.vercel.app
**Viewport target:** 375-430px (iPhone SE through iPhone Pro Max)
**Stack:** Vite + React + Tailwind v4 (breakpoints: `sm:640px`, `md:768px`, `lg:1024px`)

---

## Research-Backed Principles to Follow

1. **Touch targets:** Minimum 44x44px (Apple) / 48x48px (Material Design). Space interactive elements at least 8px apart.
2. **Card grids:** Use 2-column grids on mobile for product cards. Single-column cards that fill the whole screen waste scroll and feel bloated.
3. **Content density:** Show 2-3 cards per screen fold. Users should always see partial content below to encourage scrolling.
4. **Input font size:** Minimum 16px to prevent iOS auto-zoom on focus.
5. **Thumb zone:** Primary CTAs and navigation in the bottom third of the screen where thumbs reach easily.
6. **Reduce padding/margins:** Desktop-sized whitespace feels excessive on mobile. Tighten section padding.
7. **Image aspect ratios:** Square (1:1) or portrait (3:4) for product cards on mobile. Landscape wastes vertical space.
8. **Typography:** Scale down headings aggressively. A 3xl desktop heading should be xl or 2xl on mobile, not 3xl.

---

## Page-by-Page Issues & Fixes Needed

### Home (`src/pages/Home.jsx`)

**Hero section (lines 46-73):**
- `min-h-[85vh]` is very tall on mobile. Consider `min-h-[70vh]` or `min-h-[65vh]` for phones.
- CTA buttons stack vertically with `flex-col` which is correct, but `max-w-xs` constrains width too much. Buttons should be full-width on mobile for easy tapping.

**Trust strip (lines 76-106):**
- `grid-cols-2` on mobile is fine, but cards have `p-5 sm:p-6` which may be too padded. Consider `p-3` on mobile with smaller icons (`w-7 h-7` instead of `w-9 h-9`).
- Label text `text-sm` is fine.

**Product cards — MAJOR ISSUE (lines 108-176):**
- `grid-cols-1` on mobile means each card takes up a full screen width. This is the #1 issue.
- Should be `grid-cols-2` on mobile. The `ProductCard.jsx` component uses `aspect-[4/3]` images + `p-6` text block — on a 2-col mobile grid, reduce padding to `p-3 sm:p-6`, text sizes to `text-sm` for title and `text-xs` for description.
- Door cards: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-5` — same issue. Should start at `grid-cols-2`.

**Proudly Canadian (lines 197-207):**
- `w-72 h-72` badge is 288px — nearly full screen width on a 375px phone. Reduce to `w-48 h-48` or `w-40 h-40` on mobile.

**Reviews (lines 252-310):**
- `grid-cols-1 md:grid-cols-3` — each review card takes full width on mobile.
- Reviews are long text blocks (Herbert's is 60+ words). On mobile, consider truncating with "Read more" expand, or showing fewer reviews.
- Card padding `p-8` is generous for mobile. Reduce to `p-5` on mobile.

**Instagram carousel (lines 312-370):**
- Mobile carousel is fine (already has swipe). The `aspect-square` takes up a lot of vertical space — could reduce slightly.

### ProductCard Component (`src/components/shared/ProductCard.jsx`)

**This component needs mobile-specific changes:**
- `p-6` text area → `p-3 sm:p-6`
- `text-lg` title → `text-base sm:text-lg` (or even `text-sm` in a 2-col grid)
- `text-sm` description → `text-xs sm:text-sm`
- `mt-4` "Learn more" → `mt-2 sm:mt-4`
- `line-clamp-2` description → consider `line-clamp-1` on mobile or hiding entirely in compact mode
- Consider a `compact` prop or just using smaller defaults with `sm:` breakpoint scaling

### Header (`src/components/layout/Header.jsx`)

**Mobile menu (lines 143-214):**
- Menu overlay starts at `top-20` which is correct (below fixed header).
- Touch targets are `min-h-[48px]` — good.
- Products accordion works. Check that it scrolls properly when expanded (long list of products).
- The "Get a Quote" button at bottom is `py-4 text-lg` — good prominent CTA.

**Logo on mobile:**
- `h-[66px]` logo may be slightly too tall for a 20px-tall header bar on mobile. Consider `h-[48px] sm:h-[66px]` so the header doesn't feel cramped.

### Footer (`src/components/layout/Footer.jsx`)

**Layout (lines 12-117):**
- `grid-cols-1 lg:grid-cols-12` — on mobile, everything stacks to one column.
- The 4 nav columns use `grid-cols-2 sm:grid-cols-4` which is fine for tablet, but on narrow phones the 2-col layout with `pl-[30px]` on Pages column creates awkward left padding. Remove or reduce `pl-[30px]` on mobile.
- Bottom bar: `flex-col sm:flex-row` — stacking is correct.

### Product Detail (`src/pages/ProductDetail.jsx`)

**Split hero (lines 30-54):**
- `grid-cols-1 lg:grid-cols-2` — on mobile, image stacks above text. Image has `min-h-[36vh] sm:min-h-[44vh]` which is fine.
- Text content `px-5 sm:px-8 lg:px-16 py-10` — decent mobile padding.

**Collections (lines 64-84):**
- `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` — single column on mobile means each portrait collection card takes huge vertical space. Should be `grid-cols-2` on mobile.
- Collection card `aspect-[3/4]` portrait — in a 2-col grid this would be a reasonable size.

**Features grid (lines 86-101):**
- `grid-cols-1 md:grid-cols-2` — single column is fine for feature text blocks.

**Brochures (lines 103-123):**
- `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` — single column on mobile. Could do 2-col since brochure items are compact.

**Related products (lines 137-146):**
- `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` — same single-column issue. Use `grid-cols-2`.

### Supplier Detail (`src/pages/SupplierDetail.jsx`)

**Hero (lines 69-114):**
- `pt-28 sm:pt-32 pb-12 sm:pb-16` — fairly large top padding on mobile. Could reduce `pt-24`.
- Description text is full-width white text over image — check readability on small screens.

**Product grid (lines 117-135):**
- `grid-cols-1 sm:grid-cols-2` — single column on mobile. Same fix: `grid-cols-2`.

### Product Category (`src/pages/ProductCategory.jsx`)

- Product grid likely uses `grid-cols-1` on mobile — change to `grid-cols-2`.

### About (`src/pages/About.jsx`)

- Values cards: `grid-cols-1 sm:grid-cols-3` — on mobile, 3 cards stack single-column. This is fine for content blocks with text, but check spacing.
- Story section photo: `aspect-[4/5]` — very tall on mobile. May need reduced height.

### FAQ (`src/pages/FAQ.jsx`)

- Two-column layout collapses to single column on mobile — fine.
- Check accordion touch targets and spacing.

### Contact (`src/pages/Contact.jsx`)

- Form card layout — should be fine as single column.
- Check input font sizes (must be 16px+ to prevent iOS zoom).

### Our Work (`src/pages/OurWork.jsx`)

- Project card grid — check if cards are too large on mobile.

---

## Priority Order for Implementation

### P0 — High Impact (do first)
1. **Product cards 2-column on mobile** — affects Home, ProductCategory, ProductDetail, SupplierDetail. Change all `grid-cols-1` to `grid-cols-2` for product card grids. Adjust `ProductCard.jsx` padding/typography for compact mobile display.
2. **Reduce section padding on mobile** — many sections use `py-12` which creates excessive whitespace. Use `py-8 sm:py-12 lg:py-24` pattern.
3. **Canadian badge size** — reduce from `w-72 h-72` to `w-48 h-48` on mobile.

### P1 — Medium Impact
4. **Review cards** — reduce padding, consider truncation on mobile.
5. **Collection cards 2-col on mobile** — ProductDetail collections grid.
6. **Footer padding fix** — remove `pl-[30px]` on mobile.
7. **Hero height reduction** — `min-h-[70vh]` instead of `min-h-[85vh]` on mobile.

### P2 — Polish
8. **Header logo size** — slightly smaller on mobile.
9. **Typography scale-down** — audit all headings, ensure proper mobile sizes.
10. **Brochure grid 2-col on mobile**.
11. **Trust strip card padding** — tighter on mobile.

---

## Implementation Notes

- **Tailwind v4** with `@tailwindcss/vite` plugin. Custom theme defined in `src/index.css` via `@theme`.
- All breakpoints are mobile-first (no prefix = mobile, `sm:` = 640px+, `md:` = 768px+, `lg:` = 1024px+).
- The `ProductCard` component is shared across 5+ pages — changes there cascade everywhere.
- Test at 375px (iPhone SE), 390px (iPhone 15), and 430px (iPhone 15 Pro Max).
- **Push workflow:** Always provide a PowerShell command: `cd C:\Users\Varai\Desktop\Varaico\shelby-windows; git add -A; git commit -m "message"; git push origin main`
- Site auto-deploys on Vercel from `main` branch.

---

## Files to Modify

| File | Changes |
|---|---|
| `src/components/shared/ProductCard.jsx` | Reduce padding, text sizes for mobile |
| `src/pages/Home.jsx` | 2-col product grids, hero height, badge size, review padding, section padding |
| `src/pages/ProductDetail.jsx` | 2-col collections, 2-col brochures, 2-col related products |
| `src/pages/SupplierDetail.jsx` | 2-col product grid, hero padding |
| `src/pages/ProductCategory.jsx` | 2-col product grid |
| `src/components/layout/Footer.jsx` | Remove `pl-[30px]` on mobile |
| `src/components/layout/Header.jsx` | Smaller logo on mobile |
| `src/pages/About.jsx` | Check values card spacing |
| `src/pages/OurWork.jsx` | Check project card sizing |

---

## Verification

After each batch of changes:
1. Run `npm run build` to verify no build errors
2. Push to main, wait for Vercel deploy
3. Open on actual phone or Chrome DevTools mobile emulation (375px width)
4. Scroll through every page checking: card sizes, touch targets, text readability, spacing, no horizontal overflow
