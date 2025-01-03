import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We`&apos;`re here to help! Feel free to reach out using the form below or through our contact details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="mt-2 w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-500 text-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <ul className="space-y-6">
              {/* Email */}
              <li className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

                <p>support@example.com</p>
              </li>
              {/* Phone */}
              <li className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

                <p>+1 (123) 456-7890</p>
              </li>
              {/* Address */}
              <li className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

                <p>1234 Street Name, City, State, ZIP</p>
              </li>
            </ul>
            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us:</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white text-blue-500 rounded-full hover:bg-blue-600 hover:text-white transition"
                >
                  {/* Replace with SVG for Facebook */}
                  <FaLinkedin className='size-6' />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white text-pink-500 rounded-full hover:bg-pink-600 hover:text-white transition"
                >
                  {/* Replace with SVG for Twitter */}
                  <FaInstagram className='size-6' />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white text-blue-500 rounded-full hover:bg-blue-600 hover:text-white transition"
                >
                  {/* Replace with SVG for Instagram */}
                  <FaTwitter className='size-6' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;