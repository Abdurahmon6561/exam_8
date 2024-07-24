import { Header } from "../components/shopComponents/Header";
import  GetProducts  from "../components/shopComponents/GetProducts";


export default function Page () {
    return <div>
        <Header/>
        <GetProducts/>
        <button className="hover:scale-110 mt-[50px] mb-[100px] ml-[603px] hover:rounded-lg hover:text-white hover:bg-orange-300 text-orange-300 font-bold w-[245px] h-[58px] border-2 border-orange-200 p-2 transition-transform transition-colors duration-500 ease-in-out">
        Show More
      </button>
    </div>
}