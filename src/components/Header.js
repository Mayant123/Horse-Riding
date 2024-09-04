import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import header_logo from '../assets/img/header_logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get the current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" border-gray-200 py-1">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 md:px-6">
        <a
          href="/"
          className="flex items-center"
        >
          <img
            src={header_logo}
            className="h-12 md:h-16 w-auto"
            alt="Company Logo"
          />
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:w-auto md:flex md:items-center md:space-x-6 md:mt-0 md:border-0 md:bg-transparent`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 border border-gray-100 rounded-lg md:border-0">
            <li className="md:mx-2">
              <Link
                to="/"
                className={`block py-2 px-3 rounded md:p-0 ${
                  location.pathname === '/' 
                    ? 'text-black' // Active link color
                    : 'text-gray-600 hover:text-black' // Non-active link color
                }`}
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li className="md:mx-2">
              <Link
                to="/about-us"
                className={`block py-2 px-3 rounded md:p-0 ${
                  location.pathname === '/about-us' 
                    ? 'text-black' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                About Us
              </Link>
            </li>
            <li className="md:mx-2">
              <Link
                to="/products"
                className={`block py-2 px-3 rounded md:p-0 ${
                  location.pathname === '/products' 
                    ? 'text-black' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Products
              </Link>
            </li>
            <li className="md:mx-2">
              <Link
                to="/contact-us"
                className={`block py-2 px-3 rounded md:p-0 ${
                  location.pathname === '/contact-us' 
                    ? 'text-black' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Contact Us
              </Link>
            </li>
            <li className="md:mx-2">
              <Link
                to="/gallery"
                className={`block py-2 px-3 rounded md:p-0 ${
                  location.pathname === '/gallery' 
                    ? 'text-black' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Gallery
              </Link>
              </li>
              <li className="md:mx-2">
              <Link
                to="/policy"
                className={`block py-2 px-3 rounded md:p-0 ${
                  location.pathname === '/policy' 
                    ? 'text-black' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
