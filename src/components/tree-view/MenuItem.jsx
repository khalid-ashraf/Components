import { useState } from "react";
import MenuList from "./MenuList";
import styles from "./styles.module.css";

export default function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <p onClick={() => setIsOpen(!isOpen)}>
        {item.children && <span>{isOpen ? "- " : "+ "}</span>}
        {item.label}
      </p>

      {isOpen && item.children ? <MenuList list={item.children} /> : null}
    </li>
  );
}
