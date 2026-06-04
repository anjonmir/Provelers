import { Container, Row, Col } from "react-bootstrap";

import ProfileHeader from "./ProfileHeader";
import UserStats from "./UserStats";
import RecentTrips from "./RecentTrips";
import BadgeGrid from "./BadgeGrid";
import PointsHistory from "./PointsHistory";

function UserProfile() {
  return (
    <Container fluid>
      <ProfileHeader />

      <Row className="g-4 mt-1">

        <Col lg={4}>
          <UserStats />
        </Col>

        <Col lg={8}>
          <RecentTrips />
        </Col>

        <Col lg={6}>
          <BadgeGrid />
        </Col>

        <Col lg={6}>
          <PointsHistory />
        </Col>

      </Row>
    </Container>
  );
}

export default UserProfile;