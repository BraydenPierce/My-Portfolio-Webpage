import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  // Used to navigate to root page after onSubmit function
  const navigate = useNavigate();

  function updateForm(jsonObj) {
    return setForm((prevJsonObj) => {
      // Takes the prevJsonObj and appends it with the new jsonObj
      return { ...prevJsonObj, ...jsonObj }; // ... = unpacker
    })
  }

async function handleSubmit(e) {
    e.preventDefault();
    console.log("In login handleSubmit");
    const loginCred = { ...form };
    const res = await fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(loginCred),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    const data = await res.json();
    console.log(data);

    if (data.status === "login good") {
      setForm({ username: "", password: ""});
      navigate("/");
    } else {
      window.alert("Login failed: " + data.status);
    }
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
                    value={form.username}
                    required
                    onChange={(e) => updateForm({ username: e.target.value })}
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
                    value={form.password}
                    required
                    onChange={(e) => updateForm({ password: e.target.value })}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Don't have an account?{" "}
                <a
                  href="/register" 
                  onClick={(e) => { 
                    e.preventDefault();
                    navigate("/register");
                   }}
                >
                  Create one!
                </a>
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
