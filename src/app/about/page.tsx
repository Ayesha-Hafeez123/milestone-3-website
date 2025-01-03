import React from 'react';

const About: React.FC = () => {
  return (
    <section className="relative py-20 bg-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We are committed to delivering an exceptional shopping experience by offering quality products, innovative services, and unparalleled customer care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To transform online shopping by providing premium products and creating seamless experiences.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 text-white rounded-full mb-4">
            <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <line x1="12" y1="2" x2="12" y2="12" />
      <line x1="12" y1="12" x2="22" y2="12" />
    </svg>

            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To set the standard for excellence in the e-commerce industry and earn the trust of millions globally.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Us</h3>
            <p className="text-gray-600">
              Our dedication to quality, affordability, and support makes us the ideal choice for your shopping needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;