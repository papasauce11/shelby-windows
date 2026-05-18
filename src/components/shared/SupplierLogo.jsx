import { Link } from 'react-router-dom';
import goldenWindowsLogo from '../../assets/golden_windows_logo.png';
import vinylBiltLogo from '../../assets/vinylbilt_logo.png';
import entryguardLogo from '../../assets/entryguard_logo.png';
import windowStarLogo from '../../assets/windowstar-horizontal.png';

const logoMap = {
  'golden-windows': goldenWindowsLogo,
  'vinyl-bilt': vinylBiltLogo,
  'entryguard-doors': entryguardLogo,
  'window-star': windowStarLogo,
};

export default function SupplierLogo({ supplier, size = "default", linkable = true }) {
  const sizes = {
    small: "px-4 py-3 h-16 w-36",
    default: "px-6 py-4 h-20 w-44",
    large: "px-4 py-3 h-16 w-[140px] sm:px-6 sm:py-5 sm:h-24 sm:w-[200px]",
    hero: "h-20 sm:h-28 lg:h-32",
    heroGolden: "h-24 sm:h-36 lg:h-40"
  };

  const logo = logoMap[supplier.slug];
  const isWindowStar = supplier.slug === 'window-star';
  const isHeroSize = size === 'hero' || size === 'heroGolden';

  const inner = logo ? (
    <img
      src={logo}
      alt={supplier.name}
      className={`w-auto object-contain ${
        isWindowStar
          ? isHeroSize
            ? 'max-h-full -ml-[15px]'
            : 'max-h-[130%] max-w-[85%]'
          : 'max-h-full'
      }`}
    />
  ) : (
    <span className="font-heading font-700 text-warm-600 group-hover:text-teal-700 tracking-wide transition-colors text-sm">
      {supplier.shortName || supplier.name}
    </span>
  );

  if (!linkable) {
    return (
      <div className={`inline-flex items-center justify-center group ${sizes[size]}`}>
        {inner}
      </div>
    );
  }

  return (
    <Link
      to={`/suppliers/${supplier.slug}`}
      className={`inline-flex items-center justify-center border border-warm-200 rounded-xl bg-white hover:border-teal-300 hover:shadow-md transition-all group overflow-hidden ${sizes[size]}`}
    >
      {inner}
    </Link>
  );
}
