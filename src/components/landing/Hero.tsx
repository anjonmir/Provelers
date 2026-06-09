import { Link } from "react-router-dom";
import { FaMapMarkedAlt } from "react-icons/fa";

import "./landing.css";

function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-overlay">

        <span className="hero-badge">
          Discover Bangladesh Smarter
        </span>

        <h1>
          Travel, Connect & Explore
          Hidden Gems With Provelers
        </h1>

        <p>
          Join travelers, discover places,
          ask questions, create trips and
          explore Bangladesh through a
          social travel platform.
        </p>

        <div className="hero-actions">
          <Link
            to="/register"
            className="primary-btn"
          >
            Get Started
          </Link>

          <Link
            to="/map"
            className="secondary-btn"
          >
            <FaMapMarkedAlt />
            Explore Map
          </Link>
        </div>

      </div>

    </section>
  );
}

export default Hero;