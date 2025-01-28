/* 
1. When the use clicks anywhere on the screen a circle should appear.
2. User can clear multiple circles like that.
3. Have a reset button.
*/
import { useState } from "react";

import styles from "./styles.module.css";

export default function CircleClick() {
  const [points, setPoints] = useState([]);

  const handlePlaceCircle = (e) => {
    if (e.target.tagName === "BUTTON") {
      return;
    } else {
      const { clientX, clientY } = e;
      setPoints((prev) => [...prev, { x: clientX, y: clientY }]);
    }
  };

  const handleUndo = () => {
    const newPoints = points;
    newPoints.pop();
    setPoints([...newPoints]);
  };

  const handleReset = () => {
    setPoints([]);
  };

  return (
    <div
      className={styles.circle_container}
      onClick={handlePlaceCircle}
    >
      <h1>Click anywhere to make a circle</h1>

      <button
        className={styles.button}
        onClick={handleUndo}
        disabled={points.length ? false : true}
      >
        Undo
      </button>

      <button
        className={styles.button}
        onClick={handleReset}
        disabled={points.length ? false : true}
      >
        Reset
      </button>

      {points.map((point, pointId) => {
        return (
          <Circle
            key={pointId}
            point={point}
          />
        );
      })}
    </div>
  );
}

function Circle({ point }) {
  return (
    <div
      className={styles.circle}
      style={{ top: `${point.y}px`, left: `${point.x}px` }}
    ></div>
  );
}
