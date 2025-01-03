"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // Updated for Next.js 13+ routing

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route dynamically

  // Helper function to check active link
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-yellow-400 tracking-wide">
          E-Commerce
        </h1>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className={`hover:text-yellow-400 transition ${
              isActive('/') ? 'text-yellow-400 font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-yellow-400 transition ${
              isActive('/about') ? 'text-yellow-400 font-semibold' : ''
            }`}
          >
            About
          </Link>
          <Link
            href="/products"
            className={`hover:text-yellow-400 transition ${
              isActive('/products') ? 'text-yellow-400 font-semibold' : ''
            }`}
          >
            Product
          </Link>
          <Link
            href="/contact"
            className={`hover:text-yellow-400 transition ${
              isActive('/contact') ? 'text-yellow-400 font-semibold' : ''
            }`}
          >
            Contact
          </Link>
          <Link
            href={'/cart'}
            className={`hover:text-yellow-400 transition ${
              isActive('/cart') ? 'text-yellow-400 font-semibold' : ''
            }`}
          >
            Cart
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none text-yellow-400"
        >
          {isMobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>
 : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>
}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <Link
            href="/"
            className={`block py-2 px-4 ${
              isActive('/') ? 'bg-yellow-500 text-black' : 'hover:bg-yellow-500'
            }`}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block py-2 px-4 ${
              isActive('/about') ? 'bg-yellow-500 text-black' : 'hover:bg-yellow-500'
            }`}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            About
          </Link>
          <Link
            href="/products"
            className={`block py-2 px-4 ${
              isActive('/products')
                ? 'bg-yellow-500 text-black'
                : 'hover:bg-yellow-500'
            }`}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            Product
          </Link>
          <Link
            href="/contact"
            className={`block py-2 px-4 ${
              isActive('/contact')
                ? 'bg-yellow-500 text-black'
                : 'hover:bg-yellow-500'
            }`}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            Contact
          </Link>
          <Link
            href={'/cart'}
            className={`block py-2 px-4 ${
              isActive('/cart')
                ? 'bg-yellow-500 text-black'
                : 'hover:bg-yellow-500'
            }`}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
           Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;