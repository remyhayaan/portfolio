import React, { useEffect, useRef, useState } from 'react';
import Portfolio1 from '../assets/remy.jpg';
import Portfolio from '../assets/Portfolio.PNG';

function Works() {
  const [isVisible, setIsVisible] = useState(false);
  const worksRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            if (worksRef.current) observer.unobserve(worksRef.current); // Unobserve after triggering once
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (worksRef.current) {
      observer.observe(worksRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (worksRef.current) {
        observer.unobserve(worksRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section
      ref={worksRef}
      id="works"
      className={`works-section ${isVisible ? 'fade-in' : ''}`}
    >
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        Below are the projects I have worked on showcasing my skills
      </span>
      <div className="worksImgs">
        <div className="workItem">
          <img src={Portfolio1} alt="Portfolio Project 1" className="worksImg" />
          <p className="pDesc">
            <a href="https://remyhayaan.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
              My Portfolio
            </a>
          </p>
        </div>
        <div className="workItem">
          <img src={Portfolio} alt="VetApp" className="worksImg" />
          <p className="pDesc">
            <a href="https://vet-app-flax.vercel.app/" target="_blank" rel="noopener noreferrer">
              VetApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Works;
