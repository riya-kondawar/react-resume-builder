import React from 'react';

function Achievements({ value, onChange }) {
  return (
    <div className="section">
      <h2>Skills and Achievements</h2>
      <textarea
        value={value}
        onChange={(e) => onChange('achievements', e.target.value)}
        placeholder="Mention any awards or important skills"
      />
    </div>
  );
}

export default Achievements;
