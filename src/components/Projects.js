import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Gold Price Prediction',
      description:
        'Created a machine learning model using Random Forest to predict gold prices based on historical data. Visualized data trends and predictions using Pandas, NumPy, Matplotlib, and Seaborn. I have also developed a sign language detection model leveraging OpenCV for image processing and Mediapipe for hand tracking. The model captures real-time video input, detects hand landmarks, and interprets sign language gestures with high accuracy. By integrating these powerful tools, our system offers an efficient and accessible solution for translating sign language into text or speech, enhancing communication for the deaf and hard-of-hearing community.',
      technologies: 'Technologies: Python, Pandas, NumPy, Matplotlib, Seaborn',
      link: 'https://github.com/NabhyaIoT2026/Gold-Price-Prediction',
    },
    {
      title: 'Sign Language Detection',
      description:
        'Developed a sign language detection model leveraging OpenCV for image processing and Mediapipe for hand tracking. The model captures real-time video input, detects hand landmarks, and interprets sign language gestures with high accuracy. By integrating these powerful tools, our system offers an efficient and accessible solution for translating sign language into text or speech, enhancing communication for the deaf and hard-of-hearing community.',
      technologies: 'Technologies: Python, OpenCV, Mediapipe',
      link: 'https://github.com/NabhyaIoT2026/Sign-Language-2',
    },
    {
      title: 'SnappyChat',
      description:
        'Built a full-stack chat application using the MERN stack (MongoDB, Express, React, NodeJS). Integrated real-time chat features and user authentication for a seamless experience.',
      technologies: 'Technologies: MongoDB, Express, React, Node.js',
      link: 'https://github.com/NabhyaIoT2026/Snappy',
    },
    {
      title: 'WordToPdf Converter',
      description:
        'Developed a Word to PDF converter using JavaScript and ReactJS. Implemented file handling and conversion techniques to efficiently transform documents and enhance user experience.',
      technologies: 'Technologies: JavaScript, ReactJS, HTML, CSS',
      link: 'https://github.com/NabhyaIoT2026/WORD2PDF',
    },
  ];

  return (
    <div style={projectsContainerStyle}>
      <h2 style={headingStyle}>Top Projects</h2>
      {projects.map((project, index) => (
        <div style={projectItemStyle} key={index}>
          <h3 style={projectTitleStyle}>{project.title}</h3>
          <p style={projectDescriptionStyle}>{project.description}</p>
          <p style={technologiesStyle}>{project.technologies}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            View Project on GitHub
          </a>
        </div>
      ))}
    </div>
  );
};

// Inline styles
const projectsContainerStyle = {
  maxWidth: '900px', // Increase max width for a wider layout
  margin: '0 auto', // Center the section
  padding: '30px', // Increase padding for more space
  backgroundColor: '#e8f0f2', // Light blue background
  borderRadius: '8px', // Rounded corners
};

const headingStyle = {
  textAlign: 'center', // Center align the heading
  color: '#2c3e50', // Dark color for the heading
};

const projectItemStyle = {
  backgroundColor: '#ffffff', // White background for the project items
  border: '1px solid #ddd', // Light border
  borderRadius: '8px', // Rounded corners
  padding: '30px', // Increased padding for larger box
  marginBottom: '20px', // Space between project items
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  maxWidth: '100%', // Ensure full width utilization
};

const projectTitleStyle = {
  color: '#2980b9', // Bright blue color for project titles
};

const projectDescriptionStyle = {
  color: '#333', // Darker color for description text
};

const technologiesStyle = {
  fontStyle: 'italic', // Italicize technology names
  color: '#8e44ad', // Purple color for technology text
  marginTop: '10px', // Space above the technology text
};

const linkStyle = {
  display: 'block', // Display as a block element
  marginTop: '10px', // Margin above the link
  color: '#27ae60', // Green color for the link
  textDecoration: 'underline', // Underline for the link
  fontSize: '1em', // Font size for the link
};

export default Projects;
