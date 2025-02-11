import React from "react";
import { Link } from "react-router-dom";

const AllFoodsCard = ({ food }) => {
  const { _id, image, quantity, category, price, food: name } = food || {};
  return (
    <div className="bg-[#F4F4F4] rounded-lg">
      <div className="card transition hover:scale-105 ">
        <figure className="p-2">
          <img
            className="w-[328px] h-[193px] object-cover rounded-lg"
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-[#6A1B9A]">{name}</h2>
          <p className="text-[#6A1B9A]">{category}</p>
          <p className="text-[#6A1B9A]">{price} tk</p>
          <div className="text-center mt-3">
            <Link
              to={`/singleFood/${_id}`}
              className="px-4 py-1.5 border-2 border-[#FF5722] text-[#FF5722] font-bold rounded-full hover:bg-[#FF5722] hover:text-white transition"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFoodsCard;
