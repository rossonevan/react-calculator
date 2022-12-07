import './App.css';
import {useState} from 'react';

function App() {

  const [calc, setCalc] = useState(0);


  const number = (e) => {
    setCalc(e.target.value)
  }




  return (
    <div className="App">
      <div>
        <h1>{calc}</h1>
        <button onClick={number} value={1}>1</button>
        <button onClick={number} value={2}>2</button>
        <button onClick={number} value={3}>3</button>
        <br></br>
        <button onClick={number} value={4}>4</button>
        <button onClick={number} value={5}>5</button>
        <button onClick={number} value={6}>6</button>
        <br></br>
        <button onClick={number} value={7}>7</button>
        <button onClick={number} value={8}>8</button>
        <button onClick={number} value={9}>9</button>
        <br></br>
        <button onClick={number} value={0}>0</button>
        <br></br>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

export default App;
