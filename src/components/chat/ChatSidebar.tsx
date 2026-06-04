import "./chat.css";

function ChatSidebar() {
  const chats = [
    "Sadia Islam",
    "Traveler Rahim",
    "Nafis Ahmed",
    "Bandarban Group",
  ];

  return (
    <div className="glass-card p-4">
      <h5>Messages</h5>

      {chats.map((chat) => (
        <div
          key={chat}
          className="chat-user"
        >
          {chat}
        </div>
      ))}
    </div>
  );
}

export default ChatSidebar;