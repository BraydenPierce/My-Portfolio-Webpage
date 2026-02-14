import { Container, Row, Image, Col } from "react-bootstrap";
import email from "../assets/imgs/icon-email.png";

const Contact = () => {
  return (
    <Container className="mt-4">
      <Row>
        <h1>Get in contact with me!</h1>
      </Row>
      <Row>
        <Col>
          <Image src={email} roundedCircle style={{ width: "64px", height: "64px"}}/>
        </Col>
        <Col>
          <a >piercebrayden27@gmail.com</a>
        </Col>
      </Row>
    </Container>
  );
};

// https://stackoverflow.com/questions/63782544/react-open-mailto-e-mail-client-onclick-with-body-from-textarea

export default Contact;
