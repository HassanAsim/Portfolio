import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import '../styles.css';
import avatarImage from '../images/avatar.jpg';

const greeting = "Hello, I am Hassan!";
const bio1 = "A Computer Science Graduate";
const specializations = ["Web Development", "Mobile App Development", "AI Development"];

const LandingSection = () => {
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [displayText, setDisplayText] = useState(specializations[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timeout;

    const animateText = () => {
      const currentText = specializations[specialtyIndex];
      
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        
        if (displayText === currentText) {
          setIsDeleting(true);
          setTypingSpeed(2000); // Pause before starting to delete
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(50); // Faster deletion speed
        
        if (displayText === '') {
          setIsDeleting(false);
          setSpecialtyIndex((prev) => (prev + 1) % specializations.length);
          setTypingSpeed(150); // Reset to normal typing speed
        }
      }
    };

    timeout = setTimeout(animateText, typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, specialtyIndex, isDeleting, typingSpeed]);

  return (
    <section className="landing-section">
      <Container className="landing-content">
        <img 
          src={avatarImage} 
          alt="Pete's avatar"
          className="avatar"
        />
        <h4 className="mb-4">{greeting}</h4>
        <div>
          <h1 className="mb-2">{bio1}</h1>
          <h1>
            specialized in{' '}
            <span className="animated-text">{displayText}</span>
            <span className="cursor">|</span>
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default LandingSection;
