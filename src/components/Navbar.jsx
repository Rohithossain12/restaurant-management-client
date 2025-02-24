import React, { useContext } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut, handleToggleTheme } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful");
        navigate("/");
      })
      .catch();
  };

  return (
    <div className="bg-[#6A1B9A] text-white sticky top-0 z-50">
      <div className="navbar container mx-auto px-5">
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
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#6A1B9A] rounded-box z-[1] mt-3 w-52 p-2 shadow text-center"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFC107] font-semibold block py-2 outline outline-[#FFC107] rounded-md"
                    : "text-white block py-2 hover:text-[#FFC107]"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/allFoods"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFC107] font-semibold block py-2 outline outline-[#FFC107] rounded-md"
                    : "text-white block py-2 hover:text-[#FFC107]"
                }
              >
                All Foods
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFC107] font-semibold block py-2 outline outline-[#FFC107] rounded-md"
                    : "text-white block py-2 hover:text-[#FFC107]"
                }
              >
                Gallery
              </NavLink>
              {user && (
                <>
                  <NavLink
                    to="/addFood"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#FFC107] font-semibold block py-2 outline outline-[#FFC107] rounded-md"
                        : "text-white block py-2 hover:text-[#FFC107]"
                    }
                  >
                    Add Food
                  </NavLink>
                  <NavLink
                    to="/myFoods"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#FFC107] font-semibold block py-2 outline outline-[#FFC107] rounded-md"
                        : "text-white block py-2 hover:text-[#FFC107]"
                    }
                  >
                    My Foods
                  </NavLink>
                  <NavLink
                    to="/myOrders"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#FFC107] font-semibold block py-2 outline outline-[#FFC107] rounded-md"
                        : "text-white block py-2 hover:text-[#FFC107]"
                    }
                  >
                    My Orders
                  </NavLink>
                </>
              )}
            </div>
          </div>
          <Link to="/">
            <div>
              <h3 className="text-lg lg:text-3xl md:text-xl font-bold">
                <span className="text-[#FF5722]">Mas</span>
                <span className="text-[#FFC107]">ter</span>{" "}
                <span className="text-[#FF5722]">Ch</span>
                <span className="text-[#FFC107]">ef</span>
              </h3>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex gap-4 font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#FFC107] font-semibold outline outline-[#FFC107] rounded-md px-2 py-1"
                : "text-white hover:text-[#FFC107] px-2 py-1"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/allFoods"
            className={({ isActive }) =>
              isActive
                ? "text-[#FFC107] font-semibold outline outline-[#FFC107] rounded-md px-2 py-1"
                : "text-white hover:text-[#FFC107] px-2 py-1"
            }
          >
            All Foods
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text-[#FFC107] font-semibold outline outline-[#FFC107] rounded-md px-2 py-1"
                : "text-white hover:text-[#FFC107] px-2 py-1"
            }
          >
            Gallery
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/addFood"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFC107] font-semibold outline outline-[#FFC107] rounded-md px-2 py-1"
                    : "text-white hover:text-[#FFC107] px-2 py-1"
                }
              >
                Add Food
              </NavLink>
              <NavLink
                to="/myFoods"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFC107] font-semibold outline outline-[#FFC107] rounded-md px-2 py-1"
                    : "text-white hover:text-[#FFC107] px-2 py-1"
                }
              >
                My Foods
              </NavLink>
              <NavLink
                to="/myOrders"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFC107] font-semibold outline outline-[#FFC107] rounded-md px-2 py-1"
                    : "text-white hover:text-[#FFC107] px-2 py-1"
                }
              >
                My Orders
              </NavLink>
            </>
          )}
        </div>
        <div className="navbar-end flex items-center gap-4">
          <input
            onClick={handleToggleTheme}
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />

          {!user ? (
            <Link
              className="px-4 py-2 rounded-lg bg-[#FF5722] text-white font-bold"
              to="/login"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <div
                title={user?.displayName}
                className="w-10 h-10 rounded-full outline outline-[#FFC107] p-1"
              >
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile"
                  src={user?.photoURL}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-[#FF5722] text-white font-bold"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
