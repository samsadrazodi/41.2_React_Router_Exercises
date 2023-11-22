import React from "react";
import { dogs } from "./App";
import Dog from "./Dog";
import './Dog.css'

function Dogs(){
   
    
    return(
        <>
        <header>
        <h1>Our Friendly Dogs </h1>
        </header>
        
        {dogs.map(d => (
            <Dog name={d.name} age={d.age} src={d.src} facts={d.facts} key={d.name}/>
            
        ))}
        </>
    )
}

export default Dogs;