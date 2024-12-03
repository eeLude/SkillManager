import './App.css'
import "./components/ConsultantPerson.jsx"
import ConsultantList from './components/ConsultantList.jsx';


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
 

  return (
    <ConsultantList data={consult_data}/>
  );
}

export default App;