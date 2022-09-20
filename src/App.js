import { useState } from "react";
import { ChildArea } from "./components/ChildArea";
import "./styles.css";

export default function App() {
  // const [count, setCount] = useState(0);
  // const onClickCountUp = () => {
  //   setCount(count + 1);
  // };
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const OnChangeText = (e) => {
    setText(e.target.value);
  };
  const onClickOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <input value={text} onChange={OnChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
      {/* <p>{count}</p>
      <button onClick={onClickCountUp}>CountUp</button> */}
    </div>
  );
}
