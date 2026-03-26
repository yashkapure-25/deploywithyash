import React from 'react';

const flakes = new Array(15).fill(null);

const Snowfall: React.FC = () => {
  return (
    <div className="snowfall">
      {flakes.map((_, idx) => (
        <span key={idx} className="snowflake" />
      ))}
    </div>
  );
};

export default Snowfall;
