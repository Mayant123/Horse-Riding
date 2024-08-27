import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import img_1 from '../assets/img/img_1.jpg';
import img_2 from '../assets/img/img_2.jpg';
import img_3 from '../assets/img/img_3.jpg';
import img_4 from '../assets/img/img_4.jpg';
import img_5 from '../assets/img/img_5.jpg';

function NewSlider() {
  const images = [
    { id: 1, src: img_1, alt: "Image 1", text: "Stable and farm equipment" },
    { id: 2, src: img_2, alt: "Image 2", text: "Saddles and saddle accessories" },
    { id: 3, src: img_3, alt: "Image 3", text: "Bridles and reins" },
    { id: 4, src: img_4, alt: "Image 4", text: "Riding apparel and footwear" },
    { id: 5, src: img_5, alt: "Image 5", text: "Horse blankets and grooming supplies" },
  ];

  return (
    <Swiper
      effect="coverflow"
      centeredSlides={true}
      slidesPerView={3}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 50,
        modifier: 2.5,
        slideShadows: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      modules={[EffectCoverflow,Autoplay]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          <div className="relative w-40 h-40 md:w-72 md:h-64 lg:w-80 lg:h-72">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg transition-transform duration-500 transform hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center p-4 bg-gradient-to-t from-black via-transparent to-transparent">
              <h2 className="text-white text-lg font-semibold mb-2">{image.text}</h2>
              <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md mt-2 hover:bg-orange-600">
                Enquire Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default NewSlider;
