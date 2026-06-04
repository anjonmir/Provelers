type Props = {
  text: string;
  sender: boolean;
};

function MessageBubble({
  text,
  sender,
}: Props) {
  return (
    <div
      className={
        sender
          ? "message sender"
          : "message receiver"
      }
    >
      {text}
    </div>
  );
}

export default MessageBubble;