import Image from "next/image";
import Furiture from "../images/furniture.png"


export default function Furniture() {
    return <div className="mt-7 mb-[180px]">
        <div className="text-center align-middle mt-20">
        <p className="text-xl font-medium">Share your setup with</p>
        <h1 className="text-5xl font-bold">#FuniroFurniture</h1>
    </div>
    <Image
          src={Furiture}
          alt="Furniture Background"
          objectFit="cover"
        />
    </div>
}