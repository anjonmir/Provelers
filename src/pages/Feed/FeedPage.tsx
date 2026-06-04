import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import CreatePostCard from "../../components/feed/CreatePostCard";
import PostCard from "../../components/feed/PostCard";
import TrendingTopics from "../../components/feed/TrendingTopics";
import FollowSuggestions from "../../components/feed/FollowSuggestions";

function FeedPage() {
  const posts = [
    {
      id: 1,
      author: "Anjon Mir",
      location: "Sajek Valley",
      content:
        "Just discovered an amazing hidden viewpoint in Sajek. Highly recommended!",
      likes: 42,
      comments: 8,
    },
    {
      id: 2,
      author: "Sadia Islam",
      location: "Cox's Bazar",
      content:
        "Sunrise at Cox's Bazar was absolutely beautiful today.",
      likes: 27,
      comments: 5,
    },
  ];

  return (
    <Container fluid>
      <Row className="g-4">

        <Col lg={3}>
          <TrendingTopics />
        </Col>

        <Col lg={6}>
          <CreatePostCard />

          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))}
        </Col>

        <Col lg={3}>
          <FollowSuggestions />
        </Col>

      </Row>
    </Container>
  );
}

export default FeedPage;