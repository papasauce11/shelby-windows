import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { getSuppliersForProduct } from '../data/suppliers';
import ProductCard from '../components/shared/ProductCard';
import SupplierLogo from '../components/shared/SupplierLogo';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-warm-500 text-lg mb-4">Product not found.</p>
          <Link to="/" className="text-teal-700 font-medium hover:text-teal-600">Return home</Link>
        </div>
      </div>
    );
  }

  const productSuppliers = getSuppliersForProduct(product.slug);
  const related = getRelatedProducts(product.relatedProducts);
  const paragraphs = product.description.split('\n\n');
  const hasImage = !!product.heroImage || !!product.image;
  const heroImg = product.heroImage || product.image;

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className={`relative flex items-center justify-center min-h-[36vh] sm:min-h-[44vh] lg:min-h-[70vh] overflow-hidden ${!hasImage ? 'bg-gradient-to-br from-teal-50 via-warm-50 to-teal-100' : ''}`}>
          {hasImage ? (
            <img src={heroImg} alt={product.name} className={`absolute inset-0 w-full h-full ${product.imageContain ? 'object-contain p-6' : 'object-cover'}`} style={product.imagePosition ? { objectPosition: product.imagePosition } : undefined} />
          ) : (
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl bg-white/80 border border-teal-200 flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-teal-600 text-xs font-medium">Image</span>
              </div>
              <span className="text-teal-700/50 text-sm">{product.name}</span>
            </div>
          )}
        </div>
        <div className="flex items-center px-5 sm:px-8 lg:px-16 py-10 sm:py-14 lg:py-24 bg-white">
          <div className="w-full max-w-lg">
            <Link to={`/${product.category}`} className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-4 inline-flex items-center hover:text-teal-500 transition-colors">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              All {product.category}
            </Link>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-800 text-warm-900 mb-4 sm:mb-6">{product.name}</h1>
            <p className="text-warm-500 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">{product.shortDescription}</p>
            <Link to="/contact" className="inline-block px-7 py-3.5 sm:px-8 sm:py-4 bg-teal-700 text-white font-semibold rounded-full hover:bg-teal-800 shadow-sm hover:shadow-md transition-all">Request a Consultation</Link>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-16 lg:py-24 px-5 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-5 text-warm-600 text-base sm:text-lg leading-relaxed">
            {paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
          </div>
        </div>
      </section>

      {product.collections && product.collections.length > 0 && (
        <section className="py-8 sm:py-16 lg:py-24 px-5 sm:px-6 bg-warm-50">
          <div className="max-w-6xl mx-auto">
            <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-3 block">Collections</span>
            <h2 className="text-2xl lg:text-3xl font-heading font-800 text-warm-900 mb-8 sm:mb-12">Choose your style</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {product.collections.map((collection, i) => (
                <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-warm-100 shadow-sm hover:border-teal-200 hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img src={collection.image} alt={`${collection.name} Collection`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" />
                  </div>
                  <div className="p-3 sm:p-6">
                    <h3 className="font-heading text-sm sm:text-lg font-700 text-warm-900 mb-1 sm:mb-2">{collection.name} Collection</h3>
                    <p className="text-xs sm:text-sm text-warm-500 leading-relaxed line-clamp-2">{collection.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`py-12 sm:py-16 lg:py-24 px-5 sm:px-6 ${product.collections ? 'bg-white' : 'bg-warm-50'}`}>
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-3 block">Key Features</span>
          <h2 className="text-2xl lg:text-3xl font-heading font-800 text-warm-900 mb-8 sm:mb-12">What makes {product.name.toLowerCase()} stand out</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-warm-100">
                <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-warm-700 text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {product.brochures && product.brochures.length > 0 && (
        <section className="py-8 sm:py-16 lg:py-20 px-5 sm:px-6 bg-warm-50">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-3 block">Resources</span>
            <h2 className="text-2xl lg:text-3xl font-heading font-800 text-warm-900 mb-8">Brochures &amp; catalogues</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {product.brochures.map((brochure, i) => (
                <a key={i} href={brochure.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-white rounded-xl p-5 border border-warm-100 hover:border-teal-200 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                    <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div className="min-w-0">
                    <span className="text-warm-800 text-sm font-medium block truncate group-hover:text-teal-700 transition-colors">{brochure.name}</span>
                    <span className="text-warm-400 text-xs">View PDF</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {productSuppliers.length > 0 && (
        <section className="py-10 sm:py-16 lg:py-20 px-5 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-3 block">Available From</span>
            <h2 className="text-2xl font-heading font-800 text-warm-900 mb-8">Our trusted suppliers for {product.name.toLowerCase()}</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {productSuppliers.map(supplier => (<SupplierLogo key={supplier.slug} supplier={supplier} size="large" />))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-8 sm:py-16 lg:py-24 px-5 sm:px-6 bg-warm-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-heading font-800 text-warm-900 mb-8">You may also like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {related.map(p => (<ProductCard key={p.slug} product={p} />))}
            </div>
          </div>
        </section>
      )}

      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-800 text-white mb-6">Interested in {product.name.toLowerCase()}?</h2>
          <p className="text-teal-100 text-lg mb-10">Contact us for a free consultation. We will help you choose the right product for your home and provide a clear, detailed quote.</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-teal-800 font-semibold rounded-full hover:bg-warm-50 shadow-lg hover:shadow-xl transition-all text-lg">Get a Free Quote</Link>
        </div>
      </section>
    </>
  );
}
