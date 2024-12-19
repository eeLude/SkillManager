import styles from "./ConsultantPerson.module.css";

const ConsultantPerson = ({ consult_data }) => {
  return (
    <div className={styles.cardContent}>
      <div className={styles.topRow}>
        <img src={consult_data.image} className={styles.image} alt={consult_data.username} />
        <h2 className={styles.name}>{consult_data.username}</h2>
      </div>
      <div className={styles.details}>
        <p>{consult_data.degreeProgram}</p>
        <p>Education Level: {consult_data.educationLevel}</p>
        <p>Graduation Year: {consult_data.graduationYear}</p>
        <p>Certifications: {consult_data.certifications}</p>
        <p>Courses: {consult_data.courses}</p>
        <p>Project Experience: {consult_data.projectExperience}</p>
        <p>Technology Experience: {consult_data.technologyExperience}</p>
        <p>Work Experience: {consult_data.workExperience.duration}</p>
        <p>Start Year: {consult_data.workExperience.startYear}</p>
      </div>
    </div>
  );
};

export default ConsultantPerson;
