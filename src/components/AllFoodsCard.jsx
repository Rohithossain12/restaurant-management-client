import React from "react";
import { Link } from "react-router-dom";

const AllFoodsCard = ({food}) => {
const {image}=food || {}  
  return (
    <div className="card  bg-base-300 hover:bg-white transition hover:scale-105 shadow-xl">
      <figure className="  p-2">
        <img
          className="w-[328px] h-[193px] object-cover rounded-lg"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: </h2>
        <p>Category : </p>
        <p>Price :  tk</p>
        <p>Quantity : </p>
        <div className=" text-center flex gap-5">
          <Link
            to={`/singleFood/${food._id}`}
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
