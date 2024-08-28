import React, { useEffect, useRef } from "react";
import MicroSlider from "micro-slider";
import Hammer from "hammerjs";
import img_1 from "../assets/img/img_1.jpg";
import img_2 from "../assets/img/img_2.jpg";
import img_3 from "../assets/img/img_3.jpg";
import img_4 from "../assets/img/img_4.jpg";
import img_5 from "../assets/img/img_5.jpg";
import img_6 from "../assets/img/img_6.jpg";

const images = [
  { id: 1, src: img_1, alt: "Image 1", text: "Saddles Girth and Stirrup" },
  { id: 2, src: img_2, alt: "Image 2", text: "Bridles and reins" },
  { id: 3, src: img_3, alt: "Image 3", text: "Lunging" },
  { id: 4, src: img_4, alt: "Image 4", text: "Riding apparel and footwear" },
  { id: 5, src: img_5, alt: "Image 5", text: "Whips and Spurs" },
  { id: 6, src: img_6, alt: "Image 6", text: "Bridles and reins" },
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
              <button className="px-4 py-2 bg-header font-semibold rounded">
                Enquiry Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewSlider;
