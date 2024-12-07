import React, { useState } from 'react';
import './App.css';
import ConsultantList from './components/ConsultantList.jsx';
import Login from './components/Login.jsx';
import consultants from "./consultants.json";




  


  const App = () => {

   
    const data = JSON.parse(localStorage.getItem('consultants')) || consultants;

    const [loggedInUser, setLoggedInUser] = useState(null);
    const [consultantData, setConsultantData] = useState(data);
  
    const handleLogin = (user) => {
      setLoggedInUser(user);
      
    };

    const handleLogout = () => {
      setLoggedInUser(null);
    };

    
    
    
    const handleEdit = (editedConsultant) => {
      console.log('Updating consultant:', editedConsultant);
      const updatedConsultants = consultantData.map((consultant) =>
        consultant.username === editedConsultant.username ? editedConsultant : consultant
      );
      setConsultantData(updatedConsultants);
      localStorage.setItem('consultants', JSON.stringify(updatedConsultants)); // Save to localStorage
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
  
        <ConsultantList 
        consult_data={consultantData}
        loggedInUser={loggedInUser}
        onEdit={handleEdit} 
        />
      </>
    );
  };
  
  export default App;