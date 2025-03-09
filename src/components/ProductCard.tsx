"use client";

import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  color: string;
  description: string;
}

const ProductCard = ({ name, color, description }: ProductCardProps) => {
  // Generate a placeholder image URL based on the scent name
  const imageUrl = `https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80`;

  // Create a dynamic class for the color overlay
  const colorClass = `absolute inset-0 bg-${color} opacity-30`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={`${name} hand sanitizer`}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className={colorClass}></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary-700">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary-600 font-medium">$12.99</span>
          <button className="btn-primary text-sm py-1.5">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 