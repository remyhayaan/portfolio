import React, {useState, useEffect, useRef} from 'react';
import hg from'../assets/remy1.jpg'


function About() {
    const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`}
        ref={aboutRef}>
      <div className="about-container">
        
        {/* Image Section */}
        <div className="about-image">
          <img
            src={hg}
            alt="About Me"
            className="image"
          />
        </div>

        {/* About Me Section */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm [Your Name], a passionate web developer skilled in React, Tailwind CSS, and more.
            I enjoy creating dynamic web applications and have experience working on various projects
            related to livestock farming, fashion blogs, and portfolio pages.
          </p>
          <p>
            My expertise includes JavaScript, C programming, and network administration. I'm also
            proficient in Microsoft 365 Productivity suite and office equipment management.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
