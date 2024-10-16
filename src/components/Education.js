import React from 'react';

function Education({ value, onChange }) {
  const handleEducationChange = (index, field, val) => {
    const newEducation = [...value];
    newEducation[index] = { ...newEducation[index], [field]: val };
    onChange('education', newEducation);
  };

  return (
    <div className="section">
      <h2>Education</h2>
      {value.map((edu, index) => (
        <div key={index} className="education-entry">
          <input
            type="text"
            value={edu.degree}
            onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
            placeholder="Degree"
          />
          <input
            type="text"
            value={edu.institution}
            onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
            placeholder="Institution"
          />
          <input
            type="text"
            value={edu.year}
            onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
            placeholder="Year of Graduation"
          />
        </div>
      ))}
      <button type="button" onClick={() => onChange('education', [...value, { degree: '', institution: '', year: '' }])}>
        Add Education
      </button>
    </div>
  );
}

export default Education;
