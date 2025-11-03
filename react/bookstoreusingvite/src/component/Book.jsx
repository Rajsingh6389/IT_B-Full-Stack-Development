import React, { useEffect, useState } from "react";
import "../App.css";
function Book(props){
  
    const addtocart=()=>{
        alert( `${props.title} successfully added to cart`)
    }
    const [count,setcount]=useState(0);
    const increment=()=>{
       setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-1)
    }
    
    return (
         <div className="book">
           <img src={props.image}/>
           <h3>{`Title: ${props.title}`}</h3>
           <h4>{`Price : ${props.price}`}</h4>
           <button onClick={addtocart}>Add to cart</button>
           <div className="butt">
              <button onClick={decrement}> - </button >
              <p>{count}</p>
              <button onClick={increment}> + </button >
           </div>

        </div>
       
    )
}

export default Book;
