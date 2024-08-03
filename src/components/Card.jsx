import React from 'react'
import img1 from "../assets/img (1).png"
import img17 from "../assets/icons/image 117.png"
import location from "../assets/icons/Location.png"

//
const Card = ({name, adds, pos, img, idx}) => {
  return (
    <div className={`${idx===3 ? "hidden md:block md:scale-100": idx==1? "scale-90 md:scale-100": "scale-75 md:scale-100"} w-[214px]  h-[303px] border rounded-[10px]  relative scale-110`}>
        <div className='w-[194px] h-[146px] rounded-[8px] mt-[10px] ms-[10px]  '>
            <img src={img} alt="img" className='w-full h-full ' />
        </div>
        <div className='text-sm mt-3.5 px-3'>
            <h3 className='font-medium'>{name}</h3>
            <div className='text-gray-500 mt-2'>
                <div className='flex gap-2 items-center'><img className='w-[14px] h-[14px]  ' src={location} alt='img'/>{adds}</div>
                <div className='mt-1 flex gap-2 items-center'><img className='w-[14px] h-[14px]  ' src={img17} alt='img'/>{pos}</div>
            </div>
        </div>
        <button className={` ${idx === 0 ? "md:bg-[#156BCA] bg-[#D4E9FF] md:text-white " : idx == 1 ?"bg-[#156BCA] md:bg-[#D4E9FF] text-white md:text-gray-700" : "bg-[#D4E9FF]"} absolute bottom-0 right-0 h-[45px] underline  px-4 py-2 w-full rounded-bl-[10px] rounded-br-[10px]`}>See Details</button>
    </div>
  )
}

export default Card