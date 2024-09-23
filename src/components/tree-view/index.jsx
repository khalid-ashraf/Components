import menus from "./data";
import MenuList from "./MenuList";
import styles from "./styles.module.css";

export default function TreeView() {
  return (
    <div>
      <h1>Tree View</h1>
      <div className={styles.treeViewContainer}>
        <MenuList list={menus} />
      </div>
    </div>
  );
}
