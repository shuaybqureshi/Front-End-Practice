import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Star from './Star';

function App() {
  const svgArray = new Array(10).fill(null);
  const [activeStars, setActiveStars] = useState(4);
  const [tmpStars, setTmpStars] = useState(4);
  
  const clickHandler=(index) =>{
    setActiveStars(index)
    setTmpStars(index)
  }
  
  return (
    <div>
      {svgArray.map((_, index) => (
        <Star
        activeStars={activeStars}
        tmpStars={tmpStars}
        index={index} 
        clickHandler={clickHandler}
        setActiveStars = {setActiveStars}
        />
      ))
      }
   
  </div>
  );
}

export default App;
