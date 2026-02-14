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
          <h1>Hello!</h1>
          <p>Placeholder paragraph introducing myself</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
