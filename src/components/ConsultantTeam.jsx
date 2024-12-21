import React from "react";
import styles from "./ConsultantTeam.module.css";
import Card from "./UI/card";
import jsPDF from "jspdf";

const ConsultantTeam = ({ team, consultant, clearTeam }) => {
  const handlePrintTeam = () => {
    if (team.length === 0) {
      alert("No team members to print.");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Team Report", 10, 10);
    doc.setFontSize(12);

    let yPos = 20;
    team.forEach((member, index) => {
      if (index !== 0) yPos += 10;

      doc.text(`Consultant: ${member.username}`, 10, yPos);
      yPos += 10;
      doc.text(`Education Level: ${member.educationLevel}`, 10, yPos);
      yPos += 10;
      doc.text(`Degree Program: ${member.degreeProgram}`, 10, yPos);
      yPos += 10;
      doc.text(`Graduation Year: ${member.graduationYear}`, 10, yPos);
      yPos += 10;
      doc.text(`Certifications: ${member.certifications}`, 10, yPos);
      yPos += 10;
      doc.text(`Courses: ${member.courses}`, 10, yPos);
      yPos += 10;
      doc.text(`Project Experience: ${member.projectExperience}`, 10, yPos);
      yPos += 10;
      doc.text(`Technology Experience: ${member.technologyExperience}`, 10, yPos);
      yPos += 10;
      doc.text(`Work Experience: ${member.workExperience.duration}`, 10, yPos);
      yPos += 10;
      doc.text(`Start Year: ${member.workExperience.startYear}`, 10, yPos);
      yPos += 15;
    });

    doc.save("team.pdf");
  };

  return (
    <div className={styles.teamSection}>
      <div className={styles.teamContainer}>
        <h3 className={styles.title}>Team View</h3>
        
        <div className={styles.scrollArea}>
          {team.map((person, index) => (
            <div key={index} className={styles.teamMemberCard}>
              <Card className={styles.card}>
                <div className={styles.cards}>
                  <img src={person.image} className={styles.image} alt={person.username} />
                  <p className={styles.name}>{person.username}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        <div className={styles.bottomArea}>
          <button onClick={handlePrintTeam}>Print Team</button>
          <button onClick={() => clearTeam(consultant)}>Clear</button>
          
        </div>
      </div>
    </div>
  );
};

export default ConsultantTeam;
