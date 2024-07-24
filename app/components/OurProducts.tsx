"use client";

import React from 'react';
import useCategories from '../hooks/useProducts';

const OurProducts: React.FC = () => {
  const { categories, loading, error } = useCategories();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='mt-[40px]'>
      <div className="grid gap-x-8 gap-y-4 grid-cols-4">
        {categories.map((category) => (
          <div key={category._id} className='group border p-4 rounded-lg shadow-lg'>
            <div className='relative'>
              <img 
                src={category.image} 
                alt={category.name} 
                className='w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg' 
              />
              <span className='absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1'>-30%</span>
            </div>
            <div className='mt-4'>
              <p className='font-bold text-xl group-hover:text-blue-500 transition-colors duration-300'>{category.title}</p>
              <p className='text-gray-500'>Stylish cafe chair</p>
              <p className='font-bold text-xl mt-2'>Rp 2.500.000 <span className='line-through text-gray-500'>Rp 3.500.000</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
