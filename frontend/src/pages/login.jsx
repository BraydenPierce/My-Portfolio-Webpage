import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle login logic here
    console.log("Form submitted");
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card>
            <Card.Header as="h5">Sign In</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    required
                  />
                  <Form.Text className="text-muted">
                    Enter username or email to login
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Don't have an account? <a href="/register">Create one!</a>
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
