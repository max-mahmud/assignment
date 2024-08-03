import React, { useEffect, useState } from "react";
import ThreeDots from "../components/ThreeDots";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth , db} from "../components/firebase";
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
  
  const {  user } = useAuth(); // Use the signUp function from the Auth Context
  const navigate = useNavigate();

  useEffect(() => {
    if ( user) {
      navigate("/"); // Redirect to home page if user is already logged in
    }
  }, [ user, navigate]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setState({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password, confirmPassword, termsAccepted } = state;

    if(!email){
      toast.error("Email is required");
      return;
    }
    if(!name){
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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
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
    <div className="flex h-screen">
      {/* Form Section */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <div className="text-4xl font-bold mb-6">LOGO</div>
        <h2 className="text-2xl font-semibold mb-4">Sign In To Your Account</h2>
        <p className="text-sm text-gray-600 mb-8 text-center">
          Welcome Back! By clicking the sign-up button, you agree to Zenitood's
          Terms of Service and acknowledge the Privacy and Policy.
        </p>

        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
              placeholder="@username"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={state.confirmPassword}
              onChange={handleChange}
              placeholder="Re-type password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={state.termsAccepted}
              onChange={handleChange}
              className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="text-gray-700">Accept Terms of Service</label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Already Have an Account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>

      {/* Image Section */}
      <div
        className="w-1/2 bg-cover bg-center flex justify-center items-center relative"
        style={{ backgroundImage: "url('./src/assets/login.png')" }}
      >
        {/* Adjust the image path and styling as needed */}
        <div className=" bg-[#152A16] opacity-70 w-[341px] h-[143px] rounded-[10px] flex flex-col text-[22px] font-medium justify-center items-center text-white">
          <h4 className="text-[#156BCA]">Create Account </h4>
          <h4>Fill in Your Information</h4>
        </div>
        {/* Three dots */}
        <div className="absolute bottom-4 right-[50%] translate-x-2/4" >
          <ThreeDots />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
