import React from 'react';

const Skills = () => {
  return (
    <div style={skillsContainerStyle}>
      <h2 style={headingStyle}>Skills</h2>
      <ul style={skillsListStyle}>
        <li style={{ ...skillItemStyle, backgroundColor: '#e1f5fe' }}>
          <strong>Languages:</strong> JavaScript, Python, SQL, HTML, CSS
        </li>
        <li style={{ ...skillItemStyle, backgroundColor: '#ffe0b2' }}>
          <strong>Frameworks:</strong> ReactJS, NodeJS, ExpressJS, Bootstrap, Material-UI, TailwindCSS
        </li>
        <li style={{ ...skillItemStyle, backgroundColor: '#c8e6c9' }}>
          <strong>Databases:</strong> PostgreSQL, MongoDB
        </li>
        <li style={{ ...skillItemStyle, backgroundColor: '#ffccbc' }}>
          <strong>Tools:</strong> Git, GitHub, VS Code, Excel
        </li>
        <li style={{ ...skillItemStyle, backgroundColor: '#f8bbd0' }}>
          <strong>Machine Learning:</strong> Random Forest, Decision Trees
        </li>
        <li style={{ ...skillItemStyle, backgroundColor: '#bbdefb' }}>
          <strong>Data Analysis:</strong> Python (Pandas, Numpy, Matplotlib, Seaborn), Power BI, Tableau
        </li>
        <li style={{ ...skillItemStyle, backgroundColor: '#d7ccc8' }}>
          <strong>DSA:</strong> In Java: Arrays, Strings, Linked List, Searching and Sorting, Stacks and Queues, Trees, Graphs, Hashing, Heaps, Backtracking
        </li>
      </ul>
    </div>
  );
};

// Inline styles
const skillsContainerStyle = {
  maxWidth: '800px', // Set max width for better layout
  margin: '0 auto', // Center the skills section
  padding: '30px', // Add padding
  backgroundColor: '#ffffff', // White background for the section
  borderRadius: '8px', // Rounded corners
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
};

const headingStyle = {
  textAlign: 'center', // Center align heading
  color: '#333', // Dark color for heading
  fontSize: '2em', // Larger font size for heading
  marginBottom: '20px', // Space below the heading
};

const skillsListStyle = {
  listStyleType: 'none', // Remove bullet points
  padding: '0', // Remove default padding
};

const skillItemStyle = {
  fontSize: '1.2em', // Larger font size for skill items
  color: '#555', // Dark gray color for skill items
  marginBottom: '15px', // Space between skill items
  padding: '10px', // Padding for each skill item
  borderRadius: '5px', // Rounded corners for skill items
  border: '1px solid #ddd', // Light border around each item
};

export default Skills;
