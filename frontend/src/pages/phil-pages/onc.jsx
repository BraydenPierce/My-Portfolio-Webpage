import { Container } from "react-bootstrap";
import useScrollFx from "../../hooks/useScrollFx"; // adjust path

const Onc = () => {
  useScrollFx({ revealSelector: ".fx-reveal", progressVar: "--fx-progress" });

  return (
    <main className="fx-page">
      <div className="fx-progress" aria-hidden="true" />
      <div className="fx-bg one" aria-hidden="true" />
      <div className="fx-bg two" aria-hidden="true" />

      <Container className="fx-shell mt-4 mb-5 p-4">
        <section className="fx-card fx-reveal is-visible">
          <h1 className="fx-title">Ogden Nature Center</h1>
          <p className="mb-0">
            I love nature, so once a week I spend an evening volunteering...
          </p>
        </section>

        <section className="fx-card fx-reveal">
          <h2 className="fx-title">Trail Work</h2>
          <p className="mb-0">Snow clearing, paths, and common areas.</p>
        </section>
      </Container>
    </main>
  );
};

export default Onc;