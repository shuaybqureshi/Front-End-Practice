export default function Item(props) {
    return(
      <li>
          <span className="item">{props.item}</span>
          <button 
          onClick={() => props.removeItem(props.id)}
          >  Delete</button>
        </li>
    )
  }
  