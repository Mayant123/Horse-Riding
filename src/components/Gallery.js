import React, { useState } from "react";
import products from "../components/Datas/GalleryData";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images = products.filter((item) => !item.isVideo);
  const videos = products.filter((item) => item.isVideo);

  // Handle opening the lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  // Handle closing the lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    setIsLightboxOpen(false);
  };

  return (
    <div className="container mx-auto p-6 lg:p-12">
      <div className="p-2 flex justify-center">
        <p className="font-bold text-2xl">Our Gallery</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {images.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openLightbox(item)}
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

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative max-w-3xl w-full p-4">
            <img
              src={selectedImage.img}
              alt={selectedImage.altImg}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            {/* <button
              className="absolute top-2 right-2 text-white bg-gray-700 hover:bg-gray-800 rounded-lg p-2"
              onClick={closeLightbox}
            >
              ✕
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
