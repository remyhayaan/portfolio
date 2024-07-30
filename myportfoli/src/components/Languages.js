import React, { useState } from 'react';
import JavaScriptIcon from '../assets/javascript.png';
import HTMLIcon from '../assets/html.png';
import ReactIcon from '../assets/react.png';
import SqlIcon from '../assets/sql.png';
import CssIcon from '../assets/css.png';

// Import other language icons as needed

const languages = [
  { name: 'JavaScript', icon: JavaScriptIcon, proficiency: 50 },
  { name: 'HTML', icon: HTMLIcon, proficiency: 90 },
  { name: 'ReactJs', icon: ReactIcon, proficiency: 70 },
  { name: 'Sql', icon: SqlIcon, proficiency: 60 },
  { name: 'Css', icon: CssIcon, proficiency: 80 },
  // Add more languages as needed
];

function Languages() {
  const [activeTab, setActiveTab] = useState(languages[0]);

  return (
    <div id='programming-languages'>
      <h1 className='sectionTitle'>Programming Languages I Know</h1>
      <div className='tabs'>
        {languages.map((language, index) => (
          <div
            key={index}
            className={`tab ${activeTab.name === language.name ? 'active' : ''}`}
            onClick={() => setActiveTab(language)}
          >
            <img src={language.icon} alt={language.name} className='tabIcon' />
            <span>{language.name}</span>
          </div>
        ))}
      </div>
      <div className='tabContent'>
        <h2>{activeTab.name}</h2>
        <div className='proficiency'>
          <div className='proficiencyBar' style={{ width: `${activeTab.proficiency}%` }}></div>
          <span>{activeTab.proficiency}%</span>
        </div>
      </div>
    </div>
  );
}

export default Languages;
