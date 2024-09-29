import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function AutoComplete() {
  const [searchInput, setSearchInput] = useState("");
  const [userNames, setUserNames] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const { users } = await response.json();

        setUserNames(users.map((user) => user.firstName));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const filter = userNames?.filter((userName) =>
      userName.toLocaleLowerCase().startsWith(searchInput)
    );

    searchInput === "" ? setFilteredNames(userNames) : setFilteredNames(filter);
  }, [searchInput, userNames]);

  return (
    <div>
      <h1>AutoComplete</h1>
      <div className={styles.container}>
        <label htmlFor='search'>Search: </label>
        <input
          type='text'
          id='search'
          name='search'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {filteredNames.map((userName, index) => (
        <p key={index}>{userName}</p>
      ))}
    </div>
  );
}
