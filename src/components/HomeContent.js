import React from "react";
import horseImage from "../assets/img/horse.jpg";
import secondHorseImage from "../assets/img/horse.jpg";
import "./style.css";

function HomeContent() {
  return (
    <div className="relative bg-white p-10 grid grid-cols-1 md:grid-cols-3 justify-items-center">
      <div className="relative w-[300px] h-[400px] mt-4">
        <img
          src={horseImage}
          alt="Horse 1"
          className="w-full h-full object-cover rounded-lg shadow-lg relative z-10"
        />
        <div className="hidden md:block before:absolute before:content-[''] before:top-4 before:right-4 before:w-full before:h-full before:bg-orange-300 before:rounded-lg before:z-0 before:shadow-md"></div>
      </div>
      <div className="max-w-xl relative h-[300px] w-[300px] md:h-[400px] mt-4 md:ml-[170px]">
        <h1 className="text-4xl font-bold mb-4 font-serif">
          Roll Your Moments With A Horse
        </h1>
        <p className="text-gray-600 md:mb-6 font-serif">
        Our mission is to enhance the equestrian experience through
          exceptional products, unparalleled customer service, and a passion for
          excellence.
        </p>
        <button className="hidden md:block w-full bg-button hover:bg-button-on-hover font-bold py-2 px-4 rounded-md shadow transition cursor-pointer focus:outline-none focus:shadow-outline z-20">
          Discover More
        </button>
      </div>
      {/* <div className="z-20 max-w-xl relative h-[295px] w-[300px] md:h-[400px] mt-4">
        <div className="flex justify-end">
          <img
            src={secondHorseImage}
            alt="Horse 2"
            className="w-[200px] h-[150px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <p className="text-gray-600 mb-6 z-20 mt-[20px] font-serif">
          Our mission is to enhance the equestrian experience through
          exceptional products, unparalleled customer service, and a passion for
          excellence.
        </p>
      </div> */}
      <button className=" md:hidden w-full bg-button hover:bg-button-on-hover font-bold py-2 px-4 rounded-md shadow transition cursor-pointer focus:outline-none focus:shadow-outline z-20">
        Discover More
      </button>
      <div className="hidden md:block before:me-[4rem] before:absolute before:content-[''] before:top-4 before:right-16 before:w-[48rem] before:h-full before:border-8 before:rounded-lg before:z-0 before:shadow-md"></div>
    </div>
  );
}

export default HomeContent;
