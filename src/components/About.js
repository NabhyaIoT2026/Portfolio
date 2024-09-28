import React from 'react';

const About = () => {
    // Define inline styles as JavaScript objects
    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.6',
            backgroundColor: '#eef2f3', // Light background for the entire page
            padding: '20px',
            minHeight: '100vh', // Full height
        },
        header: {
            color: '#0e6e55',
            textAlign: 'center',
            fontSize: '2.2em', // Slightly smaller header size
            marginBottom: '20px', // Space below header
        },
        aboutMe: {
            fontSize: '1.1em', // Reduced font size
            color: '#333',
            margin: '20px auto',
            maxWidth: '800px',
            padding: '20px',
            background: 'none', // No background
            borderRadius: '0', // No rounded corners
            transition: 'transform 0.3s', // Smooth hover transition
            textAlign: 'justify', // Justify text for better alignment
        },
        aboutMeHover: {
            transform: 'scale(1.02)', // Scale effect on hover
        },
        paragraph: {
            fontSize: '1em', // Reduced paragraph size
            marginBottom: '15px',
            lineHeight: '1.8', // Increased line height for better readability
        },
        link: {
            color: '#0e6e55', // Accent color for links
            textDecoration: 'none', // No underline
            fontWeight: 'bold', // Bold text
        },
        linkHover: {
            textDecoration: 'underline', // Underline on hover
        },
    };

    return (
        <div style={styles.body}>
            <h2 style={styles.header}>About Me</h2>
            <div
                style={{ ...styles.aboutMe, ...styles.aboutMeHover }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = styles.aboutMeHover.transform;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                <p style={styles.paragraph}>
                    I am a Computer Science Engineering student specializing in IoT and Intelligent Systems at Manipal University Jaipur.
                    With a solid foundation in data structures and algorithms, I excel in full-stack web development using the MERN stack.
                    I am passionate about data analysis and machine learning, leveraging tools like Python, Pandas, and Matplotlib to extract actionable insights.
                </p>
                <p style={styles.paragraph}>
                    My experience includes a ReactJS Developer internship at CodSoft, where I enhanced web functionality through innovative projects.
                    I led a team during the Dell Hackathon, focusing on machine learning models for Sign Language Detection.
                    Academically, I maintain a CGPA of 8.98/10 and have received accolades for excellence in multiple subjects.
                    My technical skills encompass JavaScript, SQL, and various frameworks, alongside databases like PostgreSQL and MongoDB.
                    I am committed to continuous learning and applying my knowledge to real-world challenges.
                    My goal is to contribute effectively in the fields of web development and data science.
                </p>
                <p style={styles.paragraph}>
                Created a machine learning model using Random Forest to predict gold prices based on historical data. Visualized data trends and predictions using Pandas, NumPy, Matplotlib, and Seaborn. I have also developed a sign language detection model leveraging OpenCV for image processing and Mediapipe for hand tracking. The model captures real-time video input, detects hand landmarks, and interprets sign language gestures with high accuracy. By integrating these powerful tools, our system offers an efficient and accessible solution for translating sign language into text or speech, enhancing communication for the deaf and hard-of-hearing community.
                </p>
            </div>
            <p style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href="https://www.linkedin.com/in/nabhya-sharma-b0a374248/details/featured/" style={styles.link} onMouseOver={(e) => (e.currentTarget.style.textDecoration = styles.linkHover.textDecoration)}>
                    View my certifications and awards
                </a>
            </p>
        </div>
    );
};

export default About;
