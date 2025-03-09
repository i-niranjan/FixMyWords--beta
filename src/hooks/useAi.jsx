import { GoogleGenerativeAI } from "@google/generative-ai";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}

const genAI = new GoogleGenerativeAI(`${apiKey}`);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateAIResponse = async (text, promptTemplate) => {
  try {
    const prompt = promptTemplate.replace("{text}", text);
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("AI Error:", error);
    return "Error generating response.";
  }
};

const checkGrammar = async (text) => {
  return await generateAIResponse(
    text,
    "Check and correct any grammatical, spelling, and punctuation mistakes in the following text. Ensure clarity while keeping the original meaning unchanged:\n\n'{text}'"
  );
};

const toCasual = async (text) => {
  return await generateAIResponse(
    text,
    "Rephrase the following text in a casual and conversational tone. Keep it engaging and easy to understand:\n\n'{text}'"
  );
};

const toFormal = async (text) => {
  return await generateAIResponse(
    text,
    "Rewrite the following text in a formal and professional tone, ensuring clarity, correctness, and a polished style:\n\n'{text}'"
  );
};

const toCreative = async (text) => {
  return await generateAIResponse(
    text,
    "Make the following text more creative and engaging. Use vivid language, storytelling elements, and a more captivating style:\n\n'{text}'"
  );
};

const summarizeText = async (text) => {
  return await generateAIResponse(
    text,
    "Summarize the following text in a concise and clear manner, keeping the key points intact. Provide a TL;DR version in one or two sentences:\n\n'{text}'"
  );
};

const toProfessional = async (text) => {
  return await generateAIResponse(
    text,
    "Rewrite the following text in a highly professional tone, making it suitable for business, corporate communication, or executive-level writing:\n\n'{text}'"
  );
};

const toFriendly = async (text) => {
  return await generateAIResponse(
    text,
    "Rephrase the following text in a friendly and approachable tone. Make it sound warm, engaging, and inviting:\n\n'{text}'"
  );
};

const toPersuasive = async (text) => {
  return await generateAIResponse(
    text,
    "Rewrite the following text in a persuasive tone. Use strong arguments, compelling language, and a confident style to convince the reader:\n\n'{text}'"
  );
};

export {
  checkGrammar,
  toCasual,
  toFormal,
  toCreative,
  summarizeText,
  toProfessional,
  toFriendly,
  toPersuasive,
};
