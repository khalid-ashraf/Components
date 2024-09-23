import { useEffect, useState, useRef, useCallback } from "react";

import styles from "./styles.module.css";

export default function LoadMoreButton() {
  const [products, setProducts] = useState([]);
  const [loadMore, setLoadMore] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=10&skip=${
            loadMore === 0 ? 0 : loadMore * 10
          }`
        );
        const { products } = await response.json();

        setProducts((prevState) => {
          return loadMore === 0 ? products : [...prevState, ...products];
        });
        setLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    })();

    return () => {};
  }, [loadMore]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Load More Products</h1>
      <div className={styles.productsContainer}>
        {products.map((product, index) => (
          <div className={styles.productCard} key={index}>
            <h3>{product.title}</h3>
            <img
              className={styles.image}
              src={product.images[0]}
              alt={product.title}
            />
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <button onClick={() => setLoadMore((prev) => prev + 1)}>Load More</button>
    </div>
  );
}
