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
    <div className="container mx-auto px-6 py-10 mb-10 mt-10 rounded-lg  bg-[#F4F4F4]">
      <Helmet>
        <title>Master Chef | Food Purchase</title>
      </Helmet>
      <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-4 text-center text-[#6A1B9A]">
        Food Purchase
      </h1>
      <form onSubmit={handlePurchase} className="space-y-4">
        <div>
          <label className="block font-medium text-[#6A1B9A]">Food Name</label>
          <input
            type="text"
            value={food?.food}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium text-[#6A1B9A]">
            Price (per item)
          </label>
          <input
            type="text"
            value={`${food?.price} Tk`}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-medium text-[#6A1B9A]">
            Available Quantity
          </label>
          <input
            type="text"
            value={food?.quantity}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-medium text-[#6A1B9A]">Quantity</label>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium text-[#6A1B9A]">Buyer Name</label>
          <input
            type="text"
            value={user?.displayName}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium text-[#6A1B9A]">
            Buyer Email
          </label>
          <input
            type="email"
            value={user?.email}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium text-[#6A1B9A]">
            Buying Date
          </label>
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
          className="btn border-[#FF5722] text-[#FF5722] font-bold  hover:bg-[#FF5722] hover:text-white transition w-full "
        >
          Purchase
        </button>
      </form>
    </div>
  );
};

export default FoodPurchasePage;
