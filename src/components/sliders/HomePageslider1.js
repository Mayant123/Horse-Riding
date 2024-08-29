import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";


const sliderData = [
  {
    imgSrc: require("../../assets/img/sliderImgs/HomePageSlider1/usaFlag.webp"),
    country: "USA",
  },
  {
    imgSrc: require("../../assets/img/sliderImgs/HomePageSlider1/FlagArabia.webp"),
    country: "Arabia",
  },
  {
    imgSrc: require("../../assets/img/sliderImgs/HomePageSlider1/FlagEurope.png"),
    country: "Europe",
  },
  {
    imgSrc: require("../../assets/img/sliderImgs/HomePageSlider1/GulfFlag.png"),
    country: "Gulf",
  },
  {
    imgSrc: require("../../assets/img/sliderImgs/HomePageSlider1/ukflag.jpg"),
    country: "UK",
  },
];

function HomePageslider1() {
  return (
    
        <div className="flex flex-col text-center p-4 font-serif">
          <p className="text-3xl font-black">
            Our Markets
          </p>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, FreeMode, Pagination]}
            className="mySwiper flex justify-center items-center w-full mt-10"
          >
            {sliderData.map((slide, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="flex items-center shadow-lg gap-3 w-[300px] bg-gray-200 h-[70px] rounded-s-lg rounded-e-md">
                  <img
                    src={slide.imgSrc}
                    alt={`${slide.country} Flag`}
                    className="w-1/2 h-full object-cover rounded-s-lg rounded-e-3xl"
                  />
                  <p className="ms-8 text-xl font-black truncate">
                    {slide.country}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
   
  );
}

export default HomePageslider1;
