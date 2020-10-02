import React from "react";
import { Button, Col } from "react-bootstrap";

const BookingDetails = () => {
  return (
    <Col md={4} className="mt-5">
      <h5>Teeth Orthodontics</h5>
      <h6>8:00 - 9:00 Am</h6>
      <p>10 SPACES AVAILABLE</p>
      <Button>BOOK APPOINTMENT</Button>
    </Col>
  );
};

export default BookingDetails;
