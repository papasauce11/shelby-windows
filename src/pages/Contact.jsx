import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { companyInfo } from '../data/navigation';
import contactImg from '../assets/instagram/ig_post_4.jpg';

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
    <>
      {/* Hero strip + Form + image */}
      <section className="pt-6 sm:pt-10 pb-8 sm:pb-12 px-5 sm:px-6 bg-warm-50">
        <div className="max-w-7xl mx-auto text-center">
          {isShowroom && (
            <span className="text-xs font-heading font-700 uppercase tracking-widest text-teal-600 mb-2 block">
              Book a Visit
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-800 text-warm-900 mb-2 sm:mb-3 leading-tight">
            {isShowroom ? 'Book a Showroom Visit' : 'Contact Us'}
          </h1>
          <p className="text-warm-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-12 sm:mb-16">
            {isShowroom
              ? 'See our products in person. Book a time to visit the Shelby Windows & Doors showroom.'
              : 'Ready to start your project? Get in touch for a free, no-obligation consultation.'}
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Left column: form + contact cards */}
          <div className="space-y-4 sm:space-y-6">
            {/* Form card */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-warm-100 shadow-sm p-4 sm:p-6 lg:p-8">
              {submitted ? (
                <div className="bg-teal-50 border border-teal-200 rounded-xl sm:rounded-2xl p-6 sm:p-10 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-teal-100 flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-700 text-warm-900 text-base sm:text-lg mb-2">Message received</h3>
                  <p className="text-warm-600 text-sm sm:text-base">Thank you for reaching out. We will get back to you within two business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-warm-700 mb-1">Name</label>
                      <input
                        type="text" id="name" name="name"
                        value={formData.name} onChange={handleChange} required
                        className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-white text-warm-900 text-sm placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-warm-700 mb-1">Email</label>
                      <input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange} required
                        className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-white text-warm-900 text-sm placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  {/* Row 2: Phone + Reason */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-warm-700 mb-1">Phone</label>
                      <input
                        type="tel" id="phone" name="phone"
                        value={formData.phone} onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-white text-warm-900 text-sm placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="(905) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="reason" className="block text-xs sm:text-sm font-medium text-warm-700 mb-1">I'm interested in</label>
                      <select
                        id="reason" name="reason"
                        value={formData.reason} onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-white text-warm-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      >
                        <option value="quote">Getting a free quote</option>
                        <option value="showroom">Booking a showroom visit</option>
                        <option value="general">General inquiry</option>
                      </select>
                    </div>
                  </div>
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-warm-700 mb-1">Message</label>
                    <textarea
                      id="message" name="message"
                      value={formData.message} onChange={handleChange} required
                      rows={3}
                      className="w-full px-3 py-2.5 rounded-lg border border-warm-200 bg-white text-warm-900 text-sm placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project: what products, how many openings, timeline, etc."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-teal-700 text-white font-semibold rounded-full hover:bg-teal-800 shadow-sm hover:shadow-md transition-all text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact cards row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Contact details */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-warm-100 shadow-sm p-4 sm:p-5">
                <h3 className="font-heading font-700 text-warm-900 text-sm mb-3">Contact Details</h3>
                <div className="space-y-2.5">
                  <a href="tel:+19056605505" className="flex items-center gap-2.5 text-warm-600 hover:text-teal-700 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <span className="text-sm">(905) 660-5505</span>
                  </a>
                  <a href="mailto:info@shelbywindows.ca" className="flex items-center gap-2.5 text-warm-600 hover:text-teal-700 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <span className="text-sm">info@shelbywindows.ca</span>
                  </a>
                  <div className="flex items-center gap-2.5 text-warm-600">
                    <div className="w-7 h-7 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <span className="text-sm">10 Planchet Rd, Unit 4<br />Vaughan, ON L4K 2C8</span>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-warm-100 shadow-sm p-4 sm:p-5">
                <h3 className="font-heading font-700 text-warm-900 text-sm mb-3">Hours</h3>
                <div className="space-y-1.5 text-sm text-warm-600">
                  <div className="flex justify-between"><span>Mon - Fri</span><span className="text-warm-800 font-medium">8:00 AM - 5:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="text-warm-800 font-medium">9:00 AM - 2:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-warm-400">Closed</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: tall image */}
          <div className="hidden lg:block rounded-2xl overflow-hidden shadow-md">
            <img src={contactImg} alt="Shelby Windows project" className="w-full h-full object-cover" />
          </div>

        </div>
      </section>

      {/* Map */}
      <section className="px-5 sm:px-6 pb-8 sm:pb-12 bg-warm-50">
        <div className="max-w-7xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden border border-warm-100 shadow-sm h-40 sm:h-52">
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
      </section>
    </>
  );
}
