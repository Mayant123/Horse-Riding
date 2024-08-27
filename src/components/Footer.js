import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 font-serif ">
      <div className="container mx-auto lg:px-[115px] px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="flex flex-col mb-6 md:mb-0 w-full md:w-[40%] self-start">
            <h2 className="text-2xl font-bold mb-2">THK INTERNATIONAL TRADING</h2>
            <p className="text-gray-400 mb-4">
              P.O. Box 1519, Post code 122, AL Mabela Muscat, Sultanate of Oman
            </p>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} THK INTERNATIONAL TRADING. All rights reserved.
            </p>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col mb-6 md:mb-0 w-full md:w-[30%] self-start lg:ml-5">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-gray-400">Home</Link></li>
              <li><Link to="#" className="hover:text-gray-400">About Us</Link></li>
              <li><Link to="#" className="hover:text-gray-400">Services</Link></li>
              <li><Link to="#" className="hover:text-gray-400">Contact</Link></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex flex-col w-full md:w-[30%] self-start">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-wrap justify-start space-x-4">
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
      </div>
    </footer>
  );
};

export default Footer;
