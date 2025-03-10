"use client";

import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  color: string;
  description: string;
}

const ProductCard = ({ name, color, description }: ProductCardProps) => {
  // Generate a file name based on the scent name
  let scentFileName = name.toLowerCase();
  
  // Special case for PATCHOULI
  if (name.toUpperCase() === 'PATCHOULI') {
    scentFileName = 'PATCHOULI';
  }
  
  const imageUrl = `/images/scents/${scentFileName}.png`;

  // Create a dynamic class for the color overlay
  const colorClass = `absolute inset-0 bg-${color} opacity-10`;

  return (
    <div className="bg-white border border-neutral-100 overflow-hidden transition-transform hover:translate-y-[-4px] duration-300 group">
      <div className="relative h-56">
        <Image
          src={imageUrl}
          alt={`${name} hand sanitizer`}
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
        <div className={colorClass}></div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-serif tracking-wider uppercase mb-2 text-primary-700">{name}</h3>
        <p className="text-neutral-600 mb-4 text-sm">{description}</p>
        
        {/* Size and pricing options */}
        <div className="pt-4 border-t border-neutral-100">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-neutral-700 font-medium">Mini</span>
              <span className="text-neutral-700">$5.00</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-neutral-700 font-medium">2 oz.</span>
              <span className="text-neutral-700">$10.00</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-neutral-700 font-medium">4 oz.</span>
              <span className="text-neutral-700">$16.00</span>
            </div>
          </div>
          <button className="w-full text-center text-primary-600 hover:text-primary-700 uppercase text-xs tracking-wider font-medium py-2 border border-primary-500 hover:bg-primary-50 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 