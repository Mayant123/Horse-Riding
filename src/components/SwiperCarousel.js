import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import img_1 from "../assets/img/img_1.jpg";
import img_2 from "../assets/img/img_2.jpg";
import img_3 from "../assets/img/img_3.jpg";
import img_4 from "../assets/img/img_4.jpg";
import img_5 from "../assets/img/img_5.jpg";

const images = [
  { id: 1, src: img_1, alt: "Image 1", text: "Stable and farm equipment" },
  { id: 2, src: img_2, alt: "Saddles and saddle accessories" },
  { id: 3, src: img_3, alt: "Bridles and reins" },
  { id: 4, src: img_4, alt: "Riding apparel and footwear" },
  { id: 5, src: img_5, alt: "Horse blankets and grooming supplies" },
];

const SwiperCarousel = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="carousel-slide relative rounded-md">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperCarousel;
