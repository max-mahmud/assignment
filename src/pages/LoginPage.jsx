import React, { useState, useEffect } from "react";
import ThreeDots from "../components/ThreeDots";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
import { useNavigate } from "react-router-dom";
import SignInwithGoogle from "../components/SignInWIthGoogle";
import { useAuth } from "../context/authContext";
import FacebookLogin from "../components/FacebookLogin";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useAuth(); // Access the current user from the AuthContext
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect to home page if user is already logged in
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., API call to register or login)
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful");
      // console.log("user=>", user.user);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
    // Reset form fields if needed
  };

  return (
    <div className="flex register xl:p-[100px] ">
      {/* Form Section */}
      <div className="md:w-1/2 flex flex-col justify-center  md:p-10">
        <div className=" flex justify-center md:justify-start mt-16 md:mt-0 md:mb-6 mb-2">
          <img className="w-[109px]" src="./public/Logo.png" alt="" />
        </div>
        <div className="md:block hidden">
          <h2 className="text-2xl font-semibold mb-4">
            Log In To Your Account
          </h2>
          <p className="text-sm text-gray-600 mb-8 ">
            Welcome Back! Select a method to log in:
          </p>
        </div>

        <div className="md:hidden text-center opacity-70 mb-11 md:mb-0 flex flex-col text-[22px] font-medium justify-center items-center text-white p-5">
          <h4>
            <span className="">Sign In</span> to view all the{" "}
          </h4>
          <h4> massage therapists</h4>
        </div>

        <div className=" hidden md:flex w-[428px]  justify-between  gap-7 mb-6">
          <SignInwithGoogle />
          <FacebookLogin />
        </div>

        <div className=" hidden md:flex items-center text-sm text-gray-600 mb-6 text-center">
          <div className="w-[32%] h-[1px] bg-gray-300"></div>
          <span className="px-2">Or Continue with Email</span>
          <div className="w-[32%] h-[1px] bg-gray-300"></div>
        </div>

        <form className="w-screen md:w-full p-4 md:p-0 pb-14 md:pb-0 rounded-tl-[40px] md:rounded-none rounded-tr-[40px] bg-white" onSubmit={handleSubmit}>
          <div className="md:hidden">
            <div className="pt-3 pb-9">
              <h4 className="text-[28px] font-semibold">Log In To Your Account</h4>
              <span className="text-sm">Welcome Back! Select a method to log in:</span>
            </div>

            <div className=" md:hidden flex w-[398px] md:w-[428px]  justify-center gap-11  mb-6">
              <SignInwithGoogle />
              <FacebookLogin />
            </div>

            <div className=" md:hidden flex items-center text-sm text-gray-600 mb-6 text-center">
          <div className="w-[29%] h-[1px] bg-gray-300"></div>
          <span className="px-3 text-gray-500">Or Continue with Email</span>
          <div className="w-[29%] h-[1px] bg-gray-300"></div>
        </div>

          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-2 p-2 px-4 h-[54px] w-[398px] md:w-[428px] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-2 p-2 px-4 h-[54px] w-[398px] md:w-[428px] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4 mt-2 flex items-center justify-between">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500  border-gray-300 rounded"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-600 underline">
              Forgot password?
            </a>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="md:mt-14 mt-10  w-[271px] h-[54px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Sign In
            </button>
          </div>

          <p className="text-sm text-gray-600 mt-5 text-center">
            Don’t Have an Account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-blue-600 underline"
            >
              Create Account
            </button>
          </p>
        </form>
      </div>

      {/* Image Section */}
      <div
        className="w-1/2 bg-cover hidden  bg-center md:flex relative justify-center items-center rounded-[16px]"
        style={{ backgroundImage: "url('./src/assets/login.png')" }}
      >
        <div className=" bg-[#152A16] opacity-70 w-[341px] h-[143px] rounded-[10px] flex flex-col text-[22px] font-medium justify-center items-center text-white p-5">
          <h4>
            <span className="text-[#156BCA]">Sign In</span> to view all the{" "}
          </h4>
          <h4> massage therapists</h4>
        </div>
        {/* Three dots */}
        <div className="absolute bottom-4 right-[50%] translate-x-2/4">
          <ThreeDots />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
