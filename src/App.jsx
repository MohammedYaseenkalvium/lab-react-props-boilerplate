import './App.css';
import elephant from "./images/elephant.jpeg";
import React from 'react';




function App(props) {
  let image_arr = props.imageData()
  // code here
  return(
    <>
      <h1 className='header'>Kalviam Gallery</h1>
      <div className='Images'>
        
        <img src={elephant} className='image' alt="" />
        <img src={elephant} className='image' alt="" />
        <img src={elephant} className='image' alt="" />
        <img src={elephant} className='image' alt="" />
   
      </div>
    </>
  )
}

export default App;
