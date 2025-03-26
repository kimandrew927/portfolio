import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import ExperienceCard from './ExperienceCard.jsx';
import SkillsCard from './SkillsCard.jsx';
import './CardWithNavigation.css'; // Optional: for styling

const CardWithNavigation = () => {
  const [currentCard, setCurrentCard] = React.useState('projects'); // State to track the active card

  return (
    <div className="card-with-navigation">
      {/* Navigation Bar */}
      <div className="card-navigation">
        <button
          onClick={() => setCurrentCard('projects')}
          className={currentCard === 'projects' ? 'active' : ''}
        >
          Projects
        </button>
        <button
          onClick={() => setCurrentCard('experience')}
          className={currentCard === 'experience' ? 'active' : ''}
        >
          Experience
        </button>
        <button
          onClick={() => setCurrentCard('skills')}
          className={currentCard === 'skills' ? 'active' : ''}
        >
          Skills
        </button>
      </div>

      {/* Card Content */}
      <div className="card-content">
        {currentCard === 'projects' && <ProjectCard />}
        {currentCard === 'experience' && <ExperienceCard />}
        {currentCard === 'skills' && <SkillsCard />}
      </div>
    </div>
  );
};

export default CardWithNavigation;