import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-screen">
      <div className="welcome-container">
        <div className="user-icon">
          {/* Add user icon here, possibly using an <img> tag or an icon component */}
        </div>
        <h1 className="welcome-title">Welcome</h1>
        <div className="language-selector">
          <button className="language-button">English</button>
        </div>
        <h2 className="task-header">Here's what we need to do today:</h2>
        <ul className="task-list">
          <li className="task-item">Verify who you are</li>
          <li className="task-item">Review your information</li>
          <li className="task-item">Sign consent forms</li>
          <li className="task-item">Make a payment</li>
        </ul>
        <button 
          className="check-in-button" 
          onClick={() => navigate('/intake')}>
          Check In
        </button>
      </div>
    </div>

  // return (
  //   <div className="welcome-screen">
  //     <div className="user-icon">
  //       {/* Add user icon here */}
  //     </div>
  //     <h1>Welcome</h1>
  //     <div className="language-selector">
  //       <button>English</button>
  //     </div>
  //     <h2>Here's what we need to do today:</h2>
  //     <ul>
  //       <li>Verify who you are</li>
  //       <li>Review your information</li>
  //       <li>Sign consent forms</li>
  //       <li>Make a payment</li>
  //     </ul>
  //     <button className="check-in-button" onClick={() => navigate('/intake')}>Check in</button>
      
  //   </div>
  );
};

export default Welcome;