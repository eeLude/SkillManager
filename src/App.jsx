import React, { useState } from 'react';
import './App.css';
import ConsultantList from './components/ConsultantList.jsx';
import Login from './components/Login.jsx';
import consultants from "./consultants.json";



  


  const App = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
  
    const handleLogin = (user) => {
      setLoggedInUser(user);
      console.log("Logged in as:", user);
    };

    const handleLogout = () => {
      setLoggedInUser(null);
    };

    return (
      <>
        <div>
          {loggedInUser ? (
            <h1>Welcome, {loggedInUser.username}! {loggedInUser && <button onClick={handleLogout}>Logout</button>}
            </h1>
            
            
          ) : (
            <Login onLogin={handleLogin} />
          )}
          
        </div>
  
        <ConsultantList consult_data={consultants} />
      </>
    );
  };
  
  export default App;