import Image from "next/image";
import Location from "../../../images/address.svg";
import Call from "../../../images/call.svg";
import Clock from "../../../images/clock.svg";

export default function LocationContact() {
  return (
    <div>
      <div className=" flex">
        <Image src={Location} alt="Contact Image" className="mt-[-99px] transform transition-transform duration-500 ease-in-out hover:rotate-[360deg]" />
       <div className=" p-6 ml-[15px]">
       <p className="text-2xl font-medium">Address</p>
        <p className="text-base">
          236 5th SE Avenue, New <br /> York NY10000, United <br /> States
        </p>
       </div>
      </div>
      <div className=" flex">
        <Image src={Call} alt="Contact Image" className="mt-[-99px] transform transition-transform duration-500 ease-in-out hover:rotate-[360deg]" />
       <div className=" p-6 ml-[15px]">
       <p className="text-2xl font-medium">Phone</p>
        <p className="text-base">
        Mobile: +(84) 546-6789 <br />
        Hotline: +(84) 456-6789
        </p>
       </div>
      </div>
      <div className=" flex">
        <Image src={Clock} alt="Contact Image" className="mt-[-99px] transform transition-transform duration-500 ease-in-out hover:rotate-[360deg]" />
       <div className=" p-6 ml-[15px]">
       <p className="text-2xl font-medium">Working Time</p>
        <p className="text-base">
        Monday-Friday: 9:00 - 22:00 <br />
        Saturday-Sunday: 9:00 - 21:00
        </p>
       </div>
      </div>
    </div>
  );
}
