import ConsultantPerson from "./ConsultantPerson"
import styles from "./ConsultantList.module.css"


const ConsultantList = (props) => {
    return (
        <div className={styles.list} >
        {props.data.map((consultant, index) => (
            <ConsultantPerson 
            key={index} 
            data={consultant} 
            />
        ))}
        </div>
    );
};

export default ConsultantList;