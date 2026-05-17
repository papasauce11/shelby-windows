import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import heroBg from '../assets/hero.png';
import financingImg from '../assets/10.png';
import { products } from '../data/products';
import { suppliers } from '../data/suppliers';
import ProductCard from '../components/shared/ProductCard';
import SupplierLogo from '../components/shared/SupplierLogo';
import CTASection from '../components/shared/CTASection';
import mapleLeaf from '../assets/canada_flag.png';
import proudlyCanadianBadge from '../assets/proudly_canadian.png';

import igPost1 from '../assets/instagram/ig_post_1.jpg';
import igPost2 from '../assets/instagram/ig_post_2.jpg';
import igPost3 from '../assets/instagram/ig_post_3.jpg';
import igPost4 from '../assets/instagram/ig_post_4.jpg';
import igPost5 from '../assets/instagram/ig_post_5.jpg';

const instagramPosts = [
  { url: "https://www.instagram.com/p/DJqJYc8NEft/",  image: igPost1 },
  { url: "https://www.instagram.com/p/DJC-Lg6PluX/",  image: igPost2 },
  { url: "https://www.instagram.com/p/DHGa1hjxkBu/",  image: igPost3 },
  { url: "https://www.instagram.com/p/DHGab6lx8ha/",  image: igPost4 },
  { url: "https://www.instagram.com/p/DHGaps4xAme/",  image: igPost5 },
];

