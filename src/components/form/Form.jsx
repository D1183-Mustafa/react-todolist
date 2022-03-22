import "./Form.css";

function Form() {
  return (
    <div className="conteiner">
      <form action="" className="form">
        <label htmlFor="girdi">Eklemek İstediklerinizi Giriniz:</label>
        <input type="text" id="girdi" />
        <div className="btn-div">
          <button className="btn">EKLE</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
