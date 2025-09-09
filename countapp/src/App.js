
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setcount] = useState(0)

  function increment() {
    setcount(count + 1)
    console.log("increment",count)
    
  }
  function decrement() {
    setcount(count - 1)
    console.log("decrement",count)
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Sub</button>

    </div>
  );
}

export default App;
