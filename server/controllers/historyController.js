import History from "../models/History.js";

// Save a new history entry
export async function saveHistory(req, res) {
  const { videoUrl, targetLanguage, summary } = req.body;

  try {
    const newHistory = await History.create({
      user: req.userId,
      videoUrl,
      targetLanguage,
      summary,
    });

    res.status(201).json(newHistory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get all history for logged-in user
export async function getHistory(req, res) {
  try {
    const history = await History.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}