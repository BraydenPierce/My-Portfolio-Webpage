import { Card, Col, Row, Container } from "react-bootstrap";

const Portfolio = () => {
  return (
    <Container className="mt-4 bg-body-tertiary shadow rounded-3">
      <Row xs={1} md={2} className="fs-4 p-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <Card.Title>Project Title</Card.Title>
                <Card.Text>
                  Example text providing a short description of the project,
                  challenges I faced, and what skills I developed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
// TODO: Consider pagnation UI for project listing
export default Portfolio;
