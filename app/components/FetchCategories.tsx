"use client";

import React from 'react';
import useCategories from '../hooks/useCategories';

const FetchCategories: React.FC = () => {
  const { categories, loading, error } = useCategories();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='mt-8'>
      <ul className='flex justify-around text-center'>
        {categories.slice(0, 3).map((category) => (
          <li key={category._id} className='group'>
            <img 
              src={category.image} 
              alt={category.name} 
              className='w-[375px] h-[562px] transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg' 
            />
            <p className='p-4 font-bold text-2xl group-hover:text-blue-500 transition-colors duration-300'>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchCategories;
