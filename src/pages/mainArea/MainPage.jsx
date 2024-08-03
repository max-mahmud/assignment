import React, { useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import SideBar from "./SideBar";
import arrow from "../../assets/icons/arrow.png";
import bell from "../../assets/icons/bell.png";
import logout from "../../assets/icons/logout.png";
import { signOut } from "firebase/auth";
import { auth } from "../../components/firebase";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authContext";

const MainPage = () => {

  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    toast.success("Logout successful");
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <>
      <div className="relative flex">
        {/* Sidebar */}
        <SideBar />

        <div className={"w-full bg-[#EEF2F5] ms-[250px] "}>
          {/* Top Bar */}
          <div className="">
            <div className="px-[30px] bg-white h-[88px] flex justify-between items-center">
              <div className="flex gap-3">
                <img src="./public/Group 12867.png" alt="" />
                <div className="relative cursor-pointer">
                  <h4>sagar soni</h4> 
                  <span>sagar@gmail.com</span>
                  <img className="absolute top-2 right-0" src={arrow} alt="" />
                </div>
              </div>
              <div className="flex gap-5 items-center">
                  <img className="h-10 w-10 cursor-pointer" src={bell} alt="" />
                  <div className="w-[1px] h-7 bg-gray-300   "></div>
                  <div onClick={handleLogout} className="flex items-center gap-3 cursor-pointer">
                    <span className="text-[#F15E4A]">Logout</span>
                    <img
                      className="h-10 w-10"
                      src={logout}
                      alt=""
                    />
                  </div>
                
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className={`w-full p-[30px]`}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
