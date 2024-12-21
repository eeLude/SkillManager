import React, { useState } from "react";
import ConsultantPerson from "./ConsultantPerson";
import styles from "./ConsultantList.module.css";
import EditConsultant from "./EditConsultant";
import ConsultantPrint from "./ConsultantPrint"; // Corrected the import
import ConsultantTeam from "./ConsultantTeam";
import Card from "./UI/card";
import SearchBar from "./SearchBar";

const ConsultantList = ({ consult_data, loggedInUser, onEdit, onAddToTeam }) => {
  const [editingConsultant, setEditingConsultant] = useState(null);
  const [currentConsultant, setCurrentConsultant] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

 


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
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {/* Consultant Cards */}
      {filteredConsultants.map((consultant, index) => (
        <Card className={styles.card} key={index}>
          <ConsultantPerson consult_data={consultant} />
          {loggedInUser && (
            <div className={styles.buttonContainer}>
              <button onClick={() => handleEditClick(consultant)}>Edit</button>
              <ConsultantPrint consultant={consultant} />
              {loggedInUser.role === "admin" && (
                <button onClick={() => onAddToTeam(consultant)}>Add to Team</button>
              )}
            </div>
          )}
        </Card>
      ))}

      
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
