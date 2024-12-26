import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import MyFoodCard from "../components/MyFoodCard";

const MyFoods = () => {
  const { user } = useContext(AuthContext);

  const [foods, setFoods] = useState([]);
  console.log(foods);

  useEffect(() => {
    fetch(`http://localhost:5000/allFoods-ByEmail/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [user?.email]);

  return (
    <div className="mt-10 mb-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {foods?.map((food) => (
          <MyFoodCard food={food} key={food._id}></MyFoodCard>
        ))}
      </div>
    </div>
  );
};

export default MyFoods;
