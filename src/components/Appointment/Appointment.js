import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import BookingDetails from "../BookingDetails/BookingDetails";
import "./Appointment.css";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [bookingDetails, setBookingDetails] = useState([]);

  const onChange = (date) => {
    setDate(date);
  };

  useEffect(() => {
    setBookingDetails([
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
    ]);
  }, []);

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

      <Row className="mt-4">
        <h3 className="mx-auto">
          Available Appointments on {date.toDateString()}{" "}
        </h3>
      </Row>

      <Row>
        {bookingDetails.map((booking) => (
          <BookingDetails />
        ))}
      </Row>
    </Container>
  );
};

export default Appointment;
