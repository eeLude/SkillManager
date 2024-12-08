import Card from "./UI/card";
import styles from "./ConsultantPerson.module.css";

const ConsultantPerson = ({consult_data}) => {
  
    return (
      <Card className={styles.card}>
      <img src={consult_data.image} className={styles.image}></img>
      <h2>{consult_data.username}</h2>
      <p>{consult_data.degreeProgram}</p>
      <p>Education Level: {consult_data.educationLevel}</p>
      <p>Graduation Year: {consult_data.graduationYear}</p>
      <p>Certifications: {consult_data.certifications}</p>
      <p>Courses: {consult_data.courses}</p>
      <p>Project Experience: {consult_data.projectExperience}</p>
      <p>Technology Experience: {consult_data.technologyExperience}</p>
    </Card>
    );
  };
  
export default ConsultantPerson;