import React from "react";
import { Link } from "react-router-dom";

const AllFoodsCard = ({ food }) => {
  const {
    _id,
    image,
    quantity,
    category,
    price,
    food: name,
  } = food || {};
  return (
    <div className="card  bg-base-200 hover:bg-white transform transition-all duration-500 ease-in-out hover:scale-105 ">
      <figure className="  p-2">
        <img
          className="w-[328px] h-[193px] object-cover rounded-lg transform transition-all duration-500 ease-in-out hover:scale-105"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="font-bold">Name:{name} </h2>
        <p>Category :{category} </p>
        <p>Price : {price} tk</p>
        <p>Quantity :{quantity} </p>
        <div className=" text-center flex gap-5">
          <Link
            to={`/singleFood/${_id}`}
            className="px-5 py-1.5  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-bold rounded-full"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllFoodsCard;
