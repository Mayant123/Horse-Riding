import React from "react";
import "./style.css";

const ContactUs = () => {
  return (
    <section className="mt-10 flex flex-col lg:flex-row">
      <div className="w-full lg:w-[60%] p-6 shadow-xl">
        <form>
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            <div className="flex-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full bg-transparent border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="flex-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="w-full bg-transparent border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
                type="number"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full bg-transparent border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full bg-transparent border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
              id="message"
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-6">
            <button
              className="w-full bg-button bg-button-on-hover font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="w-full lg:w-[40%] lg:pl-6 mt-10 lg:mt-0">
        <h2 className="text-[2.75rem] leading-[3rem] font-bold text-gray-800 mb-4">
        Send us a message
        </h2>
        {/* <p className="mb-6">Lectus sollicitudin efficitur curabitur tincidunt posuere dictumst turpis vulputate dictum.
        Duis turpis imperdiet aptent ultricies congue nulla placera accumsan.</p> */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">
            Our social media :
          </label>
          <div className="flex space-x-4 mt-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 mr-2">
              <i className="fab fa-facebook-f fa-2x"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 mr-2">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 mr-2">
              <i className="fab fa-twitter fa-2x"></i>
            </a> */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600" mr-2>
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
