
import './index.css';
import React, {useState} from "react";



function App() {
    const[name,setName] =useState("fff");

    const inputEvent=() =>{
        console.log('clicked')
    }
  return (
    <>
    <h1>{name}</h1>
    <input type="text" placeholder ="Enter the text" onChange={inputEvent}/>
    <button onClick={onSubmit}>click</button>
 
    </>
  );
}

export default App;
