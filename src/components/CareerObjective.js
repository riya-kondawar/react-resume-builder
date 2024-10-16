import React from 'react';

function CareerObjective({ value, onChange }) {
  return (
    <div className="section">
      <h2>Career Objective</h2>
      <textarea
        value={value}
        onChange={(e) => onChange('careerObjective', e.target.value)}
        placeholder="State your career goals"
      />
    </div>
  );
}

export default CareerObjective;
