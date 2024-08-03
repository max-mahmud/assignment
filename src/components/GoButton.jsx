import React from "react";

const GoButton = () => {
  return (
    <div className="h-[50px] md:w-[470px] w-[398px] rounded-[10px] bg-[#EEF2F5] mt-4 py-3 px-5 relative ">
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
  );
};

export default GoButton;
