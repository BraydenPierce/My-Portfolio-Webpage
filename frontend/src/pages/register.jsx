import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Used to navigate to root page after handleSubmit function
  const navigate = useNavigate();

  function updateForm(jsonObj) {
    return setForm((prevJsonObj) => {
      // Takes the prevJsonObj and appends it with the new jsonObj
      return { ...prevJsonObj, ...jsonObj }; // ... = unpacker
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("In Register handleSubmit")

    // Check for minimum pasword length
    const MIN_PASSWORD_LENGTH = 8;
    if (form.password.length < MIN_PASSWORD_LENGTH) {
      window.alert(
        `Password must be at least ${MIN_PASSWORD_LENGTH} characters long.`
      );
      return;
    }

    // Check if passwords match
    if (form.password !== form.confirmPassword) {
      window.alert("Passwords do not match!");
      return;
    }

    const regiCred = { ...form };
     const res = await fetch("http://localhost:4000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(regiCred),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    const data = await res.json();
    console.log(data);

    if (data.status === "register good") {
      setForm({ username: "", email: "", password: "", confirmPassword: ""});
      navigate("/");
    } else {
      window.alert("Register failed: " + data.status);
    }
  };

  return (
    <Container className="mt-4 auth-shell">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card className="auth-card shadow">
            <Card.Header as="h5" className="auth-card-header">
              Register an Account
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGridUserName">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    className="auth-input"
                    type="text"
                    name="userName"
                    value={form.username}
                    onChange={(e) => updateForm({ username: e.target.value })}
                    placeholder="Enter Username"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    className="auth-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => updateForm({ email: e.target.value })}
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="auth-input"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={(e) => updateForm({ password: e.target.value })}
                    placeholder="Password"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    className="auth-input"
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={(e) => updateForm({ confirmPassword: e.target.value })}
                    placeholder="Confirm Password"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="auth-card-footer">
              <small className="auth-helper-text">
                Already have an account?{" "}
                <a
                  href="/login"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/login");
                  }}
                >
                  Login here
                </a>
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
