import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const handleAddItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const food = form.food.value;
    const image = form.image.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const origin = form.origin.value;
    const description = form.description.value;
    const ingredients = form.ingredients.value;
    const making = form.making.value;
    const addBy ={
      email:user?.email,
      name :user?.displayName
    }
  
    console.log({
      food,
      image,
      category,
      quantity,
      price,
      origin,
      description,
      ingredients,
      making,
      addBy
    });
  };

  return (
    <div className="mt-10 mb-10 bg-[#F4F3F0] container mx-auto rounded-lg">
      <div className="card   shrink-0 p-16">
        <h1 className="text-[#374151] md:text-2xl text-xl lg:text-4xl font-bold text-center">
          Add Food
        </h1>

        <form onSubmit={handleAddItem} className="card-body">
          {/* food name and food image  row */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Food Name</span>
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
                <span className="label-text font-bold">Food Image</span>
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
                <span className="label-text font-bold">Food Category</span>
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
                <span className="label-text font-bold">Quantity</span>
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
                <span className="label-text font-bold">Price</span>
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
                <span className="label-text font-bold">Food Origin</span>
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
              <span className="label-text font-bold">Description</span>
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
              <span className="label-text font-bold">Ingredients</span>
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
              <span className="label-text font-bold">Making Procedure </span>
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
            <button className="btn bg-[#D2B48C] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg text-white">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
