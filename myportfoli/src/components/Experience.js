import React from "react";
import { useInView } from "react-intersection-observer";


const WorkExperience = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "Tech Innovators Ltd",
      duration: "June 2022 - Present",
      description: "Developed and maintained web applications, collaborated with cross-functional teams, and optimized application performance."
    },
    {
      role: "Frontend Developer",
      company: "Creative Solutions",
      duration: "Jan 2021 - May 2022",
      description: "Designed and implemented UI components for multiple client projects, ensuring mobile responsiveness and high accessibility."
    },
    {
      role: "Intern Web Developer",
      company: "Future Technologies",
      duration: "June 2020 - Dec 2020",
      description: "Assisted in the development of e-commerce websites, improved website performance, and fixed bugs across various projects."
    }
  ];

  // Intersection Observer setup without `triggerOnce`
  const { ref, inView } = useInView({
    threshold: 0.2, // 20% of the element is in view
  });

  return (
    <div className="work-experience">
      <h2>Work Experience</h2>
      <div ref={ref} className={`experience-list ${inView ? "visible" : "hidden"}`}>
        {experiences.map((experience, index) => (
          <div key={index} className="experience">
            <h3>{experience.role}</h3>
            <h4>{experience.company}</h4>
            <p>{experience.duration}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
