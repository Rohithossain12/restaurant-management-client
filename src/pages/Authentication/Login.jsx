import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import loginAnimationData from "../../assets/Animation - 1735022282207.json";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, signIn, setUser, errorMessage, setErrorMessage } =
    useContext(AuthContext);
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success(" Login Successful");
        navigate("/");
      })
      .catch(() => {
        toast.error("Login Unsuccessful");
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // reset error message status
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

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success(" Login successful");
        event.target.reset();
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    
    <div className="hero bg-base-200 min-h-screen mt-8 mb-10  rounded-lg">
      <Helmet>
        <title>Master Chef  |  Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left ">
          <Lottie animationData={loginAnimationData}></Lottie>
        </div>
        <div className="card bg-base-200 w-full max-w-2xl shrink-0  p-10">
          <h1 className="text-4xl font-bold text-center ">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body p-10">
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
              <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg text-white">Login</button>
            </div>
          </form>
          <div className="form-control px-10">
            <p onClick={handleGoogleLogin} className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg text-white">
              Login With Google
            </p>
          </div>
          <p className="text-center font-bold pt-5 pb-3">
            Don't have an account yet ?{" "}
            <Link to="/register" className="text-red-500">
              Please Register
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

export default Login;
