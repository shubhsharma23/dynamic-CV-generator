import React, { useEffect, useState } from "react";
import { getCVDataFromLocalStorage } from "../utils/localStorageAccess";
import "./HomePage.css";

function Homepage() {
  const [cvData, setCVData] = useState(null);

  useEffect(() => {
    // Fetch data from local storage
    const storedCVData = getCVDataFromLocalStorage();
    setCVData(storedCVData);
  }, []);

  return (
    <div className="homepage">
      <div className="cv-container">
        <div className="left-column">
          <section className="personal-info">
            <h2>Personal Information</h2>
            <p>
              <strong>Name:</strong> {cvData?.personalInfo.name}
            </p>
            <p>
              <strong>Email:</strong> {cvData?.personalInfo.email}
            </p>
            <p>
              <strong>Phone:</strong> {cvData?.personalInfo.phone}
            </p>
            <p>
              <strong>Address:</strong> {cvData?.personalInfo.address}
            </p>
          </section>

          <section className="education">
            <h2>Education</h2>
            <p>
              <strong>Institution:</strong> {cvData?.education.institution}
            </p>
            <p>
              <strong>Degree:</strong> {cvData?.education.degree}
            </p>
            <p>
              <strong>Year:</strong> {cvData?.education.year}
            </p>
          </section>

          <section className="summary">
            <h2>Summary</h2>
            <p>{cvData?.summary.detail}</p>
            <ul>
              {cvData?.summary.expertise.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>
          </section>

          <section className="certifications">
            <h2>Certifications</h2>
            {cvData?.certifications.map((cert, index) => (
              <div key={index}>
                <p>
                  <strong>Name:</strong> {cert.name}
                </p>
                <p>
                  <strong>Issuer:</strong> {cert.issuer}
                </p>
                <p>
                  <strong>Year:</strong> {cert.year}
                </p>
              </div>
            ))}
          </section>
        </div>

        <div className="right-column">
          <section className="work-experience">
            <h2>Work Experience</h2>
            {cvData?.workExperience.map((work, index) => (
              <div key={index}>
                <p>
                  <strong>Company:</strong> {work.company}
                </p>
                <p>
                  <strong>Position:</strong> {work.position}
                </p>
                <p>
                  <strong>Duration:</strong> {work.duration}
                </p>
                <ul>
                  {work.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="projects">
            <h2>Projects</h2>
            {cvData?.projects.map((project, index) => (
              <div key={index}>
                <p>
                  <strong>Name:</strong> {project.name}
                </p>
                <p>
                  <strong>Description:</strong> {project.description}
                </p>
                <p>
                  <strong>Duration:</strong> {project.duration}
                </p>
              </div>
            ))}
          </section>

          <section className="skills">
            <h2>Skills</h2>
            <ul>
              {cvData?.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
