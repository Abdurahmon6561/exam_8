import Image from "next/image";
import Rooms from "../images/rooms.png";

const BeautifulRooms = () => {
  return (
    <div className="relative w-full h-screen flex flex-row-reverse mt-[120px] bg-orange-100">
      <div className="relative w-screen h-[582px] ml-[741px]">
        <Image
          src={Rooms}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full mt-12"
        />
      </div>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-opacity-50 flex items-center justify-center">
        <div className="max-w-4xl px-8 py-12">
          <h1 className="text-4xl font-extrabold mb-4">50+ Beautiful rooms <br /> inspiration</h1>
          <p className="text-gray-700 mb-8 font-semibold">
            Our designer already made a lot of beautiful <br /> prototype of rooms that inspire you
          </p>
          <button className=" w-[176px] h-[48px] mt-6 bg-yellow-500 text-white py-2 px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
          Explore More
        </button>
        </div>
      </div>
    </div>
  );
};

export default BeautifulRooms;