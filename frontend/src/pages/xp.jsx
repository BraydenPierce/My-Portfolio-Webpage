import { Container, Button, Row, Col } from "react-bootstrap";
import resume from "../assets/resume.pdf";

const Xp = () => {
  return (
    <Container className="mt-4 bg-body-tertiary shadow rounded-3">
      <Row>
        <h1 className="text-decoration-underline">Education</h1>
      </Row>
      <Row>
        <h1 className="text-decoration-underline">Work Experience</h1>
      </Row>
      <Row className="align-items-center justify-content-center m-3">
        <Col xs="auto" className="d-flex">
          <h4>Download my resume: </h4>
        </Col>
        <Col xs="auto" className="d-flex">  
          <Button variant="warning" href={resume} target="_blank" rel="noopener noreferrer">
            Download PDF
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Xp;
