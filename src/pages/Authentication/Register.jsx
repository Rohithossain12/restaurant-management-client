import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import registerAnimationData from "../../assets/Animation - 1733844389416.json";
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
    <div className="hero bg-base-200 min-h-screen mt-8 mb-10 rounded-lg overflow-hidden">
      <Helmet>
        <title>Master Chef | Register</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse w-full lg:items-center px-4 lg:px-8">
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <Lottie animationData={registerAnimationData}></Lottie>
        </div>
        <div className="bg-base-200 max-w-2xl w-full shrink-0 rounded-lg p-5 lg:p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
            Register now...!
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
              <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg text-white w-full">
                Register
              </button>
            </div>
          </form>

          <div className="form-control mt-4">
            <button
              onClick={handleGoogleLogin}
              className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg text-white w-full"
            >
              Login With Google
            </button>
          </div>

          <p className="text-center font-bold pt-5 pb-3">
            Already have an account?{" "}
            <Link to="/login" className="text-red-500 underline">
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
