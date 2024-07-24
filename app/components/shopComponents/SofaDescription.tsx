import Image from "next/image";
import Sofa from "../../images/sofa.png";
import OurProducts from "../OurProducts";

export default function SofaDescription() {
  return (
    <div>
      <div className="flex justify-around w-[649px] ml-[411px] mb-[37px] mt-[160px]">
        <p className="text-2xl font-medium cursor-pointer">Description</p>
        <p className="text-2xl opacity-50 cursor-pointer">
          Additional Information
        </p>
        <p className="text-2xl opacity-50 cursor-pointer">Reviews [5]</p>
      </div>
      <div className="text-center">
        <p className="text-base opacity-55">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and <br />{" "}
          sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-base opacity-55 mt-[30px] mb-[70px]">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest{" "}
          <br />
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange <br /> and
          extended highs for a sound that is both articulate and pronounced. The
          analogue knobs allow you to fine tune the controls <br /> to your
          personal preferences while the guitar-influenced leather strap enables
          easy and stylish travel.
        </p>
        <Image src={Sofa} alt="Sofa" className="w-full" />
      </div>
      <p className="text-4xl font-semibold text-center mt-[130px] mb-[30px]">
        Related Products
      </p>
      <OurProducts />
      <button className="hover:scale-110 mt-[50px] mb-[100px] ml-[603px] hover:rounded-lg hover:text-white hover:bg-orange-300 text-orange-300 font-bold w-[245px] h-[58px] border-2 border-orange-200 p-2 transition-transform transition-colors duration-500 ease-in-out">
        Show More
      </button>
    </div>
  );
}
