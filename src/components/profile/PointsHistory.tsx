import { Container, Row, Col } from "react-bootstrap";

import AchievementBadge from "./AchievementBadge";
import UserStats from "./UserStats";
import ActivityFeed from "./ActivityFeed";

import "./profile.css";

function UserProfile() {
  return (
    <section className="profile-section">
      <Container>
        <div className="profile-hero">
          <img
            src="/images/user-avatar.png"
            alt="User"
            className="profile-avatar"
          />

          <div>
            <h1>Anjon Mir</h1>

            <p>
              Passionate traveler exploring
              Bangladesh one place at a time.
            </p>
          </div>
        </div>

        <UserStats />

        <Row className="g-4 mt-1">
          <Col lg={8}>
            <div className="profile-card">
              <h3>Achievements</h3>

              <div className="achievement-grid">
                <AchievementBadge
                  title="Explorer"
                  icon="🏕️"
                />

                <AchievementBadge
                  title="Foodie"
                  icon="🍜"
                />

                <AchievementBadge
                  title="Top Reviewer"
                  icon="⭐"
                />

                <AchievementBadge
                  title="Photographer"
                  icon="📸"
                />
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <ActivityFeed />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default UserProfile;