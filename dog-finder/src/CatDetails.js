import React from "react";
import './DogDetails.css'
import {Link, Navigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { cats } from "./App";




const CatDetails = () =>{
    const {dname} = useParams();
   
    const clicked_cat = cats.find((el)=> el["name"]===dname);
    if(!clicked_cat) return <Navigate to="/" />

    


    return (
      <div className="DogDetails">
        {/* console.log(`dog clicked is: ${dog_clicked}`) */}
            <h1>{clicked_cat.name}</h1>
            ({clicked_cat.age} years old)
          <img src={clicked_cat.src} alt={clicked_cat.name} />
          <div className="DogDetails-DogInfo">

             



        </div>
            <div className="Dogdetails-facts">
            Fun Facts about {clicked_cat.name}:
            <ul>
          {clicked_cat.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
           
          ))}
           </ul>
       

        </div>
      </div>
    );
}

export default CatDetails;