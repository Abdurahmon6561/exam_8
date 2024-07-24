"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  _id: string;
  image: string;
  name: string;
}

const useProducts = () => {
  const [categories, setCategories] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://ecommerce-backend-fawn-eight.vercel.app/api/products');
        setCategories(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch categories');
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useProducts;
