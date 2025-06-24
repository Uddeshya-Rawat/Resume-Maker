import React from 'react'
import { useSelector } from "react-redux";

const Temp1 = () => {
  const { firstName, lastName, email, contactNumber, address, education, experience, projects, skills, certifications } =
    useSelector((state) => state.form);
  return (

    <div
      style={{
        width: "700px",
        minHeight: "1000px",
        margin: "0 auto",
        padding: "32px",
        backgroundColor: "#ffffff",
        color: "#000000",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderColor: "black"
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          {firstName} {lastName}
        </h1>
        <p style={{ fontSize: "14px", color: "#555" }}>
          {address} | {email} | {contactNumber}
        </p>
      </div>

      {/* Education */}
      <section style={{ marginTop: "24px" }}>
        <h2 style={{ fontSize: "20px", }}>Education</h2>
        {
          education.map((edu, index) => (
            <div key={index} style={{ marginTop: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                <span>{edu.stream}</span>
                <span>{edu.from} / {edu.to}</span>
              </div>
              <p style={{ margin: "4px 0" }}>{edu.college}</p>
            </div>
          ))
        }

      </section>

      {/* Experience */}
      <section style={{ marginTop: "24px" }}>
        <h2 style={{ fontSize: "20px",  }}>Experience</h2>
        {experience.map((exp, idx) => (
          <div key={idx} style={{ marginTop: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
              <span>{exp.companyName}</span>
              <span>{exp.from} - {exp.to}</span>
            </div>

            <ul
              style={{
                marginLeft: "20px",
                marginTop: "6px",
                paddingLeft: "20px", // ensure spacing
                listStyleType: "disc" // show bullet points
              }}
            >
              {exp.workDescription
                .split("\n")
                .filter(line => line.trim() !== "")
                .map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
            </ul>
          </div>
        ))}

      </section>

      {/* Projects */}
      <section style={{ marginTop: "24px" }}>
        <h2 style={{ fontSize: "20px", }}>Projects</h2>
        {projects.map((proj, idx) => (
          <div key={idx} style={{ marginTop: "8px" }}>
            <strong>{proj.title}</strong>
            <p>Features:{proj.description}</p>
            <p>TechStack:{proj.techStack}</p>
          </div>
        ))}

      </section>

      {/* Skills */}
      <section style={{ marginTop: "24px" }}>
        <h2 style={{ fontSize: "20px",  }}>Skills</h2>
        {skills.map((skill,index)=>(
          <div>{skill}</div>
        ))}

      </section>

      {/* Certifications */}
      <section style={{ marginTop: "24px" }}>
        <h2 style={{ fontSize: "20px", }}>Certifications</h2>
        {certifications.map((cert, idx) => (
          <div key={idx} style={{ marginTop: "8px" }}>
            <p>
              <strong>{cert.title}</strong> —{" "}
              <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb" }}>
                View Certificate
              </a>
            </p>
          </div>
        ))}

      </section>
    </div>


  )
}

export default Temp1