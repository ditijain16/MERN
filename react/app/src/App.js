import React, { useState } from 'react';  
import './App.css';
import Home from './Home';

function App() {
  let name = "diti";
  // let email = "ditivjain8@gmail.com";
  const[email,setEmail] = useState("");
  const[address,setAddress] = useState('perambur');
  const[number,setNumber] = useState("");
  const validate = () => {
    if (email === ""){
      alert("email field is required")
    }else if (number === ""){
      alert("mobile phone is required")
    }else {
      alert("we are good to go")
    }
  }
  return (
    <div>
    <h1>Hi, this is from app</h1>
    <Home/>
    Click for Product: 
    Name: {name}<br/>
    <h1>Email: {email}</h1>   
    <p>Address: {address}</p>
    <p>Number: {number}</p>
    <input type='text' placeholder='Enter your email' onChange={(f)=>setEmail(f.target.value)}></input>
    <input type='text' placeholder="Enter your number" onChange={(e)=>setNumber(e.target.value)}></input>
    <button onClick={()=>validate()}>Click</button>
    </div>
  );
}

export default App;