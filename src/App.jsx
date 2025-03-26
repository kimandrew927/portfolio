import { useState } from 'react';
import './App.css';
import ImageCard from './ImageCard.jsx';
import CardWithNavigation from './CardWithNavigation.jsx'; // Import the combined component
import "./CardWithNavigation.css";
import './ExperienceCard.css';
import './ProjectCard.css';
function App() {

  return (
    <div className="portfolio">
      <header className="header">
        <h1>Andrew's Portfolio</h1>
        <p>Hello, and welcome to my personal portfolio! I am a rising senior at the University at Buffalo studying a BS in Computer Science </p>
      </header>
      <main className="main-content">
        {/* Flex container for ImageCard and CardWithNavigation */}
        <div className="card-row">
          {/* Image Card */}
          <div className="image-card-container">
            <ImageCard
              imageUrl="/profpic.jpg" // Replace with your image URL
              altText=""
              caption=""
            />
          </div>

           {/* CardWithNavigation */}
          <div className="card-with-navigation-container">
            <CardWithNavigation />
          </div>
        </div>

        {/* Additional Image Card Section */}
       
      </main>
      <footer className="footer">
        <p></p>
      </footer>
    </div>
  );
}

export default App;