import Link from 'next/link';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">
              We are committed to delivering the best products and services to
              our customers. Thank you for trusting us!
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-400">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm">123 E-Commerce Street, City, Country</p>
            <p className="text-sm">Email: support@ecommerce.com</p>
            <p className="text-sm">Phone: +123 456 789</p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label="Twitter"
              >
                <FaTwitter className='size-6' />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label="Instagram"
              >
                <FaFacebook className='size-6' />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © 2024 E-Commerce Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;