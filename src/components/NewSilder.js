import React, { useEffect, useRef } from "react";
import MicroSlider from "micro-slider";
import Hammer from "hammerjs";
import img_1 from "../assets/img/img_1.jpg";
import img_2 from "../assets/img/img_2.jpg";
import img_3 from "../assets/img/img_3.jpg";
import img_4 from "../assets/img/img_4.jpg";
import img_5 from "../assets/img/img_5.jpg";
import img_6 from "../assets/img/img_6.jpg";
import img_7 from "../assets/img/img_7.jpg";
import img_8 from "../assets/img/img_8.jpg";
import img_9 from "../assets/img/img_9.jpg";
import img_10 from "../assets/img/img_10.jpg";
import img_11 from "../assets/img/img_11.jpg";
import img_12 from "../assets/img/img_12.jpg";
import img_13 from "../assets/img/img_13.jpg";
import img_14 from "../assets/img/img_14.jpg";
import { Link, useNavigate } from "react-router-dom";

const images = [
  { id: 1, src: img_1, alt: "Image 1", text: "Saddles Girth and Stirrup" },
  { id: 2, src: img_2, alt: "Image 2", text: "Bridles and reins" },
  { id: 3, src: img_3, alt: "Image 3", text: "Lunging" },
  { id: 4, src: img_4, alt: "Image 4", text: "Riding apparel and footwear" },
  { id: 5, src: img_5, alt: "Image 5", text: "Whips and Spurs" },
  { id: 6, src: img_6, alt: "Image 6", text: "Bridles and reins" },
  { id: 7, src: img_7, alt: "Image 7", text: "" },
  { id: 8, src: img_8, alt: "Image 8", text: "" },
  { id: 9, src: img_9, alt: "Image 9", text: "" },
  { id: 10, src: img_10, alt: "Image 10", text: "" },
  { id: 11, src: img_11, alt: "Image 11", text: "" },
  { id: 12, src: img_12, alt: "Image 12", text: "" },
  { id: 13, src: img_13, alt: "Image 13", text: "" },
  { id: 14, src: img_14, alt: "Image 14", text: "" },
];

function NewSlider() {
  const sliderRef = useRef(null);
  const autoplayRef = useRef(null);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      const microSlider = new MicroSlider(sliderElement, {
        indicators: true,
        indicatorText: "",
      });
      const hammer = new Hammer(sliderElement);

      autoplayRef.current = setInterval(() => microSlider.next(), 2000);

      const handleMouseEnter = () => clearInterval(autoplayRef.current);
      const handleMouseLeave = () => {
        clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => microSlider.next(), 2000);
      };
      const handleTap = () => clearInterval(autoplayRef.current);
      const handleSwipe = () => {
        clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => microSlider.next(), 2000);
      };

      sliderElement.addEventListener("mouseenter", handleMouseEnter);
      sliderElement.addEventListener("mouseleave", handleMouseLeave);
      hammer.on("tap", handleTap);
      hammer.on("swipe", handleSwipe);

      return () => {
        clearInterval(autoplayRef.current);
        sliderElement.removeEventListener("mouseenter", handleMouseEnter);
        sliderElement.removeEventListener("mouseleave", handleMouseLeave);
        hammer.off("tap", handleTap);
        hammer.off("swipe", handleSwipe);
      };
    }
  }, []);

  //   useEffect(() => {
  //     const sliderElement = sliderRef.current;
  //     const microSlider = new MicroSlider(sliderElement, { indicators: true, indicatorText: '' });
  //     const hammer = new Hammer(sliderElement);
  //     // const autoplayTimer = 2000;

  //     autoplayRef.current = setInterval(() => microSlider.next(), 2000);

  //     const handleMouseEnter = () => clearInterval(autoplayRef.current);
  //     const handleMouseLeave = () => {
  //       clearInterval(autoplayRef.current);
  //       autoplayRef.current = setInterval(() => microSlider.next(), 2000);
  //     };
  //     const handleTap = () => clearInterval(autoplayRef.current);
  //     const handleSwipe = () => {
  //       clearInterval(autoplayRef.current);
  //       autoplayRef.current = setInterval(() => microSlider.next(), 2000);
  //     };

  //     sliderElement.addEventListener('mouseenter', handleMouseEnter);
  //     sliderElement.addEventListener('mouseleave', handleMouseLeave);
  //     hammer.on('tap', handleTap);
  //     hammer.on('swipe', handleSwipe);

  //     return () => {
  //       clearInterval(autoplayRef.current);
  //       sliderElement.removeEventListener('mouseenter', handleMouseEnter);
  //       sliderElement.removeEventListener('mouseleave', handleMouseLeave);
  //       hammer.off('tap', handleTap);
  //       hammer.off('swipe', handleSwipe);
  //     };
  //   }, []);
  return (
    <section className="relative overflow-hidden py-8 ">
      <p className="text-3xl font-black text-center font-serif">Our Products</p>

      <div
        ref={sliderRef}
        className="micro-slider  w-full h-[480px] flex items-center justify-center relative"
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="slider-item absolute transform rounded-lg shadow-lg bg-center bg-cover"
            style={{
              backgroundImage: `url(${image.src})`,
              width: "350px",
              height: "400px",
            }}
          >
            <div className="absolute bottom-[-15px] left-0 right-0 flex flex-col items-center">
              <h2 className="font-serif text-xl mb-2">{image.text}</h2>
              <Link to="/contact-us">
                <button className="z-[9999] relative px-4 py-2 bg-header font-semibold rounded">
                  Enquiry Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default NewSlider;
