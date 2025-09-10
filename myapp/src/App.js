import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login/Login';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import Forms from './component/Forms/Forms';
// import { useState, useMemo, useCallback } from 'react';
// import React, { memo } from 'react';


function App() {

  // const [count, setCount] = useState(0);
  // const [Count, setcount] = useState(1)
  // const [data, setdata] = useState(2)

  // const Button = React.memo(({ handleClick, label }) => {
  //   console.log("Button rendered:", label);
  //   return <button onClick={handleClick}>{label}</button>;
  // });
  // const Child = React.memo(({ name }) => {
  //   console.log("Child rendered");
  //   return <p>Child Name: {name}</p>;
  // });

  // const decrement = useCallback(() => {
  //   setcount((C) => C - 1);
  // }, []);



  // const doubleCount = useMemo(() => {
  //   console.log("calculating doubleCount...");
  //   return count * 2;

  // }, [count]);


  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => setname(data));
  // }, []);
  // const columns = [
  //   { id: "userId", label: "USER ID" },
  //   { id: "id", label: "ID" },
  //   { id: "title", label: "Title" },
  //   { id: "body", label: "Body" }
  //  ];
  return (
    <>

      {/* <Table StickyHeadTable columns={columns} rows={name} />
       */}

      {/* <div>
        <h1>Count: {Count}</h1>
        <Button style={{ padding: "30px" }} handleClick={decrement} label="decrement" />
      </div>
      {console.log("jsx")}
      <div>
        <button onClick={() => setdata(data + 1)}>Increment</button>
        <p>Count: {data}</p>
        <Child name="Gobika" />
      </div >


      <div>
        <h1>Double: {doubleCount}</h1>
        <button style={{ padding: "30px" }} onClick={() => setCount(count + 1)}>Increment</button>

      </div> */}

      <BrowserRouter>

        <Header />

        <Routes>

          <Route path="/" element={<div className="container"><Home />  </div>} />
          <Route path="/Login" element={<div className="container"><Login /> </div>} />
          <Route path="/about" element={<div className="container"><About /> </div>} />
          <Route path="/contact" element={<div className="container"><Contact /> </div>} />
          <Route path='/form' element={<Forms />} />
        </Routes>



      </BrowserRouter>

    </>
  );
}
export default App;
