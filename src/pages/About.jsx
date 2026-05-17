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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Canadian Products",
                description: "Every product we install is manufactured in Canada by suppliers we know and trust. Built for our climate, backed by solid warranties."
              },
              {
                title: "Quality Installation",
                description: "Professional installation makes the difference between a window that performs and one that doesn't. We take the time to get it right."
              },
              {
                title: "Full-Service Experience",
                description: "From the initial consultation to the final walkthrough, you deal with one company. We manage every step so you don't have to."
              }
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all">
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
