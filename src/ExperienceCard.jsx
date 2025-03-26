import React, { useState } from 'react';

export default function ExperienceCard() {
  const [expandedExperience, setExpandedExperience] = useState(null);

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Tech Solutions Inc.",
      duration: "Summer 2023",

      details: [
        "Instructed 6 classrooms of 20+ students to review weekly computer organization lecture material, and formulated content-related activities, as well as private office hours 2 times a week",
        "Implemented CI/CD Pipelines and testing for continuous development using Java and JUnit, while participating incode reviews and standups in an AGILE development environment",
        "Utilized Kotlin, Node.js, React, to implement order and responsive payment processing for software targeted to business clientelle"
      ]
    },
    {
      title: "Head Teaching Assistant",
      company: "University at Buffalo SEAS",
      duration: "August 2024 - Febuary 2025",
  
      details: [
        "Instructed 6 classrooms of 20+ students to review weekly computer organization lecture material, and formulated content-related activities, as well as private office hours 2 times a week",
        "Ensured that all TA's were correctly fulfilling their duties properly and in a timely manner, while also taking into account their own personal schedules",
        "Facilitated and organized the processes of creating exams for students as well as proctoring exam settings for students"
      ]
    },
    
    // ... other experiences
  ];

  const handleMoreClick = (index) => {
    setExpandedExperience(index);
  };

  const handleBackClick = () => {
    setExpandedExperience(null);
  };

  return (
    <div className="experience-card">
      <h2>Experience</h2>
      {expandedExperience === null ? (
        <ul>
          {experiences.map((experience, index) => (
            <li key={index}>
              <strong style={{ display: 'block', textAlign: 'center' }}>{experience.title}</strong>
              <p style={{ textAlign: 'center' }}>{experience.company}</p>
              <p style={{ textAlign: 'center' }}>{experience.duration}</p>
              <p>{experience.description}</p>
              <button onClick={() => handleMoreClick(index)}>More</button>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h3 style={{ textAlign: 'center' }}>{experiences[expandedExperience].title}</h3>
          <p style={{ textAlign: 'center' }}>{experiences[expandedExperience].company}</p>
          <p style={{ textAlign: 'center' }}>{experiences[expandedExperience].duration}</p>
          <ul>
            {experiences[expandedExperience].details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <button onClick={handleBackClick}>Back</button>
        </div>
      )}
    </div>
  );
}