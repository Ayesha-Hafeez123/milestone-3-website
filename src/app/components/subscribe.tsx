'use client'
import React, { useState } from 'react';

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}`);
      setEmail(""); // Reset the email input
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <section className="bg-blue-100 py-12 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter and never miss the latest updates, offers, and news!
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;