import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { NavData } from "../../assets/data/NavData";
import setting from "../../assets/icons/Setting.png";
import info from "../../assets/icons/Info Circle.png";
import logo from "../../assets/LOGO.png";
const SideBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:fixed top-0 left-0 ">
      <div className="bg-white  md:w-[250px] w-[268px] h-[384px]  md:min-h-screen relative">
        {/* Logo */}
        <Link to={"/"} className="md:flex hidden justify-center ">
          <img
            src={logo}
            alt="logo"
            className="w-[109px] h-[45px] mt-[55px]"
          />
        </Link>

        {/* Nav Links */}
        <div className=" md:mt-[40px] pt-5 pr-4">
          {NavData.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={` ${
                pathname === item.path ? "bg-[#D4E9FF] font-semibold" : ""
              } relative text-black ps-6 flex gap-3 items-center h-[46px]`}
            >
              <img src={item.icon} alt="links" className="w-[18px] h-[18px]" />
              {item.title}
              <span
                className={`${
                  pathname === item.path
                    ? "w-[4px] h-[46px] bg-black absolute top-0 left-[.3px]"
                    : "hidden"
                }`}
              ></span>
            </NavLink>
          ))}
          <div className=" w-[80%] h-[1px] ms-5 bg-gray-300 mt-2 "></div>
          <NavLink
            to={"/"}
            className={` mt-3  text-black ps-6 flex gap-3 items-center h-[46px]`}
          >
            <img src={info} alt="links" className="w-[18px] h-[18px]" />
            {"Help Center"}
          </NavLink>
          <NavLink
            to={"/"}
            className={`   text-black ps-6 flex gap-3 items-center h-[46px]`}
          >
            <img src={setting} alt="links" className="w-[18px] h-[18px]" />
            {"Setting"}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
