import { Container, Row, Col, Image } from "react-bootstrap";
import bray from "../assets/imgs/bray.jpg";
import email from "../assets/imgs/icon-email.png";
import linkedin from "../assets/imgs/linkedin.png"
import github from "../assets/imgs/github.png"

const Home = () => {
  return (
    <Container className="mt-4 container-body shadow rounded-3">
      <Row className="fs-4 p-4">
        <Col>
          <Image src={bray} thumbnail className="border-tertiary"/>
        </Col>
        <Col>
          <Container className="bg-primary rounded-3 p-2">
            <h1 className="d-flex justify-content-center">Hello and welcome!</h1>
            <p className="">
              My name is Brayden Pierce and I am a Software Developer. I am passionate about
              creating tools for the benefit of health, happiness, and creative expression.
              I specialize in Full-Stack Web Development but I am always happy to branch
              out and learn new things!
            </p>
            <p>
              Look around my website to see some of my projects, hobbies, and ways of
              contacting me!
            </p>
            <h2 className="d-flex justify-content-center">Enjoy!</h2>
            <Row className="align-items-center justify-content-center m-3 pb-4">
              <Col xs="auto" className="d-flex">
                <a href="mailto:piercebrayden27@gmail.com">
                  <Image
                    src={email}
                    style={{ width: "64px", height: "64px" }}
                  />
                </a>
              </Col>
              <Col xs="auto" className="d-flex">
                <a
                  href="https://www.linkedin.com/in/brayden-pierce-a4111a260/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={linkedin}
                    style={{ width: "64px", height: "64px" }}
                  />
                </a>
              </Col>
              <Col xs="auto" className="d-flex">
                <a
                  href="https://github.com/BraydenPierce"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={github}
                    style={{ width: "64px", height: "64px" }}
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
