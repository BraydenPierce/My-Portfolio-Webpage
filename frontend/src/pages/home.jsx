import { Container, Row, Col, Image } from "react-bootstrap";
import bray from "../assets/imgs/bray.jpg";

const Home = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Image src={bray} thumbnail />
        </Col>
        <Col>
          <h1>Hello and welcome!</h1>
          <p>
            My name is Brayden Pierce and I am a Software Developer. I am passionate about
            creating tools for the benefit of health, happiness, and creative expression.
            Look around my website to see some of my projects, hobbies, and ways of
            contacting me!
          </p>
          <h2>Enjoy!</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
