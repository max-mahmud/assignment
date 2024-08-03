import React, { useEffect, useState } from "react";
import vector from "../assets/Vector.png";
import Photo1 from "../assets/photo1.png";
import Card from "../components/Card";
import { therapistData } from "../assets/data/TherapistData";
import left from "../assets/icons/left (2).png";
import right from "../assets/icons/right.png";
import TestimonialCard from "../components/TestimonialCard";
import testiImg from "../assets/testi.png";
import testiImg2 from "../assets/testi2.png";
import CityTable from "../components/CityTable";
import ThreeDots from "../components/ThreeDots";
import { auth, db } from "../components/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Home = () => {
  // const [userData, setUserData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const navigate = useNavigate(); // Initialize useNavigate

  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login"); // Redirect to login page if not authenticated
    }
  }, [loading, user, navigate]);
 

  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       fetchUserData(user);
  //     } else {
  //       setLoading(false);
  //       console.log("No user logged in");
  //       navigate("/login");
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // Render a loading state while fetching data
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-white w-full h-[212px] rounded-[10px] p-6 flex justify-between items-center gap-7">
        <div>
          <h2 className="text-[20px] font-medium">
            I'm Looking for Massage Therapist Near...
          </h2>
          <div className="text-[14px]">
            In using this site, I agree to be bound by the{" "}
            <a className="underline text-blue-500">Terms of Service</a> <br />{" "}
            and <a className="underline text-blue-500">Privacy Policy</a>
          </div>
          <div className="h-[50px] w-[470px] rounded-[10px] bg-[#EEF2F5] mt-4 py-3 px-5 relative ">
            <input
              type="text"
              name=""
              id=""
              className="bg-inherit"
              placeholder="ZIP code or city name"
            />
            <button className="absolute top-1 right-1 w-[83px] h-10 bg-[#156BCA] py-[10px] px-[11px] rounded-[8px] text-white   ">
              GO
            </button>
          </div>
        </div>
        <div className="flex ">
          <div className="relative ">
            <img
              src={vector}
              className="absolute top-5 scale-125 -left-28"
              alt=""
            />
            <img src={Photo1} className="mr-3" alt="" />
          </div>
        </div>
      </div>
      {/* Features Therapist */}
      <div>
        <h3>Feature Therapist</h3>
        <div className="bg-white h-[363px] flex items-center justify-center gap-4 ">
          {/* <div className="w-10 h-10 ms-5">
            <img className="w-full h-full" src={left} alt="" />
          </div> */}
          {therapistData.map((item, i) => {
            return (
              <Card
                key={i}
                name={item.name}
                img={item.img}
                adds={item.adds}
                pos={item.pos}
              />
            );
          })}
          {/* //Todo : pore uncomment korte hobe */}
          {/* <div className="w-10 h-10 mr-5">
            <img className="w-full h-full" src={right} alt="" />
          </div> */}
        </div>
      </div>
      {/* Features Testimonial and Popular Cities */}
      <div className="flex items-center justify-between gap-5 mt-5">
        {/* Testimonial */}
        {/* //TODO : w-[550px] hobe */}
        <div className="bg-white w-[460px] h-[429px] rounded-[10px] flex flex-col items-center p-5 gap-5 ">
          <TestimonialCard img={testiImg2} />
          <TestimonialCard img={testiImg} />
          {/* Three dots manually. not added any carousel  */}
          <ThreeDots />
        </div>

        {/* Cities */}
        <div className="bg-white w-[460px] h-[429px] py-2 px-5 rounded-[10px] ">
          <CityTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
