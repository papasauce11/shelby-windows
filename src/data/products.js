// SHELBY WINDOWS & DOORS - Product Data
// All product content for windows and doors.
// This is the single source of truth for all product detail pages.

import awningImg from '../assets/windows/awning window 1.png';
import bayImg from '../assets/windows/bay window 2.png';
import casementImg from '../assets/windows/casement window.png';
import doubleHungImg from '../assets/windows/double hung window.png';
import singleHungImg from '../assets/windows/single hung window.png';
import slidingImg from '../assets/windows/sliding window.png';
import customShapeImg from '../assets/windows/custom windows.PNG';
import tiltImg from '../assets/windows/Tilt windows.png';

export const products = {
  windows: [
    {
      slug: "awning",
      name: "Awning Windows",
      category: "windows",
      image: awningImg,
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
      image: bayImg,
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
      image: casementImg,
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
      image: doubleHungImg,
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
      image: singleHungImg,
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
      image: slidingImg,
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
      image: customShapeImg,
      imageContain: true,
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
      slug: "tilt",
      name: "Tilt Windows",
      category: "windows",
      image: tiltImg,
      imageContain: true,
      shortDescription: "European-style windows that tilt inward at the top or swing fully open like a door.",
      description: `Tilt windows offer two distinct opening modes in a single unit. In tilt mode, the top of the sash tilts inward, allowing controlled ventilation while maintaining security and weather protection. In turn mode, the sash swings fully inward like a door, providing wide-open access for cleaning or maximum airflow.

This dual-function design originated in Europe and has gained popularity in Canada for its versatility and performance. The multi-point locking system engages along all four sides of the sash, creating one of the tightest seals available in an operable window.

Tilt windows are an excellent fit for upper-floor installations where exterior cleaning would otherwise require a ladder, and for bedrooms where you want secure overnight ventilation without a fully open window.`,
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
      metaTitle: "Tilt Windows | Shelby Windows & Doors",
      metaDescription: "Tilt windows from Shelby Windows & Doors. European-style dual-mode operation for versatile ventilation. Canadian installation."
    }
  ],
  doors: [
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
      relatedProducts: ["terrace", "fiberglass-entry-doors"],
      heroImage: "https://goldenwindows.com/img/products/36b5dc8b-3dd2-49ec-8088-4b8507a92b8a-GoldenVinyl-Patio-Door-2.jpg",
      image: "https://goldenwindows.com/img/products/407f797c-aaed-455a-a5e0-4f24a592b588-GoldenClad-Patio-Door-2.jpg",
      collections: [
        {
          name: "GoldenVinyl",
          image: "https://goldenwindows.com/img/products/36b5dc8b-3dd2-49ec-8088-4b8507a92b8a-GoldenVinyl-Patio-Door-2.jpg",
          description: "Reinforced multi-chambered vinyl construction with comfort-enhancing weatherstripping and premium warm edge spacer for strong energy performance."
        },
        {
          name: "GoldenClad",
          image: "https://goldenwindows.com/img/products/407f797c-aaed-455a-a5e0-4f24a592b588-GoldenClad-Patio-Door-2.jpg",
          description: "Warm wood interior with extruded aluminum cladding on the exterior for low-maintenance protection. Available in Traditional (Wide Rail) and Contemporary (Narrow Rail) designs."
        },
        {
          name: "GoldenWood",
          image: "https://goldenwindows.com/img/products/a97a26d5-a5a0-49f0-883e-903fbf592cf6-GoldenWood-Patio-Door-2.jpg",
          description: "Hand-crafted all-wood construction for an unmatched level of class and warmth. Available in Traditional (Wide Rail) and Contemporary (Narrow Rail) designs."
        }
      ],
      brochures: [
        { name: "GoldenVinyl 1000 Series Brochure", url: "https://goldenwindows.com/content/img/site/brochure/GW-GoldenVinyl-1000-Brochure-FINAL-Web.pdf" },
        { name: "GoldenClad & GoldenWood Brochure", url: "https://goldenwindows.com/content/img/site/brochure/GW-GoldenClad-GoldenWood-Brochure-R5.pdf" },
        { name: "Exterior Doors Brochure", url: "https://goldenwindows.com/content/img/site/brochure/GoldenExteriorDoors2012LR.pdf" },
        { name: "Multi-Point Door Lock Options", url: "https://goldenwindows.com/content/img/site/brochure/2023-GW-MULTIPOINT-LOCK.pdf" },
        { name: "Exterior Colour Options", url: "https://goldenwindows.com/content/img/site/brochure/GW25-Colour-Guide-R4.pdf" }
      ],
      metaTitle: "Sliding Patio Doors | Shelby Windows & Doors",
      metaDescription: "Sliding patio doors from Shelby Windows & Doors. Smooth, space-saving operation for your deck or patio. Canadian-made and installed."
    },
    {
      slug: "terrace",
      name: "Terrace Doors",
      category: "doors",
      shortDescription: "Hinged patio doors that swing open for a traditional, elegant connection to your outdoor space.",
      description: `Terrace doors, also known as French doors or garden doors, feature one or two hinged panels that swing inward or outward. They provide a classic, elegant transition between your home and outdoor spaces.

The swinging design offers a wider clear opening than sliding patio doors of the same frame size, since the full panel swings clear of the frame. This makes them a practical choice for moving furniture, hosting gatherings, or simply enjoying an open-air feel on warm days.

Terrace doors are available in single-door and double-door configurations, with options for sidelites and transoms to expand the glass area. They are a natural complement to traditional and transitional home styles, though modern profiles are available as well.`,
      features: [
        "Hinged panels swing inward or outward",
        "Full panel clears the frame for a wide opening",
        "Single-door and double-door (French door) configurations",
        "Sidelite and transom options for expanded glass area",
        "Multi-point locking and reinforced hinges for security",
        "Available in traditional and contemporary profiles"
      ],
      suppliers: ["golden-windows", "vinyl-bilt"],
      relatedProducts: ["sliding-patio", "fiberglass-entry-doors"],
      heroImage: "https://goldenwindows.com/img/products/3837b6e9-32f8-44cc-bc8d-fe4145dfd569-GoldenClad-Terrace-Door-2.jpg",
      image: "https://goldenwindows.com/img/products/69107c8c-5a4e-467f-baef-0f7e9477bb92-GoldenClad-Terrace-Door.jpg",
      collections: [
        {
          name: "GoldenClad",
          image: "https://goldenwindows.com/img/products/3837b6e9-32f8-44cc-bc8d-fe4145dfd569-GoldenClad-Terrace-Door-2.jpg",
          description: "Beautiful wood interior with extruded aluminum-clad exterior frame, allowing a choice of exterior colours. Low maintenance with lasting protection."
        },
        {
          name: "GoldenWood",
          image: "https://goldenwindows.com/img/products/1d0341ca-573b-4533-9445-b13ee4d67697-GoldenWood-Terrace-Door.jpg",
          description: "Wood frame with brickmould for your choice of stains or paint colours. Ideal for log homes or keeping the authenticity of heritage-style homes."
        }
      ],
      brochures: [
        { name: "GoldenClad & GoldenWood Brochure", url: "https://goldenwindows.com/content/img/site/brochure/GW-GoldenClad-GoldenWood-Brochure-R5.pdf" },
        { name: "Exterior Doors Brochure", url: "https://goldenwindows.com/content/img/site/brochure/GoldenExteriorDoors2012LR.pdf" },
        { name: "Multi-Point Door Lock Options", url: "https://goldenwindows.com/content/img/site/brochure/2023-GW-MULTIPOINT-LOCK.pdf" },
        { name: "Exterior Colour Options", url: "https://goldenwindows.com/content/img/site/brochure/GW25-Colour-Guide-R4.pdf" }
      ],
      metaTitle: "Terrace Doors | Shelby Windows & Doors",
      metaDescription: "Terrace doors from Shelby Windows & Doors. Elegant hinged French doors for your patio or garden. Canadian quality."
    },
    {
      slug: "fiberglass-entry-doors",
      name: "Fiberglass Entry Doors",
      category: "doors",
      imagePosition: "25% center",
      shortDescription: "Premium fiberglass entry doors available in six distinct collections -- from clean modern lines to classic elegance, all built to resist warping, denting, and Canadian weather.",
      description: `Fiberglass entry doors give you the look of real wood without any of the upkeep. They won't warp, crack, or rot the way a wood door eventually will, and they hold paint and stain finishes better than steel over time. For a front door that needs to look good and perform for years, fiberglass is a smart choice.

We carry Entryguard's full fiberglass lineup, which covers six collections -- each with its own design personality. Whether you want something minimal and modern or something with traditional presence, there's a collection that fits. Every door comes with an insulated core for thermal performance and is compatible with sidelites, transoms, and decorative glass inserts.

All fiberglass entry doors are available with multi-point locking hardware, custom sizing, and a wide range of stain and paint finishes.`,
      features: [
        "Six distinct collections: Shaker, Modern, Grand, Classic, Vista, and Stainless",
        "Won't warp, crack, dent, or rot like wood or steel",
        "Holds stain and paint finishes exceptionally well",
        "Insulated core for strong thermal performance",
        "Sidelite and transom options for added light",
        "Multi-point locking and custom hardware available"
      ],
      suppliers: ["entryguard-doors"],
      relatedProducts: ["steel-entry-doors", "nhp-steel-entry-doors", "terrace"],
      heroImage: "https://entryguarddoors.com/wp-content/uploads/2024/12/Hero-4.jpg",
      image: "https://entryguarddoors.com/wp-content/uploads/2025/01/shaker.jpg",
      collections: [
        {
          name: "Shaker",
          image: "https://entryguarddoors.com/wp-content/uploads/2025/01/shaker.jpg",
          description: "Clean lines and a minimalist aesthetic that suits any architectural style. Timeless simplicity with premium durability."
        },
        {
          name: "Modern",
          image: "https://entryguarddoors.com/wp-content/uploads/2025/01/MODERN_1.jpg",
          description: "Sleek contemporary lines with innovative glass designs. A perfect blend of style and functionality."
        },
        {
          name: "Grand",
          image: "https://entryguarddoors.com/wp-content/uploads/2025/01/GRAND_2.jpg",
          description: "Timeless designs that enhance the elegance of traditional homes. Bold statements with classic aesthetics."
        },
        {
          name: "Classic",
          image: "https://entryguarddoors.com/wp-content/uploads/2025/01/CLASSIC_1.jpg",
          description: "Enduring style that blends traditional craftsmanship with modern durability. A perfect fit for any home, year after year."
        },
        {
          name: "Vista",
          image: "https://entryguarddoors.com/wp-content/uploads/2025/01/vista.jpg",
          description: "Unique glass styles designed for contemporary aesthetics. Sleek lines and modern detailing for any entryway."
        },
        {
          name: "Stainless",
          image: "https://entryguarddoors.com/wp-content/uploads/2025/01/STAINLESS_1.jpg",
          description: "Fiberglass doors with stainless steel accents. Timeless elegance meets modern sophistication."
        }
      ],
      brochures: [
        { name: "Fiberglass Door Catalogue", url: "https://entryguarddoors.com/wp-content/uploads/2025/01/ENTRYGUARD-PREMIUM-FIBERGLASS-2023_compressed.pdf" },
        { name: "Stain Colour Guide", url: "https://entryguarddoors.com/wp-content/uploads/2025/01/ENTRYGUARD_FIBERGLASS_STAINS.pdf" },
        { name: "Paint Colour Guide", url: "https://entryguarddoors.com/wp-content/uploads/2025/01/Fiberglass-PAINT-COLOUR-GUIDE.pdf" }
      ],
      metaTitle: "Fiberglass Entry Doors | Shelby Windows & Doors",
      metaDescription: "Fiberglass entry doors from Shelby Windows & Doors. Six collections from Entryguard -- Shaker, Modern, Grand, Classic, Vista, and Stainless. Built for Canadian homes."
    },
    {
      slug: "steel-entry-doors",
      name: "Steel Entry Doors",
      category: "doors",
      shortDescription: "Strong, secure, and energy-efficient steel entry doors with customizable glass and panel designs -- the most popular entry door choice in Canada.",
      description: `Steel entry doors are the go-to choice for homeowners who want solid security without spending a fortune. They're strong, they insulate well, and they come in more styles than most people expect. If you need a door that does its job reliably, steel is hard to beat.

Entryguard's steel doors feature insulated cores that help keep your home comfortable year-round. The steel skin resists forced entry, weather, and general wear better than most materials at this price point. They're also resistant to fire, moisture, and pests, which means less maintenance over the life of the door.

With multiple glass collections and panel styles to choose from, steel doors don't have to look industrial. Novatech and Trimlite glass options, solid panel designs, classic inserts, and executive panel configurations give you plenty of room to match your home's look.`,
      features: [
        "Exceptional strength and forced-entry resistance",
        "Insulated core for strong thermal efficiency",
        "Fire, moisture, and pest resistant",
        "Multiple glass collections: Novatech, Trimlite, Classic",
        "Solid door and executive panel options available",
        "Customizable finishes for residential and commercial use"
      ],
      suppliers: ["entryguard-doors"],
      relatedProducts: ["fiberglass-entry-doors", "nhp-steel-entry-doors", "sliding-patio"],
      heroImage: "https://entryguarddoors.com/wp-content/uploads/2025/01/STEEL_DOOR_1_banner-scaled.jpg",
      image: "https://entryguarddoors.com/wp-content/uploads/2024/12/Steel.jpg",
      brochures: [
        { name: "Novatech Glass Collection", url: "https://entryguarddoors.com/wp-content/uploads/2025/05/Novatech_Style-guide-2025_EN_Entryguard.pdf" },
        { name: "Trimlite Glass Collection", url: "https://entryguarddoors.com/wp-content/uploads/2025/06/2025_EntryGuard_Doorlite_Brochure_InsidePageswCover.pdf" },
        { name: "Solid Door Collection", url: "https://entryguarddoors.com/wp-content/uploads/2025/04/ENTRYGUARD_SOLID-STEEL-DOORS.pdf" },
        { name: "Classic Glass Collection", url: "https://entryguarddoors.com/wp-content/uploads/2025/04/CLASSIC_GLASS_COLLECTION_1.pdf" },
        { name: "Executive Panel Collection", url: "https://entryguarddoors.com/wp-content/uploads/2025/04/EXECUTIVE_PANEL_COLLECTION.pdf" }
      ],
      metaTitle: "Steel Entry Doors | Shelby Windows & Doors",
      metaDescription: "Steel entry doors from Shelby Windows & Doors. Entryguard steel doors with Novatech and Trimlite glass options. Secure, insulated, customizable."
    },
    {
      slug: "nhp-steel-entry-doors",
      name: "NHP High Performance Steel Doors",
      category: "doors",
      shortDescription: "Engineered for superior durability and energy efficiency -- NHP high performance steel doors are built to handle the toughest Canadian conditions.",
      description: `NHP high performance steel doors are the top tier of Entryguard's steel lineup. If you want the strongest, most energy-efficient steel door available, this is it. They're engineered with advanced materials and tighter construction tolerances than standard steel doors.

Where a regular steel door does the job well, an NHP door does it better -- better resistance to wear, weather, and corrosion, better energy efficiency from improved seals and insulation, and a longer service life with less maintenance. These doors are built for homeowners who don't want to think about their front door again for a long time.

NHP doors are a particularly strong fit for homes in areas with harsh winter conditions, high wind exposure, or anywhere you want the best performance a steel entry door can deliver.`,
      features: [
        "Superior strength and corrosion resistance over standard steel",
        "Advanced insulation for maximum energy efficiency",
        "Tighter construction tolerances for better weather sealing",
        "Low-maintenance, long-lasting build quality",
        "Enhanced security with reinforced construction",
        "Designed specifically for demanding Canadian climates"
      ],
      suppliers: ["entryguard-doors"],
      relatedProducts: ["steel-entry-doors", "fiberglass-entry-doors", "terrace"],
      heroImage: "https://entryguarddoors.com/wp-content/uploads/2025/01/NHP_PERF_DOOR_2-scaled.jpg",
      image: "https://entryguarddoors.com/wp-content/uploads/2024/12/NHP.jpg",
      brochures: [
        { name: "NHP High Performance Steel Doors Catalogue", url: "https://entryguarddoors.com/wp-content/uploads/2025/01/01_Entryguard.pdf" }
      ],
      metaTitle: "NHP High Performance Steel Doors | Shelby Windows & Doors",
      metaDescription: "NHP high performance steel entry doors from Shelby Windows & Doors. Maximum durability and energy efficiency for Canadian homes."
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
