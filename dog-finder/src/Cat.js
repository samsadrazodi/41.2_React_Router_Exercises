import React from "react";
import './Dog.css'
import { Link} from 'react-router-dom';





const Cat = (cat)=>{
    
    if (!cat) {
        return <Link to="/"/>
    } 
    


    return (
      <div className="Dog">

          <img src={cat.src} alt={cat.name} />
          <div className="DogInfo">
             <h3><Link to={`/cats/${cat.name}`}>{cat.name}</Link> </h3>




        </div>
        <div className="facts">
            <div className="more-info">
            <Link  to={`/cats/${cat.name}`}>Click Here</Link> for more details and Fun Facts! 

            </div>
          {/* {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))} */}
       

        </div>
      </div>
    );
}

export default Cat;