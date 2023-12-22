import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Courses = () => {
  const [selectedCourses, setSelectedCourses] = useState(new Set());

  const courses = [
    'Diploma in Hotel Management',
    'Diploma in Air Hostess',
    'Diploma in Airport and Airline Management',
    'Diploma in Air Ticketing',
    'Diploma in Retail Management',
    'Diploma in Food and Beverage service',
    'Certificate in Baggage handling and handyman',
    'Pilot Training',
  ];

  const handleCheckboxChange = (course) => {
    setSelectedCourses((prevCourses) => {
      const newCourses = new Set(prevCourses);
      if (newCourses.has(course)) {
        newCourses.delete(course);
      } else {
        newCourses.add(course);
      }
      return newCourses;
    });
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:'center' ,marginTop:"30px"}}>
      <FormGroup>
        {courses.map((course, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={selectedCourses.has(course)}
                onChange={() => handleCheckboxChange(course)}
              />
            }
            label={course}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default Courses;
