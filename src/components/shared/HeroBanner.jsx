import { Link } from 'react-router-dom';

export default function HeroBanner({ title, subtitle, cta, ctaLink = "/contact", large = false, image = null }) {
  return (
    <section className={`relative ${large ? 'min-h-[70vh] sm:min-h-[85vh]' : 'min-h-[36vh] sm:min-h-[45vh]'} flex items-center justify-center overflow-hidden`}>
      {/* Background */}
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-warm-800 via-warm-700 to-teal-900">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
      )}

      {/* Overlay — darker when using a photo */}
      <div className={`absolute inset-0 ${image ? 'bg-gradient-to-t from-black/65 via-black/35 to-black/20' : 'bg-black/20'}`} />

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
        <h1 className={`font-heading font-800 text-white leading-tight [text-shadow:0_1px_4px_rgba(0,0,0,0.7),0_0_8px_rgba(0,0,0,0.5)] ${large ? 'text-3xl sm:text-4xl lg:text-7xl' : 'text-2xl sm:text-3xl lg:text-5xl'}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-4 text-white/80 max-w-2xl mx-auto [text-shadow:0_0_6px_rgba(0,0,0,0.8),0_1px_3px_rgba(0,0,0,0.6)] ${large ? 'text-base sm:text-lg lg:text-xl' : 'text-sm sm:text-base lg:text-lg'}`}>
            {subtitle}
          </p>
        )}
        {cta && (
          <div className="mt-10">
            <Link
              to={ctaLink}
              className="inline-block px-8 py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-500 shadow-lg hover:shadow-xl transition-all text-base lg:text-lg"
            >
              {cta}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
