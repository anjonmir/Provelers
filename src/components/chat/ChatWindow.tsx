import MessageBubble from "./MessageBubble";

function ChatWindow() {
  return (
    <div className="glass-card p-4 chat-window">

      <div className="chat-header">
        <h5>Sadia Islam</h5>

        <span>Rajshahi</span>
      </div>

      <div className="chat-messages">

        <MessageBubble
          text="Hey! Have you visited Sajek recently?"
          sender={false}
        />

        <MessageBubble
          text="Yes! The weather was amazing."
          sender={true}
        />

        <MessageBubble
          text="Can you recommend hotels?"
          sender={false}
        />

      </div>

      <div className="chat-input-area">
        <input
          placeholder="Type a message..."
        />

        <button className="primary-btn">
          Send
        </button>
      </div>

    </div>
  );
}

export default ChatWindow;