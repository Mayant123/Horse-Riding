import React from "react";
import img_1 from "../assets/img/img_1.jpg";
import img_2 from "../assets/img/img_2.jpg";
import img_3 from "../assets/img/img_3.jpg";
import img_4 from "../assets/img/img_4.jpg";
import img_5 from "../assets/img/img_5.jpg";
import img_6 from "../assets/img/img_6.jpg";
import img_7 from "../assets/img/img_7.jpg";
import img_8 from "../assets/img/img_8.jpg";

const images = [
    { id: 1, src: img_1, alt: "Image 1"},
    { id: 2, src: img_2, alt: "Image 2"},
    { id: 3, src: img_3, alt: "Image 3"},
    { id: 4, src: img_4, alt: "Image 4", text: "Riding apparel and footwear" },
    { id: 5, src: img_5, alt: "Image 5", text: "Whips and Spurs" },
    { id: 6, src: img_6, alt: "Image 6", text: "Bridles and reins" },
    { id: 7, src: img_7, alt: "Image 7", text: "" },
];

function Products() {
  return (
    <div className="p-6 lg:p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
