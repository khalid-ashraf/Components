import MenuItem from "./MenuItem";
import styles from "./styles.module.css";

export default function MenuList({ list = [] }) {
  return (
    <ul>
      {list?.map((listItem, index) => (
        <MenuItem key={index} item={listItem} />
      ))}
    </ul>
  );
}
