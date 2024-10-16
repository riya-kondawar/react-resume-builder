import React from 'react';

function Skills({ value, onChange }) {
  return (
    <div className="section">
      <h2>Academic and Non-Academic Skills</h2>
      <textarea
        value={value}
        onChange={(e) => onChange('skills', e.target.value)}
        placeholder="List your academic and non-academic skills"
      />
    </div>
  );
}

export default Skills;
