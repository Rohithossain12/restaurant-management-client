import React from "react";
import { Link } from "react-router-dom";

const TopSelling = ({ food }) => {
  const {
    _id,
    image,
    quantity,
    category,
    purchaseCount,
    price,
    food: name,
  } = food || {};
  return (
    <div className="">
    <div className="card  bg-base-300 hover:bg-white transition hover:scale-105 shadow-xl">
          <figure className="  p-2">
            <img
              className="w-[328px] h-[193px] object-cover rounded-lg"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold">Name: {name} </h2>
            <p>Category : {category} </p>
            <p>Price :  {price} tk</p>
            <p>Quantity : {quantity} </p>
            <div className=" text-center flex gap-5">
              <Link
                to={`/singleFood/${_id}`}
                className="px-4 py-1.5  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-bold rounded-full"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TopSelling;
