import React from "react";
import './Dog.css'
import { Link} from 'react-router-dom';





const Dog = (dog)=>{
    
    if (!dog) {
        return <Link to="/"/>
    } 
    


    return (
      <div className="Dog">

          <img src={dog.src} alt={dog.name} />
          <div className="DogInfo">
             <h3><Link to={`/dogs/${dog.name}`}>{dog.name}</Link> </h3>




        </div>
        <div className="facts">
            <div className="more-info">
            <Link  to={`/dogs/${dog.name}`}>Click Here</Link> for more details and Fun Facts! 

            </div>
          {/* {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))} */}
       

        </div>
      </div>
    );
}

export default Dog;