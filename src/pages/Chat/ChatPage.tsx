import { Container, Row, Col } from "react-bootstrap";

import ChatSidebar from "../../components/chat/ChatSidebar";
import ChatWindow from "../../components/chat/ChatWindow";
import GroupList from "../../components/chat/GroupList";

function ChatPage() {
  return (
    <Container fluid>
      <Row className="g-4">

        <Col lg={3}>
          <ChatSidebar />
        </Col>

        <Col lg={6}>
          <ChatWindow />
        </Col>

        <Col lg={3}>
          <GroupList />
        </Col>

      </Row>
    </Container>
  );
}

export default ChatPage;