import { useParams, Link } from 'react-router-dom';
import { getSupplierBySlug } from '../data/suppliers';
import { getProductBySlug } from '../data/products';
import SupplierLogo from '../components/shared/SupplierLogo';
import ProductCard from '../components/shared/ProductCard';
import CTASection from '../components/shared/CTASection';
import vinylBiltHero from '../assets/windows/bay window 2.png';

const themes = {
  amber: {
    heroBg: 'bg-amber-50',
    heroBorder: 'border-amber-100',
    accent: 'text-amber-600',
    accentBg: 'bg-amber-600',
    taglineBg: 'bg-amber-100 text-amber-800',
    visitBtn: 'border-amber-300 text-amber-700 hover:bg-amber-100',
    sectionBg: 'bg-amber-50',
    sectionBorder: 'border-amber-100',
    productLabel: 'text-amber-600',
  },
  teal: {
    heroBg: 'bg-teal-50',
    heroBorder: 'border-teal-100',
    accent: 'text-teal-600',
    accentBg: 'bg-teal-600',
    taglineBg: 'bg-teal-100 text-teal-800',
    visitBtn: 'border-teal-300 text-teal-700 hover:bg-teal-100',
    sectionBg: 'bg-teal-50',
    sectionBorder: 'border-teal-100',
    productLabel: 'text-teal-600',
  },
  navy: {
    heroBg: 'bg-slate-50',
    heroBorder: 'border-slate-200',
    accent: 'text-slate-700',
    accentBg: 'bg-slate-800',
    taglineBg: 'bg-slate-200 text-slate-700',
    visitBtn: 'border-slate-300 text-slate-700 hover:bg-slate-100',
    sectionBg: 'bg-slate-50',
    sectionBorder: 'border-slate-200',
    productLabel: 'text-slate-600',
  },
  emerald: {
    heroBg: 'bg-emerald-50',
    heroBorder: 'border-emerald-100',
    accent: 'text-emerald-600',
    accentBg: 'bg-emerald-600',
    taglineBg: 'bg-emerald-100 text-emerald-800',
    visitBtn: 'border-emerald-300 text-emerald-700 hover:bg-emerald-100',
    sectionBg: 'bg-emerald-50',
    sectionBorder: 'border-emerald-100',
    productLabel: 'text-emerald-600',
  },
};

export default function SupplierDetail() {
  const { slug } = useParams();
  const supplier = getSupplierBySlug(slug);

  if (!supplier) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-warm-500 text-lg mb-4">Supplier not found.</p>
          <Link to="/" className="text-teal-700 font-medium hover:text-teal-600">Return home</Link>
        </div>
      </div>
    );
  }

  const t = themes[supplier.theme] || themes.teal;
  const featured = (supplier.featuredProducts || supplier.productsOffered)
    .map(s => getProductBySlug(s))
    .filter(Boolean);
  const heroImg = supplier.slug === 'vinyl-bilt' ? vinylBiltHero : supplier.heroImage;

  return (
    <>
      {/* Themed hero header */}
      <section className={`relative overflow-hidden border-b ${t.heroBorder} pt-24 sm:pt-32 pb-10 sm:pb-16 px-5 sm:px-6`}>
        {/* Faded product imagery background */}
        {heroImg && (
          <>
            <img
              src={heroImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${t.heroBg} opacity-10`} />
          </>
        )}
        {!heroImg && <div className={`absolute inset-0 ${t.heroBg}`} />}

        <div className="relative z-10 max-w-4xl mx-auto text-center [filter:drop-shadow(0_1px_4px_rgba(0,0,0,0.7))]">
          {/* Logo — no box, large */}
          <div className="mb-6">
            <SupplierLogo supplier={supplier} size={supplier.slug === 'golden-windows' ? 'heroGolden' : 'hero'} linkable={false} />
          </div>

          {/* Tagline */}
          {supplier.tagline && (
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 text-xs font-heading font-700 uppercase tracking-widest text-white [text-shadow:0_0_6px_rgba(0,0,0,0.8),0_1px_3px_rgba(0,0,0,0.7)]">
                {supplier.tagline}
              </span>
            </div>
          )}

          <p className="text-white text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 [text-shadow:0_0_6px_rgba(0,0,0,0.8),0_1px_3px_rgba(0,0,0,0.7)]">
            {supplier.description}
          </p>

          <a
            href={supplier.website}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 border text-sm font-medium rounded-full transition-colors bg-white ${t.visitBtn}`}
          >
            Visit {supplier.shortName}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Featured products */}
      {featured.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-24 px-5 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <span className={`text-xs font-heading font-700 uppercase tracking-widest ${t.productLabel} mb-2 block`}>
                Available Through Shelby
              </span>
              <h2 className="text-2xl lg:text-3xl font-heading font-800 text-warm-900">
                {supplier.shortName} products we carry
              </h2>
            </div>
            <div className={`grid grid-cols-2 ${featured.length >= 4 ? 'lg:grid-cols-4' : featured.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-3 sm:gap-6`}>
              {featured.map(product => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading={`Interested in ${supplier.shortName} products?`}
        text="We can help you choose the right products for your project. Contact us for a free consultation."
      />
    </>
  );
}
