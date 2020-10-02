import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <ul className="mt-5">
            <li>Emergency Dental Care </li>
            <li>Check up</li>
            <li>Treatment of Personal Diseases</li>
            <li>Tooth Extraction</li>
            <li>Check up</li>
          </ul>
        </Col>
        <Col>
          <h5 className="text-center">Services</h5>
          <ul>
            <li>Emergency Dental Care </li>
            <li>Check up</li>
            <li>Treatment of Personal Diseases</li>
            <li>Tooth Extraction</li>
            <li>Check up</li>
          </ul>
        </Col>
        <Col>
          <h5 className="text-center">Oral Health</h5>
          <ul>
            <li>Emergency Dental Care </li>
            <li>Check up</li>
            <li>Treatment of Personal Diseases</li>
            <li>Tooth Extraction</li>
            <li>Check up</li>
          </ul>
        </Col>
        <Col className="text-center">
          <h5 className="text-center">Our Address</h5>
          <p>
            New York - 101010 <br />
            Hudson Yords
          </p>

          <p>
            Call Now - <br />
            <Button>+202552552</Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
