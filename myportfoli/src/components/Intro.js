import React, { useState, useEffect } from 'react';
import btnImg from '../../src/assets/hireme.png';
import cv from '../../src/assets/Nabukenya-Rehemah-CV.docx';
import bg from '../../src/assets/remy1.jpg'; // Profile image
import smallScreenImg from '../../src/assets/bw.jfif'; // New image for smaller screens

function Intro() {
  const roles = ["Frontend Development", "Database Management", "Network Administration", "System Development"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (typing && charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + roles[roleIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!typing && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (charIndex === 0 && !typing) {
      setTyping(true);
      setRoleIndex(prev => (prev + 1) % roles.length);
    } else if (charIndex === roles[roleIndex].length && typing) {
      const timeout = setTimeout(() => {
        setTyping(false);
      }, 2000); // Pause before deleting text
      return () => clearTimeout(timeout);
    }
  }, [charIndex, typing, roleIndex, roles]);

  return (
    <section id='intro'>
      <div className='introDiv'>
        <img src={bg} alt='Profile' className='bg' />
        {/* This is the new image for small screens */}
        <img src={smallScreenImg} alt="Small Screen" className='bgSmall' />
        <div className='introContent'>
          <span className='hello'>Hey there..</span>
          <span className='introText'>
            I'm <span className='introName'>Nabukenya Rehemah</span> <br />
            <p className='introPara'>I am experienced in </p>
            {displayedText}
          </span>
          <a href={cv} download="CV.docx">
            <button className='btn'>
              <img src={btnImg} alt='button' className='btnImg' /> Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
