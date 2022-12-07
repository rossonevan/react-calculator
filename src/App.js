import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <button onClick={e => console.log(e.target.value)} value={1}>1</button>
        <button onClick={e => console.log(e.target.value)} value={2}>2</button>
        <button onClick={e => console.log(e.target.value)} value={3}>3</button>
        <br></br>
        <button onClick={e => console.log(e.target.value)} value={4}>4</button>
        <button onClick={e => console.log(e.target.value)} value={5}>5</button>
        <button onClick={e => console.log(e.target.value)} value={6}>6</button>
        <br></br>
        <button onClick={e => console.log(e.target.value)} value={7}>7</button>
        <button onClick={e => console.log(e.target.value)} value={8}>8</button>
        <button onClick={e => console.log(e.target.value)} value={9}>9</button>
        <br></br>
        <button onClick={e => console.log(e.target.value)} value={0}>0</button>
      </div>
    </div>
  );
}

export default App;
