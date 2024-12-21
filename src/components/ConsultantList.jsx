import React, { useState } from "react";
import ConsultantPerson from "./ConsultantPerson";
import ConsultantActions from "./ConsultantActions";
import styles from "./ConsultantList.module.css";
import EditConsultant from "./EditConsultant";
import Card from "./UI/card";
import SearchBar from "./SearchBar";

const ConsultantList = ({ consult_data, loggedInUser, onEdit, onAddToTeam }) => {
  const [editingConsultant, setEditingConsultant] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleEditClick = (consultant) => {
    if (
      loggedInUser?.role === "admin" ||
      loggedInUser?.username === consultant.username
    ) {
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
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {filteredConsultants.map((consultant) => (
        <Card className={styles.card} key={consultant.id}>
          <ConsultantPerson consult_data={consultant} />
          {loggedInUser && (
            <ConsultantActions
              consultant={consultant}
              loggedInUser={loggedInUser}
              onEditClick={handleEditClick}
              onAddToTeam={onAddToTeam}
            />
          )}
        </Card>
      ))}

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
