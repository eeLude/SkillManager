import React, { useState, useEffect } from 'react';
import styles from './EditConsultant.module.css';

const EditConsultant = ({ consultant, onSave, onCancel }) => {
    console.log("EditConsultant called")
  const [editedConsultant, setEditedConsultant] = useState({ ...consultant });

  useEffect(() => {
    setEditedConsultant({ ...consultant }); // Reset form when consultant changes
  }, [consultant]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedConsultant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log('Saving consultant:', editedConsultant);
    onSave(editedConsultant); // handleEdit = onSave
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.title}>Edit Consultant</h3>

      <div className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={editedConsultant.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={editedConsultant.role}
            onChange={handleChange}
            placeholder="Role"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="educationLevel">Education Level</label>
          <input
            type="text"
            id="educationLevel"
            name="educationLevel"
            value={editedConsultant.educationLevel}
            onChange={handleChange}
            placeholder="Education Level"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="degreeProgram">Degree Program</label>
          <input
            type="text"
            id="degreeProgram"
            name="degreeProgram"
            value={editedConsultant.degreeProgram}
            onChange={handleChange}
            placeholder="Degree Program"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="graduationYear">Graduation Year</label>
          <input
            type="text"
            id="graduationYear"
            name="graduationYear"
            value={editedConsultant.graduationYear}
            onChange={handleChange}
            placeholder="Graduation Year"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="certifications">Certifications</label>
          <input
            type="text"
            id="certifications"
            name="certifications"
            value={editedConsultant.certifications}
            onChange={handleChange}
            placeholder="Certifications"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="courses">Courses</label>
          <input
            type="text"
            id="courses"
            name="courses"
            value={editedConsultant.courses}
            onChange={handleChange}
            placeholder="Courses"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="projectExperience">Project Experience</label>
          <input
            type="text"
            id="projectExperience"
            name="projectExperience"
            value={editedConsultant.projectExperience}
            onChange={handleChange}
            placeholder="Project Experience"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="technologyExperience">Technology Experience</label>
          <input
            type="text"
            id="technologyExperience"
            name="technologyExperience"
            value={editedConsultant.technologyExperience}
            onChange={handleChange}
            placeholder="Technology Experience"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="workExperienceDuration">Work Experience Duration</label>
          <input
            type="text"
            id="workExperienceDuration"
            name="workExperienceDuration"
            value={editedConsultant.workExperience.duration}
            onChange={(e) => {
              setEditedConsultant((prev) => ({
                ...prev,
                workExperience: { ...prev.workExperience, duration: e.target.value },
              }));
            }}
            placeholder="Work Experience Duration"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="workExperienceStartYear">Work Experience Start Year</label>
          <input
            type="text"
            id="workExperienceStartYear"
            name="workExperienceStartYear"
            value={editedConsultant.workExperience.startYear}
            onChange={(e) => {
              setEditedConsultant((prev) => ({
                ...prev,
                workExperience: { ...prev.workExperience, startYear: e.target.value },
              }));
            }}
            placeholder="Work Experience Start Year"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="image">Profile Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={editedConsultant.image}
            onChange={handleChange}
            placeholder="Image URL"
          />
        </div>

        <div className={styles.buttonContainer}>
          <button onClick={handleSave} className={styles.saveButton}>Save</button>
          <button onClick={onCancel} className={styles.cancelButton}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditConsultant;