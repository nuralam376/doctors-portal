import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Appointment.css";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    console.log(date);
    setDate(date);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={5}>
          <h2 className="mb-4">Appointment</h2>

          <Calendar onChange={onChange} value={date} className="w-100" />
        </Col>
        <Col md={7}>
          <Image src="/images/Mask_Group_1.png" className="w-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default Appointment;
