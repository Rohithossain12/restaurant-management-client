import React from "react";

const FastFoodSection = () => {
  return (
    <section className="p-10 bg-[#F4F4F4] rounded-lg">
      <div className="container mx-auto text-center rounded-lg">
        {/* Title */}
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-[#6A1B9A] mb-4 transform transition-all duration-700 ease-in-out hover:scale-105">
          Delicious Fast Food
        </h2>
        {/* Description */}
        <p className="text-lg text-[#6A1B9A] mb-8 px-4">
          Enjoy your favorite fast food made with fresh ingredients and love!
          Our menu features a variety of tasty meals perfect for any occasion.
        </p>
        {/* Image Gallery with Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Image 1: Burger */}
          <div className="transform transition-all duration-500 ease-in-out hover:scale-105">
            <img
              src="https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg?t=st=1735574457~exp=1735578057~hmac=867ca17dd2849b46a3e91827c1730c1f478d3153a6a5c4583d461a19bc809517&w=900"
              alt="Burger"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Image 2: Pizza */}
          <div className="transform transition-all duration-500 ease-in-out hover:scale-105">
            <img
              src="https://img.freepik.com/premium-photo/whole-italian-pizza-wooden-table-with-ingredients_251318-13.jpg?w=900"
              alt="Pizza"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Image 3: Fries */}
          <div className="transform transition-all duration-500 ease-in-out hover:scale-105">
            <img
              src="https://img.freepik.com/free-photo/front-view-tasty-ham-sandwiches-with-french-fries-dark-surface_179666-34646.jpg?t=st=1735574750~exp=1735578350~hmac=56c23fe00fd912ddb9617c789b6d360514fd469d4ca30e34c83fec22695a12b4&w=900"
              alt="Fries"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Image 4: Drink */}
          <div className="transform transition-all duration-500 ease-in-out hover:scale-105">
            <img
              src="https://img.freepik.com/free-photo/glass-orange-juice-fresh-fruit-floor-with-ice-cubes_1150-23635.jpg?t=st=1735574847~exp=1735578447~hmac=5a626031cc1a63a5ab831682bfa198f095c3fe6d067e797027ccf526acf37784&w=900"
              alt="Drink"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Image 5: Dessert */}
          <div className="transform transition-all duration-500 ease-in-out hover:scale-105">
            <img
              src="https://img.freepik.com/premium-photo/high-angle-view-dessert-plate-table_1048944-15066305.jpg?w=900"
              alt="Dessert"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Image 6: Sandwich */}
          <div className="transform transition-all duration-500 ease-in-out hover:scale-105">
            <img
              src="https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?t=st=1735575007~exp=1735578607~hmac=9d8e55678ee8c852277cb1cf435965bf9cd051f7be6610d90681138ea1e0f401&w=900"
              alt="Sandwich"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Image 7: Kabbab  */}
          <div className="transform transition-all duration-500 ease-in-out hover:scale-105">
            <img
              src="https://img.freepik.com/free-photo/turkish-arabic-traditional-ramadan-mix-kebab-plate-kebab-adana-chicken-lamb-beef-lavash-bread-with-sauce-top-view_2829-6171.jpg?t=st=1735575073~exp=1735578673~hmac=f8075572b04c1719d315b3cf01a0118ca04410abd3445b3f77d498c941968e76&w=900"
              alt="Sandwich"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Image 8: pasta */}
          <div className="transform transition-all duration-500 ease-in-out hover:scale-105">
            <img
              src="https://img.freepik.com/premium-photo/tasty-pasta-bolognese-with-cheese-basil_1220-3842.jpg?w=900"
              alt="Sandwich"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastFoodSection;
