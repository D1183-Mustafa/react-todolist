import "./Form.css";

function Form(props) {
  console.log(props);
  return (
    <div className="conteiner">
      <form className="form">
        <label htmlFor="girdi">Eklemek İstediklerinizi Giriniz:</label>
        <input type="text" id="girdi" />
        <div className="btn-div">
          <button className="btn" onClick={props.addList}>EKLE</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
