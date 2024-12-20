import React, { useState } from "react";
import ConsultantPerson from "./ConsultantPerson";
import styles from "./ConsultantList.module.css";
import EditConsultant from "./EditConsultant";
import ConsultantPrint from "./ConsultantPrint"; // Corrected the import
import ConsultantTeam from "./ConsultantTeam";
import Card from "./UI/card";

const ConsultantList = ({ consult_data, loggedInUser, onEdit }) => {
  const [editingConsultant, setEditingConsultant] = useState(null);
  const [team, setTeam] = useState([]);
  const [currentConsultant, setCurrentConsultant] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingTeam, setEditingTeam] = useState(false);

  const handleTeam = (consultant) => {
    if (
      loggedInUser?.role === "admin" &&
      !team.find((o) => o.username === consultant.username)
    ) {
      setTeam([...team, consultant]);
      setEditingTeam(true);
    }
  };

  const clearTeam = () => {
    setTeam([]);
    setEditingTeam(false)
  };

  const handleEditClick = (consultant) => {
    setCurrentConsultant(consultant);
    if (loggedInUser?.role === "admin" || loggedInUser?.username === consultant.username) {
      setEditingConsultant(consultant);
    }
  };

  const filteredConsultants = consult_data.filter((consultant) =>
    Object.values(consultant)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.list}>
      {/* Search Bar */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search consultants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {/* Consultant Cards */}
      {filteredConsultants.map((consultant, index) => (
        <Card className={styles.card} key={index}>
          <ConsultantPerson consult_data={consultant} />
          {loggedInUser && (
            <div className={styles.buttonContainer}>
              <button onClick={() => handleEditClick(consultant)}>Edit</button>
              <ConsultantPrint consultant={consultant} />
              {loggedInUser.role === "admin" && (
                <button onClick={() => handleTeam(consultant)}>Add</button>
              )}
            </div>
          )}
        </Card>
      ))}

      {/* Consultant Team */}
      {loggedInUser && editingTeam && (
        <ConsultantTeam
          team={team}
          handleTeam={handleTeam}
          clearTeam={clearTeam}
          consultant={currentConsultant}
        />
      )}

      {/* Edit Consultant */}
      {editingConsultant && (
        <EditConsultant
          consultant={editingConsultant}
          onSave={(updated) => {
            onEdit(updated);
            setEditingConsultant(null);
          }}
          onCancel={() => setEditingConsultant(null)}
        />
      )}
    </div>
  );
};

export default ConsultantList;
