import Image from "next/image";
import Product_image from "../../images/product_cimparisiono.png";
import Full from "../../images/full.svg";


export default function About_Header() {
  return (
    <div>
      <Image src={Product_image} alt="image" className="w-full" />
      <Image src={Full} alt="image" className="w-full mt-[150px] cursor-text mb-[100px]" />

    </div>
  );
}
