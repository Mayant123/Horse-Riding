import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import img_1 from "../assets/img/img_1.jpg";
import img_2 from "../assets/img/img_2.jpg";
import img_3 from "../assets/img/img_3.jpg";
import img_4 from "../assets/img/img_4.jpg";
import img_5 from "../assets/img/img_5.jpg";

const images = [
  { id: 1, src: img_1, alt: "Image 1", text: "Stable and farm equipment" },
  { id: 2, src: img_2, alt: "Image 2", text: "Saddles and saddle accessories" },
  { id: 3, src: img_3, alt: "Image 3", text: "Bridles and reins" },
  { id: 4, src: img_4, alt: "Image 4", text: "Riding apparel and footwear" },
  { id: 5, src: img_5, alt: "Image 5", text: "Horse blankets and grooming supplies" },
];

const SwiperCarousel = () => {
  return (
    <div className="w-full h-full md:w-4/5 mb-8 mt-20">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        // slideToClickedSlide={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}      
        autoplay={{
          delay: 2000,  // Delay between transitions
          disableOnInteraction: false,  // Keeps autoplay running even after interaction
          pauseOnMouseEnter: true,  // Pauses autoplay on mouse hover
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="relative rounded-md">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-96 object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-95 shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center text-center">
              <h2 className="text-white text-xl mb-2">{image.text}</h2>
              <button className="px-4 py-2 bg-header text-white font-semibold rounded">
                Enquiry Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
