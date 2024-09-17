import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/header_logo.jpg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#334155] text-white font-serif py-12">
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${footerimg})`,
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div> */}
      <div className="relative z-10 container mx-auto lg:px-[115px] px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="flex flex-col mb-6 lg:mb-0 lg:w-[30%]">
          <a href='/'>
            <div className="w-auto h-auto rounded-md">
              {/* <img src={logo} alt="Logo" className="mb-4 max-w-[150px] h-auto rounded-md" /> */}
              <img
                src={logo}
                alt="Logo"
                className="h-24 w-24 md:h-32 md:w-32 rounded-full shadow-lg mb-4"
              />
            </div>
            </a>
            {/* <p className="text-gray-200 mb-4">
              The website exits to host your adventure with a budget in mind. Experience your next getaway at our Showplace for yourself.
            </p> */}
            <p className="text-gray-200">
              &copy; {new Date().getFullYear()} THK INTERNATIONAL TRADING. All
              rights reserved.
            </p>
          </div>
          <div className="flex flex-col mb-6 lg:mb-0 lg:w-[20%]">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-100">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-gray-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gray-100">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-gray-100">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gray-100">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/policy" className="hover:text-gray-100">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:w-[30%]">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-200">
              P.O. Box 1519, Post code 122, AL Mabela Muscat, Sultanate of Oman
            </p>
            <p className="text-gray-200 mt-2">+968 7909 8800 (Oman)</p>
            <p className="text-gray-200 mt-2">+91 9760 66 44 22 (India)</p>
            {/* <p className="text-gray-200 mt-2">contact@thktrade.com</p> */}
            <a
              href="mailto:contact@thktrade.com"
              className="text-gray-200 mt-2"
            >
              contact@thktrade.com
            </a>

            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600"
              >
                <i className="fab fa-facebook-f fa-2x"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-600"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                <i className="fab fa-twitter fa-2x"></i>
              </a> */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-600"
              >
                <i className="fab fa-youtube fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="mt-12 flex justify-between text-gray-200 text-sm">
          <div>
            <Link to="#" className="hover:underline">Terms and Conditions</Link>
            <span className="mx-2">|</span>
            <Link to="#" className="hover:underline">Privacy Policy</Link>
          </div>
          <div>
            <Link to="#" className="hover:underline">Refund Policy</Link>
          </div>
        </div> */}
        {/* <div className="fixed w-[60px] h-[60px] bottom-10 right-10 bg-[#25d366] text-white rounded-full flex items-center justify-center text-xxl shadow-md z-[100]">
          <a
            href="https://api.whatsapp.com/send?phone=+919760664422&text=Hello, THK"
            target="_blank"
            rel="noopener noreferrer"
            // className="fixed bottom-16 right-4 text-green-500 z-50"
          >
            <i className="fab fa-whatsapp fa-2x"></i>
          </a>
        </div> */}
      </div>
      {/* <div className="text-center pt-4">
          <p>
            © 2024 THK Trading, All Rights Reserved. Design By{" "}
            <Link href="https://webjini.in/" target="_blank">
              Webjini
            </Link>
          </p>
        </div> */}
    </footer>
  );
};

export default Footer;
