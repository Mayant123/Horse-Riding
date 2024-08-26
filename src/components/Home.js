import React from "react";
import img_6 from "../assets/img/img_6.jpg";
import Carousel from "./Carousel";
import HomePageslider1 from "./sliders/HomePageslider1";
import Location from "./Location";
import ContactUs from "./ContactUs";
import HomeContent from "./HomeContent";
import header_logo from "../assets/img/header_logo.jpg";

const Home = () => {
  return (
    <section className="flex flex-col items-center min-h-screen px-4 pb-8">
      <div className="relative w-[24rem] md:w-[77rem] mb-8">
        <img
          src={img_6}
          alt="Background"
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-evenly bg-opacity-50 p-8 rounded-lg">
          <img
            src={header_logo}
            className="h-20 md:h-20 w-auto border-4 rounded-[10px] shadow-lg shadow-blur"
            alt="Company Logo"
          />
          <div className="flex flex-col ml-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">
              THK INTERNATIONAL TRADING
            </h2>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl text-center">
              SADDLE UP - RIDE WITH PASSION
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full max-w-screen-lg mb-8 bg-gray-100 p-6 rounded-lg shadow-lg lg:mt-10">
        <p className=" font-semibold text-2xl ">About Us</p>
        <div>
          <p>
          THK INTERNATIONAL TRADING is a leading manufacturer and exporter of high-quality equestrian products, dedicated to providing innovative solutions for horse riders, trainers, and enthusiasts worldwide. Our mission is to enhance the equestrian experience through exceptional products, unparalleled customer service, and a passion for excellence.
          </p>
        </div>
        <div className="flex flex-wrap justify-end space-x-4 me-[9rem] ">
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
      <div className="w-full max-w-screen-lg lg:mb-8 md:mb-0">
        <HomeContent />
      </div>
      <div className="w-full max-w-screen-lg mb-8 bg-gray-100 p-6 rounded-lg shadow-lg lg:mt-10">
      <h1 className="text-4xl font-bold mb-4 text-center text-color">
          Values
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-header p-4 rounded-lg shadow-md text-lg md:text-xl lg:text-2xl font-bold">
            Quality and innovation
          </div>
          <div className="bg-header p-4 rounded-lg shadow-md text-lg md:text-xl lg:text-2xl font-bold">
            Customer satisfaction and loyalty
          </div>
          <div className="bg-header p-4 rounded-lg shadow-md text-lg md:text-xl lg:text-2xl font-bold">
            Integrity and transparency
          </div>
          <div className="bg-header p-4 rounded-lg shadow-md text-lg md:text-xl lg:text-2xl font-bold">
            Passion for the equestrian community
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-lg mb-8 mt-20">
        <Carousel />
        {/* <SwiperCarousel /> */}
      </div>
      <div className="w-full max-w-screen-lg mb-8">
        <HomePageslider1 />
      </div>
      <div className="w-full max-w-screen-lg mb-8">
        <Location />
      </div>
      <div className="w-full max-w-screen-lg">
        <ContactUs />
      </div>
    </section>
  );
};

export default Home;
