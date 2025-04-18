class AiService {
  private API_KEY = process.env.API_KEY || "";
  async getAiResponse(prompt: string): Promise<string> {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${this.API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching AI response: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  }
}

export default AiService;
