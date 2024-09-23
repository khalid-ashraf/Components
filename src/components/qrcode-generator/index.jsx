import QRCode from "react-qr-code";
import styles from "./styles.module.css";
import { useRef, useState } from "react";

export default function QRCodeGenerator() {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const handleGenerateQR = (e) => {
    e.preventDefault();

    console.log(inputRef.current?.value);
    setValue(inputRef.current.value);
  };

  return (
    <div>
      <h1>QRCode Generator</h1>
      <div className={styles.container}>
        <form className={styles.inputContainer}>
          <input type='text' name='input' ref={inputRef} required />

          <button onClick={handleGenerateQR}>Generate QR</button>
        </form>
        <QRCode id='qr-code-value' value={value} />
      </div>
    </div>
  );
}
