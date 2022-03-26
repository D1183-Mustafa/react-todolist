import "./List.css"
import { IoIosCloseCircleOutline } from "react-icons/io";

function List(props) {
  const handleRemove =(e) => {
    if(e.target.tagName === "svg") {
      e.target.parentElement.remove();
    }else if (e.target.tagName === "path"){
      e.target.parentElement.parentElement.remove();
    }
    // console.log(e.target.tagName);
    // e.target.parentElement.parentElement.remove();
  }
  return (
    <div className="container2">
      
      <ul>
        {props.textArray.map((e,index) => (
          <li key={index} className="li" >{e} <IoIosCloseCircleOutline onClick={handleRemove}/></li>
        ))}
      </ul>
    </div>
  )
}

export default List
