"use client";
import Demo from "../../components/shopComponents/Demo";
import Rates from "../../components/shopComponents/Rates";
import ColorPicker from "../../components/shopComponents/ColorPicker";
import React, { useState, useEffect } from "react";
import Counter from "../../components/shopComponents/Counter";
import SofaDescription from "../../components/shopComponents/SofaDescription";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  return (
    <div>
      <div className="ml-[100px]">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex items-start mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[423px] h-[500px] mr-4"
                />
                <div className=" ml-[140px] mt-[20px]">
                  <h3 className="text-5xl font-semibold p-2">{item.title}</h3>
                  <div className=" flex">
                    <Rates />
                    <p className="text-sm opacity-55 p-2"> Customer Review</p>
                  </div>
                  <p className="text-xl opacity-55 p-2">
                    Price: Rs. {item.price.toLocaleString()}
                  </p>
                  <p className="text-sm p-2">
                    Setting the bar as one of the loudest speakers in its class,
                    the <br /> Kilburn is a compact, stout-hearted hero with a
                    well-balanced <br /> audio which boasts a clear midrange and
                    extended highs for a <br /> sound.
                  </p>
                  <p className="p-2 opacity-55">Size : {item.size}</p>
                  <Demo/>
                  <p className="p-2 opacity-55">Color : {item.color}</p>
                  <ColorPicker/>
                  <Counter/>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-around mt-8 font-bold ml-[1063px]">
            <h1 className="font-bold  text-4xl text-orange-300">Subtotal</h1>
            <p className="font-bold text-2xl mt-1 text-green-400">
              Rs.
              {cartItems
                .reduce(
                  (total, item) => total + item.price * (item.quantity || 1),
                  0
                )
                .toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
    <SofaDescription/>
    </div>
  );
}
