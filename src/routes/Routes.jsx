import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AllFoods from "../pages/AllFoods";
import Gallery from "../pages/Gallery";
import AddFood from "../pages/AddFood";
import MyFoods from "../pages/MyFoods";
import MyOrders from "../pages/MyOrders";
import PrivateRoute from "./PrivateRoute";
import SingleFood from "../pages/SingleFood";
import UpdateFood from "../pages/UpdateFood";
import FoodPurchasePage from "../pages/FoodPurchasePage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://server-nine-gold.vercel.app/foodItems"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/allFoods",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/singleFood/:id",
        element: <SingleFood></SingleFood>,
        loader: ({ params }) =>
          fetch(`https://server-nine-gold.vercel.app/allFoods/${params.id}`),
      },

      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/myFoods",
        element: (
          <PrivateRoute>
            <MyFoods></MyFoods>
          </PrivateRoute>
        ),
      },

      {
        path: "/myOrders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>,
          </PrivateRoute>
        ),
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            {" "}
            <FoodPurchasePage></FoodPurchasePage>
          </PrivateRoute>
        ),
      },

      {
        path: "/update/:id",
        element: <UpdateFood></UpdateFood>,
        loader: ({ params }) =>
          fetch(`https://server-nine-gold.vercel.app/allFoods/${params.id}`),
      },
    ],
  },
]);

export default router;
