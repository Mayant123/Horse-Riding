import React from "react";
import img_6 from "../assets/img/img_6.jpg";
import Carousel from "./Carousel";
import HomePageslider1 from "./sliders/HomePageslider1";
import Location from "./Location";
import ContactUs from "./ContactUs";
import HomeContent from "./HomeContent";

const Home = () => {
  return (
    <section className="flex flex-col items-center min-h-screen px-4 pb-8">
      <div className="relative w-full max-w-screen-lg mb-8">
        <img
          src={img_6}
          alt="Background"
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 p-8 rounded-lg">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            THK INTERNATIONAL TRADING
          </h2>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white text-center">
            SADDLE UP- RIDE WITH PASSION
          </p>
        </div>
      </div>
      <div className="w-full max-w-screen-lg mb-8">
        <HomePageslider1 />
      </div>
      <div className="w-full max-w-screen-lg mb-8">
        <HomeContent />
      </div>
      <div className="w-full max-w-screen-lg mb-8 mt-20">
        <Carousel />        
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
