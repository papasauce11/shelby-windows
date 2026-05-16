import { useLocation } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';
import HeroBanner from '../components/shared/HeroBanner';
import ProductCard from '../components/shared/ProductCard';
import CTASection from '../components/shared/CTASection';
import windowsHero from '../assets/3.png';
import doorsHero from '../assets/1.png';

const categoryMeta = {
  windows: {
    title: "Our Windows",
    subtitle: "From classic styles to modern innovations, find the right window for every room in your home.",
    intro: "We supply and install a comprehensive range of residential window types, all sourced from trusted Canadian manufacturers. Whether you need maximum ventilation, expansive views, or a custom architectural shape, we have the right product for your project.",
    hero: windowsHero,
    accent: "teal",
    stat: { value: "10+", label: "Window styles available" }
  },
  doors: {
    title: "Our Doors",
    subtitle: "Entrance doors, patio doors, and premium large-format systems for every style of home.",
    intro: "Your doors define how you enter, exit, and connect with the spaces around your home. We offer everything from secure entrance doors to expansive multi-panel systems that open your living area to the outdoors, all built for Canadian conditions.",
    hero: doorsHero,
    accent: "warm",
    stat: { value: "5", label: "Door systems available" }
  }
};

export default function ProductCategory() {
  const location = useLocation();
  const category = location.pathname.replace('/', '');
  const products = getProductsByCategory(category);
  const meta = categoryMeta[category];

  if (!meta || products.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-warm-500 text-lg">Category not found.</p>
      </div>
    );
  }

  const isDoors = category === 'doors';

  return (
    <>
      <HeroBanner title={meta.title} subtitle={meta.subtitle} image={meta.hero} />

      {/* Category intro strip */}
      <section className={`py-8 sm:py-12 lg:py-16 px-5 sm:px-6 ${isDoors ? 'bg-warm-50 border-b border-warm-100' : 'bg-teal-50 border-b border-teal-100'}`}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <div className="flex-1">
            <div className={`w-10 h-px mb-4 ${isDoors ? 'bg-warm-400' : 'bg-teal-600'}`} />
            <p className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl ${isDoors ? 'text-warm-600' : 'text-teal-900'}`}>
              {meta.intro}
            </p>
          </div>
          <div className={`flex-shrink-0 rounded-2xl border px-8 py-6 text-center bg-white self-start lg:self-auto ${isDoors ? 'border-warm-200' : 'border-teal-200'}`}>
            <span className={`font-heading font-800 text-4xl sm:text-5xl block ${isDoors ? 'text-warm-800' : 'text-teal-700'}`}>{meta.stat.value}</span>
            <span className="text-warm-500 text-sm mt-1 block">{meta.stat.label}</span>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-12 sm:py-16 lg:py-24 px-5 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {products.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={`Need help choosing the right ${isDoors ? 'doors' : 'windows'}?`}
        text="Our team can walk you through the options and help you find the best fit for your home and budget."
      />
    </>
  );
}
