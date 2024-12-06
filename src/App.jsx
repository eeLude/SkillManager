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
      image: "https://media.istockphoto.com/id/1388645967/photo/pensive-thoughtful-contemplating-caucasian-young-man-thinking-about-future-planning-new.jpg?s=612x612&w=0&k=20&c=Keax_Or9RivnYV_9VoOLjknWQP8iaxYXc4jS9rwBmcc="
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
      image: "https://media.istockphoto.com/id/1388645967/photo/pensive-thoughtful-contemplating-caucasian-young-man-thinking-about-future-planning-new.jpg?s=612x612&w=0&k=20&c=Keax_Or9RivnYV_9VoOLjknWQP8iaxYXc4jS9rwBmcc="

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
      image: "https://media.istockphoto.com/id/1388645967/photo/pensive-thoughtful-contemplating-caucasian-young-man-thinking-about-future-planning-new.jpg?s=612x612&w=0&k=20&c=Keax_Or9RivnYV_9VoOLjknWQP8iaxYXc4jS9rwBmcc="

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
    image: "https://media.istockphoto.com/id/1388645967/photo/pensive-thoughtful-contemplating-caucasian-young-man-thinking-about-future-planning-new.jpg?s=612x612&w=0&k=20&c=Keax_Or9RivnYV_9VoOLjknWQP8iaxYXc4jS9rwBmcc="

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
  image: "https://media.istockphoto.com/id/1388645967/photo/pensive-thoughtful-contemplating-caucasian-young-man-thinking-about-future-planning-new.jpg?s=612x612&w=0&k=20&c=Keax_Or9RivnYV_9VoOLjknWQP8iaxYXc4jS9rwBmcc="

},
];


function App() {
 

  return (
    <ConsultantList consult_data={consult_data}/>
  );
}

export default App;