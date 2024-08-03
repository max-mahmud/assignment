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
    <div className="flex h-screen">
      {/* Form Section */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <div className="text-4xl font-bold mb-6">LOGO</div>
        <h2 className="text-2xl font-semibold mb-4">Log In To Your Account</h2>
        <p className="text-sm text-gray-600 mb-8 text-center">
          Welcome Back! Select a method to log in:
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <SignInwithGoogle />
          <FacebookLogin />
        </div>

        <p className="text-sm text-gray-600 mb-4 text-center">
          Or Continue with Email
        </p>

        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign In
          </button>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Don’t Have an Account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Create Account
            </a>
          </p>
        </form>
      </div>

      {/* Image Section */}
      <div
        className="w-1/2 bg-cover bg-center flex relative justify-center items-center"
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
