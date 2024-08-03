import React from 'react'
import img1 from "../assets/img (1).png"
import img17 from "../assets/icons/image 117.png"
import location from "../assets/icons/Location.png"

const Card = ({name, adds, pos, img}) => {
  return (
    <div className='w-[214px] h-[303px] border rounded-[10px] overflow-hidden relative   '>
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
        <button className='absolute bottom-0 right-0 h-[45px] bg-[#156BCA] underline text-white px-4 py-2 w-full'>See Details</button>
    </div>
  )
}

export default Card