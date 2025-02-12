import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import registerAnimationData from "../../assets/Animation - 1736873044775.json";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Register = () => {
  const navigate = useNavigate();
  const {
    createUser,
    signInWithGoogle,
    errorMessage,
    setErrorMessage,
    setUser,
    updateUserProfile,
  } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success(" Register Successfully");
        navigate("/");
      })
      .catch(() => {
        toast.error("Register Unsuccessful");
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    // Error Message reset
    setErrorMessage("");

    // password validation
    if (password.length < 6) {
      setErrorMessage("Password should be 6 character or longer");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(" at least one uppercase,one lowercase,one number");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Register Successfully");
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {})
          .catch((error) => {
            setErrorMessage(error);
          });
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <Helmet>
        <title>Master Chef | Register</title>
      </Helmet>
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Animation Section - Right side */}
        <div className="md:w-1/2 w-full flex items-center justify-center bg-blue-100 p-6">
          <Lottie animationData={registerAnimationData} />
        </div>

        {/* Form Section - Left side */}
        <div className="md:w-1/2 w-full flex flex-col justify-center bg-[#F4F4F4] px-8 py-12">
          <div className="text-center">
            <Link
              to="/"
              className="text-[#6A1B9A] underline decoration-[#6A1B9A]"
            >
              go back home
            </Link>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 text-[#6A1B9A]">
            Create an Account
          </h1>
          <form onSubmit={handleRegister} className="card-body p-0">
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your Photo URL"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn border-[#FF5722] text-[#FF5722] font-bold  hover:bg-[#FF5722] hover:text-white transition w-full">
                Register
              </button>
            </div>
          </form>

          <div className="form-control mt-4">
            <button
              onClick={handleGoogleLogin}
              className="btn border-[#FF5722] text-[#FF5722] font-bold  hover:bg-[#FF5722] hover:text-white transition w-full"
            >
              Login With Google
            </button>
          </div>

          <p className="text-center font-bold pt-5 pb-3 text-[#6A1B9A]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#FF5722] underline">
              Please Login
            </Link>
          </p>

          {errorMessage && (
            <p className="text-red-500 font-bold text-center pb-5">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
