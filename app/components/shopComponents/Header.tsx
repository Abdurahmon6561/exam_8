import React from "react";
import Image from "next/image";
import ShopImage from "../../images/shop.png";
import Filter from "../../images/filter.svg";
import Dots from "../../images/donts.svg";
import Third from "../../images/third.svg";
import Text from "../../images/text.svg";

export function Header() {
  return (
    <div>
      <Image
        src={ShopImage}
        alt="Hero Background"
        objectFit="cover"
        className="w-full h-full mt-[-34px]"
      />
      <div className="bg-orange-100 h-[70px] p-3">
        <div>
          <div className=" flex justify-around">
          <Image
              src={Filter}
              alt="Hero Background"
              objectFit="cover"
              className=" mt-[-7px] cursor-pointer"
            />
            <Image
              src={Dots}
              alt="Hero Background"
              objectFit="cover"
              className=" mt-[-7px] ml-[-242px] cursor-pointer"
            />
            <Image
              src={Third}
              alt="Hero Background"
              objectFit="cover"
              className=" mt-[-7px] ml-[-236px] cursor-pointer"
            />
            <Image
              src={Text}
              alt="Hero Background"
              objectFit="cover"
              className=" mt-[-7px] ml-[-222px] cursor-pointer"
            />
        <div className=" flex justify-between">
            <div className=" flex justify-between">
                <h2 className=" font-bold text-xl p-2">Show</h2>
                <input type="number" placeholder="16" className="w-[45px] h-[45px] text-center outline-none"/>
            </div>
            <div className=" flex justify-between">
                <h2 className=" font-bold text-xl p-2">Short by</h2>
                <input type="text" placeholder="Default" className="w-[188px] h-[45px] text-center outline-none"/>
            </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
