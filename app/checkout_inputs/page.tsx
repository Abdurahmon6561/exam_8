import Inputs_chechout from "./Inputs_left/Inputs_chechout";
import Subtotal_rigth from "./Inputs_left/Subtotal_right";
import Image from "next/image"
import Image_header from "../images/check_page.png"

export default function Checkout_Inputs() {
    return <div>
        <Image src={Image_header} alt="image" className="w-full" />

      <div className="flex justify-around mt-[70px]">
      <Inputs_chechout/>
      <Subtotal_rigth/>
    </div>
    </div>
}