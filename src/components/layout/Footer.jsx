import { Link } from 'react-router-dom';
import { companyInfo } from '../../data/navigation';
import mapleLeaf from '../../assets/canada_flag.png';
import shelbyLogo from '../../assets/shelby_logo3.png';
import shelbyBranding from '../../assets/shelbybranding_.png';

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-400">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Brand column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <Link to="/" className="inline-flex items-center gap-1">
              <img src={shelbyBranding} alt="" className="h-[52px] w-auto brightness-0 invert" />
              <img src={shelbyLogo} alt="Shelby Windows & Doors" className="h-[52px] w-auto brightness-0 invert" />
            </Link>
            <p className="text-xs text-warm-500 leading-relaxed max-w-[220px]">
              Premium windows and doors, supplied and installed by Canadians — for Canadian homes.
            </p>
            <div className="flex items-center gap-2">
              <img src={mapleLeaf} alt="" className="w-4 h-4" />
              <span className="text-xs text-warm-500">Proudly Canadian</span>
            </div>
            <a
              href={companyInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-warm-500 hover:text-teal-400 transition-colors w-fit"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @shelbywindowsanddoors
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61570583433801"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-warm-500 hover:text-teal-400 transition-colors w-fit"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Shelby Windows & Doors
            </a>
          </div>

          {/* 4 nav columns — each equal width */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">

            {/* Pages */}
            <div className="sm:pl-[30px]">
              <h4 className="font-heading text-xs font-700 uppercase tracking-widest text-white mb-3">Pages</h4>
              <ul className="space-y-1.5">
                {[
                  { label: 'Home',     path: '/' },
                  { label: 'About',    path: '/about' },
                  { label: 'Our Work', path: '/our-work' },
                  { label: 'FAQ',      path: '/faq' },
                  { label: 'Contact',  path: '/contact' },
                ].map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm hover:text-teal-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-heading text-xs font-700 uppercase tracking-widest text-white mb-3">Products</h4>
              <ul className="space-y-1.5">
                {[
                  { label: 'Windows',          path: '/windows' },
                  { label: 'Doors',            path: '/doors' },
                  { label: 'Golden Windows',   path: '/suppliers/golden-windows' },
                  { label: 'Vinyl Bilt',       path: '/suppliers/vinyl-bilt' },
                  { label: 'Entryguard Doors', path: '/suppliers/entryguard-doors' },
                ].map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm hover:text-teal-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading text-xs font-700 uppercase tracking-widest text-white mb-3">Contact</h4>
              <div className="space-y-3 text-sm">
                <p className="leading-snug">
                  {companyInfo.address.street}<br />
                  {companyInfo.address.city}, {companyInfo.address.province}
                </p>
                <p>
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-teal-400 transition-colors">
                    {companyInfo.email}
                  </a>
                </p>

                {/* Team */}
                <div className="space-y-2 pt-1 border-t border-warm-800">
                  <div>
                    <p className="text-white text-xs font-medium">Vick Mandla</p>
                    <p className="text-warm-500 text-xs">CEO & Founder</p>
                    <a href="tel:6479976935" className="text-xs hover:text-teal-400 transition-colors">647 997 6935</a>
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium">Emily Petch</p>
                    <p className="text-warm-500 text-xs">Operations Manager</p>
                    <a href="tel:9053085185" className="text-xs hover:text-teal-400 transition-colors">905 308 5185</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-heading text-xs font-700 uppercase tracking-widest text-white mb-3">Hours</h4>
              <div className="space-y-1.5 text-xs">
                {companyInfo.hours.map(h => (
                  <div key={h.day} className="flex gap-3">
                    <span className="text-warm-600 w-8 flex-shrink-0">{h.day.slice(0, 3)}</span>
                    <span className="text-warm-400">{h.time}</span>
                  </div>
                ))}
                <p className="text-warm-500 text-xs mt-2 italic">By appointment after 1 PM</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-warm-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-warm-600">
            &copy; {new Date().getFullYear()} {companyInfo.name} All rights reserved.
          </p>
          <p className="text-xs text-warm-700">
            Website by <a href="https://varaico.ca" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-400 transition-colors">Varaico</a>
          </p>
        </div>
      </div>

    </footer>
  );
}
