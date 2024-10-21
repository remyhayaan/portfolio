import React, { useEffect, useRef, useState } from 'react';
import Portfolio1 from '../assets/remy.jpg';
import Portfolio2 from '../assets/td.png';

function Works() {
  const [isVisible, setIsVisible] = useState(false);
  const worksRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true); // Set to true when visible
            observer.unobserve(worksRef.current); // Stop observing once visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (worksRef.current) {
      observer.observe(worksRef.current);
    }

    return () => {
      if (worksRef.current) {
        observer.unobserve(worksRef.current);
      }
    };
  }, [isVisible]); // Add isVisible as a dependency

  return (
    <section
      ref={worksRef}
      id='works'
      className={`works-section ${isVisible ? 'fade-in' : ''}`}
    >
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>Below are the projects I have worked on showcasing my skills</span>
      <div className='worksImgs'>
        <div className='workItem'>
          <img src={Portfolio1} alt='Portfolio Project 1' className='worksImg' />
          <p className='pDesc'><a href='https://remyhayaan.github.io/portfolio/'>My Portfolio</a></p>
        </div>
        <div className='workItem'>
          <img src={Portfolio2} alt='ToDo List App' className='worksImg' />
          <p className='pDesc'><a href='https://remyhayaan.github.io/ToDo-list/'>ToDo-List App</a></p>
        </div>
      </div>
    </section>
  );
}

export default Works;
