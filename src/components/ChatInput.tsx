import { useState } from "react";

interface ChatInputProps {
  handleChatInput: (input: string) => void;
}

function ChatInput({ handleChatInput }: ChatInputProps) {
  const [chatInput, setChatInput] = useState("");

  const handleSendMessage = () => {
    console.log("Message sent!");
    handleChatInput(chatInput);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type your message here..."
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSendMessage}>
        Send
      </button>
      <button type="button">Attach File</button>
      <button type="button">Emoji</button>
    </div>
  );
}

export default ChatInput;
