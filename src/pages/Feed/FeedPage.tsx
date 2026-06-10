import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import CreatePostCard from "../../components/feed/CreatePostCard";
import FeedPostCard from "../../components/feed/FeedPostCard";

import FeedLeftSidebar from "../../components/feed/FeedLeftSidebar";
import FeedRightSidebar from "../../components/feed/FeedRightSidebar";

import { mockFeed } from "../../data/mockFeed";

function FeedPage() {
  return (
    <Container fluid>

      <Row className="g-4">

        <Col lg={2}>
          <FeedLeftSidebar />
        </Col>

        <Col lg={7}>

          <CreatePostCard />

          {mockFeed.map(
            (post) => (
              <FeedPostCard
                key={post.id}
                post={post}
              />
            )
          )}

        </Col>

        <Col lg={3}>
          <FeedRightSidebar />
        </Col>

      </Row>

    </Container>
  );
}

export default FeedPage;