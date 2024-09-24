import { useEffect, useState } from "react";
import styles from "./style.module.css";

export default function ScrollIndicator() {
  const [products, setProducts] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolled / height) * 100);
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://dummyjson.com/products?limit=100"
        );
        const { products } = await response.json();

        setProducts(products);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {};
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(scrollPercentage);

  return (
    <div>
      <h1>Scroll Indicator</h1>
      <div className={styles.progressBarConatiner}>
        <div
          className={styles.currentProgressBar}
          style={{ width: `${scrollPercentage}%` }}></div>
      </div>
      <div className={styles.productsContainer}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          products?.map((product) => <p key={product.id}>{product.title}</p>)
        )}
      </div>
    </div>
  );
}
