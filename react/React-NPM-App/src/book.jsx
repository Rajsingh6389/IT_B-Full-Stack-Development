import {createRoot} from "react-dom/client"
import ReactDOM from "react-dom/client"
import "/App.css"
function Book(props){
    return (
         <div className="book">
           <img src={props.image}/>
           <h3>{`Title: ${props.title}`}</h3>
           <h4>{`Price : ${props.price}`}</h4>
           <button>Add to cart</button>
        </div>
       
    )
}

export default Book;

// const parent=document.getElementById("root")
// const root=ReactDOM.createRoot(parent)

// root.render(<Book />);