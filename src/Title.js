import React from "react";
import './Title.css';

const Title = ({greeting}) => {

    console.log(greeting)
    return(
        
        <h1>{greeting}</h1>
       

    );
   
   
}

export default Title;