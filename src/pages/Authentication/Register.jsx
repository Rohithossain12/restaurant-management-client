import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import registerAnimationData from "../../assets/Animation - 1733844389416.json";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="hero bg-base-200 min-h-screen mt-8 mb-10 rounded-lg ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left ">
          <Lottie animationData={registerAnimationData}></Lottie>
        </div>
        <div className="card bg-base-200 w-full max-w-2xl shrink-0  p-10">
          <h1 className="text-4xl font-bold text-center ">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body p-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="Name"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your PhotoURL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg text-white">
                Register
              </button>
            </div>
          </form>
          <div className="form-control px-10">
            <p
              onClick={handleGoogleLogin}
              className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg text-white"
            >
              Login With Google
            </p>
          </div>
          <p className="text-center font-bold pt-5 pb-3">
            You have an Already Account ?{" "}
            <Link to="/login" className="text-red-500">
              Please Login
            </Link>{" "}
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
