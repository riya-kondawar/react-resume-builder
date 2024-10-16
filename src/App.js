import React, { useState } from "react";
import { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Education from "./components/Education";
import Skills from "./components/Skills";
import CareerObjective from "./components/CareerObjective";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import "./ResumeBuilder.css";

function App() {
  const [resume, setResume] = useState({
    professionalSummary: "",
    education: [],
    skills: "",
    careerObjective: "",
    experience: [],
    achievements: "",
  });

  const resumeRef = useRef(null);

  const handleChange = (section, value) => {
    setResume({
      ...resume,
      [section]: value,
    });
  };

  const handleExport = () => {
    resumeRef.current.save();
  };

  return (
    <div>
      <div className="resume-builder-container">
        <h1 className="heading">Resume Builder</h1>
        <form>
          <ProfessionalSummary
            value={resume.professionalSummary}
            onChange={handleChange}
          />
          <Education value={resume.education} onChange={handleChange} />
          <Skills value={resume.skills} onChange={handleChange} />
          <CareerObjective
            value={resume.careerObjective}
            onChange={handleChange}
          />
          <Experience value={resume.experience} onChange={handleChange} />
          <Achievements value={resume.achievements} onChange={handleChange} />
          <button type="button" onClick={handleExport}>
            Export to PDF
          </button>
        </form>
        <PDFExport ref={resumeRef}>
          <div>
            {/* <h1>Your Resume</h1> */}
            <p>{resume.professionalSummary}</p>
            {/* Add more fields from the resume object to display them */}
          </div>
        </PDFExport>
      </div>
      <footer>
        <p>
          Created with
          <b>
            <span> love </span>
          </b>
          by Riya
        </p>
      </footer>
    </div>
  );
}

export default App;
