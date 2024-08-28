import React from "react";
import vid from "../assets/videos/back_video.mp4";
// import img_6 from "../assets/img/";
import Carousel from "./Carousel";
import HomePageslider1 from "./sliders/HomePageslider1";
import Location from "./Location";
import ContactUs from "./ContactUs";
import HomeContent from "./HomeContent";
import header_logo from "../assets/img/header_logo.jpg";
import SwiperCarousel from "./SwiperCarousel";
import NewSlider from "./NewSilder";

const Home = () => {
  return (
    <section className="flex flex-col items-center min-h-screen px-4 pb-8">
      <div className="relative w-[24rem] md:w-[77rem] h-[70vh] mb-5 md:mb-0 md:h-screen rounded-b-[20rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover rounded-b-[20rem]"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
          <img
            src={header_logo}
            className="h-24 w-24 md:h-32 md:w-32 border-4 rounded-full shadow-lg mb-4"
            alt="Company Logo"
          />
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-wide mb-2 font-neue-haas-unica">
            THK INTERNATIONAL TRADING
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-white italic tracking-wide">
            SADDLE UP - RIDE WITH PASSION
          </p>
        </div>

        <div className="absolute inset-0 bg-black opacity-50 rounded-b-[20rem]"></div>
      </div>


      <div className="flex flex-col gap-8 w-full max-w-screen-lg mb-8 bg-gray-100 p-6 rounded-lg shadow-lg lg:mt-10 text-center">
        <p className=" font-semibold text-2xl ">About Us</p>
        <div>
          <p className="font-serif text-lg leading-relaxed">
            THK INTERNATIONAL TRADING is a leading manufacturer and exporter of
            high-quality equestrian products, dedicated to providing innovative
            solutions for horse riders, trainers, and enthusiasts worldwide. Our
            mission is to enhance the equestrian experience through exceptional
            products, unparalleled customer service, and a passion for
            excellence.
          </p>
        </div>
        <div className="flex flex-wrap justify-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 mb-2 md:mb-0"
          >
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 mb-2 md:mb-0"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>         
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 mb-2 md:mb-0"
          >
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="w-full max-w-screen-lg lg:mb-8 md:mb-0">
        <HomeContent />
      </div>
      <div className="w-full max-w-screen-lg mb-8 bg-gray-100 p-6 rounded-lg shadow-lg lg:mt-10">
        <h1 className="text-3xl font-bold mb-4 text-center font-serif">
          Values
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-serif text-lg leading-relaxed">
          <div className="bg-[#e19120] p-4 rounded-lg shadow-md font-bold">
            Quality and innovation
          </div>
          <div className="bg-[#e19120] p-4 rounded-lg shadow-md font-bold">
            Customer satisfaction and loyalty
          </div>
          <div className="bg-[#e19120] p-4 rounded-lg shadow-md font-bold">
            Integrity and transparency
          </div>
          <div className="bg-[#e19120] p-4 rounded-lg shadow-md font-bold">
            Passion for the equestrian community
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-lg mb-8 mt-4">
        {/* <Carousel /> */}
        {/* <SwiperCarousel /> */}
        <NewSlider />
      </div>
      <div className="w-full max-w-screen-lg mb-8">
        <HomePageslider1 />
      </div>
      <div className="w-full max-w-screen-lg mb-8 font-serif">
        <Location />
      </div>
      <div className="w-full max-w-screen-lg font-serif">
        <ContactUs />
      </div>
    </section>
  );
};

export default Home;
