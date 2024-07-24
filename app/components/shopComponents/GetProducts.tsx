"use client";

import React from "react";
import { FaShare, FaRegHeart, FaRegListAlt } from "react-icons/fa"; 
import useCategories from "../../hooks/useProducts";

const GetProducts: React.FC = () => {
  const { categories, loading, error } = useCategories();

  const handleAddToCart = (product) => {
    try {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const productExists = existingCart.find(
        (item) => item._id === product._id
      );

      if (productExists) {
        const updatedCart = existingCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      } else {
        const updatedCart = [...existingCart, { ...product, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }

      console.log("Cart updated:", JSON.parse(localStorage.getItem("cart")));
    } catch (error) {
      console.error("Error saving to cart:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mt-[100px] mb-[80px]">
      <div className="grid gap-x-8 gap-y-4 grid-cols-4">
        {categories.map((category) => (
          <div
            key={category._id}
            className="group border p-4 rounded-lg shadow-lg relative overflow-hidden"
          >
            <div className="relative">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handleAddToCart(category)}
                  className="bg-white text-yellow-500 font-bold px-4 py-2 mb-2 rounded transition-colors duration-300 ease-in-out hover:bg-yellow-500 hover:text-white"
                >
                  Add to cart
                </button>

                <div className="flex space-x-4">
                  <button className="text-white font-bold px-2 py-1 flex items-center">
                    <FaShare className="w-5 h-5 mr-2 transform transition-transform duration-300 ease-in-out hover:rotate-180" />
                    Share
                  </button>
                  <button className="text-white font-bold px-2 py-1 flex items-center">
                    <FaRegListAlt className="w-5 h-5 mr-2 transform transition-transform duration-300 ease-in-out hover:rotate-180" />{" "}
                    Compare
                  </button>
                  <button className="text-white font-bold px-2 py-1 flex items-center">
                    <FaRegHeart className="w-5 h-5 mr-2 transform transition-transform duration-300 ease-in-out hover:rotate-180" />{" "}
                    Like
                  </button>
                </div>
              </div>
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                -30%
              </span>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl group-hover:text-blue-500 transition-colors duration-300">
                {category.title}
              </p>
              <p className="text-gray-500">{category.description}</p>
              <p className="font-bold text-xl mt-2">
                Rp {category.price}
                <span className="line-through text-gray-500">Rp 3.500.000</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetProducts;
