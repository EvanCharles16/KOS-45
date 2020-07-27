import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Services.css";

import service1 from "../../../img/service/stop-bullying.jpeg";
import service2 from "../../../img/service/Ilustrasi-Stop-Bulying.jpg";
import service3 from "../../../img/service/stop-bullying-1.jpeg";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, disable: false });
  }, []);
  return (
    <Container data-aos="zoom-in-up">
      <Row className="mb-5">
        <Col lg={4} md={6} sm={12} className="mt-4">
          <Card style={{ width: "18rem" }} className="serviceCard mx-auto">
            <Card.Body>
              <img
                src={service3}
                alt="stop-bullying"
                className="servicePhoto"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="mt-4">
          <Card style={{ width: "18rem" }} className="serviceCard mx-auto">
            <Card.Body>
              <img
                src={service2}
                alt="stop-bullying"
                className="servicePhoto"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="mt-4">
          <Card style={{ width: "18rem" }} className="serviceCard mx-auto">
            <Card.Body>
              <img
                src={service1}
                alt="stop-bullying"
                className="servicePhoto"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
