import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function summarizeAndTranslate(transcriptText, targetLanguage) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
  Below is a transcript of a YouTube video.
  Summarize it in 3-4 clear sentences, and provide ONLY the summary translated into ${targetLanguage}.
  Do not include any English text, labels, or headers — just the translated summary directly.

  Transcript:
  ${transcriptText}
`;
    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return response;
  } catch (error) {
    console.error("Error with Gemini API:", error.message);
    throw error;
  }
}