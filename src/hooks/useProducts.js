// / Custom hook to fetch products from an API and manage products and error state //
// Returns the fetched products and any error encountered //

import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);


// Custom hook for fetching products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  return { products, error };
};

export default useProducts;
