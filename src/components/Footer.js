import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#2c3e50', // Dark background for footer
    color: 'white', // White text color
    textAlign: 'center', // Center align text
    padding: '20px 0', // Padding for footer
    position: 'relative', // Allow for absolute positioning if needed
  };

  const linkStyle = {
    color: '#f0f0f0', // Light gray color for links
    textDecoration: 'none', // Remove underline
    margin: '0 15px', // Space between links
    fontSize: '1.1em', // Font size
  };

  return (
    <footer style={footerStyle}>
      <div>
        <p>
          <a href="tel:+919156880997" style={linkStyle}>
            <FaPhone /> +91 9156880997
          </a>
        </p>
        <p>
          <a href="mailto:nabhyasharma2004@gmail.com" style={linkStyle}>
            <FaEnvelope /> nabhyasharma2004@gmail.com
          </a>
        </p>
        <p>
          <a href="https://linkedin.com/in/nabhya-sharma-b0a374248/" style={linkStyle}>
            LinkedIn
          </a>
          <a href="https://github.com/NabhyaIoT2026" style={linkStyle}>
            GitHub
          </a>
          <a href="https://leetcode.com/u/nabhyasharma2004/" style={linkStyle}>
            LeetCode
          </a>
          <a href="https://www.hackerrank.com/profile/nabhyasharma2004" style={linkStyle}>
            HackerRank
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
