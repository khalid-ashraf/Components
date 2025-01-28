import { useEffect, useState } from "react";

import styles from "./styles.module.css";

export default function GroceryStore() {
  const [items, setItems] = useState(0);
  const [lines, setLines] = useState([[10, 5, 2], [1], [2], [3], [4]]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Checking if the input is a positive number
    if (items <= 0) return alert("Enter a number greater than 0");

    // Todo: Loop through all the lines and find the line with least people

    let smallestLine;
    let leastAmount = 1e9;
    for (let line of lines) {
      const totalInLine = line.reduce((sum, value) => sum + value, 0);
      if (totalInLine < leastAmount) {
        leastAmount = totalInLine;
        smallestLine = line;
      }
    }

    if (!smallestLine) return;

    setLines((prevLines) => {
      return prevLines?.map((line) => {
        return line === smallestLine ? [...line, items] : line;
      });
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      return setLines((prevLines) =>
        //  prevLines?.map((line) =>  [line[0]-1,...line.slice(1)].filter(value=>) value > 0)
        prevLines.map((line) =>
          [line[0] - 1, ...line.slice(1)].filter((value) => value > 0)
        )
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Grocery Store</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='number'
          value={items}
          onChange={(e) => setItems(e.target.valueAsNumber)}
          required
        />
        <button>Checkout</button>
      </form>

      <div className={styles.linesContainer}>
        {lines.map((line, index) => {
          return (
            <div className={styles.lines} key={index}>
              <h2>Line {index + 1}</h2>
              {line.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
