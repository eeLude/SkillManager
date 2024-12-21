import React, { useState } from 'react';
import './App.css';
import ConsultantList from './components/ConsultantList.jsx';
import Login from './components/Login.jsx';
import consultants from "./consultants.json";
import ConsultantTeam from './components/ConsultantTeam.jsx';


const App = () => {
  const data = JSON.parse(localStorage.getItem('consultants')) || consultants;
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [consultantData, setConsultantData] = useState(data);
  const [team, setTeam] = useState([]);
  const [editingTeam, setEditingTeam] = useState(false);
  
  
  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const addToTeam = (consultant) => {
    if (!team.find((member) => member.id === consultant.id)) {
      setTeam([...team, consultant]);
      setEditingTeam(true);
    }
  };

  const clearTeam = () => {
    setTeam([]);
    setEditingTeam(false)
  };

  const handleEditConsultant = (editedConsultant) => {
    const updatedConsultants = consultantData.map((consultant) =>
      consultant.id === editedConsultant.id ? editedConsultant : consultant
    );
    setConsultantData(updatedConsultants);
    localStorage.setItem('consultants', JSON.stringify(updatedConsultants));
  };

  return (
    <div className="container">
      {loggedInUser ? (
        <>
          {/* Header */}
          <header className="header">
            <div className="welcomeMessage">
              <h1>Welcome, {loggedInUser.username}!</h1>
            </div>
            <div className="logoutButton">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </header>
  
          {/* Content */}
          <div className="content">
            <ConsultantList
              consult_data={consultantData}
              loggedInUser={loggedInUser}
              onEdit={handleEditConsultant}
              onAddToTeam={addToTeam}
            />
            {loggedInUser.role === "admin" && editingTeam &&(
              <ConsultantTeam team={team} clearTeam={clearTeam} />
            )}
          </div>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;