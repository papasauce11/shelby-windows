import HeroBanner from '../components/shared/HeroBanner';
import CTASection from '../components/shared/CTASection';
import heroBg from '../assets/2.png';

const projects = [
  { image: null, caption: "Grand entryway with pivot door and transom glazing" },
  { image: null, caption: "Kitchen renovation — floor-to-ceiling windows and sliding patio doors" },
  { image: null, caption: "Double-height foyer with window wall and modern entrance door" },
  { image: null, caption: "Dining room — large casement windows and swinging patio doors" },
  { image: null, caption: "Staircase landing with picture windows and black entrance door" },
  { image: null, caption: "Home office — corner window installation with patio door access" },
  { image: null, caption: "Bay window addition in living room" },
  { image: null, caption: "Multi-slide door system for indoor-outdoor living" },
];

export default function OurWork() {
  return (
    <>
      <HeroBanner
        title="Our Work"
        subtitle="A selection of recent projects across Ontario."
        image={heroBg}
      />

      {/* Intro statement */}
      <section className="bg-warm-50 py-8 sm:py-14 px-5 sm:px-6 border-b border-warm-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="w-10 h-px bg-teal-600 flex-shrink-0 hidden sm:block" />
          <p className="text-warm-700 text-xl lg:text-2xl font-heading font-600 leading-snug">
            Every project is different, but our standard stays the same — quality products, careful installation, and a home that performs better than before.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section className="py-12 sm:py-16 lg:py-24 px-5 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className={`group ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-warm-100 group-hover:border-teal-200 group-hover:shadow-xl transition-all duration-300">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-teal-50 to-warm-100 flex items-center justify-center">
                      <span className="text-sm text-teal-700/40 text-center px-6">Photo Coming Soon</span>
                    </div>
                  )}
                </div>
                <div className="mt-3 flex items-start gap-3">
                  <span className="text-xs text-teal-600/60 font-heading font-700 mt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm text-warm-600 font-medium">{project.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Have a project in mind?"
        text="We would love to add your home to this gallery. Contact us to get started."
      />
    </>
  );
}
