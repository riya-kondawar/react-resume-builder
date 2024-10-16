import React from 'react';

function Experience({ value, onChange }) {
  const handleExperienceChange = (index, field, val) => {
    const newExperience = [...value];
    newExperience[index] = { ...newExperience[index], [field]: val };
    onChange('experience', newExperience);
  };

  return (
    <div className="section">
      <h2>Experience and Internships</h2>
      {value.map((exp, index) => (
        <div key={index} className="experience-entry">
          <input
            type="text"
            value={exp.position}
            onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
            placeholder="Position"
          />
          <input
            type="text"
            value={exp.company}
            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
            placeholder="Company"
          />
          <input
            type="text"
            value={exp.duration}
            onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
            placeholder="Duration"
          />
        </div>
      ))}
      <button type="button" onClick={() => onChange('experience', [...value, { position: '', company: '', duration: '' }])}>
        Add Experience
      </button>
    </div>
  );
}

export default Experience;
