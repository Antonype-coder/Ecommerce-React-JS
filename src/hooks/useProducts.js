import { useState, useEffect } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      setLoading(true);
      setTimeout(() => {
        setProducts([
          { id: 1, title: 'iPhone 15', price: 5000000 },
          { id: 2, title: 'MacBook Pro', price: 10000000 },
          { id: 3, title: 'iPad Air', price: 3500000 }
        ]);
        setLoading(false);
      }, 2000);
    };

    fetchProducts();
  }, []);

  return { products, loading };
};
