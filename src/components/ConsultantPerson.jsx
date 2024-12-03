import Card from "./UI/card";
import styles from "./ConsultantPerson.module.css";

const ConsultantPerson = (props) => {
    return (
      <Card className={styles.card}>
     
      <h2>{props.data.degreeProgram}</h2>
      <p>Education Level: {props.data.educationLevel}</p>
      <p>Graduation Year: {props.data.graduationYear}</p>
      <p>Certifications: {props.data.certifications}</p>
      <p>Courses: {props.data.courses}</p>
      <p>Project Experience: {props.data.projectExperience}</p>
      <p>Technology Experience: {props.data.technologyExperience}</p>
      <p>Work Experience: {props.data.workExperience.duration} (Started in {props.data.workExperience.startYear})</p>
    
    </Card>
    );
  };
  
export default ConsultantPerson;