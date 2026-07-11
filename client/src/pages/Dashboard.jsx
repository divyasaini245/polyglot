import { useState } from "react";
import API from "../services/api";
import { languages } from "../data/languages";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [videoUrl, setVideoUrl] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("Hindi");
  const [summary, setSummary] = useState("");
  const [originalTranscript, setOriginalTranscript] = useState("");
  const [showTranscript, setShowTranscript] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSummary("");
    setOriginalTranscript("");
    setShowTranscript(false);
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const res = await API.post(
        "/transcript/process",
        { videoUrl, targetLanguage },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSummary(res.data.summary);
      setOriginalTranscript(res.data.originalTranscript);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

 return (
  <div className="min-h-screen bg-black text-white">
    <Navbar />
    <div className="px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">
            Turn any video into insights
          </h1>
          <p className="text-gray-400">
            Paste a YouTube link, choose your language, get an instant summary
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="https://www.youtube.com/watch?v=..."
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            required
            className="bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 transition"
          />

          <select
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
            className="bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 transition"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-500 transition py-3.5 rounded-xl font-semibold disabled:opacity-50 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                Processing...
              </>
            ) : (
              "Get Summary"
            )}
          </button>
        </form>

        {error && (
          <p className="bg-red-900/40 border border-red-700 text-red-300 text-sm rounded-xl px-4 py-3 mt-6">
            {error}
          </p>
        )}

        {summary && (
          <div className="bg-gray-900/80 border border-gray-700 rounded-xl px-6 py-6 mt-8">
            <h2 className="text-lg font-semibold mb-3 text-blue-400 flex items-center gap-2">
              Summary
            </h2>
            <p className="text-gray-200 leading-relaxed whitespace-pre-line">
              {summary}
            </p>

            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="text-blue-400 text-sm mt-5 hover:underline font-medium"
            >
              {showTranscript ? "Hide Original Transcript" : "View Original Transcript"}
            </button>

            {showTranscript && (
              <div className="bg-black/40 border border-gray-800 rounded-xl px-4 py-4 mt-4 max-h-64 overflow-y-auto">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {originalTranscript}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
  );
}

export default Dashboard;