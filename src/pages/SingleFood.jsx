import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const SingleFood = () => {
  const food = useLoaderData();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (food) {
      setLoading(false);
    }
  }, [food]);

  const {
    category,
    quantity,
    description,
    price,
    image,
    food: name,
    _id,
    making,
    origin,
    ingredients,
    purchaseCount,
  } = food || {};

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="mt-10 pb-10 px-5 py-6   ">
      <Helmet>
        <title>Master Chef | Single Food Page</title>
      </Helmet>
      <div className="flex flex-col bg-[#F4F4F4] md:flex-row max-w-4xl py-5  border rounded-xl  space-y-4  mx-auto gap-5 px-5 ">
        <div className=" p-2 pr-0 md:w-[500px] md:h-[350px] ">
          <img
            className="w-full   h-full overflow-hidden rounded-lg  object-cover"
            src={image}
            alt="foods"
          />
        </div>
        <div className=" space-y-1 ml-5 md:ml-0   ">
          <h2 className="text-lg font-bold text-[#6A1B9A]">Name: {name}</h2>
          <p className="text-[#6A1B9A]">Category : {category}</p>
          <p className="text-[#6A1B9A]">Price : {price} Tk. </p>
          <p className="text-[#6A1B9A]">Origin : {origin}</p>
          <p className="text-[#6A1B9A]">Quantity : {quantity}</p>
          <p className="text-[#6A1B9A]">Purchase Count : {purchaseCount}</p>
          <p className="text-[#6A1B9A]">Description: {description}</p>
          <p className="text-[#6A1B9A]">Ingredients : {ingredients}</p>
          <p className="text-[#6A1B9A] pb-4">Making: {making}</p>
          <div>
            <Link
              to={`/purchase/${_id}`}
              className="px-4 py-1.5 border-2 border-[#FF5722] text-[#FF5722] font-bold rounded-full hover:bg-[#FF5722] hover:text-white transition "
            >
              Purchase
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
