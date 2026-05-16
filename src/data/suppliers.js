// SHELBY WINDOWS & DOORS - Supplier Data
// All supplier/brand content. Single source of truth for supplier pages.
// PLACEHOLDER — descriptions should be verified against actual supplier info.

export const suppliers = [
  {
    slug: "golden-windows",
    name: "Golden Windows",
    shortName: "Golden Windows",
    website: "https://www.goldenwindows.com",
    description: `Golden Windows Limited is a Canadian manufacturer of high-performance windows and doors based in Kitchener, Ontario. With decades of experience in the industry, they produce a comprehensive range of vinyl, hybrid, and aluminum window and door systems designed specifically for Canadian climate conditions.

Their product line covers virtually every residential window type, from standard casement and double-hung units to specialty shapes and large-format configurations. Golden Windows is recognized for their commitment to energy efficiency, with many products meeting or exceeding ENERGY STAR certification requirements.

As a Shelby Windows supplier, Golden Windows provides us with reliable, Canadian-made products backed by strong warranty coverage and consistent manufacturing quality.`,
    productsOffered: ["awning", "bay", "casement", "double-hung", "folding", "picture", "single-hung", "sliding", "specialty", "tilt-turn", "entrance", "sliding-patio", "swinging-patio", "multi-slide", "lift-slide", "folding-doors"],
    // PLACEHOLDER — confirm exact URL
    metaTitle: "Golden Windows | Our Suppliers | Shelby Windows & Doors",
    metaDescription: "Golden Windows - a trusted Canadian window manufacturer. Learn why Shelby Windows partners with Golden Windows for quality products."
  },
  {
    slug: "vinyl-bilt",
    name: "Vinyl Bilt",
    shortName: "Vinyl Bilt",
    website: "https://www.vinylbilt.com", // PLACEHOLDER — confirm exact URL
    description: `Vinyl Bilt is a Canadian manufacturer specializing in vinyl window and door products. Their manufacturing focuses on delivering durable, energy-efficient products at a strong value point, making quality windows accessible for a wide range of residential projects.

Vinyl Bilt products are engineered for the demands of Canadian weather, with multi-chamber vinyl profiles that provide thermal insulation and structural strength. Their windows feature fusion-welded frames and sashes for long-term durability and resistance to air and water infiltration.

As a Shelby Windows supplier, Vinyl Bilt gives us access to a well-rounded product line that balances performance, aesthetics, and value for homeowners across Ontario.`,
    productsOffered: ["awning", "bay", "casement", "double-hung", "folding", "picture", "single-hung", "sliding", "specialty", "tilt-turn", "entrance", "sliding-patio", "swinging-patio", "multi-slide", "lift-slide", "folding-doors"],
    metaTitle: "Vinyl Bilt | Our Suppliers | Shelby Windows & Doors",
    metaDescription: "Vinyl Bilt - Canadian vinyl window and door manufacturer. See why Shelby Windows partners with Vinyl Bilt for durable, efficient products."
  },
  {
    slug: "entryguard-doors",
    name: "Entryguard Doors",
    shortName: "Entryguard",
    website: "https://entryguarddoors.com/",
    description: `Entryguard Doors Inc. is a Canadian door manufacturer with a focus on entrance door systems. They produce a range of steel and fibreglass entry doors designed for security, durability, and curb appeal in the Canadian residential market.

Entryguard door systems feature insulated cores, multi-point locking hardware, and a wide selection of decorative glass and panel designs. Their products are engineered to withstand the temperature extremes and weather conditions typical of Ontario and the broader Canadian climate.

As a Shelby Windows supplier, Entryguard provides us with specialized entrance door products that deliver the security and visual presence that homeowners expect from their front entry.`,
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
