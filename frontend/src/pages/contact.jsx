import { Container, Row, Image, Col } from "react-bootstrap";
import email from "../assets/imgs/icon-email.png";
import linkedin from "../assets/imgs/linkedin.png"
import ButtonMailto from "../components/ButtonMailTo";

const Contact = () => {
  return (
    <Container className="mt-4 fs-4">
      <Row>
        <h1>Get in contact with me!</h1>
      </Row>
      <Row className="align-items-center m-3">
        <Col xs="auto" className="d-flex">
          <Image
            src={email}

            style={{ width: "64px", height: "64px" }}
          />
        </Col>
        <Col xs="auto" className="d-flex">
          <ButtonMailto
            label="Write me an E-Mail"
            mailto="mailto:piercebrayden27@gmail.com"
          />
        </Col>
      </Row>
      <Row className="align-items-center m-3">
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
            href="https://www.linkedin.com/in/brayden-pierce-a4111a260/"
            target="_blank"
            rel="noreferrer"
          >
            View my LinkedIn
          </a>
        </Col>
      </Row>
    </Container>
  );
};

// https://github.com/BraydenPierce
export default Contact;
