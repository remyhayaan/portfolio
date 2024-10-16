import React, { useEffect, useRef } from 'react';
import UIDesign from '../../src/assets/ui-design.png';
import WebDesign from '../../src/assets/website-design.png';
import AppDesign from '../../src/assets/app-design.png';
// import Coding from '../../src/assets/coding.png';  // New IT Skill
// import Database from '../../src/assets/database.png';  // New IT Skill

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id='skills' ref={skillsRef}>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>Discover the range of skills and expertise I have.</span>
      <div className='skillBars'>
        {/* IT Skills */}
        <div className='itSkills'>
          <div className='skillBar'>
            <img src={UIDesign} alt='uidesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>UI/UX Design</h2>
              <p>Creating user-centric designs that ensure an intuitive and engaging experience.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={WebDesign} alt='webdesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Website Design</h2>
              <p>Designing responsive and visually appealing websites that provide a seamless user experience across all devices. Skilled in HTML, CSS, and modern design trends.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={AppDesign} alt='appdesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>WebApp Design</h2>
              <p>Designing web applications that are both functional and user-friendly. Focus on creating intuitive interfaces and ensuring optimal performance and accessibility.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src='' alt='coding' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Programming</h2>
              <p>Writing efficient and scalable code in languages like JavaScript, Python, and C.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src='' alt='database' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Database Management</h2>
              <p>Managing databases and ensuring efficient data storage, retrieval, and security.</p>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className='softSkills'>
          <div className='skillBar'>
            <div className='skillBarText'>
              <h2>Communication</h2>
              <p>Clear and effective communication across various platforms.</p>
            </div>
          </div>
          <div className='skillBar'>
            <div className='skillBarText'>
              <h2>Teamwork</h2>
              <p>Collaborative approach to working with teams and stakeholders.</p>
            </div>
          </div>
          <div className='skillBar'>
            <div className='skillBarText'>
              <h2>Problem Solving</h2>
              <p>Creative solutions to overcome technical and operational challenges.</p>
            </div>
          </div>
          <div className='skillBar'>
            <div className='skillBarText'>
              <h2>Time Management</h2>
              <p>Effectively managing time to balance multiple projects and deadlines.</p>
            </div>
          </div>
          <div className='skillBar'>
            <div className='skillBarText'>
              <h2>Adaptability</h2>
              <p>Quickly adjusting to new environments and learning new skills to meet challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
