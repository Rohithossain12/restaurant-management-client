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

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        loader: () => fetch("http://localhost:5000/allFoods"),
      },
      {
        path: "/singleFood/:id",
        element: <SingleFood></SingleFood>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allFoods/${params.id}`),
      },
      {
        path: "/gallery",
        element: (
          <PrivateRoute>
            <Gallery></Gallery>
          </PrivateRoute>
        ),
      },
      {
        path: "/addFood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/myFoods",
        element: <MyFoods></MyFoods>,
      },

      {
        path: "/myOrders",
        element: <MyOrders></MyOrders>,
      },
    ],
  },
]);

export default router;
