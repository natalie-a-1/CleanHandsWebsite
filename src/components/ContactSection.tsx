"use client";

import React, { useState } from 'react';

const ContactSection = () => {
  // Form state is kept but functionality is commented out
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: typeof formData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission functionality commented out as requested
    // Will be set up later
    alert("Contact form functionality is currently disabled. Please contact us directly via email.");
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-light mb-4 text-primary-700 uppercase tracking-wider">Contact Us</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Have questions about our products or want to place a bulk order? Get in touch with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form - Commented out but UI structure kept */}
          <div>
            <div className="bg-white p-8 border border-neutral-100">
              <div className="text-center py-8">
                <p className="text-neutral-600 mb-4">The contact form is currently disabled.</p>
                <p className="text-neutral-600 mb-8">Please contact us directly via email or phone.</p>
                <div className="inline-block border-t border-neutral-200 w-16"></div>
                <p className="mt-8 text-sm text-neutral-500">
                  Contact form functionality will be enabled soon.
                </p>
              </div>
              
              {/* Commented out form
              <form onSubmit={handleSubmit} className="bg-white p-8 border border-neutral-100">
                {errorMessage && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600">
                    {errorMessage}
                  </div>
                )}
                <div className="mb-8">
                  <label htmlFor="name" className="block text-neutral-600 font-light mb-2 uppercase text-xs tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
                <div className="mb-8">
                  <label htmlFor="email" className="block text-neutral-600 font-light mb-2 uppercase text-xs tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
                <div className="mb-8">
                  <label htmlFor="message" className="block text-neutral-600 font-light mb-2 uppercase text-xs tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="input-field"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <p className="mt-4 text-xs text-neutral-500 text-center">
                  Messages will be sent to kawb3@icloud.com
                </p>
              </form>
              */}
            </div>
          </div>

          {/* Contact Information - Kept intact */}
          <div className="flex flex-col justify-center">
            <div className="bg-white p-8 border border-neutral-100">
              <h3 className="text-xl font-serif font-light mb-8 text-primary-700 uppercase tracking-wider">Get In Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 text-primary-500 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-800 mb-1 uppercase tracking-wider">Email</h4>
                    <a
                      href="mailto:kawb3@icloud.com"
                      className="text-primary-600 hover:text-primary-700 transition-colors text-sm"
                    >
                      kawb3@icloud.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 text-primary-500 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-800 mb-1 uppercase tracking-wider">Phone</h4>
                    <a
                      href="tel:+14056158338"
                      className="text-primary-600 hover:text-primary-700 transition-colors text-sm"
                    >
                      +1 405 615 8338
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 