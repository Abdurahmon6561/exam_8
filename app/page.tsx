import Hero from "./components/Hero";
import CategoryBrowser from "./components/CategoryBrowser";
import Products from "./components/Products";
import BeatifulRooms from "./components/BeatifulRooms";
import Furniture from "./components/Furnitute";



export default function Home() {
  return (
  <div>
    <Hero/>
    <CategoryBrowser/>
    <Products/>
    <BeatifulRooms/>
    <Furniture/>
  </div>
  );
}
