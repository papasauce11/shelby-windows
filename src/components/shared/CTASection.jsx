import { Link } from 'react-router-dom';

export default function CTASection({
  heading = "Experience the Shelby Way",
  text = "Get in touch with the Shelby Windows & Doors team for a free, no-obligation consultation.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
  variant = "default"
}) {
  if (variant === "minimal") {
    return (
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-warm-600 text-lg">{text}</p>
          <Link
            to={buttonLink}
            className="inline-block mt-6 px-8 py-3.5 bg-teal-700 text-white font-semibold rounded-full hover:bg-teal-800 shadow-sm hover:shadow-md transition-all"
          >
            {buttonText}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 md:py-24 px-6 bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 italic font-light tracking-wide [text-shadow:0_2px_12px_rgba(0,0,0,0.3)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{heading}</h2>
        <p className="text-teal-100 text-base sm:text-lg mb-8 max-w-xl mx-auto [text-shadow:0_1px_6px_rgba(0,0,0,0.2)]">{text}</p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
          <Link
            to={buttonLink}
            className="px-8 py-3.5 sm:px-10 sm:py-4 bg-white text-teal-800 font-semibold rounded-full hover:bg-warm-50 shadow-lg hover:shadow-xl transition-all text-base sm:text-lg text-center"
          >
            {buttonText}
          </Link>
          <Link
            to="/contact?reason=showroom"
            className="px-8 py-3.5 sm:px-10 sm:py-4 bg-white text-teal-800 font-semibold rounded-full hover:bg-warm-50 shadow-lg hover:shadow-xl transition-all text-base sm:text-lg text-center"
          >
            Visit Our Showroom
          </Link>
        </div>
      </div>
    </section>
  );
}
