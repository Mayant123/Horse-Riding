import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Section */}
        <div className="flex flex-col justify-between mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Company Name</h2>
          <p className="text-gray-400 mb-4">
            123 Main Street, City, Country
          </p>
          <p className="text-gray-400 mb-4">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col justify-between mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="#" className="hover:text-gray-400">About Us</Link></li>
            <li><Link to="#" className="hover:text-gray-400">Services</Link></li>
            <li><Link to="#" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
              <i className="fab fa-facebook-f fa-2x"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600">
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
