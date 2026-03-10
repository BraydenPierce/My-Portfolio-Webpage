import { useEffect, useState } from "react";
import { Card, Col, Row, Container, Spinner, Badge } from "react-bootstrap";

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/github/repos", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" className="m-4" />;

  return (
    <Container className="mt-4 bg-body-tertiary shadow rounded-3">
      <Row xs={1} md={2} className="fs-4 p-4">
        {repos.map((repo) => (
          <Col key={repo.id} className="mb-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                </Card.Title>
                <Card.Text className="fs-6">
                  {repo.description || "No description provided."}
                </Card.Text>
                {repo.language && <Badge bg="secondary">{repo.language}</Badge>}
              </Card.Body>
              <Card.Footer className="text-muted fs-6">
                ⭐ {repo.stargazers_count} · 🍴 {repo.forks_count}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
// TODO: Consider pagnation UI for project listing
export default Portfolio;
