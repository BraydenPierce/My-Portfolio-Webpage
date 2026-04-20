import { Container, Row, Col, Image } from "react-bootstrap";
import useScrollFx from "../../hooks/useScrollFx";
import giveBlood from "../../assets/imgs/giveblood.jpg";
import gotBlood from "../../assets/imgs/gotblood.jpg";
import guitar from "../../assets/imgs/guitar.jpg";
import spaceNeedle from "../../assets/imgs/spaceNeedle.jpg";

const storySections = [
  {
    title: "The Decision",
    text:
      "I signed up because I wanted to do something real for someone I would probably never meet. It felt like a quiet promise to be useful when it mattered.",
    image: giveBlood,
    alt: "Preparing to donate",
  },
  {
    title: "Preparation",
    text:
      "There were forms, questions, and waiting, but the process made me appreciate how much care goes into making donation safe for everyone involved.",
    image: gotBlood,
    alt: "After the donation process",
  },
  {
    title: "Patience And Perspective",
    text:
      "A lot of this experience was not dramatic. It was mostly patience, trust, and following through. That is what made it meaningful.",
    image: spaceNeedle,
    alt: "Looking outward for perspective",
  },
  {
    title: "Support System",
    text:
      "Friends and family checked in along the way, and that support made a difference. Big moments are rarely done alone.",
    image: guitar,
    alt: "Creative reset with guitar",
  },
  {
    title: "Why It Stays With Me",
    text:
      "This experience changed how I think about service. Helping does not always require a grand gesture; sometimes it is consistency and willingness.",
    image: giveBlood,
    alt: "Donation memory",
  },
  {
    title: "What I Learned",
    text:
      "I learned that fear and purpose can exist together. You do not need to feel perfectly ready to do something worthwhile.",
    image: gotBlood,
    alt: "Recovery and reflection",
  },
  {
    title: "Carrying It Forward",
    text:
      "Since then, I try to apply that same mindset in school, work, and volunteer opportunities: show up, stay steady, and do the next right thing.",
    image: spaceNeedle,
    alt: "Looking ahead",
  },
  {
    title: "Closing Reflection",
    text:
      "If this story has a theme, it is that ordinary people can have extraordinary impact through practical choices. This was one of those choices for me.",
    image: guitar,
    alt: "Reflection through music",
  },
];

const Nmpd = () => {
  useScrollFx({ revealSelector: ".fx-reveal", progressVar: "--fx-progress" });

  return (
    <main className="fx-page nmpd-theme">
      <div className="fx-progress" aria-hidden="true" />

      <Container className="fx-shell mt-4 mb-5 p-4">
        <section className="nmpd-hero fx-reveal is-visible">
          <p className="nmpd-kicker mb-2">Service Story</p>
          <h1 className="fx-title nmpd-hero-title mb-3">NMDP Journey</h1>
          <p className="nmpd-hero-text mb-0">
            A longer reflection on what this experience meant to me, how it unfolded,
            and why it still shapes how I show up for others.
          </p>
        </section>

        {storySections.map((section, index) => {
          const imageOrder = index % 2 === 1 ? "order-md-2" : "";
          const textOrder = index % 2 === 1 ? "order-md-1" : "";

          return (
            <section key={section.title} className="fx-card fx-reveal nmpd-story-card">
              <Row className="align-items-center g-4">
                <Col xs={12} md={6} className={imageOrder}>
                  <div className="fx-photo-frame">
                    <Image src={section.image} alt={section.alt} className="fx-photo" fluid />
                  </div>
                </Col>
                <Col xs={12} md={6} className={textOrder}>
                  <h2 className="fx-title nmpd-story-title">{section.title}</h2>
                  <p className="mb-0 nmpd-story-text">{section.text}</p>
                </Col>
              </Row>
            </section>
          );
        })}
      </Container>
    </main>
  );
};

export default Nmpd;