import { useState } from "react";
import AiService from "../services/aiservice";

function parseAiResponse(response: any): string {
  return response.candidates[0].content.parts[0].text;
}

function useAiHooks() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  const aiserviceInstance = new AiService();
  const fetchAiResponse = async (prompt: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await aiserviceInstance.getAiResponse(prompt);
      setMessages((prevMessages) => [
        ...prevMessages,
        prompt,
        parseAiResponse(response),
      ]);
    } catch (err) {
      setError("Failed to fetch AI response");
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchAiResponse,
    messages,
  };
}

export default useAiHooks;
