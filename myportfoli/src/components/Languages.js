import React, { useEffect, useState, useRef } from 'react';

const skillsData = [
  { title: "Web Development: HTML, CSS, JavaScript, React", level: 80 },
  { title: "Database Management: SQL, MongoDB", level: 10 },
  { title: "Programming Languages: Java, Python, Object Oriented PHP", level: 70 },
  { title: "Software Development: Agile methodologies, Git", level: 90 },
  { title: "Tools: Visual Studio Code, IntelliJ, GitLab", level: 85 }
];

const Languages = () => {
  const [inView, setInView] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true); // Animate when in view
        } else {
          setInView(false); // Reset when out of view
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );
    
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <section id='languages'>
    <div className="skills-container" ref={skillRef}>
      <h2 className='skill-heading'>My Skills</h2>
      {skillsData.map((skill, index) => (
        <div key={index} className="skill">
          <span className="skill-title">{skill.title}</span>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: inView ? `${skill.level}%` : '0%', transition: 'width 1s ease-in-out' }}
            ></div>
          </div>
          <span className="skill-level">{skill.level}%</span>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Languages;
