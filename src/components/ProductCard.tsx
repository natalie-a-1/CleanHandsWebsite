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
        <div className="flex justify-between items-center pt-4 border-t border-neutral-100">
          <span className="text-neutral-700 font-light">$12.99</span>
          <button className="text-primary-600 hover:text-primary-700 uppercase text-xs tracking-wider font-medium group-hover:underline">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 