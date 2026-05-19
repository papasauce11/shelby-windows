import { faqItems } from '../data/faq';
import HeroBanner from '../components/shared/HeroBanner';
import FAQAccordion from '../components/shared/FAQAccordion';
import CTASection from '../components/shared/CTASection';
import { Link } from 'react-router-dom';
import heroBg from '../assets/6.jpg';

export default function FAQ() {
  return (
    <>
      <HeroBanner
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our products, installation, and process."
        image={heroBg}
      />

      <section className="py-8 sm:py-16 lg:py-24 px-5 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-16">

          <div className="lg:col-span-2 order-1">
            <FAQAccordion items={faqItems} />
          </div>

          <div className="lg:col-span-1 order-2">
            <div className="lg:sticky lg:top-36 space-y-4 sm:space-y-8">
              <div className="hidden sm:block">
                <div className="w-10 h-px bg-teal-600 mb-4" />
                <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 block mb-4">Quick Links</span>
                <p className="text-warm-500 text-sm leading-relaxed">
                  Can't find what you're looking for? Reach out and we'll get back to you promptly.
                </p>
              </div>

              <div className="bg-warm-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-warm-100">
                <h3 className="font-heading font-700 text-warm-900 mb-1 sm:mb-2 text-sm sm:text-base">Still have questions?</h3>
                <p className="text-warm-500 text-xs sm:text-sm mb-3 sm:mb-5 leading-relaxed">
                  Our team is happy to walk you through anything — no obligation.
                </p>
                <Link
                  to="/contact"
                  className="inline-block w-full text-center px-5 py-2.5 sm:py-3 bg-teal-700 text-white text-sm font-semibold rounded-full hover:bg-teal-800 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              <div className="bg-teal-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-teal-100">
                <h3 className="font-heading font-700 text-warm-900 mb-1 sm:mb-2 text-sm sm:text-base">Free Consultation</h3>
                <p className="text-warm-500 text-xs sm:text-sm mb-3 sm:mb-5 leading-relaxed">
                  We'll assess your home and give you a clear, detailed quote at no charge.
                </p>
                <Link
                  to="/contact"
                  className="inline-block w-full text-center px-5 py-2.5 sm:py-3 border border-teal-300 text-teal-700 text-sm font-semibold rounded-full hover:bg-teal-100 transition-colors"
                >
                  Book a Visit
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
