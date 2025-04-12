import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="py-5" style={{ backgroundColor: "#18181b" }}>
      <Container className="text-center">
        <p className="text-white mb-0">
          © {new Date().getFullYear()} Hassan. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
