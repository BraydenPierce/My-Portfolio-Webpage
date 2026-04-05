import { Container, Button, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion"
import resume from "../assets/resume.pdf";

const ONC_Hours = 16.5;

const Xp = () => {
  return (
    <Container className="mt-4 bg-secondary shadow rounded-3">
      <Row className="pt-2">
        <h1 className="text-decoration-underline text-center">Education</h1>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="bg-primary">
              <div className="d-flex justify-content-between w-100 pe-2">
                <span>Bachelors of Computer Science - Weber State University</span>
                <span>August 2023 – April 2026</span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The completion of my 8 year long journey! Every aspect of myself 
                was put to the test but I am so thankful for what I've accomplished.
                My educated understanding of not just computers, but the entire world
                has given me the confidence and appreciation of my craft. I am excited
                to constantly learn as I continue my career.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="d-flex justify-content-between w-100 pe-2">
                <span>Associates of Applied Science - Weber State University</span>
                <span>August 2023 – April 2025</span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Learning how to code was a difficult challenge that I had to learn to love.
                A job and housing change allowed me to fully commit myself to being a full-time
                student. In addition, I was fortunate enough to participate in a stem-cell donation
                with <a href="https://nmdp.org" target="_blank" rel="noopener noreferrer">NMDP</a>!
              </p>
              <p>
                I wouldn't have been able to do it without the help of some dear friends I
                made.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
                <div className="d-flex justify-content-between w-100 pe-2">
                  <span>Associates of General Studies - Weber State University</span>
                  <span>August 2017 – December 2022</span>
                </div>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                When I first started attending college I had no idea what I wanted to pursue. 
                I prioritized fulfilling my gen. ed. credits to give myself more time
                to decide on a major. In the meantime, I explored extra curricular activities
                and even joined the local philanthropy-based fraternity "Psi Phi Psi" where 
                I met some really cool people that helped me learn a lot about myself! 
                It was a long and difficult journey discovering so much about life 
                for the first time.
              </p>
              <h6 id="majors-explored" className="mb-1">Some of the majors I explored:</h6>
              <ol aria-labelledby="majors-explored">
                <li>History</li>
                <li>Exercise Science</li>
                <li>Mechanical Engineering</li>
                <li>Computer Science</li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
      </Accordion>
      </Row>
      <Row className="pt-2">
        <h1 className="text-decoration-underline text-center">Work Experience</h1>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div className="d-flex justify-content-between w-100 pe-2">
                <span>Information Technology - Weber State University</span>
                <span>October 2024 – Present</span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="d-flex justify-content-between w-100 pe-2">
                <span>Shift Leader - Quick & Clean Car Wash</span>
                <span>June 2016 – November 2024</span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
      </Accordion>
      </Row>
      <Row className="pt-2">
        <h1 className="text-decoration-underline text-center">Philanthropy Work</h1>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div className="d-flex justify-content-between w-100 pe-2">
                <span>NMDP (Formerly "Be The Match")</span>
                {/*TODO: get exact dates and put picture in body*/}
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                This was a really cool experience where I was flown out to 
                Washington for the purpose of donating stem cells!
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="d-flex justify-content-between w-100 pe-2">
                <span>Regular Volunteer - Ogden Nature Center</span>
                <span>Feburary 2026 – Present</span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                I love nature, so once a week I spend an evening volunteering at the
                Ogden Nature Center. I have shoveled trails and common areas
                when it snowed, help clear out beaver damns, and contributed
                to the removal of invasie species!
              </p>
              <p>Total Hours = {ONC_Hours}</p>
              {/*TODO: replace hours worked with an offical document from ONC*/}
            </Accordion.Body>
          </Accordion.Item>
      </Accordion>
      </Row>
      <Row className="align-items-center justify-content-center m-3 pb-2">
        <Col xs="auto" className="d-flex">
          <h4>Download my resume: </h4>
        </Col>
        <Col xs="auto" className="d-flex">
          {/*TODO: Update and replace resume*/}
          <Button href={resume} target="_blank" rel="noopener noreferrer">
            Download PDF
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Xp;
