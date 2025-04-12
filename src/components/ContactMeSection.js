import React, { useState } from "react";
import { Container, Form, Button } from 'react-bootstrap';
import { useAlertContext } from "../context/alertContext";
import '../styles.css';

const ContactMeSection = () => {
  const { onOpen } = useAlertContext();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    type: "hireMe",
    comment: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (formData.comment.length < 25) {
      newErrors.comment = "Message must be at least 25 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      // Simulate a brief loading state
      setTimeout(() => {
        onOpen('success', `Thanks for your submission ${formData.firstName}, we will get back to you shortly!`);
        // Reset form
        setFormData({
          firstName: "",
          email: "",
          type: "hireMe",
          comment: "",
        });
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="contact-section" id="contactme-section">
      <Container>
        <h1 className="mb-4 text-center">Contact me</h1>
        <div className="contact-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Type of enquiry</Form.Label>
              <Form.Select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="hireMe">Freelance project proposal</option>
                <option value="openSource">Open source consultancy session</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="comment"
                rows={4}
                value={formData.comment}
                onChange={handleChange}
                isInvalid={!!errors.comment}
              />
              <Form.Control.Feedback type="invalid">
                {errors.comment}
              </Form.Control.Feedback>
            </Form.Group>

            <Button 
              type="submit" 
              variant="primary" 
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default ContactMeSection;
