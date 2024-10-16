import React, { useState, useEffect } from 'react';
import btnImg from '../../src/assets/hireme.png';
import cv from '../../src/assets/CV.docx'; // Add your CV document here
import bg from '../../src/assets/remy1.jpg'; // Your profile image

function Intro() {
  const roles = ["Frontend Developer", "Database Management", "System Development"];
  const [roleIndex, setRoleIndex] = useState(0); // Track the current role
  const [displayedText, setDisplayedText] = useState(''); // Text being displayed
  const [charIndex, setCharIndex] = useState(0); // Track the character being typed
  const [typing, setTyping] = useState(true); // Whether the text is typing or deleting

  useEffect(() => {
    if (typing && charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Delay between typing each character
      return () => clearTimeout(timeout);
    } else if (!typing && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 100); // Delay between deleting each character
      return () => clearTimeout(timeout);
    } else if (charIndex === 0 && !typing) {
      setTyping(true);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (charIndex === roles[roleIndex].length && typing) {
      const timeout = setTimeout(() => {
        setTyping(false);
      }, 2000); // Pause before deleting text
      return () => clearTimeout(timeout);
    }
  }, [charIndex, typing, roleIndex]);

  return (
    <section id='intro'>
      <div className='introDiv'>
        {/* New background image for small screens */}
        <img src='https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.gbubbgENRLjE3WP580PewQAAAA%26pid%3DApi&sp=1729073966T924e87a4a2030ffd6ea0766c4c42e4c52bea682dfbdf2580eb8c66e39a03d259' alt='Background' className='bgSmall' /> {/* New background image */}
        
        {/* Profile image for larger screens */}
        <img src={bg} alt='Profile' className='bg' /> {/* Profile image */}
        
        <div className='introContent'>
          <span className='hello'>Hey there..</span>
          <span className='introText'>I'm <span className='introName'>
            <br />Nabukenya Rehemah</span> <br/>
            <p className='introPara'>I am experienced in </p>
            {displayedText}</span>
          
          {/* New Download CV button */}
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
