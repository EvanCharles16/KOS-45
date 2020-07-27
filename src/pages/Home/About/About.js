import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "./About.css";

import dontBullying from "../../../img/dont-be-bullying.png";
import effectBullying from "../../../img/effect-bullying.jpg";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, disable: false });
  }, []);

  return (
    <div id="#about">
      <Container className="text-dark mt-5 pt-5 mb-5 pb-5">
        <Row>
          <Col md={6} sm={12} className="d-flex justify-content-center">
            <img
              src={dontBullying}
              alt="photo1"
              className="aboutPhoto"
              data-aos="fade-right"
              data-aos-anchor-placement="top"
            />
          </Col>
          <Col
            md={6}
            sm={12}
            data-aos="fade-left"
            data-aos-anchor-placement="top"
          >
            <p className="text-justify text-about">
              <span className="text-danger">Meningkatnya kasus bully</span> yang
              dialami siswa disebabkan banyaknya manusia yang merasa superior
              diantara teman-temannya yang lain walaupun kita tau biasanya orang
              yang selalu membully mempunyai latar belakang yang buruk dan
              berbeda-beda dan kebanyakan dipengaruhi oleh lingkungan sekitar
              mereka.
              <p className="mt-2"></p>
              <span className="text-danger">Pada dasarnya Bully</span> bukan
              merupakan turunan yang bisa diturunkan dari orangtua tapi sifat
              bully tersebut dapat dicegah melalui pendidikan dini yang dimulai
              dari rumah oleh orang tua. dan kita berharap kasus bully dapat
              dicegah dengan cara menanamkan kepedulian terhadap sesama yang
              dimulai dari lingkungan sekitar kita.
            </p>
          </Col>
        </Row>
        <Row className="mt-5 pt-5">
          <Col
            md={6}
            sm={12}
            data-aos="fade-right"
            data-aos-anchor-placement="top"
          >
            <p className="text-justify text-about">
              <span className="text-danger">
                Banyak dari kita yang sudah mengetahui dampak dari bully
                tersebut
              </span>
              , secara psikologi anak yang terkena bully akan merasa dirinya
              rendah dan kurang percaya diri. itu disebabkan oleh gagalnya
              perkembangan mental didik yang disebabkan oleh tekanan dan
              dorongan yang buruk dari si pembully yang mungkin akan terbawa
              terus menerus kepada korban bully dan pada kasus tertentu akan
              menjadi sifat traumatis dalam hidupnya pada saat dia mengalami
              bully tersebut.
              <p className="mt-2"></p>
              Pada kasus ini usia tidak menentukan adanya terjadi pembullyan
              tersebut karna seperti yang kita ketahui korban bully bisa saja
              anak-anak bahkan sampai kalangan dewasa dan mungkin sebagian dari
              mereka tidak secara sadar berkata atau bertindak yang membuat
              korban merasa terbully.{" "}
              <span className="text-danger">
                STOP BULLYING dengan peduli terhadap sesama " PEACE"
              </span>
              .
            </p>
          </Col>
          <Col md={6} sm={12} className="d-flex justify-content-center">
            <img
              src={effectBullying}
              alt="photo2"
              className="aboutPhoto text-center"
              data-aos="fade-left"
              data-aos-anchor-placement="top"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;
