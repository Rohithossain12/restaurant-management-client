import React from "react";
import { easeOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex flex-col space-y-10 md:space-y-0 rounded-lg md:flex-row mt-10 bg-base-200 justify-center items-center p-10 mb-10">
      <div className="flex-1 space-y-5">
        <motion.h1
          animate={{ x: 50, color: "red" }}
          transition={{
            duration: 2,
            delay: 2,
            repeat: Infinity,
            ease: easeOut,
          }}
          className="text-xl md:text-3xl lg:text-4xl font-bold"
        >
          Savor the{" "}
          <motion.span
            animate={{
              color: [
                "#03d900",
                "#f38102  ",
                "#0035d9",
                "#33ff4f ",
                "#ff33f9 ",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Taste
          </motion.span>{" "}
          of Perfection.
        </motion.h1>
        <p className="font-bold">
          Indulge in flavors that delight your senses. Experience the perfect
          blend of taste and quality in every bite, crafted with love and care.
        </p>
        <div>
          <Link
            to="/allFoods"
            className="px-2 py-1.5 md:px-4 md:py-2   rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg text-white"
          >
         Buy Foods
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <img
          className="rounded-lg border-8 border-green-500"
          src="https://i.ibb.co.com/SvBc4Wp/lifestyle-people-learning-make-sushi-23-2149865358.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;

