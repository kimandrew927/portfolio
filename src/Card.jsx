import ProjectCard from './ProjectCard.jsx';
import ExperienceCard from './ExperienceCard.jsx';
import SkillsCard from './SkillsCard.jsx';

export default function Card({ currentCard, setCurrentCard }) {
  return (
    <div className="card">
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
      <div className="card-content">
        {currentCard === 'projects' && <ProjectCard />}
        {currentCard === 'experience' && <ExperienceCard />}
        {currentCard === 'skills' && <SkillsCard />}
      </div>
    </div>
  );
}