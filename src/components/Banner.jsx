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
          className="text-2xl md:text-3xl lg:text-4xl font-bold"
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
            className="px-5 py-3 bg-accent  font-bold rounded-lg"
          >
            Hello
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

{
  /* <div className="hero bg-base-200 p-12 mt-10 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
          animate={{y:[50,100,50]}}
          transition={{duration:10, repeat:Infinity}}
            src=""
            className="max-w-sm w-64 rounded-t-[30px] rounded-br-[30px] border-l-4 border-b-4 shadow-2xl border-blue-400"
          />
          <motion.img
          animate={{x:[100,150,100]}}
          transition={{duration:10, delay:5, repeat:Infinity}}
            src=""
            className="max-w-sm w-64 rounded-t-[30px] rounded-br-[30px] border-l-4 border-b-4 shadow-2xl border-blue-400"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50, color: ["#f10eba"] }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className=" lg:text-4xl md:text-3xl text-2xl font-bold"
          >
            {" "}
            <motion.span
              animate={{
                ,
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              
            </motion.span>{" "}
          
          </motion.h1>
          <p className="py-6">
            
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div> */
}
