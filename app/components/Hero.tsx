// components/Hero.tsx
import Image from "next/image";
import HeroBg from "../images/hero_bg.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mb-3">
      <Image src={HeroBg} alt="Hero Background" layout="fill" objectFit="cover" />
      <div className="w-[643px] h-[383px] absolute top-1/3 left-1/4 bg-orange-100 p-8 rounded-lg shadow-lg ml-[411px] mt-[10px]">
      <p className="text-base font-bold mt-1 p-2">New Arrival</p>
        <h1 className="text-4xl font-bold text-yellow-500 p-2">Discover Our <br /> New Collection</h1>
        <p className="mt-4 text-gray-700 font-bold p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className=" w-[222px] h-[74px] mt-6 bg-yellow-500 text-white py-2 px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
