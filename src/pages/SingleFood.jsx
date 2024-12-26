import { p } from "motion/react-client";
import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
  const food = useLoaderData();
  const {
    category,
    quantity,
    description,
    price,
    image,
    food: name,

    making,
    ingredients,
  } = food || {};

  return (
    <div className="mt-10 pb-10 px-5   ">
      <div className="flex flex-col bg-base-300 md:flex-row max-w-4xl  border rounded-xl  space-y-4  mx-auto gap-5 p-2 ">
        <div className=" p-2 pr-0 md:w-[500px] md:h-[350px] ">
          <img
            className="w-full   h-full overflow-hidden rounded-lg  object-cover"
            src={image}
            alt="foods"
          />
        </div>
        <div className="spacey-4 space-y-2 ml-5 md:ml-0  ">
          <h2 className="text-lg font-bold">Name: {name}</h2>
          <p>Category : {category}</p>
          <p>Price : {price} Tk. </p>
          <p>Quantity : {quantity}</p>
          <p>Description: {description}</p>
          <p>Ingredients : {ingredients}</p>
          <p>Making: {making}</p>
          <div className="mt-2">
            <button className="px-3 py-1.5  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-bold rounded-full  ">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
