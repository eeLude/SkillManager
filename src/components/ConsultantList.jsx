import ConsultantPerson from "./ConsultantPerson"
import styles from "./ConsultantList.module.css"


const ConsultantList = ({consult_data}) => {

    return (
        <div className={styles.list} >
        {consult_data.map((consultant, index) => (
            <ConsultantPerson 
            key={index} 
            consult_data={consultant} 
            />
        ))}
        </div>
    );
};

export default ConsultantList;