import React from "react";
import ConsultantPrint from "./ConsultantPrint";
import styles from "./ConsultantActions.module.css"

const ConsultantActions = ({ consultant, onEditClick, onAddToTeam, loggedInUser }) => {
  return (
    <div className={styles.buttons} >
      <button onClick={() => onEditClick(consultant)}>Edit</button>
       <ConsultantPrint consultant={consultant} loggedInUser={loggedInUser} />
      <button onClick={() => onAddToTeam(consultant)}>Add to Team</button>
    </div>
  );
};

export default ConsultantActions;
