import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import MyFoodCard from "../components/MyFoodCard";
import axios from "axios";
import { Helmet } from "react-helmet";

const MyFoods = () => {
  const { user } = useContext(AuthContext);

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/allFoods-ByEmail/${user?.email}`,{withCredentials:true})
      .then((res) => setFoods(res.data));
  }, [user?.email]);

  return (
    <div className="mt-10 mb-10">
      <Helmet>
        <title>
          Master Chef | My Foods
        </title>
      </Helmet>
      <div
        className="hero mb-10 "
        style={{
          backgroundImage:
            "url(https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers-1180x580.jpg)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-neutral-content text-center p-16">
          <div className="max-w-md">
            <h1 className="mb-5 md:text-5xl text-3xl lg:text-7xl font-bold">
              My Foods
            </h1>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {foods?.map((food) => (
          <MyFoodCard food={food} key={food._id}></MyFoodCard>
        ))}
      </div>
    </div>
  );
};

export default MyFoods;
