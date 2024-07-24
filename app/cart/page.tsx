"use client";
import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Cart_header from "../images/cart_header.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter()


  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
  };

  const handleNavigate = () => {
    router.push("/checkout_inputs")
  }

  return (
    <div>
      <Image src={Cart_header} alt="image" className="w-full" />
      <div className=" flex justify-between mb-[100px]">
        <div>
        <div className=" flex justify-around w-[817px] h-[55px] p-3 bg-orange-100 mt-[120px] ml-[100px]">
          <p className="text-xl font-bold">Product</p>
          <p className="text-xl font-bold">Price</p>
          <p className="text-xl font-bold">Quantity</p>
          <p className="text-xl font-bold">Subtotal</p>
        </div>
        <div className="ml-[100px] mt-[55px]">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="w-[780px]">
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index} className="flex items-center mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[111px] h-[90px] mr-4"
                    />
                    <div className="flex-grow ml-4">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-gray-500">
                        Price: Rs. {item.price.toLocaleString()}
                      </p>
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-xl font-semibold">
                      Rs. {(item.price * (item.quantity || 1)).toLocaleString()}
                    </p>
                    <button
                      className="ml-4 text-red-500"
                      onClick={() => handleRemoveItem(index)}
                    >
                      <FaTrashAlt />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        </div>
        <div className="w-[390px] mt-[120px] h-[393px] bg-orange-100 text-center p-6">
            <h1 className="font-bold text-4xl">Cart Totals</h1>
        <div className="flex justify-around mt-[60px]">
            <h1 className="text-xl font-bold mr-4">Subtotal</h1>
            <p className="opacity-55">
              Rs.
              {cartItems
                .reduce(
                  (total, item) => total + item.price * (item.quantity || 1),
                  0
                )
                .toLocaleString()}
            </p>
          </div>
          <div className="flex justify-around mt-8">
            <h1 className="text-xl font-bold mr-4">Total</h1>
            <p className="text-xl font-bold text-orange-500">
              Rs.
              {cartItems
                .reduce(
                  (total, item) => total + item.price * (item.quantity || 1),
                  0
                )
                .toLocaleString()}
            </p>
          </div>
          <button onClick={handleNavigate} className="mt-[50px] w-[222px] h-[58px] border-2  border-black rounded-lg font-bold hover:bg-black hover:text-white">
          Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
