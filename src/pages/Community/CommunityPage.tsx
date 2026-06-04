import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import PopularTopics from "../../components/community/PopularTopics";
import TopContributors from "../../components/community/TopContributors";

function CommunityPage() {
  return (
    <Container fluid>
      <Row className="g-4">

        <Col lg={3}>
          <PopularTopics />
        </Col>

        <Col lg={6}>
          <div className="glass-card p-4">
            <h2>
              Community Questions
            </h2>

            <p>
              Ask travel questions and
              get answers from explorers.
            </p>

            <button className="primary-btn">
              Ask Question
            </button>
          </div>
        </Col>

        <Col lg={3}>
          <TopContributors />
        </Col>

      </Row>
    </Container>
  );
}

export default CommunityPage;