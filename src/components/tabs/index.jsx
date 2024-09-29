import { useState } from "react";
import styles from "./styles.module.css";

export default function Tabs() {
  const [tabNumber, setTabNumber] = useState(0);

  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>This is content for Tab 3</div>,
    },
  ];

  return (
    <div>
      <h1>Tabs</h1>

      <div className={styles.buttonsContainer}>
        {tabs?.map((tab, index) => (
          <button
            disabled={tabNumber === index ? true : false}
            key={index}
            onClick={() => setTabNumber(index)}>
            {tab.label}
          </button>
        ))}
      </div>
      {tabs?.map((tab, index) => {
        if (tabNumber === index) return <>{tab.content}</>;
      })}
    </div>
  );
}
