import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout}) => {

  const loggedInDisplay = () => (
      <div>
        <h3>Welcome, {currentUser.username}</h3>
        <button onClick={logout}>Logout</button>
      </div>
  );

  const loggoutDisplay = () => (
    <div>
      <Link to={'/signup'}>Sign Up</Link>
      <Link to={'/login'}>Log In</Link>
    </div>
  );

 return currentUser ? loggedInDisplay() : loggoutDisplay();
};

export default Greeting;
