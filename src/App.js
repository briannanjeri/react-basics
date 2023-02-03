import React from "react";
import Tweet from "./Tweet";
import { useState } from "react";
import "./App.css";

function App(){
  const [users, setUsers]=useState([
    {name:"junior", message:'hello there' },
    {name:"john", message:'hello friends' },
    {name:"will", message:'hello brothers' },
    {name:"brian", message:'hello' },
  ])
  const[isRed, setIsRed]=useState(false)
  const[counter, setCounter]=useState(0)
  

  function Increment(){
    setCounter(counter+1);
    setIsRed(!isRed)
  }

  return(

    <div className="App">

      <h1 className={ isRed ? 'red' : " "}>change my color </h1>
      
      <button onClick={Increment}>increment</button>
      <h1>{counter}</h1>
    

     {users.map((user)=>(
      <Tweet name={user.name} message={user.message} />
     ))} 
    

    </div>
    
  );
}


export default App;
