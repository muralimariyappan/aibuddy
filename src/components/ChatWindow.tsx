import useAiHooks from "../hooks/useAiHooks";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

function ChatWindow() {
  const { fetchAiResponse, messages } = useAiHooks();
  return (
    <div>
      <ChatMessages messages={messages} />
      <ChatInput handleChatInput={fetchAiResponse} />
    </div>
  );
}

export default ChatWindow;
