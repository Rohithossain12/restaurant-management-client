import React from "react";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import TopSelling from "../components/TopSelling";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import FastFoodSection from "../components/FastFoodSection";
import ContactUs from "../components/ContactUs";
import DiscountFoods from "../components/discount/DiscountFoods";


const Home = () => {
  const foodData = useLoaderData();
  return (
    <div>
      <Banner></Banner>

      <div className="mi-10 mb-10">
       <DiscountFoods></DiscountFoods>
      </div>
      <div className=" ">
        <div className="text-center mb-8">
          <Helmet>
            <title>Master Chef | Home</title>
          </Helmet>
          <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-3 ">
            Top Selling Food Items
          </h1>
          <p className=" mb-4">
            "Indulge in our top-selling food items, crafted to perfection and
            loved by all. These dishes are made with premium ingredients and
            packed with irresistible flavors. From appetizers to main courses,
            each item is a customer favorite for a reason. Treat yourself to the
            best and savor the taste of excellence!"
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {foodData?.map((food) => (
            <TopSelling key={food._id} food={food} />
          ))}
        </div>
        <div className="text-center mt-8 mb-8">
          <Link
            to="/allFoods"
            className="px-6 py-2 bg-[#FF5722] text-white font-bold rounded-full hover:bg-[#FF7043] transition"
          >
            See All
          </Link>
        </div>

        <div className="mt-10 mb-10">
          <FastFoodSection></FastFoodSection>
        </div>
      </div>
      <AboutUs></AboutUs>
      <div className="mt-10 mb-10">
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
