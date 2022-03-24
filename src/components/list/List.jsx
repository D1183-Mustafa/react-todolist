import "./List.css"

function List({text}) {
  return (
    <div className="container">
      <ul>
        {text.map((li,index) => (
          <li key={index}>{li}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
