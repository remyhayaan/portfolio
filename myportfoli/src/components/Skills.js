import React, { useEffect, useRef } from 'react';
import UIDesign from '../../src/assets/ui-design.png';
import WebDesign from '../../src/assets/website-design.png';
import AppDesign from '../../src/assets/app-design.png';

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
      <span className='skillTitle'>Skills</span>
      <span className='skillDesc'>Discover the range of skills and expertise I have.</span>
      <div className='skillBars'>
        {/* IT Skills */}
        <div className='itSkills'>
          <div className='skillBar'>
            <img src={UIDesign} alt='UI Design' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>UI/UX Design</h2>
              <p>Creating user-centric designs that ensure an intuitive and engaging experience.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={WebDesign} alt='Web Design' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Website Design</h2>
              <p>Designing responsive and visually appealing websites that provide a seamless user experience across all devices. </p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={AppDesign} alt='App Design' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>WebApp Design</h2>
              <p>Designing web applications that are both functional and user-friendly. Focusing on  optimal performance.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src='' alt='coding' className='skillBarImg' /> {/* Placeholder for coding */}
            <div className='skillBarText'>
            <h2>Network Administration</h2> <p> Skilled in configuring, managing network systems, troubleshooting connectivity issues and implementing network protocols. 
               </p>         </div>
          </div>
          <div className='skillBar'>
            <img src='' alt='database' className='skillBarImg' /> {/* Placeholder for database */}
            <div className='skillBarText'>
              <h2>Database Management</h2>
              <p> Proficient in  designing architectures, managing databases for data storage, retrieval, and security. 
                 </p>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className='softSkills'>
          <div className='skillBar'>
            <div className='skillBarText'>
              <h2>Communication</h2>
              <p>Demonstrated ability to communicate clearly and effectively with 
                my team members hence fostering collaboration.</p>
            </div>
          </div>
          <div className='skillBar'>
            <div className='skillBarText'>
              <h2>Teamwork</h2>
              <p>Committed to fostering a collaborative environment
                 through effective teamwork with colleagues and stakeholders
                  through believing in diverse perspectives </p>
            </div>
          </div>
          <div className='skillBar'>
            <div className='skillBarText'>
              <h2>Problem Solving</h2>
              <p>Able to create creative solutions to 
                address complex technical and operational challenges thus  implementing effective strategies.</p>
            </div>
          </div>
          <div className='skillBar'>
            <div className='skillBarText'>
              <h2>Time Management</h2>
              <p> Proficient in effectively managing time to balance multiple projects
                 and meet deadlines without compromising quality
                  through prioritizing tasks strategically, utilizing tools and techniques hence
                 enhancing productivity.</p>
            </div>
          </div>
          <div className='skillBar'>
            <div className='skillBarText'>
              <h2>Adaptability</h2>
              <p>Highly adaptable and able to quickly adjust to new 
                environments and evolving technologies. I embrace change
                 as an opportunity for growth, actively seeking 
                to learn new skills and approaches to meet challenges head-on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
