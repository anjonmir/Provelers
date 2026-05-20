import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import "./home.css";

function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="hero-badge">
                Explore Bangladesh Smarter
              </span>

              <h1 className="hero-title">
                Discover Amazing Places Across
                Bangladesh
              </h1>

              <p className="hero-subtitle">
                Smart maps, trip planning,
                community Q&A, and AI-powered
                travel experiences — all in one
                platform.
              </p>

              <div className="hero-buttons">
                <Link
                  to="/map"
                  className="primary-btn"
                >
                  Explore Map
                </Link>

                <Link
                  to="/trip"
                  className="secondary-btn"
                >
                  Plan Trip
                </Link>
              </div>

              <div className="hero-stats">
                <div>
                  <h3>500+</h3>
                  <span>Tourist Spots</span>
                </div>

                <div>
                  <h3>12k+</h3>
                  <span>Travelers</span>
                </div>

                <div>
                  <h3>4.9</h3>
                  <span>Rating</span>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              className="hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/map-preview.jpg"
                alt="Travel Map"
                className="hero-image"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;