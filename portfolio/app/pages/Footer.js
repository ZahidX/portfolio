"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-12 px-8 md:px-28">
      <div className="max-w-screen-xl mx-auto">
        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-10">
          <div className="ml-20 mr-32" >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:text-blue-500">Home</a></li>
              <li><a href="/about" className="hover:text-blue-500">About</a></li>
              <li><a href="/services" className="hover:text-blue-500">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="mr-96">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-blue-500">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-blue-500">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-blue-700">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get the latest updates.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md"
            />
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Back to Top
          </button>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400 mt-8">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
