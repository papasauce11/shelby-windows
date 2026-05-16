// SHELBY WINDOWS & DOORS - Product Data
// All product content for windows and doors.
// This is the single source of truth for all product detail pages.
// Comments marked PLACEHOLDER indicate content that should be confirmed with Vick.

export const products = {
  windows: [
    {
      slug: "awning",
      name: "Awning Windows",
      category: "windows",
      shortDescription: "Top-hinged windows that open outward for ventilation, even during light rain.",
      description: `Awning windows are hinged along the top edge and swing outward from the bottom when opened. This design creates a natural awning effect that allows fresh air into your home while keeping rain and debris out.

Because they seal tightly against the frame when closed, awning windows deliver strong energy performance. They work particularly well in areas where you want consistent airflow without worrying about the weather, such as bathrooms, kitchens, and basements.

Awning windows can be installed individually or grouped with fixed picture windows to combine ventilation with expansive views. Their crank-operated mechanism makes them easy to open and close, even when installed above countertops or in hard-to-reach positions.`,
      features: [
        "Top-hinged sash opens outward for rain-resistant ventilation",
        "Tight seal when closed for strong energy efficiency",
        "Crank-operated for easy use in hard-to-reach spots",
        "Pairs well with fixed or casement windows for combined views and airflow",
        "Available in a range of sizes, colours, and frame materials",
        "Ideal for bathrooms, kitchens, and basement installations"
      ],
      suppliers: ["golden-windows", "vinyl-bilt"],
      relatedProducts: ["casement", "sliding"],
      metaTitle: "Awning Windows | Shelby Windows & Doors",
      metaDescription: "Awning windows from Shelby Windows & Doors. Top-hinged for ventilation rain or shine. Installed across Ontario with Canadian-made products."
    },
    {
      slug: "bay",
      name: "Bay Windows",
      category: "windows",
      shortDescription: "Multi-panel windows that project outward, adding depth and natural light to any room.",
      description: `Bay windows extend outward from the wall of your home, typically combining a large centre panel with two angled side panels. This projection creates additional interior space and draws in natural light from multiple directions.

The centre panel is usually fixed, while the flanking windows can be casement or double-hung units that open for ventilation. This combination gives you panoramic views alongside practical airflow.

Bay windows are a strong architectural feature. They add visual interest from both inside and outside the home, and the extended sill creates a natural shelf for plants, seating, or display space. They work especially well in living rooms, dining areas, and master bedrooms where you want to make a room feel larger and brighter.`,
      features: [
        "Projects outward to add interior space and depth",
        "Draws natural light from three angles",
        "Centre panel with operable side windows for ventilation",
        "Creates a natural shelf or seating area at the sill",
        "Strong architectural statement from inside and out",
        "Custom sizing and angle configurations available"
      ],
      suppliers: ["golden-windows", "vinyl-bilt"],
      relatedProducts: ["casement", "custom-shape"],
      metaTitle: "Bay Windows | Shelby Windows & Doors",
      metaDescription: "Bay windows from Shelby Windows & Doors. Add depth, light, and character to your home with Canadian-made multi-panel bay windows."
    },
    {
      slug: "casement",
      name: "Casement Windows",
      category: "windows",
      shortDescription: "Side-hinged windows that crank open fully for maximum ventilation and unobstructed views.",
      description: `Casement windows are hinged on one side and swing outward using a crank handle. When fully open, the entire sash clears the frame, giving you maximum ventilation and an unobstructed view.

The outward-swinging design means casement windows catch side breezes effectively, directing airflow into the room. When closed, the sash presses tightly against the weatherstripping, creating one of the strongest seals of any operable window type. This makes them an excellent choice for energy efficiency.

Casement windows are versatile and work well in nearly any room. You will often find them installed over kitchen sinks and countertops where a crank mechanism is easier to operate than a sliding or lifting action. They can also be grouped together for a wall of windows that opens wide.`,
      features: [
        "Full sash opening for maximum airflow",
        "Crank-operated for easy, one-handed use",
        "Tight compression seal for superior energy efficiency",
        "Catches side breezes to direct air into the room",
        "Clean sightlines with no centre rail",
        "Available in multiple frame materials and finishes"
      ],
      suppliers: ["golden-windows", "vinyl-bilt"],
      relatedProducts: ["awning", "double-hung"],
      metaTitle: "Casement Windows | Shelby Windows & Doors",
      metaDescription: "Casement windows from Shelby Windows & Doors. Side-hinged, crank-operated windows for maximum ventilation. Canadian-made quality."
    },
    {
      slug: "double-hung",
      name: "Double-Hung Windows",
      category: "windows",
      shortDescription: "Classic two-sash windows where both the top and bottom panels slide for flexible ventilation.",
      description: `Double-hung windows feature two sashes that slide vertically within the frame. Both the upper and lower sash can be opened, giving you control over where air enters and exits the room.

Opening the top sash allows warm air to escape near the ceiling, while the bottom sash draws in cooler air at floor level. This creates natural convection that ventilates the room efficiently without mechanical assistance.

Many modern double-hung windows include tilt-in sashes, which let you clean the exterior glass from inside your home. Their traditional appearance suits a wide range of architectural styles, from heritage homes to new construction. They are one of the most widely used window types in Canadian residential building.`,
      features: [
        "Both sashes operate for flexible top and bottom ventilation",
        "Tilt-in sashes for easy interior cleaning",
        "Classic profile suits traditional and modern architecture",
        "No exterior projection when open, ideal for walkways and patios",
        "Reliable vertical sliding mechanism",
        "Wide range of sizes and grid patterns available"
      ],
      suppliers: ["golden-windows", "vinyl-bilt"],
      relatedProducts: ["single-hung", "casement", "sliding"],
      metaTitle: "Double-Hung Windows | Shelby Windows & Doors",
      metaDescription: "Double-hung windows from Shelby Windows & Doors. Two operable sashes for flexible ventilation. A Canadian classic for any home style."
    },
    {
      slug: "single-hung",
      name: "Single Hung Windows",
      category: "windows",
      shortDescription: "A classic window style where the bottom sash slides up while the top panel stays fixed.",
      description: `Single hung windows have a fixed upper sash and an operable lower sash that slides upward for ventilation. This straightforward design has been a staple of residential construction for generations.

With fewer moving parts than a double-hung window, single hung units tend to be more affordable while still delivering reliable performance. The fixed upper sash also provides a slightly stronger seal against air infiltration.

Single hung windows are a practical choice for bedrooms, hallways, and general living spaces. They suit both traditional and contemporary home styles and are available in a wide variety of sizes, frame materials, and grid configurations.`,
      features: [
        "Lower sash slides up for ventilation, upper sash stays fixed",
        "Fewer moving parts for reliable, low-maintenance operation",
        "Cost-effective without sacrificing quality",
        "Strong seal against air infiltration",
        "Suits traditional and contemporary architecture",
        "Tilt-in lower sash available for easy cleaning"
      ],
      suppliers: ["golden-windows", "vinyl-bilt"],
      relatedProducts: ["double-hung", "sliding", "casement"],
      metaTitle: "Single Hung Windows | Shelby Windows & Doors",
      metaDescription: "Single hung windows from Shelby Windows & Doors. Classic, reliable, and energy-efficient. Installed with Canadian-made products."
    },
    {
      slug: "sliding",
      name: "Sliding Windows",
      category: "windows",
      shortDescription: "Horizontal sliding windows that glide sideways on a track for easy, space-saving ventilation.",
      description: `Sliding windows operate on a horizontal track, with one or both sashes gliding sideways to open. They require no clearance above, below, or outside the window, making them an efficient choice where space is limited.

The horizontal format works naturally in wide openings, such as above kitchen counters, in basements, or along walls where you want a panoramic feel. Sliding windows provide generous ventilation when open and a clean, modern profile when closed.

Modern sliding windows use precision-engineered rollers for smooth, quiet operation. Many models feature lift-out sashes for easy cleaning and multi-point locks for security.`,
      features: [
        "Horizontal sliding operation requires no exterior clearance",
        "Smooth roller mechanism for effortless use",
        "Wide format suits kitchens, basements, and modern designs",
        "Lift-out sashes available for easy cleaning",
        "Multi-point locking for added security",
        "Available in two-panel and three-panel configurations"
      ],
      suppliers: ["golden-windows", "vinyl-bilt"],
      relatedProducts: ["single-hung", "double-hung"],
      metaTitle: "Sliding Windows | Shelby Windows & Doors",
      metaDescription: "Sliding windows from Shelby Windows & Doors. Smooth horizontal operation for space-saving ventilation. Canadian-made quality."
    },
    {
      slug: "custom-shape",
      name: "Custom Shape Windows",
      category: "windows",
      shortDescription: "Custom-shaped windows including arches, circles, and geometric designs for unique architectural features.",
      description: `Custom shape windows are made-to-order units designed to fit non-standard openings or to add distinctive architectural character to your home. Common shapes include arches, half-rounds, circles, octagons, triangles, and trapezoids.

Most custom shape windows are fixed units, designed primarily for light and visual impact rather than ventilation. They are often installed above doors, in gable ends, stairwells, or as accent pieces that complement standard rectangular windows below them.

Because every custom shape window is made to order, the sizing, shape, and finish options are broad. They can be matched to the frame material and colour of your other windows for a cohesive look across the entire home.`,
      features: [
        "Custom shapes including arches, circles, and geometric forms",
        "Made to order for precise fit in non-standard openings",
        "Primarily fixed units for light and architectural impact",
        "Colour and material matched to complement standard windows",
        "Ideal for gable ends, transoms, and accent positions",
        "Available with decorative glass and grid options"
      ],
      suppliers: ["golden-windows", "vinyl-bilt"],
      relatedProducts: ["bay", "casement"],
      metaTitle: "Custom Shape Windows | Shelby Windows & Doors",
      metaDescription: "Custom shape windows from Shelby Windows & Doors. Arches, circles, and unique geometries. Made-to-order in Canada."
    },
    {
      slug: "tilt-turn",
      name: "Tilt & Turn Windows",
      category: "windows",
      shortDescription: "European-style windows that tilt inward at the top or swing fully open like a door.",
      description: `Tilt and turn windows offer two distinct opening modes in a single unit. In tilt mode, the top of the sash tilts inward, allowing controlled ventilation while maintaining security and weather protection. In turn mode, the sash swings fully inward like a door, providing wide-open access for cleaning or maximum airflow.

This dual-function design originated in Europe and has gained popularity in Canada for its versatility and performance. The multi-point locking system engages along all four sides of the sash, creating one of the tightest seals available in an operable window.

Tilt and turn windows are an excellent fit for upper-floor installations where exterior cleaning would otherwise require a ladder, and for bedrooms where you want secure overnight ventilation without a fully open window.`,
      features: [
        "Dual-mode operation: tilt for ventilation, turn for full opening",
        "Multi-point locking on all four sides for superior seal",
        "Inward opening allows easy cleaning from inside",
        "Tilt mode provides secure ventilation for overnight use",
        "European engineering adapted for Canadian climate",
        "Excellent energy performance with compression seals"
      ],
      suppliers: ["golden-windows", "vinyl-bilt"],
      relatedProducts: ["casement", "awning", "double-hung"],
      metaTitle: "Tilt & Turn Windows | Shelby Windows & Doors",
      metaDescription: "Tilt & turn windows from Shelby Windows & Doors. European-style dual-mode operation for versatile ventilation. Canadian installation."
    }
  ],
  doors: [
    {
      slug: "entrance",
      name: "Entrance Doors",
      category: "doors",
      shortDescription: "Front entry doors that set the tone for your home with security, insulation, and curb appeal.",
      description: `Your entrance door is the first thing visitors see and the last line of defence against the elements. A well-chosen entry door combines visual impact with practical performance: thermal insulation, weather resistance, and physical security.

Entrance doors are available in steel, fibreglass, and wood, each offering a different balance of durability, maintenance, and appearance. Steel doors provide the strongest security at the most accessible price point. Fibreglass doors resist denting and offer realistic wood-grain textures without the upkeep. Solid wood doors deliver unmatched warmth and character for a premium finish.

Sidelites, transoms, and decorative glass inserts allow you to customize the look and control how much natural light enters your foyer. Multi-point locking hardware and reinforced frames are standard on quality entrance door systems.`,
      features: [
        "Available in steel, fibreglass, and solid wood",
        "Multi-point locking systems for enhanced security",
        "Sidelite and transom options for added light and style",
        "Decorative and privacy glass insert options",
        "Weatherstripping and insulated cores for energy efficiency",
        "Custom sizing, colours, and hardware finishes available"
      ],
      suppliers: ["entryguard-doors", "golden-windows", "vinyl-bilt"],
      relatedProducts: ["sliding-patio", "swinging-patio", "folding"],
      metaTitle: "Entrance Doors | Shelby Windows & Doors",
      metaDescription: "Entrance doors from Shelby Windows & Doors. Steel, fibreglass, and wood entry doors. Secure, insulated, and built to impress."
    },
    {
      slug: "folding",
      name: "Folding Doors",
      category: "doors",
      shortDescription: "Multi-panel doors that fold open to create a wide, unobstructed connection to outdoor spaces.",
      description: `Folding doors, sometimes called bi-fold doors, consist of multiple panels that fold against each other and stack to one or both sides of the opening. When fully retracted, they create a dramatic, unobstructed passage between indoor and outdoor living areas.

These doors are a premium choice for homeowners who want to open up a living room, kitchen, or entertaining space directly onto a patio, deck, or garden. The panels operate on a top-hung or bottom-rolling track system engineered for smooth, balanced movement even across wide spans.

When closed, folding doors provide full weather protection with continuous seals and multi-point locking across all panels. Low-profile thresholds create a seamless transition between interior floors and exterior surfaces.`,
      features: [
        "Multiple panels fold and stack to one or both sides",
        "Creates a wide, barrier-free opening to outdoor spaces",
        "Precision track system for smooth panel operation",
        "Multi-point locking across all panels for security",
        "Low-profile threshold for seamless floor transitions",
        "Available in a range of panel configurations and finishes"
      ],
      suppliers: ["golden-windows", "vinyl-bilt"],
      relatedProducts: ["multi-slide", "sliding-patio", "lift-slide"],
      metaTitle: "Folding Doors | Shelby Windows & Doors",
      metaDescription: "Folding doors from Shelby Windows & Doors. Multi-panel bi-fold systems for seamless indoor-outdoor living. Canadian-made quality."
    },
    {
      slug: "multi-slide",
      name: "Multi-Slide Doors",
      category: "doors",
      shortDescription: "Large-format sliding doors with multiple panels that stack or pocket into a wall for maximum opening.",
      description: `Multi-slide doors feature multiple large glass panels that slide along a track and stack behind each other or disappear into a wall pocket. This creates an expansive opening that standard sliding doors cannot match.

The panels can be configured to slide in one direction and stack at the side, or to split and slide to both sides for a centred opening. Pocket configurations hide the panels inside the wall cavity, leaving the entire opening clear.

Multi-slide doors are designed for wide openings and deliver a strong visual connection between indoor living areas and outdoor spaces. The large glass panels maximize natural light and views, while precision-engineered rollers ensure smooth, quiet operation even with heavy panels.`,
      features: [
        "Multiple panels slide and stack or pocket into walls",
        "Configurable to stack left, right, or split to both sides",
        "Pocket option hides panels inside the wall cavity",
        "Large glass panels maximize light and views",
        "Precision rollers for smooth, quiet operation",
        "Suitable for openings wider than standard sliding doors"
      ],
      suppliers: ["golden-windows", "vinyl-bilt"],
      relatedProducts: ["sliding-patio", "folding", "lift-slide"],
      metaTitle: "Multi-Slide Doors | Shelby Windows & Doors",
      metaDescription: "Multi-slide doors from Shelby Windows & Doors. Large-format sliding panels for wide openings. Premium Canadian installation."
    },
    {
      slug: "sliding-patio",
      name: "Sliding Patio Doors",
      category: "doors",
      shortDescription: "Space-saving patio doors that glide horizontally on a track for easy backyard access.",
      description: `Sliding patio doors are one of the most popular ways to connect your home to a deck, patio, or backyard. One panel slides horizontally along a track while the other remains fixed, providing a wide glass area for natural light and views without requiring any swing clearance.

Because the door slides rather than swings, it takes up zero floor space when opened. This makes sliding patio doors a practical choice for rooms where furniture placement or foot traffic would conflict with an outward- or inward-swinging door.

Modern sliding patio doors use heavy-duty roller systems for smooth, effortless operation. Multi-point locks, reinforced frames, and double or triple glazing are standard features that provide security and energy performance for year-round Canadian conditions.`,
      features: [
        "Horizontal sliding operation saves floor space",
        "Large glass area for natural light and outdoor views",
        "Heavy-duty rollers for smooth, effortless sliding",
        "Multi-point locking for strong security",
        "Available in two-panel and three-panel configurations",
        "Double and triple glazing options for energy efficiency"
      ],
      suppliers: ["golden-windows", "vinyl-bilt"],
      relatedProducts: ["swinging-patio", "multi-slide", "folding"],
      metaTitle: "Sliding Patio Doors | Shelby Windows & Doors",
      metaDescription: "Sliding patio doors from Shelby Windows & Doors. Smooth, space-saving operation for your deck or patio. Canadian-made and installed."
    },
    {
      slug: "swinging-patio",
      name: "Swinging Patio Doors",
      category: "doors",
      shortDescription: "Hinged patio doors that swing open for a traditional, elegant connection to your outdoor space.",
      description: `Swinging patio doors, also known as French doors or garden doors, feature one or two hinged panels that swing inward or outward. They provide a classic, elegant transition between your home and outdoor spaces.

The swinging design offers a wider clear opening than sliding patio doors of the same frame size, since the full panel swings clear of the frame. This makes them a practical choice for moving furniture, hosting gatherings, or simply enjoying an open-air feel on warm days.

Swinging patio doors are available in single-door and double-door configurations, with options for sidelites and transoms to expand the glass area. They are a natural complement to traditional and transitional home styles, though modern profiles are available as well.`,
      features: [
        "Hinged panels swing inward or outward",
        "Full panel clears the frame for a wide opening",
        "Single-door and double-door (French door) configurations",
        "Sidelite and transom options for expanded glass area",
        "Multi-point locking and reinforced hinges for security",
        "Available in traditional and contemporary profiles"
      ],
      suppliers: ["golden-windows", "vinyl-bilt", "entryguard-doors"],
      relatedProducts: ["sliding-patio", "entrance", "folding"],
      metaTitle: "Swinging Patio Doors | Shelby Windows & Doors",
      metaDescription: "Swinging patio doors from Shelby Windows & Doors. Elegant hinged French doors for your patio or garden. Canadian quality."
    },
    {
      slug: "lift-slide",
      name: "Lift & Slide Doors",
      category: "doors",
      shortDescription: "Premium large-panel doors that lift off the track to slide effortlessly, handling heavy glass with ease.",
      description: `Lift and slide doors use a specialized handle mechanism that lifts the door panel off its seal and onto rollers, allowing it to glide effortlessly along the track. When closed, the panel drops back down onto a compression seal for an airtight, watertight closure.

This lift-and-lower design allows for much larger and heavier panels than standard sliding doors can accommodate. The result is expansive glass walls that provide dramatic views and flood interior spaces with natural light, while still operating smoothly with minimal effort.

Lift and slide doors are a premium product typically specified for high-end residential projects and architectural homes. They deliver exceptional thermal performance through their compression seal system and are available with double or triple glazing for Canadian climate requirements.`,
      features: [
        "Lift mechanism raises panel onto rollers for effortless sliding",
        "Compression seal drops into place when closed for airtight performance",
        "Handles larger, heavier panels than standard sliding doors",
        "Expansive glass area for maximum views and natural light",
        "Premium thermal performance with advanced sealing",
        "Engineered for high-end residential and architectural projects"
      ],
      suppliers: ["golden-windows", "vinyl-bilt"],
      relatedProducts: ["multi-slide", "sliding-patio", "folding"],
      metaTitle: "Lift & Slide Doors | Shelby Windows & Doors",
      metaDescription: "Lift & slide doors from Shelby Windows & Doors. Premium large-panel doors for expansive views. Engineered for Canadian homes."
    }
  ]
};

// Helper to find a product by slug
export function getProductBySlug(slug) {
  const allProducts = [...products.windows, ...products.doors];
  return allProducts.find(p => p.slug === slug) || null;
}

// Helper to get products by category
export function getProductsByCategory(category) {
  return products[category] || [];
}

// Helper to get related products data
export function getRelatedProducts(slugs) {
  const allProducts = [...products.windows, ...products.doors];
  return slugs.map(slug => allProducts.find(p => p.slug === slug)).filter(Boolean);
}
