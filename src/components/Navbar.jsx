import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allFoods">All Foods</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
    </>
  );
  const { user, logOut, handleToggleTheme } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("logout successful");
        navigate("/");
      })
      .catch();
  };

  return (
    <div className="bg-blue-200">
      <div className="navbar  container mx-auto px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {!user && (
            <Link className="px-3 rounded-lg py-2 bg-accent" to="/login">
              Login
            </Link>
          )}
          {user && (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img
                    rPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/addFood" className="justify-between">
                    Add food
                  </Link>
                </li>
                <li>
                  <Link to="/myFoods">My Foods</Link>
                </li>
                <li>
                  <Link to="/myOrders">My Orders</Link>
                </li>
                <li className="ml-2 ">
                  <input
                    onClick={handleToggleTheme}
                    type="checkbox"
                    value="synthwave"
                    className="toggle theme-controller"
                  />
                </li>

                <li className="mt-2 ">
                  <button
                    onClick={handleLogout}
                    className="bg-gray-200 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
{
  /* <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
  <div className="flex-1">
    <Link to="/" className="flex gap-2 items-center">
      <img className='w-auto h-7' src={logo} alt='' />
      <span className="font-bold">Kascchi Vai</span>
    </Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
   
    </ul>
  </div>
</div>; */
}
