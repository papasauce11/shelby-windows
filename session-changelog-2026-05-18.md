# Shelby Windows -- Session Changelog (May 18, 2026)

## Files Modified

### `src/components/layout/Footer.jsx`

**1. Added team contacts to Contact column**
- Removed the phone number link (`companyInfo.phone`)
- Added a `border-t border-warm-800` divider
- Added Vick Mandla: name (white, xs, font-medium), "CEO & Founder" (warm-500, xs), tel link 647 997 6935
- Added Emily Petch: name (white, xs, font-medium), "Operations Manager" (warm-500, xs), tel link 905 308 5185
- Changed `space-y-1.5` to `space-y-3` on the contact div

**2. Changed Varaico link**
- `href` changed from `https://varaico.com` to `https://varaico.ca`

**3. Added Facebook link below Instagram**
- New `<a>` tag pointing to `https://www.facebook.com/profile.php?id=61570583433801`
- Facebook SVG icon + "Shelby Windows & Doors" label
- Same styling as Instagram link: `text-xs text-warm-500 hover:text-teal-400`

---

### `src/pages/About.jsx`

**1. Replaced import**
- Removed: `import teamImg from '../assets/6.png'`
- Added: `import vickHeadshot from '../assets/Vick Headshot.PNG'`

**2. Replaced "Our Team" placeholder section with Founder Spotlight**

Before:
- Placeholder box with "Team Photo -- Coming Soon" text
- Header: "Our Team" / "The people behind the work"
- Generic team copy about installation experience

After:
- Vick's headshot image (`Vick Headshot.PNG`) displayed left, sized `w-64 sm:w-80 lg:w-96` with `drop-shadow-xl`
- Header label: "CEO & Founder"
- Heading: "Vick Mandla"
- Two paragraphs:
  - "Every Shelby project starts and ends with Vick. From the first phone call to the final walkthrough, he's personally involved because he believes that's the only way to guarantee the result lives up to the Shelby name."
  - "He listens first, recommends what actually makes sense for your project, and stays hands-on through every stage of the installation."
- Layout: headshot `order-2 lg:order-1`, text `order-1 lg:order-2` (text on top on mobile)

---

### `src/assets/Vick Headshot.PNG`

- New file added (446 KB). Portrait cutout with transparent background.

---

### `CLAUDE.md`

**1. Footer section updated**
- Added line about team contacts (Vick + Emily with titles and numbers)
- Changed "Website by Varaico with link" to specify `https://varaico.ca` (NOT varaico.com)

**2. About section updated**
- Removed "Team: placeholder box" and "Team copy: placeholder" lines
- Added Founder Spotlight documentation (headshot, header, copy, sizing details)

**3. Known Issues updated**
- Removed "Team photo in About.jsx" placeholder entry
- Removed "About team copy" placeholder entry
- Added to Resolved list: "Team photo / bio -- Founder spotlight with Vick's headshot + personal copy"

---

### `src/components/layout/.fuse_hidden0000000b00000003`

- Artifact from filesystem operations. Should be deleted (not intentional).

---

## Attempted but Reverted

### Performance optimization (commit bb942c3, reverted to 6616d2a)

The following changes were made and then fully reverted via `git reset --hard`:

- Converted all PNG/JPG images to WebP (70 MB to 1.1 MB)
- Updated all import paths from `.png`/`.jpg`/`.PNG` to `.webp`
- Added `loading="lazy"` to all off-screen `<img>` tags
- Moved Google Fonts from CSS `@import` in `index.css` to `<link>` tags in `index.html` with `<link rel="preconnect">`
- Added `fetchpriority="high"` to home hero image

**Files that were touched during this revert cycle:**
- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/pages/Contact.jsx`
- `src/pages/FAQ.jsx`
- `src/pages/OurWork.jsx`
- `src/pages/ProductCategory.jsx`
- `src/pages/ProductDetail.jsx`
- `src/pages/SupplierDetail.jsx`
- `src/components/layout/Footer.jsx`
- `src/components/layout/Header.jsx`
- `src/components/shared/ProductCard.jsx`
- `src/components/shared/SupplierLogo.jsx`
- `src/data/products.js`
- `src/index.css`
- `index.html`
- All files in `src/assets/` (webp copies created then removed)

All of these were restored to their pre-performance state by the hard reset.

---

## Pre-existing Issue Identified

All door product images use external CDN URLs (goldenwindows.com, entryguarddoors.com, windowstar.ca) that are returning broken images. These URLs were not modified during this session. The external sites may be blocking hotlinking. Fix: download images locally, same approach used for window product images.
