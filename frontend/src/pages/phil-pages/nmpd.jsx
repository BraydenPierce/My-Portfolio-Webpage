import { Container, Row, Col, Image } from "react-bootstrap";
import useScrollFx from "../../hooks/useScrollFx";
import giveBlood from "../../assets/imgs/giveblood.jpg";
import gotBlood from "../../assets/imgs/gotblood.jpg";
import guitar from "../../assets/imgs/guitar.jpg";
import spaceNeedle from "../../assets/imgs/spaceNeedle.jpg";

const Nmpd = () => {
  useScrollFx({ revealSelector: ".fx-reveal", progressVar: "--fx-progress" });

  return (
    <main className="fx-page">
      <div className="fx-progress" aria-hidden="true" />
      <div className="fx-bg one" aria-hidden="true" />
      <div className="fx-bg two" aria-hidden="true" />

      <Container className="fx-shell mt-4 mb-5 p-4">
        <section className="fx-reveal is-visible">
          <h1 className="fx-title text-center">NMPD</h1>
        </section>

        <section className="fx-card fx-reveal">
          <Row className="align-items-center g-4">
            <Col md={6}>
              <div className="fx-photo-frame">
                <Image src={giveBlood} alt="Giving blood" className="fx-photo" fluid />
              </div>
            </Col>
            <Col md={6}>
              <h2 className="fx-title">Giving Blood</h2>
              <p className="mb-0">...</p>
            </Col>
          </Row>
        </section>

        {/* repeat for other photos */}
      </Container>
    </main>
  );
};

export default Nmpd;