import './style.css';
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const incr = () => {
    setCount(count + 1);
  };
  const decr = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="App">
      <div className="count">{count}</div>
      <button className="incr" onClick={() => incr()}>
        Incr
      </button>
      <button className="decr" onClick={() => decr()}>
        Decr
      </button>
    </div>
  );
}
