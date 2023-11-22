// HomePage.jsx

import React from "react";
import "./HomePage.css"; // Import the CSS file


const HomePage = () => {
  return (
    <>
      <div className="homepage-container">
        <h1 className="homepage-title">Welcome to the Cat and Dog Adoption Agency!</h1>
        <p className="homepage-text">
          At our adoption agency, we are dedicated to finding loving homes for
          cats and dogs in need. Whether you're looking for a playful feline
          friend or a loyal canine companion, we have a diverse selection of
          wonderful pets waiting for their forever homes.
        </p>
        <p className="homepage-text">
          Browse through our available cats and dogs below and discover the
          joy of adding a new member to your family. If you find a pet that
          captures your heart, don't hesitate to reach out to us for more
          information or to start the adoption process.
        </p>
      </div>
    </>
  );
};

export default HomePage;
