import { Container, Row, Col, Image } from "react-bootstrap";
import headshot from "../assets/imgs/headshot.JPG";

const Home = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Image src={headshot} thumbnail />
        </Col>
        <Col>
          <h1>Hello!</h1>
          <p>Placeholder paragraph introducing myself</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
