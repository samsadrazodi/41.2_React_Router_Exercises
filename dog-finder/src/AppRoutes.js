import React from "react";
import {Route, Routes} from 'react-router-dom';
import Dogs from "./Dogs";
import DogDetails from "./DogDetails";
import CatDetails from "./CatDetails";
import Cats from "./Cats";
import HomePage from './HomePage'
const AppRoutes = (dogs) =>{


    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dogs" element={<Dogs  />} />
            <Route path="/cats" element={<Cats  />} />
            <Route path="/cats/:dname" element={<CatDetails  />} />
            <Route exact path="/dogs/:dname" element={<DogDetails />} />
            <Route path="*" element={<Dogs />} />        </Routes>

    )
}

export default AppRoutes;