import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1736878783061.json";
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
        toast.success("Login Successful");
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
      setErrorMessage("at least one uppercase, one lowercase, one number");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful");
        event.target.reset();
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 py-10">
      <Helmet>
        <title>Master Chef | Login</title>
      </Helmet>
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Lottie Animation Section (Right side) */}
        <div className="md:w-1/2 w-full flex items-center justify-center bg-blue-100 p-6">
          <Lottie
            animationData={animationData}
            loop
            className="w-full h-full object-contain"
          />
        </div>

        {/* Login Form Section (Left side) */}
        <div className="md:w-1/2 w-full flex flex-col bg-[#F4F4F4] justify-center px-8 py-12">
          <div className="w-full max-w-md">
            <div className="text-center">
            <Link to="/" className="text-[#6A1B9A] underline decoration-[#6A1B9A]">go back home</Link>
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 text-[#6A1B9A]">
              Log In to Your Account
            </h1>
            <form onSubmit={handleLogin} className="card-body p-0">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered "
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn border-[#FF5722] text-[#FF5722] font-bold  hover:bg-[#FF5722] hover:text-white transition w-full">
                  Login
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

            <p className="text-center text-[#6A1B9A] font-bold pt-5 pb-3">
              Don't have an account yet?{" "}
              <Link to="/register" className=" text-[#FF5722] underline">
                Please Register
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
    </div>
  );
};

export default Login;
