import classes from "./style.module.css";

export default function ColorGenerator() {
  return (
    <div>
      <h1>Random Color Generator</h1>
      <div className={classes.container}>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            <input type='radio' name='type' id='hex' />
            Hex Color
          </label>
          <label>
            <input type='radio' name='type' id='rgb' />
            Rgb Color
          </label>
        </form>
      </div>
    </div>
  );
}
