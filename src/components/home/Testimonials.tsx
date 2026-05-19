import { Container } from "react-bootstrap";

function Testimonials() {
  return (
    <section className="section-padding">
      <Container>
        <div className="testimonial-card">
          <h2>
            “Provelers completely changed how I
            explore Bangladesh.”
          </h2>

          <p>
            Smart maps, community suggestions,
            and trip planning all in one place.
          </p>

          <span>— Anjon Mir</span>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;