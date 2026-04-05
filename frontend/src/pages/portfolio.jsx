import { useEffect, useState } from "react";
import { Card, Col, Row, Container, Spinner, Badge, Pagination } from "react-bootstrap";

const CARDS_PER_PAGE = 6;

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("http://localhost:4000/api/github/repos", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
      <Spinner animation="border" />
    </div>
  ) 

  const totalPages = Math.ceil(repos.length / CARDS_PER_PAGE);
  const pageRepos = repos.slice(
    (currentPage - 1) * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE
  )

  return (
    <Container className="portfolio-shell mt-4 shadow rounded-3 d-flex flex-column" style={{ minHeight: "80vh" }}>
      <Row xs={1} md={2} className="fs-4 p-4 flex-grow-1">
        {pageRepos.map((repo) => (
          <Col key={repo.id} className="mb-3">
            <Card className="h-100 portfolio-card">
              <Card.Body>
                <Card.Title>
                  <a className="portfolio-link" href={repo.html_url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                </Card.Title>
                <Card.Text className="fs-6">
                  {repo.description || "No description provided."}
                </Card.Text>
                {repo.language && <Badge bg="secondary" className="portfolio-badge">{repo.language}</Badge>}
              </Card.Body>
              <Card.Footer className="portfolio-footer fs-6">
                ⭐ {repo.stargazers_count} · 🍴 {repo.forks_count}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {totalPages > 1 && (
        <div className="position-fixed bottom-0 start-50 translate-middle-x mb-3 z-3">
          <Pagination>
            <Pagination.Prev
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            />
            {Array.from({ length: totalPages }, (_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            />
          </Pagination>
        </div>
      )}
    </Container>
  );
};

export default Portfolio;
