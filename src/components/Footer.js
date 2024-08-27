import React from 'react';
import { Link } from 'react-router-dom';
import footerimg from "../assets/img/footer/footer_bg_img.webp";
import logo from "../assets/img/header_logo.jpg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#00c2e9] text-white font-serif py-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${footerimg})`,
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto lg:px-[115px] px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Left Section - Logo and Description */}
          <div className="flex flex-col mb-6 lg:mb-0 lg:w-[30%]">
            <div className='w-auto h-auto rounded-md'>
              <img src={logo} alt="Logo" className="mb-4 max-w-[150px] h-auto rounded-md" />
            </div>
            <p className="text-gray-200 mb-4">
              The website exits to host your adventure with a budget in mind. Experience your next getaway at our Showplace for yourself.
            </p>
            <p className="text-gray-200">Mumbai / Pune, Bengaluru</p>
            <p className="text-gray-200">&copy; {new Date().getFullYear()} THK INTERNATIONAL TRADING. All rights reserved.</p>
          </div>

          {/* Middle Section - Links */}
          <div className="flex flex-col mb-6 lg:mb-0 lg:w-[20%]">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-gray-100">Home</Link></li>
              <li><Link to="#" className="hover:text-gray-100">About Us</Link></li>
              <li><Link to="#" className="hover:text-gray-100">Services</Link></li>
              <li><Link to="#" className="hover:text-gray-100">Contact</Link></li>
            </ul>
          </div>

          {/* Right Section - Contact Info and Social Icons */}
          <div className="flex flex-col lg:w-[30%]">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-200">P.O. Box 1519, Post code 122, AL Mabela Muscat, Sultanate of Oman</p>
            <p className="text-gray-200 mt-2">+968 2416 0000</p>
            <p className="text-gray-200 mt-2">info@thktrading.com</p>

            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                <i className="fab fa-facebook-f fa-2x"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Links */}
        <div className="mt-12 flex justify-between text-gray-200 text-sm">
          <div>
            <Link to="#" className="hover:underline">Terms and Conditions</Link>
            <span className="mx-2">|</span>
            <Link to="#" className="hover:underline">Privacy Policy</Link>
          </div>
          <div>
            <Link to="#" className="hover:underline">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
