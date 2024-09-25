import React, { useState } from "react";
import products from "../components/Datas/ProductsData";
import categories from "../components/Datas/Categories";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Saddle");
  const [searchTerm, setSearchTerm] = useState("");
  const [showOnlyNewArrivals, setShowOnlyNewArrivals] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setShowOnlyNewArrivals(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleNewArrivalsClick = () => {
    setShowOnlyNewArrivals(!showOnlyNewArrivals);
  };

  const openLightbox = (image) => {
    setSelectedImage(image); 
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsLightboxOpen(false);
  };

  const filteredProducts = showOnlyNewArrivals
    ? products.filter((item) => item.isNewArrival)
    : products.filter((item) => {
        const filterCategoryChange = item.category === selectedCategory;
        const filterSearchItem = item.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        return filterCategoryChange && filterSearchItem;
      });

  return (
    <div className="container mx-auto p-6 lg:p-12">
      <div className="p-2 flex justify-center">
        <p className="font-bold text-2xl">Choose Your Products</p>
      </div>
      <div className="py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-start gap-2">
            <div className="w-[50%]">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {categories.map((item, index) => (
                  <option key={index} value={item.category}>
                    {item.category}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleNewArrivalsClick}
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              New Arrivals
            </button>
          </div>
          <div>
            {/* Search Input Placeholder */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((item) =>
          item.img.map((image, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt={item.altImg}
                className="w-full h-[400px] object-cover"
                onClick={() => openLightbox(image)} // Open lightbox for the clicked image
              />
            </div>
          ))
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative max-w-3xl w-full p-4">
            <img
              src={selectedImage} // Use the image URL directly
              alt="NA"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
