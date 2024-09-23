import useLocalStorage from "../../hooks/useLocalStorage";

export default function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorage("dark", true);

  const handleToggleTheme = () => {
    setTheme((prev) => !prev);
  };

  console.log(theme);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      data-darkTheme={theme}>
      <h1>Theme Switcher</h1>
      <button onClick={handleToggleTheme}>Switch Themes</button>
    </div>
  );
}
