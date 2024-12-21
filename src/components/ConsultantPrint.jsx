import React from "react";
import jsPDF from "jspdf";

const PrintConsultant = ({ consultant, loggedInUser }) => {
  const handlePrint = () => {
    if (
      loggedInUser?.role === "admin" ||
      loggedInUser?.username === consultant.username
    ) {
      const doc = new jsPDF();

      doc.setFontSize(20);
      doc.text(`Consultant: ${consultant.username}`, 10, 10);

      doc.setFontSize(12);
      doc.text(`Education Level: ${consultant.educationLevel}`, 10, 30);
      doc.text(`Degree Program: ${consultant.degreeProgram}`, 10, 40);
      doc.text(`Graduation Year: ${consultant.graduationYear}`, 10, 50);
      doc.text(`Certifications: ${consultant.certifications}`, 10, 60);
      doc.text(`Courses: ${consultant.courses}`, 10, 70);
      doc.text(`Project Experience: ${consultant.projectExperience}`, 10, 80);
      doc.text(`Technology Experience: ${consultant.technologyExperience}`, 10, 90);
      doc.text(`Work Experience: ${consultant.workExperience.duration}`, 10, 100);

      doc.save(`${consultant.username}-card.pdf`);
    } else {
      alert("You do not have permission to print this consultant's details.");
    }
  };

  return (
    <button onClick={handlePrint}>Print to PDF</button>
  );
};

export default PrintConsultant;
