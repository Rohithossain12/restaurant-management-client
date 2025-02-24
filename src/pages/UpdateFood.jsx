import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";
import {  useLoaderData, } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const foods = useLoaderData();
  const {
    addBy,
    category,
    description,
    food: name,
    image,
    ingredients,
    making,
    origin,
    price,
    _id,

    quantity,
  } = foods || {};

  const handleUpdateFood = (event) => {
    event.preventDefault();
    const form = event.target;
    const food = form.food.value;
    const image = form.image.value;
    const category = form.category.value;
    const quantity = parseFloat(form.quantity.value);
    const price = parseFloat(form.price.value);
    const origin = form.origin.value;
    const description = form.description.value;
    const ingredients = form.ingredients.value;
    const making = form.making.value;

    const updatedProduct = {
      food,
      image,
      category,
      quantity,
      price,
      origin,
      description,
      ingredients,
      making,
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
    axios
      .put(
        `https://server-nine-gold.vercel.app/updateFood/${_id}`,
        updatedProduct,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "Something went wrong while updating the product.",
        });
      });
  };

  return (
    <div className="mt-10 mb-10 bg-[#F4F4F4] container mx-auto rounded-lg">
      <Helmet>
        <title>Master Chef | Update Food</title>
      </Helmet>
      <div className="card   shrink-0 p-16">
        <h1 className="text-[#6A1B9A] md:text-2xl text-xl lg:text-3xl font-bold text-center">
          Update Food
        </h1>

        <form onSubmit={handleUpdateFood} className="card-body">
          {/* addBy email and user name row */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-[#6A1B9A]">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={addBy.name}
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-[#6A1B9A]">User Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={addBy.email}
                readOnly
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/* food name and food image  row */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-[#6A1B9A]">Food Name</span>
              </label>
              <input
                type="text"
                name="food"
                defaultValue={name}
                placeholder="Enter food name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-[#6A1B9A]">Food Image</span>
              </label>
              <input
                type="text"
                name="image"
                defaultValue={image}
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
                <span className="label-text font-bold text-[#6A1B9A]">Food Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter category name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-[#6A1B9A]">Quantity</span>
              </label>
              <input
                type="text"
                placeholder="Enter quantity"
                name="quantity"
                defaultValue={quantity}
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
                <span className="label-text font-bold text-[#6A1B9A]">Price</span>
              </label>
              <input
                type="text"
                placeholder="Enter Price"
                defaultValue={price}
                name="price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-[#6A1B9A]">Food Origin</span>
              </label>
              <input
                type="text"
                name="origin"
                placeholder="Enter food origin"
                defaultValue={origin}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/* Description */}

          <div className="form-control ">
            <label className="label">
              <span className="label-text font-bold text-[#6A1B9A]">Description</span>
            </label>

            <textarea
              className="textarea textarea-bordered"
              placeholder="Enter description"
              name="description"
              defaultValue={description}
              required
            ></textarea>
          </div>
          {/* Ingredients */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-bold text-[#6A1B9A]">Ingredients</span>
            </label>

            <textarea
              className="textarea textarea-bordered"
              placeholder="put each Ingredients in a new line"
              name="ingredients"
              defaultValue={ingredients}
              required
            ></textarea>
          </div>

          {/* making procedure */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-bold text-[#6A1B9A]">Making Procedure </span>
            </label>

            <textarea
              className="textarea textarea-bordered"
              placeholder="put each making procedure in a new line"
              name="making"
              defaultValue={making}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-8">
            <button className="btn border-[#FF5722] text-[#FF5722] font-bold  hover:bg-[#FF5722] hover:text-white transition w-full">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
