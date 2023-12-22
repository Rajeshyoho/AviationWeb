import React, { useState, useEffect } from 'react';
import './SkillBar.css'; // Import your CSS file for styling

const SkillBar = () => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        // Simulate progress increase
        setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
      }, 1000); // Change the interval based on your requirements
  
      return () => clearInterval(interval);
    }, []);
  

  return (
      <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
};

export default SkillBar;
