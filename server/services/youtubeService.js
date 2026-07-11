import { YoutubeTranscript } from "youtube-transcript";

export async function getTranscript(videoUrl) {
  try {
    const transcript = await YoutubeTranscript.fetchTranscript(videoUrl);
    return transcript;
  } catch (error) {
    console.error("Error fetching transcript:", error.message);
    throw error;
  }
}
export function formatTranscript(transcriptArray) {
  return transcriptArray.map(item => item.text).join(" ");
}