import Image from "next/image";
import Image_contact from "../../../images/contact_image.png";

export default function ContactHeader() {
  return (
    <div>
      <Image src={Image_contact} alt="Contact Image" className="w-full" />
      <div className=" text-center mt-[100px]">
        <p className="font-bold text-4xl">Get In Touch With Us</p>
        <p className="text-base opacity-55 mt-[10px] mb-[133px]">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
    </div>
  );
}
