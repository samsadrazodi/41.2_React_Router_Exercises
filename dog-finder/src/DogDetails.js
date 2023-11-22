import React from "react";
import './DogDetails.css'
import {Link, Navigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { dogs } from "./App";




const DogDetails = () =>{
    const {dname} = useParams();
   
    const clicked_dog = dogs.find((el)=> el["name"]===dname);
    if(!clicked_dog) return <Navigate to="/" />
    console.log(`my dog: ${clicked_dog["age"]}`)

    


    return (
      <div className="DogDetails">
        {/* console.log(`dog clicked is: ${dog_clicked}`) */}
            <h1>{clicked_dog.name}</h1>
            ({clicked_dog.age} years old)
          <img src={clicked_dog.src} alt={clicked_dog.name} />
          <div className="DogDetails-DogInfo">

             



        </div>
            <div className="Dogdetails-facts">
            Fun Facts about {clicked_dog.name}:
            <ul>
          {clicked_dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
           
          ))}
           </ul>
       

        </div>
      </div>
    );
}

export default DogDetails;