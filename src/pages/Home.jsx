import React from "react";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import TopSelling from "../components/TopSelling";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const foodData = useLoaderData();
  console.log(foodData);
  return (
    <div>
      <Banner></Banner>
      <div className=" ">
        <div className="text-center mb-8">
          <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-3">
            Top Selling Food Items
          </h1>
          <p>
            "Indulge in our top-selling food items, crafted to perfection and
            loved by all. These dishes are made with premium ingredients and
            packed with irresistible flavors. From appetizers to main courses,
            each item is a customer favorite for a reason. Treat yourself to the
            best and savor the taste of excellence!"
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5  ">
          {foodData.map((food) => (
            <TopSelling key={food._id} food={food}></TopSelling>
          ))}
        </div>
        <div className="text-center mt-5 mb-8 ">
          <Link
            to="/allFoods"
            className="btn  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-bold rounded-full"
          >
            See All{" "}
          </Link>
        </div>
      </div>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
