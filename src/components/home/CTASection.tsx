import { Container } from "react-bootstrap";

import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="cta-section">
      <Container>
        <div className="cta-box">
          <h2>
            Ready to Start Your Journey?
          </h2>

          <p>
            Explore beautiful places and create
            unforgettable travel experiences.
          </p>

          <Link to="/register" className="primary-btn">
            Join Provelers
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default CTASection;