import React, { useEffect, useState } from "react";
import ThreeDots from "../components/ThreeDots";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../components/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const RegisterPage = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const [show, setShow] = useState(false);
  const { user } = useAuth(); // Use the signUp function from the Auth Context
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect to home page if user is already logged in
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setState({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, termsAccepted } = state;

    // if (!email) {
    //   toast.error("Email is required");
    //   return;
    // }
    if (!name) {
      toast.error("Name is required");
      return;
    }

    if (!termsAccepted) {
      toast.error("Please accept the Terms of Service to proceed");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Registration successful!");

      const user = userCredential.user;

      // Store user information in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        uid: user.uid,
      });

      // Optionally check if user data exists
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        // Redirect to home page if user data exists or registration is successful
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex xl:p-[100px] register ">
      {/* Form Section */}
      <div className=" md:flex md:w-1/2 flex-col justify-center md:px-3">
        <div className=" flex justify-center md:justify-normal mt-16 md:mt-0 mb-6">
          <img className="w-[109px]" src="./public/Logo.png" alt="" />
        </div>
        <div className={`${show ? "hidden" : "block px-[22px] md:px-0"}`}>
          <h2 className="text-[30px] text-center md:text-left mt-9 md:mt-0 font-semibold mb-4">
            Sign In To Your Account
          </h2>
          <p className=" w-[388px] md:w-[415px] md:text-sm md:text-gray-600 text-white mb-8 text-left ">
            Welcome Back! By clicking the sign-up button, you're agree to
            Zenitood's Terms of Service and acknowledge the{" "}
            <a href="#" className="underline text-blue-500">
              Privacy and Policy.
            </a>
          </p>
        </div>

        <div
          onClick={() => setShow(true)}
          className={`${show ? "-mt-7" :"bg-[#152A16] mt-10"} md:hidden md:mt-0 opacity-70 w-[341px] mx-auto h-[143px] rounded-[10px] flex flex-col text-[22px] font-medium justify-center items-center text-white`}
        >
          <h4 className={`${show ? "" : "text-[#156BCA]"}`}>Create Account </h4>
          <h4>Fill in Your Information</h4>
        </div>

        <form
          className={`w-full  ${show ? "block bg-white p-4 pb-[18px] rounded-tl-[40px] rounded-tr-[40px] mt-8" : "hidden"} md:block `}
          onSubmit={handleSubmit}
        >
          {show && (
            <h3 className="text-[28px] font-semibold text-center py-4 ">Sign In</h3>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
              placeholder="@username"
              className="mt-2 p-2 px-4 h-[54px] w-[398px] md:w-[428px]  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={state.email}
              required
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-3 p-2 px-4 h-[54px] w-[398px] md:w-[428px] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-3 p-2 px-4 h-[54px] w-[398px] md:w-[428px] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={state.confirmPassword}
              onChange={handleChange}
              placeholder="Re-type password"
              className="mt-3 p-2 px-4 h-[54px] w-[398px] md:w-[428px] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={state.termsAccepted}
              onChange={handleChange}
              className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="text-blue-600">Accept Terms of Service</label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[271px] mt-2 h-[54px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Sign Up
            </button>
          </div>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Already Have an Account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-blue-600 underline"
            >
              Log in
            </button>
          </p>
        </form>
      </div>

      {/* Image Section */}
      <div
        className="w-1/2 hidden  bg-cover bg-center md:flex justify-center items-center rounded-[16px] relative"
        style={{ backgroundImage: "url('./src/assets/login.png')" }}
      >
        {/* Rectangle */}
        <div className=" bg-[#152A16] opacity-70 w-[341px] h-[143px] rounded-[10px] flex flex-col text-[22px] font-medium justify-center items-center text-white">
          <h4 className="text-[#156BCA]">Create Account </h4>
          <h4>Fill in Your Information</h4>
        </div>
        {/* Three dots */}
        <div className="absolute bottom-4 right-[50%] translate-x-2/4">
          <ThreeDots />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
