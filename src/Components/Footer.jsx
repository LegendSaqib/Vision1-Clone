import React from "react";

const Footer = () => {
  return (
    <footer className=  " bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">VISION</h2>
          <p>Elevate your home with smart technology.</p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Wholesale</a></li>
            <li><a href="#" className="hover:underline">Become a retailer</a></li>
            <li><a href="#" className="hover:underline">Corporate Orders</a></li>
            <li><a href="#" className="hover:underline">Affiliates</a></li>
            <li><a href="#" className="hover:underline">Gift cards</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Find a store</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
          <p className="mb-4">Sign up for our newsletter and receive 10% off your first order!</p>
          <form className="flex mb-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-l-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600"
            >
              →
            </button>
          </form>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="marketing"
              className="mt-1 mr-2"
            />
            <label htmlFor="marketing" className="text-sm">
              I agree to receiving marketing emails and special deals
            </label>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-600 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <div className="flex items-center space-x-4">
          <p>English</p>
          <p>United States (USD $)</p>
        </div>
        <p>© 2024 Vision - Main, All rights reserved. Powered by Shopify</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <img src="https://via.placeholder.com/40" alt="Visa" className="w-8 h-5" />
          <img src="https://via.placeholder.com/40" alt="Mastercard" className="w-8 h-5" />
          <img src="https://via.placeholder.com/40" alt="Paypal" className="w-8 h-5" />
          <img src="https://via.placeholder.com/40" alt="American Express" className="w-8 h-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
