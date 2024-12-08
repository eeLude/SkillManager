import ConsultantPerson from "./ConsultantPerson"
import styles from "./ConsultantList.module.css"
import { useState } from "react";
import EditConsultant from "./EditConsultant";
import PrintConsultant from "./ConsultantPrint";
import ConsultantTeam from "./ConsultantTeam";


const ConsultantList = ({consult_data, loggedInUser, onEdit}) => {
    const [editingConsultant, setEditingConsultant] = useState(null);
    const [team, setTeam] = useState([]);
    const [currentConsultant, setCurrentConsultant] = useState([]);
    
    console.log(team);

    const handleTeam = (consultant) => {
      if (
        loggedInUser.role === 'admin' &&
        !team.find((o) => o.username === consultant.username)
      ) {
        setTeam([...team, consultant]);
      } 
        
      
    };

    const clearTeam = () => {
      

      
      setTeam([]);
      
    }
    const handleEditClick = (consultant) => {
        
        setCurrentConsultant(consultant);
        if (loggedInUser.role === 'admin' || loggedInUser.username === consultant.username) {
          setEditingConsultant(consultant); 
          console.log('Editing consultant:', consultant);
          
         
        } 
            
        
      };

      

      return (
        <div>
          {consult_data.map((consultant, index) => (
            <div key={index}>
              <ConsultantPerson consult_data={consultant} />
              {loggedInUser && (
                <div>
                <button onClick={() => handleEditClick(consultant)}>Edit {consultant.username}</button>
                <PrintConsultant consultant={consultant}></PrintConsultant>
                <button onClick={() => handleTeam(consultant)}>Add</button>
                

                </div>

              )}
            </div>
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
              onSave={onEdit}
              onCancel={() => setEditingConsultant(null)}
            />
          )}
        </div>
      );
    };

export default ConsultantList;