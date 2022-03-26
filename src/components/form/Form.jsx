
// import { useState } from "react";
import "./Form.css";

function Form(props) {
  // const [text,setText] =useState("");
  // console.log(props);
  // console.log(text);

  return (
    <div className="conteiner">
      <form className="form">
        <label htmlFor="girdi">Eklemek İstediklerinizi Giriniz:</label>
        <input type="text" name="text" id="girdi" onChange={props.handleText} value={props.input}/>
        <div className="btn-div">
          <button className="btn" onClick={props.handleButton}>EKLE</button>
        </div>
      </form>
    </div>
    
  );
}

export default Form;
