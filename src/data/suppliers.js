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
    heroImage: "https://goldenwindows.com/content/img/site/Home-Banner-Black-Windows.jpg",
    description: `Canadian-owned and operated out of Kitchener, Ontario. Three product lines — GoldenVinyl, GoldenClad, and GoldenWood — covering windows, patio doors, and terrace systems, all engineered for our climate.`,
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
    heroImage: "https://www.vinylbilt.com/wp-content/uploads/2022/09/AdobeStock_341128778_Preview.jpg",
    description: `Ontario-based with over 45 years in the business. Fusion-welded vinyl frames built for thermal performance, available in a full range of styles from casement and single-hung to bay, bow, and custom shapes.`,
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
    heroImage: "https://entryguarddoors.com/wp-content/uploads/2024/12/Hero-4.jpg",
    description: `Canadian-made entry door systems in fiberglass, steel, and high-performance steel. Insulated cores, multi-point locking, and a wide range of modern and classic designs built for our climate.`,
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
