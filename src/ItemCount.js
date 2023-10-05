/*
import {useEffect, useState } from "react";
const ItemCount = () => {
 
    const[contadorUno, setContadorUno] = useState(0) ;
    const[contadorDos, setContadorDos] = useState(0) ;
    useEffect(()=>{
      console.log("useEfectse llama?")
    },[contadorUno])


    return(
      <div>

    
        <div>
          <button onClick={()=>setContadorUno(contadorUno+1)}>contador1</button>
          <p>{contadorUno}</p>
        </div>
        <div>
          <button onClick={()=>setContadorDos(contadorDos+1)}>contador2</button>
          <p>{contadorDos}</p>
        </div>
      </div>
    )
}

export default ItemCount;  */ 




import './ItemCount.css';
import React, {useState, useEffect} from "react";

const ItemCount = ({ initial, stock, onAdd}) => {

    const [count, setCount] = useState (parseInt(initial));


    const disminuir = () =>{
      setCount(count - 1);
    }
    const aumentar = () =>{
      setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])


    return (
        <div className="counter" >
            <button disabled={count <= 1} onClick={disminuir}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={aumentar}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={()=> onAdd(count)}>Add to cart</button>
            </div>

        </div>
    );
}

export default ItemCount;