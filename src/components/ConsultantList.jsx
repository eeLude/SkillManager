import ConsultantPerson from "./ConsultantPerson"
import styles from "./ConsultantList.module.css"
import { useState } from "react";
import EditConsultant from "./EditConsultant";


const ConsultantList = ({consult_data, loggedInUser, onEdit}) => {
    const [editingConsultant, setEditingConsultant] = useState(null);

    const handleEditClick = (consultant) => {
        
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
                <button onClick={() => handleEditClick(consultant)}>Edit {consultant.username}</button>

              )}
            </div>
          ))}
    
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