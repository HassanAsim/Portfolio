import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import '../styles.css';

const projects = [
  {
    title: "Chatbot App",
    description:
      "A chatbot application that allows users to interact with a virtual assistant, providing information and assistance on various topics",
    imageSrc: require("../images/photo1.png"),
    url: "https://github.com/HassanAsim/ChatBot"
  },
  {
    title: "Gaming Product Web App",
    description:
      "A web application for a gaming product that showcases features, specifications, and user reviews, providing an engaging platform for gamers to explore and purchase.",
    imageSrc: require("../images/photo2.png"),
    url: "https://github.com/HassanAsim/Game-Store-App"
  },
  {
    title: "Face, Age and Gender Detection App",
    description:
      "A computer vision application that detects faces, estimates age, and classifies gender in real-time, useful for analytics, security, and customer insights.",
    imageSrc: require("../images/photo3.png"),
    url: "https://github.com/HassanAsim/Face-Age-Gender-Detection"
  },
  {
    title: "Vehicle Detection App",
    description:
      "A vehicle detection application that uses computer vision to identify and track vehicles in real-time, providing valuable insights for traffic management",
    imageSrc: require("../images/photo4.png"),
    url: "https://github.com/HassanAsim/Vehicle-Detection-App"
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects-section">
      <Container>
        <h1 className="text-center mb-5">Featured Projects</h1>
        <Row xs={1} md={2} className="g-4">
          {projects.map((project, index) => (
            <Col key={index}>
              <Card 
                title={project.title} 
                description={project.description} 
                imageSrc={project.imageSrc}
                url={project.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;
