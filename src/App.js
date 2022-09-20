import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={onClickCountUp}>CountUp</button>
    </div>
  );
}
