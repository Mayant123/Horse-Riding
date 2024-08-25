import React from 'react';
import horseImage from '../assets/img/img_2.jpg';
import secondHorseImage from '../assets/img/img_1.jpg';

function HomeContent() {
  return (
    <div className="relative bg-white p-10 grid grid-cols-1 md:grid-cols-3 justify-items-center">
      <div className="relative w-[300px] h-[400px] mt-4">
        <img
          src={horseImage}
          alt="Horse 1"
          className="w-full h-full object-cover rounded-lg shadow-lg relative z-10"
        />
        <div className="before:absolute before:content-[''] before:top-4 before:right-4 before:w-full before:h-full before:bg-orange-300 before:rounded-lg before:z-0 before:shadow-md"></div>
      </div>
      <div className="max-w-xl relative w-[300px] h-[400px] mt-4">
        <h1 className="text-4xl font-bold mb-4">Roll Your Moments With A Horse</h1>
        <p className="text-gray-600 mb-6">
          Lectus sollicitudin efficitur curabitur tincidunt posuere dictumst turpis vulputate dictum.
          Duis turpis imperdiet aptent ultricies congue nulla placera accumsan.
        </p>
        <button className="bg-button bg-button-on-hover px-6 py-3 rounded-md shadow transition">
          Discover More
        </button>
      </div>
      <div className='z-20 max-w-xl relative w-[300px] h-[400px] mt-4'>
        <div className='flex justify-end'>
          <img
            src={secondHorseImage}
            alt="Horse 2"
            className="w-[200px] h-[150px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <p className="text-gray-600 mb-6 z-20">
          Lectus sollicitudin efficitur curabitur tincidunt posuere dictumst turpis vulputate dictum.
          Duis turpis imperdiet aptent ultricies congue nulla placera accumsan.
        </p>
      </div>
      <div className="hidden md:block before:me-[4rem] before:absolute before:content-[''] before:top-4 before:right-16 before:w-[48rem] before:h-full before:border-8 before:rounded-lg before:z-0 before:shadow-md"></div>
    </div>
  );
}

export default HomeContent;