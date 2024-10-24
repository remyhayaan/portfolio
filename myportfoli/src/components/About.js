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
      { threshold: 0.5} 
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
    Hi, I’m Nabukenya Rehemah, a dedicated web developer with a strong proficiency in the MERN stack (MongoDB, Express, React, Node.js), CSS, Vanilla JavaScript, PHP, HTML, and MySQL. I thrive on creating dynamic and user-friendly web applications that provide engaging experiences for users.
</p>
<p>
    I have a strong foundation in web development and database management, thanks to my background in Information Systems and Technology. I have applied these skills in various school projects, enhancing my ability to solve real-world challenges. I am also skilled in network administration, ensuring seamless connectivity and performance.
</p>


<p> I am proficient in the Microsoft 365 Productivity suite, enabling me to streamline workflows and enhance collaboration within teams. With a passion for continuous learning and innovation, I am excited to contribute to impactful projects and drive success within a forward-thinking organization. </p>
        </div>

      </div>
    </section>
  );
}

export default About;
