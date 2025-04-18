interface ChatMessagesProps {
  messages: string[]; // Array of chat messages
}

function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div>
      {messages.length > 0 ? (
        messages.map((message, index) => (
          <div key={index} className="chat-message">
            {message}
          </div>
        ))
      ) : (
        <div className="no-messages">No messages yet.</div>
      )}
    </div>
  );
}

export default ChatMessages;