export default function Home() {
  const location = useLocation();
  const featuredWindows = products.windows.slice(0, 4);
  const featuredDoors = products.doors;
  const [igIndex, setIgIndex] = useState(0);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, [location.hash]);
  const [expandedReview, setExpandedReview] = useState(null);
  const igTotal = instagramPosts.length;
  const igPrev = () => setIgIndex(i => (i - 1 + igTotal) % igTotal);
  const igNext = () => setIgIndex(i => (i + 1) % igTotal);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden -mb-1">
        <div className="absolute inset-0 -bottom-2 bg-warm-100" />
        <img src={heroBg} alt="" className="absolute -inset-x-0 top-0 -bottom-4 w-full h-[calc(100%+16px)] object-cover object-center" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <h1 className="font-heading font-800 text-white text-3xl sm:text-5xl lg:text-7xl leading-tight [text-shadow:0_1px_4px_rgba(0,0,0,0.6),0_2px_10px_rgba(0,0,0,0.3)]">
            Windows & Doors<br />
            <span className="text-teal-400">Built for Canada</span>
          </h1>
          <p className="mt-5 sm:mt-8 text-white text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed [text-shadow:0_1px_10px_rgba(0,0,0,0.7)]">
            Locally installed. Canadian-made. Every window and door we carry comes from manufacturers we trust — built for our winters, backed by real warranties.
          </p>
          <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="min-w-[240px] sm:min-w-0 px-5 py-3.5 sm:px-10 sm:py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-500 shadow-lg hover:shadow-xl transition-all text-base sm:text-lg text-center"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/contact?reason=showroom"
              className="min-w-[240px] sm:min-w-0 px-5 py-3.5 sm:px-10 sm:py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-500 shadow-lg hover:shadow-xl transition-all text-base sm:text-lg text-center"
            >
              Book a Showroom Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="pt-6 pb-7 sm:pt-12 sm:pb-12 px-5 sm:px-6 bg-warm-100">
        <p className="text-2xl sm:text-4xl text-warm-400 italic font-light tracking-wide text-center mb-4 sm:mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Experience the Shelby Way</p>
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {[
            { icon: (
                <svg className="w-7 h-7 sm:w-9 sm:h-9 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ), label: "Fast, Clean Installs" },
            { icon: (
                <svg className="w-7 h-7 sm:w-9 sm:h-9 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              ), label: "Free Measurements" },
            { icon: (
                <svg className="w-7 h-7 sm:w-9 sm:h-9 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ), label: "Manufacturer-Backed Warranty" },
            { icon: (
                <svg className="w-7 h-7 sm:w-9 sm:h-9 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              ), label: "Hundreds of Styles" },
          ].map(({ icon, label }) => (
            <div key={label} className="bg-white rounded-xl border border-warm-200 p-3 sm:p-6 text-center shadow-sm">
              <div className="flex justify-center mb-2 sm:mb-3">{icon}</div>
              <p className="text-xs sm:text-base font-heading font-700 text-warm-900">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Windows Preview */}
      <section className="pt-8 pb-8 sm:pt-[34px] sm:pb-16 lg:pt-[66px] lg:pb-24 px-5 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-6 sm:mb-12">
            <div>
              <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-3 block animate-on-scroll">Our Windows</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-800 text-warm-900 animate-on-scroll">
                The right window for every room
              </h2>
            </div>
            <Link
              to="/windows"
              className="hidden sm:inline-flex items-center text-lg lg:text-xl text-teal-700 font-semibold hover:text-teal-600 transition-colors"
            >
              Browse all windows
              <svg className="w-5 h-5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {featuredWindows.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/windows" className="text-teal-700 font-medium">
              Browse all windows &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Doors Preview */}
      <section className="py-8 sm:py-16 lg:py-24 px-5 sm:px-6 bg-warm-75">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-6 sm:mb-12">
            <div>
              <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-3 block animate-on-scroll">Our Doors</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-800 text-warm-900 animate-on-scroll">
                Every entrance tells a story
              </h2>
            </div>
            <Link
              to="/doors"
              className="hidden sm:inline-flex items-center text-lg lg:text-xl text-teal-700 font-semibold hover:text-teal-600 transition-colors"
            >
              Browse all doors
              <svg className="w-5 h-5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6">
            {featuredDoors.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/doors" className="text-teal-700 font-medium">
              Browse all doors &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Supplier Strip */}
      <section className="pt-[60px] pb-13 sm:pb-15 px-5 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-2 block">Our Trusted Suppliers</span>
          <h2 className="text-2xl lg:text-3xl font-heading font-800 text-warm-900 mb-6">
            Canadian manufacturers you can count on
          </h2>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {suppliers.map(supplier => (
              <SupplierLogo key={supplier.slug} supplier={supplier} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Proudly Canadian */}
      <section className="py-8 sm:py-14 lg:py-20 px-5 sm:px-6 bg-warm-75">
        <div className="max-w-4xl mx-auto text-center">
          <img src={proudlyCanadianBadge} alt="Proudly Canadian - Canadian Products" className="w-48 h-48 sm:w-72 sm:h-72 mx-auto mb-6" />
          <h2 className="text-2xl lg:text-3xl font-heading font-800 text-warm-900 mb-4">
            Proudly Canadian.<br className="sm:hidden" /> Built for Canadian homes.
          </h2>
          <p className="text-warm-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every product we carry is made in Canada — engineered for freeze-thaw cycles, high humidity, and everything our climate throws at a home. When you buy from Shelby, you're getting windows and doors that were designed with our winters in mind, not retrofitted from somewhere else.
          </p>
        </div>
      </section>

      {/* Financing */}
      <section id="financing" className="py-8 sm:py-16 lg:py-24 px-5 sm:px-6 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={financingImg} alt="Luxury windows and doors" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-300 mb-2 block [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">Financing Available</span>
                <h2 className="text-2xl lg:text-3xl font-heading font-800 text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
                  Give savings a warm welcome
                </h2>
              </div>
            </div>
            <div>
              <p className="text-warm-500 text-base sm:text-lg leading-relaxed mb-8">
                We offer flexible financing options to make your window and door project a reality — no need to delay upgrades or compromise on quality. Affordable monthly payments, fast approvals, and no hidden fees.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Flexible Payments", text: "Affordable monthly plans designed to fit your budget." },
                  { title: "Fast Approvals",    text: "Minimal paperwork — get started right away." },
                  { title: "No Hidden Fees",    text: "Transparent terms from start to finish." },
                  { title: "No Compromises",    text: "Finance the full project — premium quality included." },
                ].map(({ title, text }) => (
                  <div key={title} className="p-5 rounded-xl bg-white border border-warm-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-heading font-700 text-warm-900 mb-1 text-sm">{title}</h3>
                    <p className="text-xs text-warm-500 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-teal-700 text-white font-semibold rounded-full hover:bg-teal-800 shadow-sm hover:shadow-md transition-all"
              >
                Ask about financing
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews — Real Google Reviews (5.0 / 20 reviews) */}
      <section className="py-8 sm:py-16 lg:py-24 px-5 sm:px-6 bg-warm-75">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-3 block">Customer Reviews</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-800 text-warm-900">
              What our customers say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-8">
            {[
              {
                name: "Herbert Lemcke",
                time: "2 months ago",
                text: "We recently upgraded all our windows to aluminum-clad wooden windows from Golden Windows. This was a tricky job in a log home with large windows, some of them located quite high up. Vick reliably coordinated the installation and was very accommodating in completing the custom trim work. A major shout-out to Walter and his crew, who did an excellent job. Their attention to detail was impressive, their workmanship impeccable. We're very happy with the outcome!"
              },
              {
                name: "Petra Hamann",
                time: "7 months ago",
                text: "Shelby Windows & Doors did an outstanding job! Vick has deep knowledge of windows and doors built on years of hands-on installation experience. He carefully inspected the job site, recommended the right products for my home, and was personally involved in every step. After interviewing four other window suppliers, I chose Shelby because no one else demonstrated this level of expertise and commitment. Highly recommended!"
              },
              {
                name: "Nexus 303",
                time: "9 months ago",
                text: "Our company has worked with Vick for 4 years and we can confidently say he stands out in the window and door industry. As professional installers, we value high standards and attention to detail -- qualities Vick brings to every project. His customer service is exceptional. Vick goes above and beyond for clients, treating every project with care and always aiming to exceed expectations. We highly recommend Vick to anyone wanting top-quality windows and doors."
              }
            ].map(({ name, time, text }, idx) => (
              <div key={name} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-warm-100 shadow-sm flex flex-col gap-2 sm:gap-4">
                <div className="flex gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="flex-1">
                  <p className={`text-warm-600 text-xs sm:text-sm leading-relaxed ${expandedReview === idx ? '' : 'line-clamp-3'}`}>{text}</p>
                  <button
                    onClick={() => setExpandedReview(expandedReview === idx ? null : idx)}
                    className="text-teal-600 text-xs font-medium mt-1 hover:text-teal-700"
                  >
                    {expandedReview === idx ? 'Show less' : '... see more'}
                  </button>
                </div>
                <div>
                  <p className="font-heading font-700 text-warm-900 text-xs sm:text-sm">{name}</p>
                  <p className="text-warm-400 text-xs">{time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/search/Shelby+Windows+Doors+Vaughan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-700 font-medium hover:text-teal-600 transition-colors"
            >
              Read more reviews on Google
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-8 sm:py-14 lg:py-20 px-5 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-6 sm:mb-8">
            <div>
              <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-2 block">Follow Along</span>
              <h2 className="text-2xl lg:text-3xl font-heading font-800 text-warm-900">
                See our work on Instagram
              </h2>
            </div>
            <a
              href="https://www.instagram.com/shelbywindowsanddoors/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-teal-700 font-medium hover:text-teal-600 transition-colors text-sm"
            >
              @shelbywindowsanddoors
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Grid — 5 across on desktop, carousel on mobile */}
          <div className="relative">
            {/* Mobile carousel */}
            <div className="sm:hidden overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-400 ease-in-out"
                style={{ transform: `translateX(-${igIndex * 100}%)` }}
              >
                {instagramPosts.map((post, i) => (
                  <a key={i} href={post.url} target="_blank" rel="noopener noreferrer" className="flex-none w-full aspect-square block bg-warm-100 overflow-hidden">
                    {post.image ? <img src={post.image} alt={`Post ${i + 1}`} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-warm-300"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></div>}
                  </a>
                ))}
              </div>
              <button onClick={igPrev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center"><svg className="w-4 h-4 text-warm-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
              <button onClick={igNext} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center"><svg className="w-4 h-4 text-warm-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
              <div className="flex justify-center gap-1.5 mt-4">
                {instagramPosts.map((_, i) => (<button key={i} onClick={() => setIgIndex(i)} className={`rounded-full transition-all ${i === igIndex ? 'w-5 h-1.5 bg-teal-600' : 'w-1.5 h-1.5 bg-warm-300'}`} />))}
              </div>
            </div>

            {/* Desktop: all 5 in one row */}

            {/* Desktop: all 5 in one row */}
            <div className="hidden sm:flex gap-3">
              {instagramPosts.map((post, i) => (
                <a key={i} href={post.url} target="_blank" rel="noopener noreferrer" className="flex-1 aspect-square block overflow-hidden rounded-xl bg-warm-100 hover:opacity-90 transition-opacity">
                  {post.image ? (
                    <img src={post.image} alt={`Post ${i + 1}`} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-warm-300">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>


      <CTASection
        heading="Experience the Shelby Way"
        text="Whether you're replacing a single window or outfitting an entire home, we're here to help. Reach out for a free consultation."
        buttonText="Get in Touch"
      />
    </>
  );
}
