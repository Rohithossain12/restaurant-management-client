import React from "react";
import { useLoaderData } from "react-router-dom";
import AllFoodsCard from "../components/AllFoodsCard";

const AllFoods = () => {
  const foods = useLoaderData();

  return (
    <div className="mt-10 ">
      <div className="mb-10 ">
        <div
          className="hero "
          style={{
            
            backgroundImage:
              "url(https://i.ibb.co.com/4P9tHKf/front-view-chicken-burgers-with-cheese-green-salad-wooden-desk-sandwich-fast-food-meal-food-140725-2.jpg)",
            borderRadius:'15px',
            overflow:'hidden'
            }}
        >
          <div className="hero-overlay bg-opacity-60 "></div>
          <div className="hero-content text-neutral-content text-center p-16">
            <div className="max-w-md">
              <h1 className="mb-5 md:text-5xl text-3xl lg:text-7xl font-bold">All Foods</h1>
             
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {foods.map((food) => (
          <AllFoodsCard key={food._id} food={food}></AllFoodsCard>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
