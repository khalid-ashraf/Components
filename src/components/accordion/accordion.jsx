import { useState } from "react";
import classes from "./style.module.css";

import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = ({ target }) => {
    var id;

    if (
      target.tagName.toLowerCase() === "h3" ||
      target.tagName.toLowerCase() === "span"
    ) {
      id = target.parentNode.getAttribute("data-id");
    }

    if (target.tagName.toLowerCase() === "div")
      id = target.getAttribute("data-id");

    console.log(id);
  };

  return (
    <div className={classes.wrapper}>
      <div className='accordion' onClick={handleSingleSelection}>
        {data && data.length > 0 ? (
          data.map(({ id, question, answer }) => (
            <div className={classes.item} key={id}>
              <div className={classes.title} data-id={id}>
                <h3>{question}</h3>
                <span>+</span>
              </div>
              <div className={selected ? classes.show : classes.answer}>
                <p>{answer}</p>
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
