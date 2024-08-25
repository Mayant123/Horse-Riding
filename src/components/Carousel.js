import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './style.css';

import img_1 from '../assets/img/img_1.jpg';
import img_2 from '../assets/img/img_2.jpg';
import img_3 from '../assets/img/img_3.jpg';
import img_4 from '../assets/img/img_4.jpg';
import img_5 from '../assets/img/img_5.jpg';

const images = [
  { id: 1, src: img_1, alt: "Image 1", text: "Stable and farm equipment" },
  { id: 2, src: img_2, alt: "Image 2", text: "Saddles and saddle accessories" },
  { id: 3, src: img_3, alt: "Image 3", text: "Bridles and reins" },
  { id: 4, src: img_4, alt: "Image 4", text: "Riding apparel and footwear" },
  { id: 5, src: img_5, alt: "Image 5", text: "Horse blankets and grooming supplies" },
];

const Carousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: "30px",
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease",
    focusOnSelect: true,
    arrows: false,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="carousel-slide relative rounded-md">
            <img
              src={image.src}
              alt={image.alt}            
            className="carousel-image w-full h-96 object-cover rounded-md transition-transform duration-300 ease-in-out"
            />
            <div className="overlay absolute bottom-0 left-0 right-0 flex flex-col items-center p-4 bg-gradient-to-t from-black via-transparent to-transparent">
              <h2 className="text-white text-xl mb-2">{image.text}</h2>
              <button className="px-4 py-2 bg-header font-semibold rounded">
                Enquiry Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
