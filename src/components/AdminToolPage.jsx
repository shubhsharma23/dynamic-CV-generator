// AdminPage.js

import React, { useEffect, useState } from "react";
import {
  getCVDataFromLocalStorage,
  updateCVDataInLocalStorage,
} from "../utils/localStorageAccess";
import "./AdminPage.css";

function AdminPage() {
  const [cvData, setCVData] = useState(null);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Fetch data from local storage
    const storedCVData = getCVDataFromLocalStorage();
    setFormData((prevFormData) => {
      const updatedFormData = { ...storedCVData };
      if (updatedFormData) {
        if (!Array.isArray(updatedFormData.workExperience)) {
          updatedFormData.workExperience = [];
        }
        if (!Array.isArray(updatedFormData.projects)) {
          updatedFormData.projects = [];
        }
        if (!Array.isArray(updatedFormData.certifications)) {
          updatedFormData.certifications = [];
        }
      }
      return updatedFormData;
    });
    setCVData(storedCVData);
  }, []);

  const handleSummaryExpertiseChange = (e, index) => {
    const newExpertise = [...formData.summary.expertise];
    newExpertise[index] = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      summary: {
        ...prevState.summary,
        expertise: newExpertise,
      },
    }));
  };

  const handleSkillChange = (e, index) => {
    const newSkills = [...formData.skills];
    newSkills[index] = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      skills: newSkills,
    }));
  };

  const handleInputChange = (e, section, index) => {
    const { name, value } = e.target;
    if (
      section === "personalInfo" ||
      section === "education" ||
      section === "summary"
    ) {
      setFormData((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [name]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [section]: prevState[section].map((item, i) =>
          i === index ? { ...item, [name]: value } : item
        ),
      }));
    }
  };

  const handleWorkExperienceChange = (e, index, field, responsibilityIndex) => {
    const { name, value } = e.target;
    if (field === "responsibility") {
      setFormData((prevState) => ({
        ...prevState,
        workExperience: prevState.workExperience.map((item, i) =>
          i === index
            ? {
                ...item,
                responsibilities: item.responsibilities.map((res, resIndex) =>
                  resIndex === responsibilityIndex ? value : res
                ),
              }
            : item
        ),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        workExperience: prevState.workExperience.map((item, i) =>
          i === index ? { ...item, [name]: value } : item
        ),
      }));
    }
  };

  const handleAddResponsibility = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      workExperience: prevState.workExperience.map((item, i) =>
        i === index
          ? { ...item, responsibilities: [...item.responsibilities, ""] }
          : item
      ),
    }));
  };

  const handleSaveChanges = () => {
    // Update CV data in local storage
    updateCVDataInLocalStorage(formData);
    // Update state to reflect changes
    setCVData({ ...formData });
  };

  return (
    <div className="admin-page">
      <div className="save-changes-container">
        <h1>Admin Page</h1>
        <button onClick={handleSaveChanges}>Save Changes</button>
      </div>
      {cvData && formData && (
        <div className="form-container">
          <div className="left-section">
            {/* Personal Information */}
            <h2>Personal Information</h2>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.personalInfo.name}
              onChange={(e) => handleInputChange(e, "personalInfo")}
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.personalInfo.email}
              onChange={(e) => handleInputChange(e, "personalInfo")}
            />
            <br />
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.personalInfo.phone}
              onChange={(e) => handleInputChange(e, "personalInfo")}
            />
            <br />
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.personalInfo.address}
              onChange={(e) => handleInputChange(e, "personalInfo")}
            />
            <br />

            {/* Education */}
            <h2>Education</h2>
            <label htmlFor="institution">Institution:</label>
            <input
              type="text"
              id="institution"
              name="institution"
              value={formData.education.institution}
              onChange={(e) => handleInputChange(e, "education")}
            />
            <br />
            <label htmlFor="degree">Degree:</label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={formData.education.degree}
              onChange={(e) => handleInputChange(e, "education")}
            />
            <br />
            <label htmlFor="year">Year:</label>
            <input
              type="text"
              id="year"
              name="year"
              value={formData.education.year}
              onChange={(e) => handleInputChange(e, "education")}
            />
            <br />

            {/* Summary */}
            <h2>Summary</h2>
            <label htmlFor="summaryDetail">Detail:</label>
            <textarea
              id="summaryDetail"
              name="detail"
              value={formData.summary.detail}
              onChange={(e) => handleInputChange(e, "summary")}
            />
            <br />
            <label>Expertise:</label>
            {formData.summary.expertise.map((expertise, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={expertise}
                  onChange={(e) => handleSummaryExpertiseChange(e, index)}
                />
                <br />
              </div>
            ))}

            {/* Certifications */}
            <h2>Certifications</h2>
            {formData.certifications.map((cert, index) => (
              <div key={index}>
                <label htmlFor={`certName${index}`}>{`Certificate ${
                  index + 1
                }:`}</label>
                <input
                  type="text"
                  id={`certName${index}`}
                  name={`name`}
                  value={cert.name}
                  onChange={(e) =>
                    handleInputChange(e, "certifications", index)
                  }
                />
                <br />
                <label htmlFor={`certIssuer${index}`}>Issuer:</label>
                <input
                  type="text"
                  id={`certIssuer${index}`}
                  name={`issuer`}
                  value={cert.issuer}
                  onChange={(e) =>
                    handleInputChange(e, "certifications", index)
                  }
                />
                <br />
                <label htmlFor={`certYear${index}`}>Year:</label>
                <input
                  type="text"
                  id={`certYear${index}`}
                  name={`year`}
                  value={cert.year}
                  onChange={(e) =>
                    handleInputChange(e, "certifications", index)
                  }
                />
                <br />
              </div>
            ))}
          </div>

          <div className="right-section">
            {/* Work Experience */}
            <h2>Work Experience</h2>
            {formData.workExperience.map((work, index) => (
              <div key={index}>
                <label htmlFor={`company${index}`}>{`Company ${
                  index + 1
                }:`}</label>
                <input
                  type="text"
                  id={`company${index}`}
                  name="company"
                  value={work.company}
                  onChange={(e) =>
                    handleWorkExperienceChange(e, index, "company")
                  }
                />
                <br />
                <label htmlFor={`position${index}`}>Position:</label>
                <input
                  type="text"
                  id={`position${index}`}
                  name="position"
                  value={work.position}
                  onChange={(e) =>
                    handleWorkExperienceChange(e, index, "position")
                  }
                />
                <br />
                <label htmlFor={`duration${index}`}>Duration:</label>
                <input
                  type="text"
                  id={`duration${index}`}
                  name="duration"
                  value={work.duration}
                  onChange={(e) =>
                    handleWorkExperienceChange(e, index, "duration")
                  }
                />
                <br />
                <label>Responsibilities:</label>
                {work.responsibilities.map((responsibility, resIndex) => (
                  <div key={resIndex}>
                    <input
                      type="text"
                      value={responsibility}
                      onChange={(e) =>
                        handleWorkExperienceChange(
                          e,
                          index,
                          "responsibility",
                          resIndex
                        )
                      }
                    />
                    <br />
                  </div>
                ))}
                <button onClick={() => handleAddResponsibility(index)}>
                  Add Responsibility
                </button>
                <br />
                <br />
              </div>
            ))}

            {/* Projects */}
            <h2>Projects</h2>
            {formData.projects.map((project, index) => (
              <div key={index}>
                <label htmlFor={`projectName${index}`}>{`Project ${
                  index + 1
                }:`}</label>
                <input
                  type="text"
                  id={`projectName${index}`}
                  name={`name`}
                  value={project.name}
                  onChange={(e) => handleInputChange(e, "projects", index)}
                />
                <br />
                <label htmlFor={`projectDescription${index}`}>
                  Description:
                </label>
                <input
                  type="text"
                  id={`projectDescription${index}`}
                  name={`description`}
                  value={project.description}
                  onChange={(e) => handleInputChange(e, "projects", index)}
                />
                <br />
                <label htmlFor={`projectDuration${index}`}>Duration:</label>
                <input
                  type="text"
                  id={`projectDuration${index}`}
                  name={`duration`}
                  value={project.duration}
                  onChange={(e) => handleInputChange(e, "projects", index)}
                />
                <br />
                <br />
              </div>
            ))}

            {/* Skills */}
            <h2>Skills</h2>
            {formData.skills.map((skill, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleSkillChange(e, index)}
                />
                <br />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
