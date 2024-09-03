import React, { useState } from "react";
import products from "../components/Datas/ProductsData"
import categories from "../components/Datas/Categories";

function Products() {

  const [selectedcategory, setSelectedCategory] = useState("Saddle");
  const [searchTerm, setSearchTerm] = useState("");
  const [showOnlyNewArrivals, setShowOnlyNewArrivals] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setShowOnlyNewArrivals(false);

  }
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleNewArrivalsClick = () => {
    setShowOnlyNewArrivals(!showOnlyNewArrivals);
  };

  const filteredProducts = showOnlyNewArrivals
    ? products.filter(item => item.isNewArrival)
    : products.filter(item => {
      const filtercategoryChange = item.category === selectedcategory;
      const filterSearchItem = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      return filtercategoryChange && filterSearchItem;
    });


//   console.log("isNewArrival", showOnlyNewArrivals);
//   console.log("selected Category", selectedcategory);
//   console.log("searchItem", searchTerm);
//   console.log("filteredProduct", filteredProducts);





  return (
    <div className="container mx-auto p-6 lg:p-12">
      <div className="p-2 flex justify-center">
        <p className="font-bold text-2xl">Choose Your Products</p>
      </div>
      <div className="py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-start gap-2">
            <div className="w-[50%]">
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="" id="" value={selectedcategory} onChange={handleCategoryChange}>
                {categories.map((item, index) => {
                  return (
                    <option key={index} value={item.category}>{item.category}</option>
                  )

                })}
              </select>
            </div>
            <button onClick={handleNewArrivalsClick} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
              New Arrivals
            </button>
          </div>
          <div>
            {/* <form class="max-w-md mx-auto">
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input value={searchTerm} onChange={handleSearchChange} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos..." required />
              </div>
            </form> */}

          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((item) => (
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
    </div>
  );
}

export default Products;
