import React from "react";
import { cities } from "../assets/data/cities";

const CityTable = () => {
  return (
    <div className="flex gap-3 flex-wrap">
      {cities.map((item, i) => {
        return (
            <City item={item} key={i} idx={i} />
        );
      })}
    </div>
  );
};

export default CityTable;

export const City = ({ item, idx }) => {
  return (
    <div className={`${idx === cities.length-1 ? "py-2" : "border-b py-2 md:py-[13px]" }  flex md:gap-10 gap-5 items-center w-full`}>
      {item?.map((t, i) => {
        return (
          <div key={i} className="text-left w-[33%]  text-sm underline text-[#156BCA]">
            <span className="text-left">{t?.name},</span>
            <span>{t?.state}</span>
          </div>
        );
      })}
    </div>
  );
};
