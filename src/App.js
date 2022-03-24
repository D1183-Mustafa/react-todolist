import "./App.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import List from "./components/list/List";
import React, { useState } from "react";


function App() {
  let [text,setText] = useState([])
  // let [text2, setText2] = useState("");

  const addList = (e) =>{
    setText([...text,e.target.value])
    e.preventDefault();
  }


  return (
    <div>
      <Header />
      <Form addList={addList} text={text} />
      <List text= {text}/>
    </div>
  );
}

export default App;
