import { useState } from "react";

import Header from "./components/Layout/Header/Header";
import MenuList from "./components/Layout/Menu/MenuList";

function App() {
const [updateCount,setUpdateCount]=useState(false);
const [cart, setCart] = useState([]);
   
   const handle=()=>{
    setUpdateCount((prev=>!prev)); 
   }
  return (
    <>
    
     <Header updateCount={updateCount} cart={cart}   setCart={setCart} />
     <MenuList  handle={handle}  setCart={setCart} />
    </>
  )
}

export default App
