import CTASection from '../components/shared/CTASection';
import storyImg from '../assets/3.png';
import vickHeadshot from '../assets/Vick Headshot.PNG';
import proudlyCanadian from '../assets/proudly_canadian.png';

export default function About() {
  return (
    <>

      {/* Story — text left, photo right */}
      <section className="pt-6 sm:pt-12 pb-8 sm:pb-16 lg:pb-24 px-5 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-xs sm:text-base font-heading font-700 uppercase tracking-widest text-teal-600 mb-2 sm:mb-4 block">Our Story</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-800 text-warm-900 mb-4 sm:mb-8 leading-tight">
              Built on craftsmanship<br className="sm:hidden" /> and trust
            </h2>
            <div className="space-y-3 sm:space-y-5 text-warm-600 text-sm sm:text-lg leading-relaxed">
              <p>
                Shelby Windows & Doors Inc. was founded with a belief: homeowners deserve access to high-quality windows and doors, installed by people who take pride in their work, at a price that makes sense.
              </p>
              <p>
                We partner exclusively with established Canadian manufacturers to bring our customers products designed, engineered, and built for the demands of our climate.
              </p>
              <p className="hidden sm:block">
                Our approach is simple. We listen to what you need, recommend the products that fit your home and your budget, and handle the full installation from start to finish. No runaround, no surprises.
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/3] sm:aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
              <img src={storyImg} alt="Shelby Windows installation" className="w-full h-full object-cover" />
            </div>
            {/* Floating Canadian badge */}
            <div className="absolute -bottom-8 -left-8 hidden lg:block">
              <img src={proudlyCanadian} alt="Proudly Canadian" className="w-28 h-28 drop-shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values — light background */}
      <section className="py-8 sm:py-16 lg:py-24 px-5 sm:px-6 bg-warm-75">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-16">
            <span className="text-xs sm:text-base font-heading font-700 uppercase tracking-widest text-teal-600 mb-2 sm:mb-3 block">What Sets Us Apart</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-800 text-warm-900">Why homeowners choose Shelby</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Trusted Suppliers",
                description: "Every product we install comes from Canadian suppliers we trust, built for our climate."
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
              <div key={value.title} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-sm hover:shadow-lg transition-all">
                <h3 className="font-heading font-700 text-warm-900 text-sm sm:text-lg mb-1 sm:mb-3">{value.title}</h3>
                <p className="text-warm-500 text-xs sm:text-base leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-8 sm:py-16 lg:py-24 px-5 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-16 items-center">
          {/* Headshot */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="w-64 sm:w-80 lg:w-96">
              <img
                src={vickHeadshot}
                alt="Vick Mandla, CEO & Founder of Shelby Windows & Doors"
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="text-xs sm:text-base font-heading font-700 uppercase tracking-widest text-teal-600 mb-2 sm:mb-4 block">CEO & Founder</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-800 text-warm-900 mb-3 sm:mb-6 leading-tight">
              Vick Mandla
            </h2>
            <div className="space-y-3 sm:space-y-4 text-warm-600 text-sm sm:text-lg leading-relaxed">
              <p>
                Every Shelby project starts and ends with Vick. From the first phone call to the final walkthrough, he's personally involved because he believes that's the only way to guarantee the result lives up to the Shelby name.
              </p>
              <p>
                He listens first, recommends what actually makes sense for your home, and stays hands-on through every stage of the installation. No handoffs to someone you've never met, no cutting corners to save time.
              </p>
              <p className="text-warm-800 font-medium italic">
                "Your home is your biggest investment. I treat every job like it's my own."
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
