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
import menu from "../../assets/icons/Menu_Alt_01.png";
import notification from "../../assets/icons/Notification.png";
import { signOut } from "firebase/auth";
import { auth } from "../../components/firebase";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authContext";
import logo from "../../assets/LOGO.png"
import manIcon from "../../assets/Group 12867.png"

const MainPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    toast.success("Logout successful");
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <>
      <div className="relative flex">
        {/* Sidebar */}
        <div className="hidden md:block">
          <SideBar />
        </div>

        <div className={"w-full bg-[#EEF2F5] md:ms-[250px] "}>
          {/* Top Bar */}
          <div className="">
            <div className="md:px-[30px] px-4 bg-white md:h-[88px] h-[60px] flex justify-between items-center">
              <div className="md:flex gap-3 hidden ">
                <img src={manIcon} alt="avater" />
                <div className="relative cursor-pointer">
                  <h4>sagar soni</h4>
                  <span>sagar@gmail.com</span>
                  <img className="absolute top-2 right-0" src={arrow} alt="" />
                </div>
              </div>
              <div className="md:hidden block w-[88px] h-[36px] py-1  ">
                <img src={logo} alt="logo" />
              </div>
              <div className="flex md:gap-5 gap-2.5 items-center">
                <img
                  className="h-10 w-10 cursor-pointer md:border p-2 rounded-full "
                  src={notification}
                  alt=""
                />
                <div className=" hidden md:block w-[1px] h-7 bg-gray-300   "></div>
                <div
                  onClick={handleLogout}
                  className="md:flex items-center hidden gap-3 cursor-pointer"
                >
                  <span className="text-[#F15E4A]">Logout</span>
                  <img
                    className="h-10 w-10"
                    src={"./src/assets/icons/logout.png"}
                    alt=""
                  />
                </div>
                <div
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden "
                >
                  <img src={menu} alt="menuIcon" />
                </div>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className={`w-full md:p-[30px]`}>
            <Outlet />
          </div>
        </div>

        {menuOpen ? (
          <div onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden -mr-1 absolute top-0 right-0 w-[268px] pr-4 bg-[#156BCA]">
            <div className="h-[302px] relative ">
              <div className="absolute bottom-14 right-0 flex flex-col justify-end">
                <div className="flex justify-end">
                  <img
                    className="w-[74px] h-[74px]  "
                    src={manIcon}
                    alt="avater"
                  />
                </div>
                <div className=" cursor-pointer">
                  <h4 className="text-white text-[26px] font-semibold">
                    sagar soni
                  </h4>
                  <span>sagar@gmail.com</span>
                </div>
              </div>
            </div>
            <div className=" ">
              <SideBar />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default MainPage;
