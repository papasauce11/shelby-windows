import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import contactImg from '../assets/1.png';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const isShowroom = searchParams.get('reason') === 'showroom';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: isShowroom ? 'showroom' : 'quote',
    message: isShowroom ? 'I would like to book a showroom visit.' : ''
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="pt-12 pb-10 px-6 bg-warm-50">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Top row: form card + image — same height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* Form card */}
          <div className="bg-white rounded-2xl border border-warm-100 shadow-sm p-5 sm:p-8 lg:p-10 flex flex-col">
            <div className="w-10 h-px bg-teal-600 mb-5" />
            <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-4 block">
              {isShowroom ? 'Book a Visit' : 'Get in Touch'}
            </span>
            <h1 className="text-3xl lg:text-4xl font-heading font-800 text-warm-900 mb-3 leading-tight">
              {isShowroom ? 'Book a Showroom Visit' : 'Contact Us'}
            </h1>
            <p className="text-warm-500 text-lg mb-6 leading-relaxed">
              {isShowroom
                ? 'See our products in person. Book a time to visit the Shelby Windows & Doors showroom.'
                : <>Ready to start your project?<br />Get in touch for a free, no-obligation consultation.</>}
            </p>

            {submitted ? (
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-700 text-warm-900 text-lg mb-2">Message received</h3>
                <p className="text-warm-600">Thank you for reaching out. We will get back to you within two business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 flex flex-col flex-1">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-warm-700 mb-1.5">Name</label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange} required
                    className="w-full px-3.5 py-2 rounded-xl border border-warm-200 bg-white text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-warm-700 mb-1.5">Email</label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange} required
                      className="w-full px-3.5 py-2 rounded-xl border border-warm-200 bg-white text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-warm-700 mb-1.5">Phone</label>
                    <input
                      type="tel" id="phone" name="phone"
                      value={formData.phone} onChange={handleChange}
                      className="w-full px-3.5 py-2 rounded-xl border border-warm-200 bg-white text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="(905) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-warm-700 mb-1.5">I'm interested in</label>
                  <select
                    id="reason" name="reason"
                    value={formData.reason} onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-xl border border-warm-200 bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  >
                    <option value="quote">Getting a free quote</option>
                    <option value="showroom">Booking a showroom visit</option>
                    <option value="general">General inquiry</option>
                  </select>
                </div>
                <div className="flex-1 flex flex-col">
                  <label htmlFor="message" className="block text-sm font-medium text-warm-700 mb-1.5">Message</label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange} required
                    className="w-full flex-1 min-h-[100px] px-3.5 py-2 rounded-xl border border-warm-200 bg-white text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project: what products are you interested in, how many openings, timeline, etc."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto sm:ml-auto block px-10 py-4 bg-teal-700 text-white font-semibold rounded-full hover:bg-teal-800 shadow-sm hover:shadow-md transition-all text-base"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Image — matches form card height, hidden on mobile */}
          <div className="hidden lg:block rounded-2xl overflow-hidden shadow-md min-h-[440px]">
            <img src={contactImg} alt="Shelby Windows showroom" className="w-full h-full object-cover" />
          </div>

        </div>

        {/* Map — full width */}
        <div className="rounded-2xl overflow-hidden border border-warm-100 shadow-sm h-52">
          <iframe
            title="Shelby Windows location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.123456789!2d-79.5!3d43.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ4JzAwLjAiTiA3OcKwMzAnMDAuMCJX!5e0!3m2!1sen!2sca!4v1600000000000!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}
