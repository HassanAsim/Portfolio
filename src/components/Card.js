import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card as BootstrapCard } from 'react-bootstrap';
import '../styles.css';

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <BootstrapCard className="project-card">
      <BootstrapCard.Img variant="top" src={imageSrc} alt={title} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text className="text-muted">
          {description}
        </BootstrapCard.Text>
      </BootstrapCard.Body>
      <BootstrapCard.Footer>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-dark"
        >
          <div className="d-flex align-items-center">
            <span className="me-2 fw-medium">See more</span>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </div>
        </a>
      </BootstrapCard.Footer>
    </BootstrapCard>
  );
};

export default Card;
