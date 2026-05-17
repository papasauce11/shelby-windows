import CTASection from '../components/shared/CTASection';
import storyImg from '../assets/3.png';
import teamImg from '../assets/6.png';
import proudlyCanadian from '../assets/proudly_canadian.png';

export default function About() {
  return (
    <>

      {/* Story — text left, photo right */}
      <section className="pt-8 sm:pt-12 pb-12 sm:pb-16 lg:pb-24 px-5 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-sm sm:text-base font-heading font-700 uppercase tracking-widest text-teal-600 mb-4 block">Our Story</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-800 text-warm-900 mb-8 leading-tight">
              Built on craftsmanship and trust
            </h2>
            {/* PLACEHOLDER — update with Vick's actual company story */}
            <div className="space-y-5 text-warm-600 text-lg leading-relaxed">
              <p>
                Shelby Windows &amp; Doors Inc. was founded with a belief:<br />homeowners deserve access to high-quality windows and doors, installed by people who take pride in their work, at a price that makes sense.
              </p>
              <p>
                We partner exclusively with established Canadian manufacturers to bring our customers products that are designed, engineered, and built for the demands of our climate. Every window and door we install is backed by the quality assurance of its manufacturer and the care of our installation team.
              </p>
              <p>
                Our approach is simple. We listen to what you need, recommend the products that fit your home and your budget, and handle the full installation from start to finish. No runaround, no surprises.
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img src={storyImg} alt="Shelby Windows installation" className="w-full h-full object-cover" />
            </div>
            {/* Floating Canadian badge */}
            <div className="absolute -bottom-8 -left-8 hidden lg:block">
              <img src={proudlyCanadian} alt="Proudly Canadian" className="w-28 h-28 drop-shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values — light background, numbered cards */}
      <section className="py-12 sm:py-16 lg:py-24 px-5 sm:px-6 bg-warm-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm sm:text-base font-heading font-700 uppercase tracking-widest text-teal-600 mb-3 block">What Sets Us Apart</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-800 text-warm-900">Why homeowners choose Shelby</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Canadian Products",
                description: "Every product we install is manufactured in Canada by suppliers we know and trust. Built for our climate, backed by solid warranties.",
                icon: (
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                )
              },
              {
                title: "Quality Installation",
                description: "Professional installation makes the difference between a window that performs and one that doesn't. We take the time to get it right.",
                icon: (
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.3-5.3a1.5 1.5 0 010-2.12l.71-.71a1.5 1.5 0 012.12 0l3.18 3.18 6.18-6.18a1.5 1.5 0 012.12 0l.71.71a1.5 1.5 0 010 2.12l-7.59 7.59a1.5 1.5 0 01-2.12 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Honest Service",
                description: "Clear pricing, direct communication, and no pressure. We give you the information you need to make a confident decision.",
                icon: (
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                )
              },
              {
                title: "Full-Service Experience",
                description: "From the initial consultation to the final walkthrough, you deal with one company. We manage every step so you don't have to.",
                icon: (
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                )
              }
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all">
                <div className="mb-4">{value.icon}</div>
                <h3 className="font-heading font-700 text-warm-900 text-lg mb-3">{value.title}</h3>
                <p className="text-warm-500 text-base leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team — photo right, text left */}
      <section className="py-12 sm:py-16 lg:py-24 px-5 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-warm-200 bg-warm-50 order-2 lg:order-1 flex items-center justify-center">
            <span className="text-warm-400 text-sm">Team Photo — Coming Soon</span>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="text-sm sm:text-base font-heading font-700 uppercase tracking-widest text-teal-600 mb-4 block">Our Team</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-800 text-warm-900 mb-6 leading-tight">
              The people behind the work
            </h2>
            <p className="text-warm-600 text-lg leading-relaxed">
              {/* PLACEHOLDER — add team bio or quote from Vick here */}
              Our team brings together years of hands-on installation experience and a genuine commitment to doing the job right. We show up on time, keep your home clean, and don't leave until you're satisfied with the result.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
