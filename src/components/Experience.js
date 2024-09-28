import React from 'react';

const Experience = () => {
  return (
    <div style={experienceContainerStyle}>
      <h2 style={headingStyle}>Experience</h2>
      <div style={jobContainerStyle}>
        <h3 style={jobTitleStyle}>ReactJS Developer, CodSoft (Virtual Internship)</h3>
        <p style={dateStyle}>Sep 2024 -- Oct 2024</p>
        <ul style={listStyle}>
          <li>Completed all assigned tasks using ReactJS.</li>
          <li>Worked on tasks/projects aimed at enhancing web functionality.</li>
        </ul>
      </div>
      <div style={jobContainerStyle}>
        <h3 style={jobTitleStyle}>Dell Hackathon (HackToHire), Manipal University Jaipur</h3>
        <p style={dateStyle}>Nov 2023 -- Jan 2024</p>
        <ul style={listStyle}>
          <li>Selected for the Dell Hackathon at Manipal University Jaipur, after excelling in the technical DSA round.</li>
          <li>Led a team of developers to implement machine learning models using Python for the assigned Problem Statement.</li>
          <li>Developed and optimized a predictive model to solve Sign Language Detection challenges.</li>
        </ul>
      </div>
    </div>
  );
};

// Inline styles
const experienceContainerStyle = {
  maxWidth: '800px', // Set a max width for the container
  margin: '0 auto', // Center the experience section
  padding: '20px', // Add padding for spacing
  backgroundColor: '#f4f6f8', // Light background color
  borderRadius: '8px', // Rounded corners
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
};

const headingStyle = {
  textAlign: 'center', // Center align heading
  color: '#2c3e50', // Dark color for heading
};

const jobContainerStyle = {
  backgroundColor: '#ffffff', // White background for job items
  border: '1px solid #ddd', // Light border
  borderRadius: '8px', // Rounded corners
  padding: '15px', // Padding for job items
  marginBottom: '15px', // Space between job items
};

const jobTitleStyle = {
  color: '#2980b9', // Bright blue color for job titles
  margin: '0', // Remove default margin
};

const dateStyle = {
  color: '#777', // Gray color for date
  fontStyle: 'italic', // Italic style for date
  margin: '5px 0', // Margin above and below
};

const listStyle = {
  listStyleType: 'disc', // Use disc style for list items
  marginLeft: '20px', // Indent list items
  color: '#333', // Dark color for list text
};

export default Experience;
