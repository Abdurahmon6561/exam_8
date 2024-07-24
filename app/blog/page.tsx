import Image from "next/image"
import Comparison from "../images/comparison.png"
import BlogPage from "./BlogPage"

export default function Page() {
  return(  <div>
    <Image src={Comparison} alt="Page comparison" className="w-full"/>
    <BlogPage/>
  </div>)
}