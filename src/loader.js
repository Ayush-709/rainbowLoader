import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faCloud } from '@fortawesome/free-solid-svg-icons'; // Add the necessary icon imports
import './App.css'; // Import the CSS file if necessary

const YourComponent = () => {
  return (
    <div className="container">
      <div className="loader">
        <div className="rocket">
          <FontAwesomeIcon icon={faRocket} /> {/* Use FontAwesomeIcon with imported icons */}
          <FontAwesomeIcon icon={faCloud} style={{ '--i': 0 }} />
          <FontAwesomeIcon icon={faCloud} style={{ '--i': 1 }} />
          <FontAwesomeIcon icon={faCloud} style={{ '--i': 2 }} />
          <FontAwesomeIcon icon={faCloud} style={{ '--i': 3 }} />
        </div>
        <span>
          <i></i>
        </span>
      </div>
    </div>
  );
};

export default YourComponent;
