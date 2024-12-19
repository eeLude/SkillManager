import ConsultantPerson from "./ConsultantPerson";
import styles from "./ConsultantList.module.css";
import { useState } from "react";
import EditConsultant from "./EditConsultant";
import PrintConsultant from "./ConsultantPrint";
import ConsultantTeam from "./ConsultantTeam";
import Card from "./UI/card";

const ConsultantList = ({ consult_data, loggedInUser, onEdit }) => {
  const [editingConsultant, setEditingConsultant] = useState(null);
  const [team, setTeam] = useState([]);
  const [currentConsultant, setCurrentConsultant] = useState([]);

  const handleTeam = (consultant) => {
    if (
      loggedInUser?.role === 'admin' &&
      !team.find((o) => o.username === consultant.username)
    ) {
      setTeam([...team, consultant]);
    }
  };

  const clearTeam = () => {
    setTeam([]);
  };

  const handleEditClick = (consultant) => {
    setCurrentConsultant(consultant);
    if (loggedInUser?.role === 'admin' || loggedInUser?.username === consultant.username) {
      setEditingConsultant(consultant);
      console.log('Editing consultant:', consultant);
    }
  };

  return (
    <div className={styles.list}>
      {consult_data.map((consultant, index) => (
        <Card className={styles.card} key={index}>
          <ConsultantPerson consult_data={consultant} />
          {loggedInUser && (
            <div className={styles.buttonContainer}>
              <button onClick={() => handleEditClick(consultant)}>Edit</button>
              <PrintConsultant consultant={consultant} />
              {loggedInUser.role === 'admin' && (
                <button onClick={() => handleTeam(consultant)}>Add</button>
              )}
            </div>
          )}
        </Card>
      ))}

      {loggedInUser && (
        <ConsultantTeam
          team={team}
          handleTeam={handleTeam}
          clearTeam={clearTeam}
          consultant={currentConsultant}
        />
      )}

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
