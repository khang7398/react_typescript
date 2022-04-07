import React, { useEffect, useState } from 'react';
import { useStore } from './Zustand/Store';
import './App.css';

export default function App() {
  const countStore = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);
  const [inputCount, setInputCount] = useState(0);
  const fetch = useStore((state) => state.fetch);
  const data = useStore((state) => state.data);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1');
  }, []);

  console.log('data', data);

  const handlOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCount(() => parseInt(e.target.value));
  };

  const handlOnClickIncrement = () => {
    increment(inputCount);
  };
  const handlOnClickDecrement = () => {
    decrement(inputCount);
  };
  return (
    <div className="App">
      <h1>Count</h1>
      <p>{`count: = ${countStore}`}</p>
      <input type="number" value={inputCount} onChange={handlOnChange} />
      <button onClick={handlOnClickIncrement}>incre</button>
      <button onClick={handlOnClickDecrement}>decre</button>
    </div>
  );
}
