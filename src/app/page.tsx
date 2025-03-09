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
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Natural ingredients for hand sanitizer"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Clean Hands Au Naturel</h1>
            <p className="text-xl md:text-2xl mb-8 font-medium">DISINFECTS. PROTECTS. HEALS.</p>
            <p className="text-lg mb-8">Premium organic hand sanitizer with natural scents that keep your hands clean without harsh chemicals.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="btn-primary">Explore Scents</a>
              <a href="#contact" className="btn-outline border-white text-white hover:bg-white hover:bg-opacity-20">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1584483720412-ce931f4aefa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Organic hand sanitizer ingredients"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-700">Our Natural Approach</h2>
              <p className="text-lg mb-6 text-gray-700">
                At Clean Hands Au Naturel, we believe that keeping your hands clean shouldn't come at the expense of your skin's health. Our organic hand sanitizers are crafted with natural ingredients that effectively kill germs while nourishing your skin.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Unlike conventional sanitizers that can leave your hands dry and irritated, our formula includes moisturizing elements that keep your skin soft and healthy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Organic Ingredients</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Cruelty-Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Eco-Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section id="products" className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700">Our Scents</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover our range of natural scents, each carefully selected for their therapeutic properties and delightful aromas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700">What Our Customers Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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