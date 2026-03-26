import React from 'react';

const drops = new Array(30).fill(null);

const Rainfall: React.FC = () => {
  return (
    <div className="rainfall">
      {drops.map((_, idx) => (
        <span key={idx} className="raindrop" />
      ))}
    </div>
  );
};

export default Rainfall;
