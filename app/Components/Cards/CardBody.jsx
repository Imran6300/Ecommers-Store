"use client";

import { IoStarSharp } from "react-icons/io5";

const CardBody = ({ Data }) => {
  return (
    <>
      <h5 className="text-[#6c5ce7] text-[16px] font-semibold my-[5px] truncate">
        {Data.title}
      </h5>

      <p
        className="
          text-[13px] text-[#333] my-[5px]
          overflow-hidden text-ellipsis 
          line-clamp-3
        "
      >
        {Data.description}
      </p>

      <span className="flex items-center gap-[2px] my-[5px]">
        <IoStarSharp className="text-[#00cec9] text-[18px] cursor-pointer" />
      </span>

      <p className="text-[#6c5ce7] text-[13px] font-medium my-[3px]">
        {Data.bought}
      </p>

      <h4 className="text-[18px] font-bold my-[5px]">₹{Data.price}</h4>

      <span className="block text-left text-[#2d3436] text-[12px] mb-[5px]">
        MRP:
        <b className="font-normal line-through text-[#888]"> 1200</b> (47% OFF)
      </span>

      {Data.delivery && (
        <h6 className="font-light underline my-[5px]">FREE DELIVERY</h6>
      )}

      <button
        onClick={() => console.log("Added To Cart")}
        className="
          h-[40px] w-[120px]
          bg-[#2d3436] text-[#f0f0f0]
          rounded-[30px] text-[14px]
          cursor-pointer mt-auto
          transition-colors
          hover:bg-[#444]
        "
      >
        Add To Cart
      </button>
    </>
  );
};

export default CardBody;
