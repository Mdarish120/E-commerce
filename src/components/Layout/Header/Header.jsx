import React, { useState ,useEffect} from 'react';
import "./style.css";
import Model from '../Modal/Model';
import Slider from '../Slider/slider';




const Header = ({updateCount,cart}) => {
  const [count,setCount]=useState(0);
  const [isOpen,setIsOpen]=useState(false);
  const [res,setRes]=useState([]);


 
  useEffect(() => {
    // Function to update the cart count
    const updateCartCount = () => {
  
      let map = new Map();

      for (let val of cart) {
        const key = JSON.stringify(val);
        if (map.has(key)) {
          map.set(key, map.get(key) + 1);
        } else {
          map.set(key, 1);
        }
      }

      const result = [...map.entries()].map(([key, count]) => [JSON.parse(key), count]);
       setRes(result);
      
    
  
     
      const totalCount = cart.length;
  
     
      setCount(totalCount);
    };

    // Call the function when the component mounts
    updateCartCount();

    
  }, [updateCount]);


  const handleCartClick=()=>{
     setIsOpen((prev)=>!prev);
  }

  



  return (
    <>
      <div className='header'>
        <h2 className='restaurant-name'> E-commerce</h2>
        <div className='cart' onClick={handleCartClick}>
          <div className='add-to-cart-icon'>Cart</div>
          <div className='count'>{count}</div>
        </div>
      </div>
      <Model  isOpen={isOpen}  setRes={setRes} res={res} setCount={setCount} count={count}/>
     <Slider/>
    </>
  );
};

export default Header;
