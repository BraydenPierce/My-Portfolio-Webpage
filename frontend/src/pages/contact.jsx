import { Container, Row, Image, Col } from "react-bootstrap";
import email from "../assets/imgs/icon-email.png";
import ButtonMailto from "../components/ButtonMailTo";

const Contact = () => {
  return (
    <Container className="mt-4">
      <Row>
        <h1>Get in contact with me!</h1>
      </Row>
      <Row>
        <Col sm={8}>
          <Image src={email} roundedCircle style={{ width: "64px", height: "64px"}}/>
        </Col>
        <Col sm={4}>
          <ButtonMailto label="Write me an E-Mail" mailto="mailto:piercebrayden27@gmail.com" />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
