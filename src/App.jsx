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
    const updatedConsultants = consultantData.map((consultant) =>
      consultant.id === editedConsultant.id ? editedConsultant : consultant
    );
    setConsultantData(updatedConsultants);
    localStorage.setItem('consultants', JSON.stringify(updatedConsultants));
  };

  return (
    <div className="container">
      {/* Header */}
      {loggedInUser && (
        <div className="header">
          {/* Welcome Message */}
          <div className="welcomeMessage">
            <h1>Welcome, {loggedInUser.username}!</h1>
          </div>

          {/* Logout Button */}
          <div className="logoutButton">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="content">
        {loggedInUser ? (
          <ConsultantList
            consult_data={consultantData}
            loggedInUser={loggedInUser}
            onEdit={handleEdit}
          />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default App;
