import { getTranscript, formatTranscript } from "../services/youtubeService.js";
import { summarizeAndTranslate } from "../services/aiService.js";
import History from "../models/History.js";

export async function processVideo(req, res) {
  const { videoUrl, targetLanguage } = req.body;

  if (!videoUrl || !targetLanguage) {
    return res.status(400).json({ error: "videoUrl and targetLanguage are required" });
  }

  try {
    const transcript = await getTranscript(videoUrl);
    const fullText = formatTranscript(transcript);
    const summary = await summarizeAndTranslate(fullText, targetLanguage);

    // Agar user logged in hai (token verified hai), history save karo
    if (req.userId) {
      await History.create({
        user: req.userId,
        videoUrl,
        targetLanguage,
        summary,
      });
    }

    res.json({
      originalTranscript: fullText,
      summary,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Could not fetch transcript. This video may not have captions available, or the link may be invalid.",
    });
}
}