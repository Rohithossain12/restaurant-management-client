import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const MyOrders = () => {
  const [orders, setOrders] = useState();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/addPurchase?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user?.email]);

  //   delete my orders
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/addPurchase/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOrders((prevOrders) =>
            prevOrders.filter((order) => order._id !== id)
          );
          toast.success(data.message);
        }
      });
  };

  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">My Orders</h1>
        {orders?.length === 0 ? (
          <p className="text-center text-gray-500">No orders found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-200 px-4 py-2">Image</th>
                  <th className="border border-gray-200 px-4 py-2">Name</th>
                  <th className="border border-gray-200 px-4 py-2">Price</th>
                  <th className="border border-gray-200 px-4 py-2">Owner</th>
                  <th className="border border-gray-200 px-4 py-2">Date</th>
                  <th className="border border-gray-200 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order) => (
                  <tr key={orders._id}>
                    <td className="border border-gray-200 px-4 py-2">
                      <img
                        src={`${order?.image}`}
                        alt={order?.image}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {order?.foodName}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {order?.price} Tk
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {order?.owner}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {moment(order?.buyingDate).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      <button
                        onClick={() => handleDelete(order?._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
