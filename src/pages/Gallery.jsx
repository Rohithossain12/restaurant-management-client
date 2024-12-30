import React, { useState } from "react";
import { Helmet } from "react-helmet";

const images = [
  "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
  "https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900",
  "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/29260500/pexels-photo-29260500/free-photo-of-delicious-indian-biryani-with-garnish-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2110924/pexels-photo-2110924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/19247566/pexels-photo-19247566/free-photo-of-burger-fries-and-chicken-nuggets-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 4;

  // Calculate the images to display based on the current page
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Handle image click to show larger version
  const handleClick = (image) => {
    setSelectedImage(image);
  };

  // Handle pagination
  const nextPage = () => {
    if (currentPage < Math.ceil(images.length / imagesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mt-10 mb-10">
      <Helmet>
        <title>
          Master Chef | Gallery
        </title>
      </Helmet>
      <div
        className="hero "
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/4P9tHKf/front-view-chicken-burgers-with-cheese-green-salad-wooden-desk-sandwich-fast-food-meal-food-140725-2.jpg)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-neutral-content text-center p-16">
          <div className="max-w-md">
            <h1 className="mb-5 md:text-5xl text-3xl lg:text-7xl font-bold">
              Gallery
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        {/* Enlarged image will show at the top */}
        {selectedImage && (
          <div className="mt-5 text-center mb-10">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full mx-auto h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Gallery images in grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {currentImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-40 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                onClick={() => handleClick(image)}
              />
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="mt-4 flex justify-between">
          <button
            className="px-4 py-2 font-bold bg-gradient-to-r rounded-lg from-indigo-500 via-purple-500 to-pink-500 text-lg text-white"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 font-bold rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg text-white"
            onClick={nextPage}
            disabled={currentPage === Math.ceil(images.length / imagesPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
