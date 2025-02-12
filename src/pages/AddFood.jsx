import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const handleAddItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const food = form.food.value;
    const image = form.image.value;
    const category = form.category.value;
    const quantity = parseInt(form.quantity.value);
    const price = parseInt(form.price.value);
    const origin = form.origin.value;
    const description = form.description.value;
    const ingredients = form.ingredients.value;
    const making = form.making.value;
    const addBy = {
      email: user?.email,
      name: user?.displayName,
    };

    const purchaseCount = 0;

    const formData = {
      food,
      image,
      category,
      quantity,
      price,
      origin,
      description,
      ingredients,
      making,
      addBy,
      purchaseCount,
    };

    if (isNaN(price) || price <= 0) {
      Swal.fire({
        icon: "error",
        title: "invalid input",
        text: "Price added must be number",
      });
      return;
    }

    if (isNaN(quantity) || quantity <= 0) {
      Swal.fire({
        icon: "error",
        title: "invalid input",
        text: "Quantity added must be number",
      });
      return;
    }

    // make a post request using axios
    try {
      axios.post("https://server-nine-gold.vercel.app/addFood", formData, {
        withCredentials: true,
      });
      // reset form data
      form.reset();
      // show toast
      toast.success("Food Added Successfully....!!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="mt-10 mb-10 bg-[#F4F4F4] container mx-auto rounded-lg">
      <Helmet>
        <title>Master Chef | Add Food</title>
      </Helmet>
      <div className="card   shrink-0 p-16">
        <h1 className=" text-[#6A1B9A] md:text-2xl text-xl lg:text-3xl font-bold text-center">
          Add Food
        </h1>

        <form onSubmit={handleAddItem} className="card-body">
          {/* food name and food image  row */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold  text-[#6A1B9A]">Food Name</span>
              </label>
              <input
                type="text"
                name="food"
                placeholder="Enter food name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold  text-[#6A1B9A]">Food Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter food image"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/*Food Category and Quantity row */}

          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold  text-[#6A1B9A]">Food Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter category name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold  text-[#6A1B9A]">Quantity</span>
              </label>
              <input
                type="text"
                placeholder="Enter quantity"
                name="quantity"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/* price and Food origin raw
           */}

          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold  text-[#6A1B9A]">Price</span>
              </label>
              <input
                type="text"
                placeholder="Enter Price"
                name="price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold  text-[#6A1B9A]">Food Origin</span>
              </label>
              <input
                type="text"
                name="origin"
                placeholder="Enter food origin"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/* Description */}

          <div className="form-control ">
            <label className="label">
              <span className="label-text font-bold  text-[#6A1B9A]">Description</span>
            </label>

            <textarea
              className="textarea textarea-bordered"
              placeholder="Enter description"
              name="description"
              required
            ></textarea>
          </div>
          {/* Ingredients */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-bold  text-[#6A1B9A]">Ingredients</span>
            </label>

            <textarea
              className="textarea textarea-bordered"
              placeholder="put each Ingredients in a new line"
              name="ingredients"
              required
            ></textarea>
          </div>

          {/* making procedure */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-bold  text-[#6A1B9A]">Making Procedure </span>
            </label>

            <textarea
              className="textarea textarea-bordered"
              placeholder="put each making procedure in a new line"
              name="making"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-8">
            <button className="btn border-[#FF5722] text-[#FF5722] font-bold  hover:bg-[#FF5722] hover:text-white transition w-full">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
