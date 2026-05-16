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
            { label: "Single Hung Windows", path: "/windows/single-hung" },
            { label: "Sliding Windows", path: "/windows/sliding" },
            { label: "Custom Shape Windows", path: "/windows/custom-shape" },
            { label: "Tilt Windows", path: "/windows/tilt" }
          ]
        },
        doors: {
          label: "Doors",
          path: "/doors",
          items: [
            { label: "Sliding Patio Doors", path: "/doors/sliding-patio" },
            { label: "Terrace Doors", path: "/doors/terrace" },
            { label: "Entry Doors", path: "/doors/entry" }
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
