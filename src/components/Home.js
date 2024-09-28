import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import profilePic from './profile.png'; // Change the path to your image

const Home = () => {
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  // Inline styles
  const styles = {
    home: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '50px 20px',
      backgroundColor: '#f0f4f8', // Light background color
    },
    profilePic: {
      width: '150px', // Profile picture size
      height: '150px',
      borderRadius: '50%', // Circular profile picture
      border: '3px solid #0e6e55', // Accent border color
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    },
    homeTitle: {
      fontSize: '2.5em', // Larger font size for the title
      color: '#0e6e55', // Accent color for title
      margin: '20px 0', // Space above and below the title
    },
    homeDescription: {
      fontSize: '1.2em', // Slightly larger font size for description
      color: '#333', // Darker text for better contrast
      lineHeight: 1.6, // Improved line height for readability
      maxWidth: '1200px', // Increased width for the rectangular box
      margin: '0 auto', // Center align the description
      padding: '20px', // Padding inside the rectangular box
      border: '2px solid #0e6e55', // Border color for the rectangular box
      borderRadius: '8px', // Rounded corners
      background: '#ffffff', // White background for the text area
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    },
    learnMore: {
      marginTop: '20px', // Space above the link
      fontSize: '1.2em', // Font size for the link
      color: isHovered ? '#ffffff' : '#0e6e55', // Change text color on hover
      textDecoration: 'none', // Remove underline
      padding: '10px 20px', // Padding for button-like effect
      border: '2px solid #0e6e55', // Border color
      borderRadius: '5px', // Rounded corners
      background: isHovered ? '#0e6e55' : '#ffffff', // Change background color on hover
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow
      transition: 'background 0.3s, color 0.3s', // Transition for hover effect
    },
  };

  return (
    <div style={styles.home}>
      <img src={profilePic} alt="Nabhya Sharma" style={styles.profilePic} />
      <h1 style={styles.homeTitle}>Nabhya Sharma</h1>
      <div style={styles.homeDescription}>
        <p>
          I am Nabhya Sharma, pursuing a Bachelor's degree in Computer Science, specializing in Internet of Things (IoT) at Manipal University Jaipur. Throughout my academic journey, I have developed a strong foundation in core computer science concepts, particularly in Data Structures and Algorithms (DSA). My current CGPA stands at an impressive 8.98, and I have earned a place on the Dean's List of Excellence in the first, third and fourth semester. 
        </p>
      </div>
      <Link
        to="/about"
        style={styles.learnMore}
        onMouseEnter={() => setIsHovered(true)} // Set hover state
        onMouseLeave={() => setIsHovered(false)} // Reset hover state
      >
        Learn More
      </Link>
    </div>
  );
};

export default Home;
