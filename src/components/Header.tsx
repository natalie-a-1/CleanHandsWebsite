"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="items-center">
            <span className="text-base md:text-xl font-serif text-primary-700 tracking-widest uppercase whitespace-nowrap">CLEAN HANDS AU NATUREL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-neutral-600 hover:text-primary-600 transition-colors uppercase text-sm tracking-widest">
              Home
            </Link>
            <Link href="#products" className="text-neutral-600 hover:text-primary-600 transition-colors uppercase text-sm tracking-widest">
              Products
            </Link>
            <Link href="#about" className="text-neutral-600 hover:text-primary-600 transition-colors uppercase text-sm tracking-widest">
              About
            </Link>
            <Link href="#where-to-buy" className="text-neutral-600 hover:text-primary-600 transition-colors uppercase text-sm tracking-widest">
              Where to Buy
            </Link>
            <Link href="#contact" className="text-neutral-600 hover:text-primary-600 transition-colors uppercase text-sm tracking-widest">
              Contact
            </Link>
            <Link href="#" className="btn-primary py-2 px-4">
              Shop Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 space-y-6 border-t border-neutral-100 pt-6">
            <Link
              href="/"
              className="block text-neutral-600 hover:text-primary-600 transition-colors uppercase text-sm tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#products"
              className="block text-neutral-600 hover:text-primary-600 transition-colors uppercase text-sm tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#about"
              className="block text-neutral-600 hover:text-primary-600 transition-colors uppercase text-sm tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#where-to-buy"
              className="block text-neutral-600 hover:text-primary-600 transition-colors uppercase text-sm tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              Where to Buy
            </Link>
            <Link
              href="#contact"
              className="block text-neutral-600 hover:text-primary-600 transition-colors uppercase text-sm tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#"
              className="inline-block btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 