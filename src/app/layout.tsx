import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: 'Clean Hands Au Naturel | Organic Hand Sanitizer',
  description: 'Premium organic hand sanitizer with natural scents. Disinfects. Protects. Heals.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="min-h-screen bg-primary-50">
        {children}
      </body>
    </html>
  );
} 