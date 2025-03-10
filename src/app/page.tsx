import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
// import TestimonialCard from '@/components/TestimonialCard';
// import ContactSection from '@/components/ContactSection';
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

// Testimonials data commented out but kept for future use
/*
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
*/

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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-light mb-4 text-primary-700 uppercase tracking-wider">Our Natural Approach</h2>
          </div>
          
          {/* Image and Introduction */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
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
              <p className="text-neutral-600 mb-6 font-light">
                At Clean Hands Au Naturel, we believe that keeping your hands clean shouldn't come at the expense of your skin's health. Our organic hand sanitizers are crafted with natural ingredients that effectively kill germs while nourishing your skin.
              </p>
              <p className="text-neutral-600 font-light">
                Unlike conventional sanitizers that can leave your hands dry and irritated, our formula includes moisturizing elements that keep your skin soft and healthy.
              </p>
            </div>
          </div>
          
          {/* Benefits and Ingredients Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Key Benefits */}
            <div className="bg-primary-50 p-6 h-full">
              <h3 className="text-lg font-serif tracking-wider uppercase mb-4 text-primary-700">Key Benefits</h3>
              <ul className="space-y-3 text-neutral-600 text-sm">
                <li>• Promotes Healthy Clean Hands</li>
                <li>• Made with high quality ingredients</li>
                <li>• Cleans, protects, disinfects and is healing</li>
                <li>• Can be used often without drying out hands</li>
                <li>• Helps soothe redness and moisturize</li>
                <li>• Fine mist sprayer makes it go a long way</li>
                <li>• Dark glass bottle keeps product fresh</li>
              </ul>
            </div>
            
            {/* Key Ingredients */}
            <div className="bg-primary-50 p-6 h-full">
              <h3 className="text-lg font-serif tracking-wider uppercase mb-4 text-primary-700">Key Ingredients</h3>
              <ul className="space-y-3 text-neutral-600 text-sm">
                <li>• <strong>Alcohol</strong> - Disinfects</li>
                <li>• <strong>Hydrogen Peroxide</strong> - Antiseptic, germicidal</li>
                <li>• <strong>100% Natural Organic Hydrosol Witch Hazel (no alcohol)</strong> - Antioxidant, anti-inflammatory, anti-aging, cleans and soothes</li>
                <li>• <strong>100% Pure Kosher Organic Food Grade Vegetable Glycerin</strong> - Moisturizing, softening, hypoallergenic</li>
                <li>• <strong>Reverse Osmosis Water</strong> - No chemicals</li>
                <li>• <strong>Young Living Essential Oils</strong> - Various scents with their own healing benefits</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 mt-12 justify-center">
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
      
      {/* Where to Buy Section */}
      <section id="where-to-buy" className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-light mb-4 text-primary-700 uppercase tracking-wider">Where to Buy</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Clean Hands Au Naturel is proudly sold at select locations in Oklahoma. Visit one of our retail partners to purchase our products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Location 1 */}
            <div className="bg-primary-50 p-8 border border-primary-100">
              <h3 className="text-xl font-serif tracking-wider uppercase mb-3 text-primary-700">Beauty Co-Op Holistic Spalon</h3>
              <address className="not-italic text-neutral-600 mb-4">
                <p>1133 W. 15th St</p>
                <p>Edmond, Oklahoma 73013</p>
              </address>
              <div className="flex items-center pt-4 border-t border-primary-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a href="https://maps.google.com/?q=1133+W.+15th+St,+Edmond,+Oklahoma+73013" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                  View on Map
                </a>
              </div>
            </div>
            
            {/* Location 2 */}
            <div className="bg-primary-50 p-8 border border-primary-100">
              <h3 className="text-xl font-serif tracking-wider uppercase mb-3 text-primary-700">Bad Granny's Bazaar</h3>
              <address className="not-italic text-neutral-600 mb-4">
                <p>1759 NW 16th St</p>
                <p>Oklahoma City, Oklahoma</p>
              </address>
              <div className="flex items-center pt-4 border-t border-primary-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a href="https://maps.google.com/?q=1759+NW+16th+St,+Oklahoma+City,+Oklahoma" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - Commented out as requested */}
      {/*
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
      */}
      
      {/* Contact Section - Commented out as requested */}
      {/* <ContactSection /> */}
      
      <Footer />
    </main>
  );
} 