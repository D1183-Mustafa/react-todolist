import "./App.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import List from "./components/list/List";
import React, { useState } from "react";


function App() {
  let [text,setText] = useState([])

  const addList = (e) =>{
    setText((i) => {
      text.push(i)
    })
    e.preventDefault();
  }
  return (
    <div>
      <Header />
      <Form addList={addList} text={text} />
      <List />
    </div>
  );
}

export default App;
