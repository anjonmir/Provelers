import { useEffect, useState } from "react";

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

import { getFeedPosts } from "../../services/postService";

function FeedPage() {

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {

    loadPosts();

  }, []);

  async function loadPosts() {

    try {

      const mongoPosts =
        await getFeedPosts();

      setPosts(mongoPosts);

    } catch (err) {

      console.error(err);

    }

  }

  const feed = [

    ...posts,

    ...mockFeed,

  ];

  return (

    <Container fluid>

      <Row className="g-4">

        <Col lg={2}>
          <FeedLeftSidebar />
        </Col>

        <Col lg={7}>

          <CreatePostCard />

          {feed.map((post, index) => (

            <FeedPostCard

              key={post._id || post.id || index}

              post={post}

            />

          ))}

        </Col>

        <Col lg={3}>
          <FeedRightSidebar />
        </Col>

      </Row>

    </Container>

  );

}

export default FeedPage;