import { Container, Row, Col } from "react-bootstrap";
import useScrollFx from "../../hooks/useScrollFx";

const ONC_HOURS = 18.5;

const volunteerTasks = [
  {
    title: "Snow And Trail Clearing",
    text: "Cleared trails and common areas after snowstorms to keep paths safe and accessible.",
  },
  {
    title: "Beaver Dam Cleanup",
    text: "Helped clear out beaver dams and debris to protect flow and nearby trail areas.",
  },
  {
    title: "Invasive Species Removal",
    text: "Removed invasive plants to support native habitat health and long-term restoration.",
  },
  {
    title: "Habitat Restoration",
    text: "Spread weights in tons of quality soil and planted native plant species",
  },
];

const Onc = () => {
  useScrollFx({ revealSelector: ".fx-reveal", progressVar: "--fx-progress" });

  return (
    <main className="fx-page onc-theme">
      <div className="fx-progress" aria-hidden="true" />

      <Container className="fx-shell mt-4 mb-5 p-4">
        <section className="onc-hero fx-reveal is-visible">
          <p className="onc-kicker mb-2">Volunteer Work</p>
          <h1 className="fx-title onc-hero-title mb-3">Ogden Nature Center</h1>
          <p className="onc-hero-text mb-0">
            I love nature, so I have spent a total of {ONC_HOURS} hours volunteering.
            Here are a few things I have done:
          </p>
        </section>

        <Row className="g-3 mt-1">
          {volunteerTasks.map((task) => (
            <Col key={task.title} xs={12} md={6}>
              <section className="fx-card fx-reveal onc-task-card h-100">
                <h2 className="fx-title onc-task-title">{task.title}</h2>
                <p className="mb-0">{task.text}</p>
              </section>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Onc;