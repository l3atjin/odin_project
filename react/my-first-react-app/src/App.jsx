import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExperienceList from './components/ExperienceList';

function App() {
  // Think about how to structure your application into components. Your application should include:
  // A section to add general information like name, email and phone number.
  // A section to add your educational experience (school name, title of study and date of study)
  // A section to add practical experience (company name, position title, main responsibilities of your jobs, 
  // date from and until when you worked for that company)
  const [generalInfo, setGeneralInfo] = useState({
    name: "John",
    email: "john@doe.com",
    phone: "555555555"
  });

  const [experiences, setExperiences] = useState([{
    company: "Apple",
    position: "Software Engineer",
    duty: "Built web apps, tested some code and machine learning",
    dateFrom: "2024",
    dateTo: "2026"
  }]);
  const [educations, setEducations] = useState([]);

  

  const handleInfoSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone } = event.target.elements;

    setGeneralInfo((prevState) => {
      return {
        ...prevState,
        name: name.value,
        email: email.value,
        phone: phone.value,
      }
    })
    // Update the generalInfo state with the form data on submit
  }

  const handleXPSubmit = (event) => {
    event.preventDefault();
    const { company, position, dateFrom, dateTo, duty } = event.target.elements;

    setExperiences((prevState) => {
      const newExperience = {
        company: company.value,
        position: position.value,
        duty: duty.value,
        dateFrom: dateFrom.value,
        dateTo: dateTo.value,
      }
      return [
        ...prevState,
        newExperience
      ]
    })
    // Update the generalInfo state with the form data on submit
  }

  return (
    <>
      <h1>General info</h1>
      <div className='info'>
        <p>Name: {generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
      </div>
      <div>
        <form onSubmit={handleInfoSubmit}>
          <input name="name" placeholder='Name'/>
          <input name="email" placeholder='Email'/>
          <input name="phone" placeholder='Phone'/>
          <input type="submit"/>
        </form>
      </div>
      <h1>Work Experience</h1>
      {
        experiences.length === 0 ? <p>No experience added!</p> : 
        <ExperienceList experiences={experiences}/>
      }
      <div>
        <form onSubmit={handleXPSubmit}>
          <input name="company" placeholder='Company Name'/>
          <input name="position" placeholder='Position'/>
          <input name="dateFrom" placeholder='From'/>
          <input name="dateTo" placeholder='To'/>
          <input name="duty" placeholder='Duty'/>
          <input type="submit"/>
        </form>
      </div>
      <h1>Education</h1>
      {
        educations.length === 0 ? <p>No education added!</p> : 
        <EducationList educations={educations}/>
      }
    </>
  )
}

export default App
