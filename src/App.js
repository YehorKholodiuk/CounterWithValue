import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import CounterArray from "./components/CounterArray";

function App() {
  const [count, setCount] = useState(1)

  const changeCount = (value) => {

    setCount(count + value)
  }

  return (
    <div >
      <div>
        <button onClick = {() => changeCount(1)}> - </button>
        {count}
        <button onClick = {() => changeCount(-1)}> + </button>
      </div>
      <hr/>
      <CounterArray/>

    </div>
  );
}

export default App;
