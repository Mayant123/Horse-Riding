import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Location = () => {
  return (
    <section className="mt-10 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 p-6">
        <h2 className="text-[2.75rem] leading-[3rem] font-bold text-gray-800 mb-4">
          Get in touch with us
        </h2>
        <p className="mb-6">
          Our mission is to enhance the equestrian experience through
          exceptional products, unparalleled customer service, and a passion for
          excellence.
        </p>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Location</label>
          <p className="flex items-center gap-2">
            <FaLocationDot/>P.O. Box 1519, Post code 122, AL Mabela Muscat, Sultanate of Oman
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Email</label>
          <a href="mailto:contact@thktrade.com" className="flex items-center gap-2"><MdEmail/>contact@thktrade.com</a>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Phone</label>
          <a href="tel:+96879098800" className="flex items-center gap-2"><IoMdCall/>+968 7909 8800 (Oman)</a>
          <a href="tel:+919760664422" className="flex items-center gap-2"><IoMdCall/>+91 9760 66 44 22 (India)</a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:hidden text-center">
          <label className="block text-gray-700 font-bold text-[1rem] ">
            Our social media
          </label>
          <div className="flex space-x-4 mt-5 justify-center">
            <a href="https://www.facebook.com/your-profile-name" target="_blank" rel="noopener noreferrer" className="text-blue-600 mr-2">
              <i className="fab fa-facebook-f fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="text-pink-600 mr-2">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://www.youtube.com/channel/your-channel-id" target="_blank" rel="noopener noreferrer" className="text-red-600" mr-2>
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          </div>
        </div>
      <div className="w-full lg:w-1/2 lg:block hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3655.5013650600267!2d58.107192975331955!3d23.622209478758137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDM3JzIwLjAiTiA1OMKwMDYnMzUuMiJF!5e0!3m2!1sen!2sin!4v1724674069556!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ borderRadius: "10px" }}
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
