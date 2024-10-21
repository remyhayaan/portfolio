import React, { useEffect, useState, useRef } from 'react';

const skillsData = [
  { title: "Web Development: HTML, CSS, JavaScript, React, ", level: 80 },
  { title: "Database Management: SQL, MongoDB", level: 90 },
  { title: "Programming Languages: PHP, Nodejs, Express", level: 70 },
  { title: "Software Development: Agile methodologies, Git", level: 90 },
  { title: "Tools: Visual Studio Code, GitLab", level: 95 },
];

const Languages = () => {
  const [inView, setInView] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
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
