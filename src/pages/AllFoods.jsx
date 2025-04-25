import React, { useEffect, useState } from "react";
import AllFoodsCard from "../components/AllFoodsCard";
import { Helmet } from "react-helmet";
import LoadingSpinner from "../components/LoadingSpinner";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // First load fetch
  useEffect(() => {
    fetch("https://server-nine-gold.vercel.app/allFood")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Initial fetch error:", err);
        setLoading(false);
      });
  }, []);

  // Debounced Search
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search === "") return;

      const url = `https://server-nine-gold.vercel.app/allFood?search=${encodeURIComponent(
        search
      )}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setFoods(data);
        })
        .catch((error) => {
          console.error("Search fetch error:", error);
        });
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [search]);

  const handleReset = (event) => {
    event.preventDefault();
    setSearch("");

    // Reset to all data without showing loader again
    fetch("https://server-nine-gold.vercel.app/allFood")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((err) => console.error("Reset fetch error:", err));
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="mt-10">
      <Helmet>
        <title>Master Chef | All Foods</title>
      </Helmet>

      {/* Banner */}
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

      {/* Search */}
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

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {foods?.map((food) => (
          <AllFoodsCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
