import Card from "./UI/card";
import styles from "./ConsultantPerson.module.css";

const ConsultantPerson = ({consult_data}) => {
    return (
      <Card className={styles.card}>
      <img src={consult_data.image} className={styles.image}></img>
      <h2>{consult_data.degreeProgram}</h2>
      <p>Education Level: {consult_data.educationLevel}</p>
      <p>Graduation Year: {consult_data.graduationYear}</p>
      <p>Certifications: {consult_data.certifications}</p>
      <p>Courses: {consult_data.courses}</p>
      <p>Project Experience: {consult_data.projectExperience}</p>
      <p>Technology Experience: {consult_data.technologyExperience}</p>
      <p>Work Experience: {consult_data.workExperience.duration} (Started in {consult_data.workExperience.startYear})</p>
    
    </Card>
    );
  };
  
export default ConsultantPerson;