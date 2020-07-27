import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Video.css";

const Video = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, disable: false });
  }, []);

  return (
    <div className="text-center">
      <h5 className="mb-3">Intro Video</h5>
      <h4>About Product in a Short Video</h4>
      <iframe
        title="stopBullying"
        width="100%"
        height="auto"
        src="https://www.youtube.com/embed/nufRJkQwEm8?rel=0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="border border-dark mt-3 videoSize"
        data-aos="zoom-in-down"
      ></iframe>

      <Container className="mt-5">
        <Row>
          <Col className="text-center">
            <h5>Kutipan dari Video</h5>
            <p className="mt-4 quoteText">
              “Orang yang kuat bukan mereka yang selalu menang. Melainkan mereka
              yang tetap tegar ketika terjatuh.” <br />– Kahlil Gibran
            </p>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
};
export default Video;
