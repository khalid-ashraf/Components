import { useState } from "react";

import classes from "./style.module.css";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multiSelectState, setMultiSelectState] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSelection = ({ target }) => {
    var id;

    if (
      target.tagName.toLowerCase() === "h3" ||
      target.tagName.toLowerCase() === "span"
    ) {
      id = target.parentNode.getAttribute("data-id");
    }

    if (target.tagName.toLowerCase() === "div")
      id = target.getAttribute("data-id");

    if (multiSelectState) {
      let copy = [...multiple];
      const findIndexofCurrentId = copy.indexOf(id);

      if (findIndexofCurrentId === -1) copy.push(id);
      else copy.splice(findIndexofCurrentId, 1);

      setMultiple(copy);
    } else {
      setSelected(id);
    }
  };

  console.log(selected, multiple);

  return (
    <div className={classes.wrapper}>
      <div className={classes.multiSelect}>
        <label htmlFor='checkbox'>Multi-select</label>
        <input
          type='checkbox'
          name='multi-select'
          id='checkbox'
          onClick={(e) => setMultiSelectState(e.target.checked)}
        />
      </div>
      <div className={classes.accordion} onClick={handleSelection}>
        {data && data.length > 0 ? (
          data.map(({ id, question, answer }) => (
            <div className={classes.item} key={id}>
              <div className={classes.title} data-id={id}>
                <h3>{question}</h3>
                <span>{selected === id ? "-" : "+"}</span>
              </div>
              {multiSelectState
                ? multiple.indexOf(id) !== -1 && (
                    <div className={classes.answer}>{answer}</div>
                  )
                : selected === id && (
                    <div className={classes.answer}>{answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
