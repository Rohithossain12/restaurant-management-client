import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" container mx-auto px-5">
      <div className="flex flex-col  justify-center  items-center">
        <img className="" src="https://i.ibb.co.com/jLgrBRw/404.gif" alt="" />
        <Link
          to="/"
          className=" px-2 md:px-6 md:py-2 py-1 rounded-lg -mt-10 md:-mt-28  md:font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg text-white"
        >
          {" "}
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
