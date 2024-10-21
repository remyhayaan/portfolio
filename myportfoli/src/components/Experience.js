import React from "react";
import { useInView } from "react-intersection-observer";


const WorkExperience = () => {
  const experiences = [
    
    {
      "role": "Internship Student",
      "company": "Stratcom Communication and IT Technologies",
      "duration": "May, 2023 - August, 2023",
      "description": "Developed and maintained web applications, collaborated with cross-functional teams, optimized application performance.Incorporated responsive design principles to ensure compatibility across various devices and screen sizes, enhancing user experience.Created visually appealing graphics and multimedia elements for websites and promotional materials.",
    "description2":"Contributed to networking tasks, including configuring and troubleshooting network devices, managing firewalls, ensuring network security, and optimizing network performance to support high-availability systems. Actively participated in network monitoring and diagnostics to ensure seamless connectivity across systems.",
    }
    

  ];

  // Intersection Observer setup without `triggerOnce`
  const { ref, inView } = useInView({
    threshold: 0.05, // 20% of the element is in view
  });

  return (
    <div className="work-experience">
     <h2 style={{ 
            fontFamily: 'Arial, sans-serif', 
            fontSize: '30px', 
            color: 'white', 
             textAlign: 'center',
            marginBottom: '10px', 
            borderBottom: '2px solid brown', 
            paddingBottom: '5px' 
        }}>
            Work Experience
        </h2>
      <div ref={ref} className={`experience-list ${inView ? "visible" : "hidden"}`}>
        {experiences.map((experience, index) => (
          <div key={index} className="experience">
            <h3>{experience.role}</h3>
            <h4>{experience.company}</h4>
            <p>{experience.duration}</p>
            <p>{experience.description}</p>
            <p>{experience.description2}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
