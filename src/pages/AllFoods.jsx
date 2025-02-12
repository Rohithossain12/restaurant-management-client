import React, { useEffect, useState } from "react";
import AllFoodsCard from "../components/AllFoodsCard";
import { Helmet } from "react-helmet";
import LoadingSpinner from "../components/LoadingSpinner";

const AllFoods = () => {
  const [foods, setFoods] = useState();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (search !== null && search !== undefined && search !== "") {
      setLoading(true);
      fetch(
        `https://server-nine-gold.vercel.app/allFood?search=${encodeURIComponent(
          search
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          setFoods(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    } else {
      setLoading(true);
      fetch("https://server-nine-gold.vercel.app/allFood")
        .then((res) => res.json())
        .then((data) => {
          setFoods(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [search]);

  const handleReset = (event) => {
    event.preventDefault();
    setSearch("");
  };

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="mt-10">
      <Helmet>
        <title>Master Chef | All Foods</title>
      </Helmet>
      <div className="mb-10">
        <div
          className="hero"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/4P9tHKf/front-view-chicken-burgers-with-cheese-green-salad-wooden-desk-sandwich-fast-food-meal-food-140725-2.jpg)",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center p-16">
            <div className="max-w-md">
              <h1 className="mb-5 md:text-5xl text-3xl lg:text-7xl font-bold">
                All Foods
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <form className="flex flex-col sm:flex-row gap-3 mt-5 mb-8 mx-auto items-center justify-center w-full px-4 sm:px-0 sm:w-4/5 lg:w-3/5">
          <label className="flex items-center w-full">
            <input
              type="text"
              className="input input-bordered w-full px-4 py-2 text-sm md:text-base"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Enter Food Title"
            />
          </label>
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg bg-[#FF5722] text-white font-bold"
          >
            Reset
          </button>
        </form>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {foods?.map((food) => (
          <AllFoodsCard key={food._id} food={food}></AllFoodsCard>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
