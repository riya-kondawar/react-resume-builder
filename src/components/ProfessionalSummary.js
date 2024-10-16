import React from 'react';

function ProfessionalSummary({ value, onChange }) {
  return (
    <div className="section">
      <h2>Professional Summary</h2>
      <textarea
        value={value}
        onChange={(e) => onChange('professionalSummary', e.target.value)}
        placeholder="Summarize your professional experience"
      />
    </div>
  );
}

export default ProfessionalSummary;
