import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login/Login';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import Forms from './component/Forms/Forms';
function App() {




  
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
