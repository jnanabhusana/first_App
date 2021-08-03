import React from 'react';
import logo from './logo.svg';
import './App.css';
import Create from './Create.js';
function App() {

const time  = new Date();
const name ='jnanabhusan behera';
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/201/300";
const img3="https://picsum.photos/203/300";
const heading={
  color:"rgb(0, 89, 255)",
  textAlign: "center",
  textTransform: "capitalize",
  fontWeight: "bold",
  textShadow: "0px 2px 4px" ,
  fontFamily: '"Style Script", cursive'
}

  return (
    <div className="App">
 
  <h1 style={heading}>{name}</h1>
  <img src={img1} alt=""/>
  <img src={img2} alt=""/>
  <img src={img3} alt=""/>
 
  <p>{` today year is ${time.getFullYear()} ${time.getDate()}`}</p>
  <p>{` today time is ${time.getHours()} / ${time.getMinutes()} / ${time.getMinutes()}`}</p>


<Create />
    </div>
  );
}

export default App;
