import './App.css'
import "./components/consultant.jsx"


const consult_data = [
  {
      educationLevel: "Alempi korkeakouluaste",
      degreeProgram: "Tradenomi, Tietojenkäsittely",
      graduationYear: "2024",
      certifications: "Cisco Ethical Hacking",
      courses: "React fundamentals",
      projectExperience: "Web development",
      technologyExperience: "Javascript, Python, C#",
      workExperience: {
          duration: "2 years",
          startYear: 2022,
      },
  },
  {
      educationLevel: "Ylempi korkeakouluaste",
      degreeProgram: "KTM, Liiketalous",
      graduationYear: "2023",
      certifications: "Google Analytics",
      courses: "Advanced React",
      projectExperience: "E-commerce platform development",
      technologyExperience: "HTML, CSS, React",
      workExperience: {
          duration: "3 years",
          startYear: 2020,
      },
  },
  {
      educationLevel: "Alempi korkeakouluaste",
      degreeProgram: "Tietotekniikan insinööri",
      graduationYear: "2022",
      certifications: "AWS Cloud Practitioner",
      courses: "Full-Stack Development",
      projectExperience: "Mobile app development",
      technologyExperience: "JavaScript, Kotlin, SQL",
      workExperience: {
          duration: "1.5 years",
          startYear: 2021,
      },
  },
];


function App() {
  const consultant = consult_data[0]; // Access the first object in the array

  return (
    <div>
      <p>{consultant.educationLevel}</p>
      <p>Degree Program: {consultant.degreeProgram}</p>
      <p>Graduation Year: {consultant.graduationYear}</p>
      <p>Certifications: {consultant.certifications}</p>
      <p>Courses: {consultant.courses}</p>
      <p>Project Experience: {consultant.projectExperience}</p>
      <p>Technology Experience: {consultant.technologyExperience}</p>
      <p>Work Experience Duration: {consultant.workExperience.duration}</p>
      <p>Work Experience Start Year: {consultant.workExperience.startYear}</p>
    </div>
  );
}

export default App;