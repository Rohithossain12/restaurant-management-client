import React from "react";
import { useLoaderData } from "react-router-dom";
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
    // sent data to the server
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };

  return (
    <div className="mt-10 mb-10 bg-[#F4F3F0] container mx-auto rounded-lg">
      <div className="card   shrink-0 p-16">
        <h1 className="text-[#374151] md:text-2xl text-xl lg:text-4xl font-bold text-center">
          Update Food
        </h1>

        <form onSubmit={handleUpdateFood} className="card-body">
          {/* addBy email and user name row */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">User Name</span>
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
                <span className="label-text font-bold">User Email</span>
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
                <span className="label-text font-bold">Food Name</span>
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
                <span className="label-text font-bold">Food Image</span>
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
                <span className="label-text font-bold">Food Category</span>
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
                <span className="label-text font-bold">Quantity</span>
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
                <span className="label-text font-bold">Price</span>
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
                <span className="label-text font-bold">Food Origin</span>
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
              <span className="label-text font-bold">Description</span>
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
              <span className="label-text font-bold">Ingredients</span>
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
              <span className="label-text font-bold">Making Procedure </span>
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
            <button className="btn bg-[#D2B48C] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg text-white">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
