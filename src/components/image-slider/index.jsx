import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import styles from "./styles.module.css";

const URL = "https://picsum.photos/v2/list?page=1&limit=10";

export default function ImageSlider() {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prev) => {
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentSlide((prev) => {
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  const handleButtonClick = (index) => {
    setCurrentSlide(index);
  };

  // Effect to load images list from url
  useEffect(() => {
    if (URL !== "") {
      (async () => {
        try {
          const res = await fetch(URL);
          const data = await res.json();

          setImages(data);
        } catch (error) {
          throw new Error("error: ", error);
        }
      })();
    }
  }, [URL]);

  // Effect to automatically change images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev === images.length - 1 ? 0 : prev + 1;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div>
      <h1>Image Slider</h1>
      <div className={styles.imageSlider}>
        <div className={styles.imageContainer}>
          <BsArrowLeftCircleFill
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={handlePrevious}
          />
          {images.map((image) => {
            if (currentSlide === +image.id) {
              return (
                <>
                  <img
                    className={styles.image}
                    src={image.download_url}
                    key={image.id}
                    alt='image slider'
                  />
                </>
              );
            }
          })}
          <BsArrowRightCircleFill
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={handleNext}
          />
        </div>
        <span className={styles.circleIndicators}>
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.currentIndicator} ${
                    currentSlide === index ? styles.current : ""
                  }`}
                  onClick={() => handleButtonClick(index)}></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}
