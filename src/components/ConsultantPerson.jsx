import styles from "./Consultant.module.css";

const ConsultantPerson = (props) => {
    return (
      <div className="consultant-card">
      <h2>{props.data.degreeProgram}</h2>
      <p>Education Level: {props.data.educationLevel}</p>
      <p>Graduation Year: {props.data.graduationYear}</p>
      <p>Certifications: {props.data.certifications}</p>
      <p>Courses: {props.data.courses}</p>
      <p>Project Experience: {props.data.projectExperience}</p>
      <p>Technology Experience: {props.data.technologyExperience}</p>
      <p>Work Experience: {props.data.workExperience.duration} (Started in {props.data.workExperience.startYear})</p>
    </div>
    );
  };
  
export default ConsultantPerson;