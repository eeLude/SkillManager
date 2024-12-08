import React from "react";
import ConsultantPerson from "./ConsultantPerson";
import styles from "./ConsultantTeam.module.css"; // Import the CSS module

const ConsultantTeam = ({ team, handleTeam, consultant, clearTeam }) => {
  return (
    <div className={styles.teamSection}> 
      <div className={styles.buttonRow}>
        <button onClick={() => clearTeam(consultant)}>Clear</button>
      </div>

      {/* Wrap the team cards in a dedicated container */}
      <div className={styles.teamContainer}>
        {team.map((person, index) => (
          <div key={index} className={styles.teamMemberCard}>
            <ConsultantPerson consult_data={person} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultantTeam;


