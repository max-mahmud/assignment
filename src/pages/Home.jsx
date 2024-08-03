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
import GoButton from "../components/GoButton";

const Home = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login page if not authenticated
    }
  }, [user, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Render a loading state while fetching data
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-white w-full md:h-[212px] h-[428px] rounded-[10px] mt-3 md:mt-0 p-6 flex flex-col md:flex-row justify-between items-center md:gap-7 gap-3">
        <div className="">
          <h2 className="text-[20px] font-medium">
            I'm Looking for Massage Therapist Near...
          </h2>
          <div className="text-[14px]">
            In using this site, I agree to be bound by the{" "}
            <a className="underline text-blue-500">Terms of Service</a> <br />{" "}
            and <a className="underline text-blue-500">Privacy Policy</a>
          </div>
          <div className="hidden md:block">
          <GoButton />
          </div>
        </div>
        <div className="md:flex  md:py-0 py-2">
          <div className="relative hidden md:block ">
            <img
              src={vector}
              className="absolute top-5  z-[0] scale-125 md:-left-32"
              alt=""
            />
            <img src={Photo1} className="mr-3 z-[9999]" alt="" />
          </div>
          <div className="flex md:hidden w-[380px] mx-auto justify-center relative">
            <img src={vector} alt="" className="w-full" />
            <div className="absolute top-0">
              <img src={Photo1} alt="" className="w-full scale-110 " />
            </div>
          </div>
        </div>

        <div className="md:hidden block">
          <GoButton />
          </div>
      </div>

      {/* Features Therapist */}
      <div className="mt-6">
        <h3 className="font-semibold text-[18px] mb-4 md:px-0 px-4">Feature Therapist</h3>
        <div className=" w-auto bg-white h-[363px] flex items-center justify-center overflow-hidden md:gap-4 rounded-[10px]">
          <div className="w-10 h-10 ms-5 hidden md:block">
            <img className="w-full h-full" src={left} alt="" />
          </div>
          {therapistData.map((item, i) => {
            return (
              <Card
                key={i}
                idx={i}
                name={item.name}
                img={item.img}
                adds={item.adds}
                pos={item.pos}
              />
            );
          })}

          <div className="w-10 h-10 mr-5 hidden md:block">
            <img className="w-full h-full" src={right} alt="" />
          </div>
        </div>
      </div>

      {/* Features Testimonial and Popular Cities */}
      <div className="flex flex-col md:flex-row gap-5   items-center justify-between mt-5">
        {/* Testimonial */}
        <div>
          <h3 className="font-semibold text-[18px] mb-3 px-4">
            Featured Testimonial
          </h3>
          <div className="bg-white md:w-[550px] h-[429px] rounded-[10px] flex flex-col items-center p-5 gap-5 ">
            <TestimonialCard img={testiImg2} />
            <TestimonialCard img={testiImg} />
            {/* Three dots manually. not added any carousel  */}
            <ThreeDots />
          </div>
        </div>

        {/* Cities */}
        <div className="pb-7">
          <h3 className="font-semibold text-[18px] mb-3 md:px-0 px-4">Popular Cities</h3>
          <div className="bg-white md:w-[550px] w-[430px] md:h-[429px] h-[334px] py-2 px-5 rounded-[10px] ">
            <CityTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
