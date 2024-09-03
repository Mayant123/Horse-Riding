import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import austria from "../../assets/img/flags_images/austria.png";
import bahrain from "../../assets/img/flags_images/bahrain.png";
import france from "../../assets/img/flags_images/france.png";
import germany from "../../assets/img/flags_images/germany.png";
import italy from "../../assets/img/flags_images/italy.png";
import oman from "../../assets/img/flags_images/oman.png";
import qatar from "../../assets/img/flags_images/qatar.png";
import uae from "../../assets/img/flags_images/uae.png";
import uk from "../../assets/img/flags_images/uk.jpg";
import usa from "../../assets/img/flags_images/usa.webp";


const sliderData = [
  { id: 1, src: austria, alt: "Image 1", country: "Austria" },
  { id: 2, src: bahrain, alt: "Image 2", country: "Bahrain" },
  { id: 3, src: france, alt: "Image 3", country: "France" },
  { id: 4, src: germany, alt: "Image 4", country: "Germany" },
  { id: 5, src: italy, alt: "Image 5", country: "Italy" },
  { id: 6, src: oman, alt: "Image 6", country: "Oman" },
  { id: 7, src: qatar, alt: "Image 7", country: "Qatar" },
  { id: 8, src: uae, alt: "Image 8", country: "UAE" },
  { id: 9, src: uk, alt: "Image 9", country: "UK" },
  { id: 10, src: usa, alt: "Image 10", country: "USA" },  
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
                    src={slide.src}
                    alt={`${slide.alt} Flag`}
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
