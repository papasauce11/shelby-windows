import { useParams, Link } from 'react-router-dom';
import { getSupplierBySlug } from '../data/suppliers';
import { getProductBySlug } from '../data/products';
import SupplierLogo from '../components/shared/SupplierLogo';
import CTASection from '../components/shared/CTASection';

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

  const paragraphs = supplier.description.split('\n\n');
  const supplierProducts = supplier.productsOffered
    .map(s => getProductBySlug(s))
    .filter(Boolean);

  return (
    <>
      {/* Editorial header — light with teal accent */}
      <section className="bg-teal-50 border-b border-teal-100 pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-10">
          {/* Logo area */}
          <div className="flex-shrink-0">
            <div className="w-36 h-36 rounded-2xl bg-white border border-warm-200 flex items-center justify-center p-4 shadow-sm">
              <SupplierLogo supplier={supplier} size="large" linkable={false} />
            </div>
          </div>

          {/* Header text */}
          <div className="flex-1">
            <div className="w-10 h-px bg-teal-600 mb-4" />
            <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-3 block">Our Supplier</span>
            <h1 className="text-4xl lg:text-5xl font-heading font-800 text-warm-900 mb-3">{supplier.name}</h1>
            <p className="text-warm-500 text-lg">Trusted Canadian manufacturer</p>
          </div>

          {/* Website link */}
          <div className="flex-shrink-0">
            <a
              href={supplier.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-teal-200 text-teal-700 text-sm font-medium rounded-full hover:bg-teal-100 transition-colors bg-white"
            >
              Visit Website
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-36">
              <div className="w-10 h-px bg-teal-600 mb-4" />
              <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 block">About</span>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-6 text-warm-600 text-lg leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Products from this supplier */}
      {supplierProducts.length > 0 && (
        <section className="py-24 px-6 bg-warm-50">
          <div className="max-w-7xl mx-auto">
            <div className="w-10 h-px bg-teal-600 mb-4" />
            <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-3 block">Products</span>
            <h2 className="text-2xl lg:text-3xl font-heading font-800 text-warm-900 mb-12">
              {supplier.shortName} products we install
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {supplierProducts.map(product => (
                <Link
                  key={product.slug}
                  to={`/${product.category}/${product.slug}`}
                  className="bg-white rounded-xl p-5 border border-warm-100 hover:border-teal-200 hover:shadow-md transition-all text-center group"
                >
                  <span className="text-xs text-warm-400 font-medium uppercase tracking-wide block mb-1">{product.category}</span>
                  <span className="font-heading font-600 text-warm-700 group-hover:text-teal-700 transition-colors text-sm">
                    {product.name}
                  </span>
                </Link>
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
