import { useState } from "react";
import { FaStar } from "react-icons/fa";

import styles from "./style.module.css";

export default function StarRating({ stars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const handleMouseEnter = (index) => {
    setHover(index + 1);
  };

  const handleMouseLeave = (index) => {
    setHover(0);
  };

  return (
    <>
      <h1>Star Rating Component</h1>
      <div className={styles.star_rating}>
        {[...Array(stars)].map((_, index) => {
          {
            return (
              <FaStar
                key={index}
                color={index < (hover || rating) ? "red" : "white"}
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                size={40}
              />
            );
          }
        })}
      </div>
    </>
  );
}
