import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import ContactSection from '@/components/ContactSection';
import { Scent, Testimonial } from '@/types';

const scents: Scent[] = [
  { name: 'LAVENDER', color: 'accent-lavender', description: 'Calming and soothing' },
  { name: 'LEMON', color: 'accent-lemon', description: 'Refreshing and uplifting' },
  { name: 'PINE', color: 'accent-pine', description: 'Invigorating and fresh' },
  { name: 'PATCHOULI', color: 'accent-patchouli', description: 'Earthy and grounding' },
  { name: 'GRAPEFRUIT', color: 'accent-grapefruit', description: 'Energizing and cleansing' },
  { name: 'LIME', color: 'accent-lime', description: 'Zesty and revitalizing' },
  { name: 'ROSEMARY', color: 'accent-rosemary', description: 'Herbaceous and stimulating' },
  { name: 'EUCALYPTUS', color: 'accent-eucalyptus', description: 'Clearing and purifying' },
  { name: 'LEMONGRASS', color: 'accent-lemongrass', description: 'Citrusy and refreshing' },
  { name: 'TANGERINE', color: 'accent-tangerine', description: 'Sweet and uplifting' },
  { name: 'PEPPERMINT', color: 'accent-peppermint', description: 'Cooling and invigorating' },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah J.',
    quote: 'I love that I can keep my hands clean without harsh chemicals. The lavender scent is my favorite!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael T.',
    quote: 'As someone with sensitive skin, I appreciate that Clean Hands Au Naturel doesn\'t dry out my hands like other sanitizers.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma R.',
    quote: 'The eucalyptus scent is so refreshing. I keep one in my purse, car, and desk at all times!',
    rating: 5,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pinkyPromise.jpg"
            alt="Clean Hands Au Naturel - Natural hand sanitizer"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0 bg-neutral-800 bg-opacity-30"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-serif font-light tracking-widest uppercase mb-6 whitespace-nowrap">CLEAN HANDS AU NATUREL</h1>
            <p className="text-xl md:text-2xl mb-10 tracking-widest uppercase font-light">Disinfects. Protects. Heals.</p>
            <p className="text-lg mb-12 font-light">Premium organic hand sanitizer with natural scents that keep your hands clean without harsh chemicals.</p>
            <div className="flex flex-wrap gap-6">
              <a href="#products" className="btn-primary">Explore Scents</a>
              <a href="#contact" className="btn-outline border-white text-white hover:bg-white hover:bg-opacity-10">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <Image
                src="/images/bottleHand.jpeg"
                alt="Organic hand sanitizer in hand"
                width={600}
                height={400}
                className="border border-neutral-100"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-light mb-8 text-primary-700 uppercase tracking-wider">Our Natural Approach</h2>
              <p className="text-neutral-600 mb-6 font-light">
                At Clean Hands Au Naturel, we believe that keeping your hands clean shouldn't come at the expense of your skin's health. Our organic hand sanitizers are crafted with natural ingredients that effectively kill germs while nourishing your skin.
              </p>
              <p className="text-neutral-600 mb-10 font-light">
                Unlike conventional sanitizers that can leave your hands dry and irritated, our formula includes moisturizing elements that keep your skin soft and healthy.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center border border-primary-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-600 text-sm uppercase tracking-wider">Organic Ingredients</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center border border-primary-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-600 text-sm uppercase tracking-wider">Cruelty-Free</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center border border-primary-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-600 text-sm uppercase tracking-wider">Eco-Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section id="products" className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-light mb-4 text-primary-700 uppercase tracking-wider">Our Scents</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Discover our range of natural scents, each carefully selected for their therapeutic properties and delightful aromas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {scents.map((scent, index) => (
              <ProductCard 
                key={index}
                name={scent.name}
                color={scent.color}
                description={scent.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-light mb-4 text-primary-700 uppercase tracking-wider">What Our Customers Say</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about Clean Hands Au Naturel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                name={testimonial.name}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection />
      
      <Footer />
    </main>
  );
} 