import React from "react";
import { cats } from "./App";
import Dog from "./Dog";
import './Dog.css'
import Cat from "./Cat";
function Cats(){
   
    
    return(
        <>
        <header>
        <h1>Our Friendly Cats </h1>
        </header>
        
        {cats.map(d => (
            <Cat name={d.name} age={d.age} src={d.src} facts={d.facts} key={d.name}/>
            
        ))}
        </>
    )
}

export default Cats;