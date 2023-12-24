import { useState } from "react";
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import MenuList from "./components/Layout/Menu/MenuList";
import About from "./components/Layout/About/About";

function App() {
const [updateCount,setUpdateCount]=useState(false);
const [cart, setCart] = useState([]);
   
   const handle=()=>{
    setUpdateCount((prev=>!prev)); 
   }
  return (
    <>
    
    <BrowserRouter>
    <Header updateCount={updateCount} cart={cart}   setCart={setCart} />
    <Routes>
      <Route  path="/"  element={  <MenuList  handle={handle}  setCart={setCart} />}/>
      <Route  path="/about"  element={  <About/>}/>
    </Routes>
    
    </BrowserRouter>
   
   
    </>
  )
}

export default App
