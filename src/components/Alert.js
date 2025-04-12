import React from "react";
import { Alert as BootstrapAlert } from "react-bootstrap";
import { useAlertContext } from "../context/alertContext";

export function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();

  if (!isOpen) return null;

  return (
    <BootstrapAlert
      variant={type === "success" ? "success" : "danger"}
      onClose={onClose}
      dismissible
      className="position-fixed top-0 start-50 translate-middle-x mt-4"
      style={{ zIndex: 9999 }}
    >
      {message}
    </BootstrapAlert>
  );
}

export default Alert;
