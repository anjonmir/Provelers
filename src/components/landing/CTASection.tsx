import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="glass-card cta-card">
          <h2>
            Ready To Start Exploring?
          </h2>

          <p>
            Join thousands of travelers
            across Bangladesh.
          </p>

          <Link
            to="/register"
            className="primary-btn"
          >
            Join Provelers
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;