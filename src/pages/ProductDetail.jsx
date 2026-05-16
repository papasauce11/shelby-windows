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

  return (
    <>
      {/* Hero split layout */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image side */}
        <div className="bg-gradient-to-br from-teal-50 via-warm-50 to-teal-100 flex items-center justify-center p-8 sm:p-12 min-h-[36vh] sm:min-h-[44vh] lg:min-h-[70vh]">
          <div className="text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl bg-white/80 border border-teal-200 flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-teal-600 text-xs font-medium">Image</span>
            </div>
            <span className="text-teal-700/50 text-sm">
              {product.name} — Product Image
            </span>
          </div>
        </div>

        {/* Content side */}
        <div className="flex items-center px-5 sm:px-8 lg:px-16 py-10 sm:py-14 lg:py-24 bg-white">
          <div className="w-full max-w-lg">
            <Link
              to={`/${product.category}`}
              className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-4 inline-flex items-center hover:text-teal-500 transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All {product.category}
            </Link>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-800 text-warm-900 mb-4 sm:mb-6">
              {product.name}
            </h1>
            <p className="text-warm-500 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              {product.shortDescription}
            </p>
            <Link
              to="/contact"
              className="inline-block px-7 py-3.5 sm:px-8 sm:py-4 bg-teal-700 text-white font-semibold rounded-full hover:bg-teal-800 shadow-sm hover:shadow-md transition-all"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 sm:py-16 lg:py-24 px-5 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-5 text-warm-600 text-base sm:text-lg leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 lg:py-24 px-5 sm:px-6 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-3 block">Key Features</span>
          <h2 className="text-2xl lg:text-3xl font-heading font-800 text-warm-900 mb-12">
            What makes {product.name.toLowerCase()} stand out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-warm-100">
                <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-warm-700 text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available from */}
      {productSuppliers.length > 0 && (
        <section className="py-10 sm:py-16 lg:py-20 px-5 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-3 block">Available From</span>
            <h2 className="text-2xl font-heading font-800 text-warm-900 mb-8">
              Our trusted suppliers for {product.name.toLowerCase()}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {productSuppliers.map(supplier => (
                <SupplierLogo key={supplier.slug} supplier={supplier} size="large" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-24 px-5 sm:px-6 bg-warm-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-heading font-800 text-warm-900 mb-8">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(p => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-800 text-white mb-6">
            Interested in {product.name.toLowerCase()}?
          </h2>
          <p className="text-teal-100 text-lg mb-10">
            Contact us for a free consultation. We will help you choose the right product for your home and provide a clear, detailed quote.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-white text-teal-800 font-semibold rounded-full hover:bg-warm-50 shadow-lg hover:shadow-xl transition-all text-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
