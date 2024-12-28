import React, { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthContext } from "../providers/AuthProvider";

const FoodPurchasePage = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  console.log(food);
  const { user } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the food details by ID from the backend
    fetch(`http://localhost:5000/allFoods/${id}`)
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
      foodId: food._id,
      foodName: food.food,
      price: food.price,
      quantity,
      image:food?.image,
      owner:food?.addBy.name,
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      buyingDate: Date.now(),
    };

    if (quantity > food?.quantity) {
      return toast.error("item is not available");
    }

    // Post the purchase data to the backend
    fetch("http://localhost:5000/addPurchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(purchaseData),
    })
      .then((res) => res.json())
      .then((data) => {
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
    <div className="container mx-auto p-6">
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
            // min="1"
            // onChange={(e) => setQuantity(Number(e.target.value))}
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
          className="btn btn-primary w-full mt-4"
        >
          Purchase
        </button>
      </form>
    </div>
  );
};

export default FoodPurchasePage;
