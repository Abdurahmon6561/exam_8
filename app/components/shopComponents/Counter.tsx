"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";


const IncrementDecrement = () => {
  const [value, setValue] = useState(0); 
  const router = useRouter();

  const increment = () => setValue(value + 1);
  const decrement = () =>
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));

  const handleNavigate = () => {
    router.push("/cart");
  };

  return (
    <div className=" flex mt-3">
      <div className="w-[90px] p-2 h-[50px] flex border border-black rounded-xl">
        <button onClick={increment}>+</button>
        <input value={value} readOnly className="text-center w-[50px]" />
        <button onClick={decrement}>-</button>
      </div>
      <div className="ml-[10px]">
        <button onClick={handleNavigate} className="text-xl w-[210px] h-[50px] border border-black rounded-lg transition-colors duration-500 hover:bg-black hover:text-white">
          Add To Cart
        </button>
      </div>
      <div className="ml-[10px]">
        <button className="text-xl w-[210px] h-[50px] border border-black rounded-lg transition-colors duration-500 hover:bg-black hover:text-white">
          + Compare
        </button>
      </div>
    </div>
  );
};

export default IncrementDecrement;
