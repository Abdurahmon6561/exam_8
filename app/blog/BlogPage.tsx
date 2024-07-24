import Image from "next/image";
import Laptop from "../images/laptop.png";
import Pen from "../images/pen.png";
import Coffee from "../images/coffee.png";
import Pen_2 from "../images/pen_2.png";
import Read from "../images/read.png";
import Pen_3 from "../images/pen_3.png";
import Laptop_2 from "../images/laptop_2.png";
import Coffee_2 from "../images/coffee_2.png";


export default function BlogPage() {
  return (
    <div className="mt-[110px] flex justify-around">
      <div>
        <div>
          <Image src={Laptop} alt="laptop" />
          <p className="text-3xl font-semibold p-4 mt-[30px]">
            Going all-in with millennial design
          </p>
          <p className=" opacity-55 p-4 mb-[100px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
            Mus mauris vitae ultricies leo integer malesuada nunc. In nulla
            posuere sollicitudin <br /> aliquam ultrices. Morbi blandit cursus
            risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
            turpis in. <br /> Cursus mattis molestie a iaculis at erat. Nibh
            cras pulvinar mattis nunc sed blandit libero. Pellentesque elit{" "}
            <br /> ullamcorper dignissim cras tincidunt. Pharetra et ultrices
            neque ornare aenean euismod elementum.
          </p>
        </div>
        <div>
          <Image src={Pen} alt="pen" />
          <p className="text-3xl font-semibold p-4 mt-[30px]">
            Exploring new ways of decorating
          </p>
          <p className=" opacity-55 p-4 mb-[100px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
            Mus mauris vitae ultricies leo integer malesuada nunc. In nulla
            posuere sollicitudin <br /> aliquam ultrices. Morbi blandit cursus
            risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
            turpis in. <br /> Cursus mattis molestie a iaculis at erat. Nibh
            cras pulvinar mattis nunc sed blandit libero. Pellentesque elit{" "}
            <br /> ullamcorper dignissim cras tincidunt. Pharetra et ultrices
            neque ornare aenean euismod elementum.
          </p>
        </div>
        <div>
          <Image src={Coffee} alt="coffee" />
          <p className="text-3xl font-semibold p-4 mt-[30px]">
            Handmade pieces that took time to make
          </p>
          <p className=" opacity-55 p-4 mb-[100px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
            Mus mauris vitae ultricies leo integer malesuada nunc. In nulla
            posuere sollicitudin <br /> aliquam ultrices. Morbi blandit cursus
            risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
            turpis in. <br /> Cursus mattis molestie a iaculis at erat. Nibh
            cras pulvinar mattis nunc sed blandit libero. Pellentesque elit{" "}
            <br /> ullamcorper dignissim cras tincidunt. Pharetra et ultrices
            neque ornare aenean euismod elementum.
          </p>
        </div>
      </div>
      <div>
        <input type="search" placeholder="Search" className="p-2 w-[311px] h-[58px] rounded-lg border-2 outline-none" />
        <p className="text-2xl font-bold mt-[43px] ml-4">Categories</p>
       <div className="w-[221px] ml-[50px]">
       <div className=" flex justify-between ml-[-40px] mt-[41px]">
            <p className=" opacity-55 text-lg">Craft</p>
            <p className=" opacity-55 text-lg">2</p>
        </div>
        <div className=" flex justify-between ml-[-40px] mt-[41px]">
            <p className=" opacity-55 text-lg">Design</p>
            <p className=" opacity-55 text-lg">8</p>
        </div>
        <div className=" flex justify-between ml-[-40px] mt-[41px]">
            <p className=" opacity-55 text-lg">Handmade</p>
            <p className=" opacity-55 text-lg">7</p>
        </div>
        <div className=" flex justify-between ml-[-40px] mt-[41px]">
            <p className=" opacity-55 text-lg">Interior</p>
            <p className=" opacity-55 text-lg">1</p>
        </div>
        <div className=" flex justify-between ml-[-40px] mt-[41px]">
            <p className=" opacity-55 text-lg">Wood</p>
            <p className=" opacity-55 text-lg">6</p>
        </div>
       </div>
        <p className="text-2xl font-semibold mt-[118px]">Recent Posts</p>
       <div>
        <div className=" flex mt-[30px]">
            <Image src={Pen_2} alt="image" />
            <div className="p-2">
            <p className="font-medium">Going all-in with <br /> millennial design</p>
            <p className=" opacity-50">03 Aug 2022</p>
            </div>
        </div>

        <div className=" flex mt-[40px] mb-[40px]">
            <Image src={Read} alt="image" />
            <div className="p-2">
            <p className="font-medium">Exploring new ways <br /> of decorating</p>
            <p className=" opacity-50">03 Aug 2022</p>
            </div>
        </div>

        <div className=" flex mt-[40px] mb-[40px]">
            <Image src={Pen_3} alt="image" />
            <div className="p-2">
            <p className="font-medium">Handmade pieces <br /> that took time to make</p>
            <p className=" opacity-50">03 Aug 2022</p>
            </div>
        </div>

        <div className=" flex mt-[40px] mb-[40px]">
            <Image src={Laptop_2} alt="image" />
            <div className="p-2">
            <p className="font-medium">Modern home <br /> in Milan</p>
            <p className=" opacity-50">03 Aug 2022</p>
            </div>
        </div>

        <div className=" flex mt-[40px] mb-[40px]">
            <Image src={Coffee_2} alt="image" />
            <div className="p-2">
            <p className="font-medium">Colorful office <br /> redesign</p>
            <p className=" opacity-50">03 Aug 2022</p>
            </div>
        </div>
       </div>
      </div>
    </div>
  );
}
