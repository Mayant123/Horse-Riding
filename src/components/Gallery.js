import React from "react";
import products from "../components/Datas/GalleryData";

const Gallery = () => {
  const images = products.filter((item) => !item.isVideo);
  const videos = products.filter((item) => item.isVideo);

  return (
    <div className="container mx-auto p-6 lg:p-12">
      <div className="p-2 flex justify-center">
        <p className="font-bold text-2xl">Our Gallery</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {images.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.altImg}
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="p-2 flex justify-center">
          <p className="font-bold text-2xl">Videos</p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {videos.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <iframe
              src={`https://www.youtube.com/embed/${item.img}`}
              title={item.altImg}
              className="w-full h-[400px] object-cover"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
