import { useState } from "react";
import classes from "./style.module.css";

export default function ColorGenerator() {
  const [color, setColor] = useState("#000000");

  const createRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }

    return hexColor;
  };

  const createRandomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let selected = formData.get("color-type");

    if (selected === "hex") setColor(createRandomHexColor());
    if (selected === "rgb") setColor(createRandomRgbColor());
  };

  return (
    <div className={classes.container}>
      <h1>Random Color Generator</h1>

      <form className={classes.form} onSubmit={submitHandler}>
        <label>
          <input type='radio' name='color-type' id='hex' value='hex' required />
          Hex Color
        </label>
        <label>
          <input type='radio' name='color-type' id='rgb' value='rgb' required />
          Rgb Color
        </label>
        <button type='submit'>Generate Color</button>
      </form>

      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: color,
          display: "grid",
          placeItems: "center",
        }}>
        <h2>{color}</h2>
      </div>
    </div>
  );
}
