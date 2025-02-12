import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet";
import LoadingSpinner from "../components/LoadingSpinner";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axios
        .get(
          `https://server-nine-gold.vercel.app/addPurchase?email=${user?.email}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setOrders(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching orders:", err);
          setLoading(false);
        });
    }
  }, [user?.email]);

  // Delete order handler
  const handleDelete = (id) => {
    axios
      .delete(`https://server-nine-gold.vercel.app/addPurchase/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        const data = response.data;
        if (data.success) {
          setOrders((prevOrders) =>
            prevOrders.filter((order) => order._id !== id)
          );
          toast.success(data.message);
        }
      })
      .catch(() => {
        toast.error("An error occurred while deleting the order.");
      });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="container mx-auto p-6">
        <Helmet>
          <title>Master Chef | My Orders</title>
        </Helmet>
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6 text-[#6A1B9A] text-center">
          My Orders
        </h1>
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
                  <tr key={order._id}>
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
                        className="bg-[#FF5722] text-white px-3 py-1 rounded"
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
