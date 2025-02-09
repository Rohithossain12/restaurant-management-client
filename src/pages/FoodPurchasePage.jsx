import React, { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet";

const FoodPurchasePage = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const { user } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the food details by ID from the backend
    fetch(`https://server-nine-gold.vercel.app/allFoods/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data))
      .catch(() => {
        toast.error("Error fetching food");
      });
  }, [id]);

  const handlePurchase = (e) => {
    e.preventDefault();

    // Create the purchase object
    const purchaseData = {
      foodId: food?._id,
      foodName: food?.food,
      price: food?.price,
      quantity,
      image: food?.image,
      owner: food?.addBy.name,
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      buyingDate: Date.now(),
    };

    if (quantity > food?.quantity) {
      return toast.error("item is not available");
    }

    // Post the purchase data to the backend
    axios
      .post("https://server-nine-gold.vercel.app/addPurchase", purchaseData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        const data = response.data;
        if (data.success) {
          toast.success("Purchase completed successfully!");
          navigate("/");
        } else {
          toast.error(data.message);
        }
      })
      .catch(() => {
        toast.error("An error occurred during the purchase.");
      });
  };

  if (!food) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="container mx-auto p-6 mb-10 mt-10 rounded-lg  bg-base-200">
      <Helmet>
        <title>Master Chef | Food Purchase</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Food Purchase</h1>
      <form onSubmit={handlePurchase} className="space-y-4">
        <div>
          <label className="block font-medium">Food Name</label>
          <input
            type="text"
            value={food?.food}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Price (per item)</label>
          <input
            type="text"
            value={`${food?.price} Tk`}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-medium">Available Quantity</label>
          <input
            type="text"
            value={food?.quantity}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-medium">Quantity</label>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Buyer Name</label>
          <input
            type="text"
            value={user?.displayName}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Buyer Email</label>
          <input
            type="email"
            value={user?.email}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Buying Date</label>
          <input
            type="text"
            value={new Date().toLocaleString()}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <button
          disabled={quantity > food?.quantity || quantity < 1}
          type="submit"
          className="btn btn-primary w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg text-white "
        >
          Purchase
        </button>
      </form>
    </div>
  );
};

export default FoodPurchasePage;
