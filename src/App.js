import "./App.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import List from "./components/list/List";
import { useState } from "react";
// import List from "./components/list/List";

function App() {
  const [input, setInput] = useState({ text: "", textArray: [] });
  console.log(input.textArray);
  const handleText = (e) => {
    setInput({ ...input, text: e.target.value });
    // alert("olmaz")

    // console.log(e.target.value);
  };

  const handleButton = (e) => {
    if(input.text !== ""){
      input.textArray.push(input.text);
      setInput({ ...input, text: "" });
    }else {
      alert("Lütfen Herhangi bir şey yazınız!!!")
    }

    e.preventDefault();
  };
  return (
    <div>
      <Header />
      <Form
        input={input.text}
        handleText={handleText}
        handleButton={handleButton}
      />
      <List textArray={input.textArray} />
    </div>
  );
}

export default App;
