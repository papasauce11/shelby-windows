import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const path = `/${product.category}/${product.slug}`;
  const hasImage = !!product.image;
  const isDoor = product.category === 'doors';

  return (
    <Link
      to={path}
      className="group block bg-white rounded-2xl overflow-hidden border border-warm-100 shadow-sm hover:border-teal-200 hover:shadow-xl transition-all duration-300"
    >
      <div className={`aspect-[4/3] relative overflow-hidden ${product.imageContain ? 'bg-white' : ''}`}>
        {hasImage ? (
          <>
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full ${product.imageContain ? 'object-contain p-4' : 'object-cover'} transform ${isDoor ? 'scale-[0.85]' : ''} group-hover:scale-105 transition-transform duration-500 ease-out`}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-warm-100" />
            <div className="absolute inset-0 bg-teal-600/5 group-hover:bg-teal-600/10 transition-colors duration-500 z-10" />
            <div className="w-full h-full flex items-center justify-center p-6 transform group-hover:scale-105 transition-transform duration-500 ease-out">
              <span className="text-sm text-teal-700/60 font-medium text-center relative z-10">
                {product.name}
              </span>
            </div>
          </>
        )}
      </div>
      <div className="p-3 sm:p-6">
        <h3 className="font-heading text-sm sm:text-lg font-700 text-warm-900 group-hover:text-teal-700 transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-warm-500 leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="mt-2 sm:mt-4 flex items-center text-teal-700 text-xs sm:text-sm font-medium">
          Learn more
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
