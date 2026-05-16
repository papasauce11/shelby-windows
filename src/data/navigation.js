// SHELBY WINDOWS & DOORS - Navigation Data

export const navigation = {
  main: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    {
      label: "Products",
      path: "#",
      children: {
        windows: {
          label: "Windows",
          path: "/windows",
          items: [
            { label: "Awning Windows", path: "/windows/awning" },
            { label: "Bay Windows", path: "/windows/bay" },
            { label: "Casement Windows", path: "/windows/casement" },
            { label: "Double-Hung Windows", path: "/windows/double-hung" },
            { label: "Folding Windows", path: "/windows/folding" },
            { label: "Picture Windows", path: "/windows/picture" },
            { label: "Single Hung Windows", path: "/windows/single-hung" },
            { label: "Sliding Windows", path: "/windows/sliding" },
            { label: "Specialty Windows", path: "/windows/specialty" },
            { label: "Tilt & Turn Windows", path: "/windows/tilt-turn" }
          ]
        },
        doors: {
          label: "Doors",
          path: "/doors",
          items: [
            { label: "Entrance Doors", path: "/doors/entrance" },
            { label: "Folding Doors", path: "/doors/folding" },
            { label: "Multi-Slide Doors", path: "/doors/multi-slide" },
            { label: "Sliding Patio Doors", path: "/doors/sliding-patio" },
            { label: "Swinging Patio Doors", path: "/doors/swinging-patio" },
            { label: "Lift & Slide Doors", path: "/doors/lift-slide" }
          ]
        },
        suppliers: {
          label: "Suppliers",
          path: "#",
          items: [
            { label: "Golden Windows", path: "/suppliers/golden-windows" },
            { label: "Vinyl Bilt", path: "/suppliers/vinyl-bilt" },
            { label: "Entryguard Doors", path: "/suppliers/entryguard-doors" }
          ]
        }
      }
    },
    { label: "Our Work", path: "/our-work" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" }
  ]
};

// Company info for footer and contact page
export const companyInfo = {
  name: "Shelby Windows & Doors Inc.",
  address: {
    street: "10 Planchet Rd, Unit 4",
    city: "Vaughan",
    province: "ON",
    postalCode: "L4K 2C8" // PLACEHOLDER — confirm exact postal code with Vick
  },
  phone: "(905) 660-5505",
  email: "info@shelbywindows.ca",
  hours: [
    { day: "Monday", time: "8:00 AM - 5:00 PM" },
    { day: "Tuesday", time: "8:00 AM - 5:00 PM" },
    { day: "Wednesday", time: "8:00 AM - 5:00 PM" },
    { day: "Thursday", time: "8:00 AM - 5:00 PM" },
    { day: "Friday", time: "8:00 AM - 5:00 PM" },
    { day: "Saturday", time: "By Appointment" },
    { day: "Sunday", time: "Closed" }
  ],
  social: {
    instagram: "https://www.instagram.com/shelbywindowsanddoors/"
  }
};
