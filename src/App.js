import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [count, setCount] = useState(1)

  const changeCount = (value) => {

    setCount(count + value)
  }

  return (
    <div >
      <h1>
        <button onClick = {() => changeCount(1)}></button>
        {count}
        <button onClick = {() => changeCount(-1)}></button>
      </h1>

    </div>
  );
}

export default App;
