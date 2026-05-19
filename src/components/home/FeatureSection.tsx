import { Container, Row, Col } from "react-bootstrap";

import {
  FaMapMarkedAlt,
  FaRoute,
  FaUsers,
} from "react-icons/fa";

function FeatureSection() {
  return (
    <section className="section-padding">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">
            Why Choose Provelers?
          </h2>

          <p className="section-subtitle mx-auto">
            Everything you need to travel
            smarter across Bangladesh.
          </p>
        </div>

        <Row className="g-4">
          <Col md={4}>
            <div className="feature-card">
              <FaMapMarkedAlt className="feature-icon" />

              <h4>Smart Maps</h4>

              <p>
                Explore tourist places with
                interactive Mapbox-powered maps.
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="feature-card">
              <FaRoute className="feature-icon" />

              <h4>Trip Planner</h4>

              <p>
                Plan your travel routes, budgets,
                and schedules easily.
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="feature-card">
              <FaUsers className="feature-icon" />

              <h4>Travel Community</h4>

              <p>
                Ask questions, share experiences,
                and connect with travelers.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FeatureSection;