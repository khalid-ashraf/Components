import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <h1>Modal</h1>

      <button onClick={handleClick}>Click here to Display Modal</button>
      {isOpen && createPortal(<Portal />, document.body)}
    </div>
  );
}

function Portal() {
  return (
    <div className={styles.portalContainer}>
      <div className={styles.portal}>
        <p>This is a portal</p>
      </div>
    </div>
  );
}
