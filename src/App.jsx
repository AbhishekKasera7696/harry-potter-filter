import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/staff")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilter(data);
      });
  }, []);

  function handleClick(e) {
    console.log("e>>>>>>>", value);
    const newArr = data?.filter((item) => item.name.includes(value));
    // console.log("newArr>>>>>", newArr);
    setFilter(newArr);
  }

  return (
    <div className="App">
      <label>Filter Character</label>
      <input
        type="text"
        placeholder="search something"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Click Me</button>
      {filter?.map((item) => {
        return (
          <>
            <li>{item.name}</li>
            <img src={item.image} alt="no-image" />
          </>
        );
      })}
    </div>
  );
}
