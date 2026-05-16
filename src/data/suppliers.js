// SHELBY WINDOWS & DOORS - Supplier Data
// All supplier/brand content. Single source of truth for supplier pages.

export const suppliers = [
  {
    slug: "golden-windows",
    name: "Golden Windows",
    shortName: "Golden Windows",
    website: "https://www.goldenwindows.com",
    theme: "amber",
    tagline: "100% Canadian Owned & Operated",
    description: `Golden Windows is a 100% Canadian-owned manufacturer based in Kitchener, Ontario, producing premium windows and doors across three distinct product lines: GoldenVinyl for low-maintenance vinyl, GoldenClad for aluminum-clad wood, and GoldenWood for fully custom wood applications. They supply everything from standard casement and double-hung windows to sliding patio doors and terrace door systems, all engineered for Canadian climate performance.`,
    featuredProducts: ["casement", "double-hung", "sliding-patio", "terrace"],
    productsOffered: ["awning", "bay", "casement", "double-hung", "single-hung", "sliding", "custom-shape", "tilt", "sliding-patio", "terrace"],
    metaTitle: "Golden Windows | Our Suppliers | Shelby Windows & Doors",
    metaDescription: "Golden Windows - a trusted Canadian window manufacturer. Learn why Shelby Windows partners with Golden Windows for quality products."
  },
  {
    slug: "vinyl-bilt",
    name: "Vinyl Bilt",
    shortName: "Vinyl Bilt",
    website: "https://www.vinylbilt.com",
    theme: "teal",
    tagline: "Built for Reliable Comfort",
    description: `Vinyl Bilt is an Ontario-based manufacturer with over 45 years of experience building vinyl windows and patio doors. Their focus is on performance and value -- fusion-welded frames, multi-chamber profiles for thermal insulation, and a wide selection of interior and exterior design options. They carry a full range of window styles from casement and single-hung to bay, bow, and custom shapes.`,
    featuredProducts: ["casement", "single-hung", "sliding", "bay"],
    productsOffered: ["awning", "bay", "casement", "double-hung", "single-hung", "sliding", "custom-shape", "tilt"],
    metaTitle: "Vinyl Bilt | Our Suppliers | Shelby Windows & Doors",
    metaDescription: "Vinyl Bilt - Canadian vinyl window and door manufacturer. See why Shelby Windows partners with Vinyl Bilt for durable, efficient products."
  },
  {
    slug: "entryguard-doors",
    name: "Entryguard Doors",
    shortName: "Entryguard",
    website: "https://entryguarddoors.com/",
    theme: "navy",
    tagline: "Best-In-Class Design & Construction",
    description: `Entryguard Doors is a Canadian manufacturer specializing in premium entry door systems. They build fiberglass, steel, and high-performance steel doors with insulated cores, multi-point locking hardware, and a wide range of modern and classic glass and panel designs. Every door is made in Canada and built to handle our climate while making a strong first impression.`,
    featuredProducts: ["fiberglass-entry-doors", "steel-entry-doors", "nhp-steel-entry-doors"],
    productsOffered: ["fiberglass-entry-doors", "steel-entry-doors", "nhp-steel-entry-doors"],
    metaTitle: "Entryguard Doors | Our Suppliers | Shelby Windows & Doors",
    metaDescription: "Entryguard Doors - Canadian entry door manufacturer. See why Shelby Windows partners with Entryguard for secure, stylish entrance doors."
  }
];

// Helper to find supplier by slug
export function getSupplierBySlug(slug) {
  return suppliers.find(s => s.slug === slug) || null;
}

// Helper to get suppliers that carry a specific product
export function getSuppliersForProduct(productSlug) {
  return suppliers.filter(s => s.productsOffered.includes(productSlug));
}
