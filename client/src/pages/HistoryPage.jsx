import { useState, useEffect } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function HistoryPage() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchHistory() {
      try {
        const token = localStorage.getItem("token");
        const res = await API.get("/history", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setHistory(res.data);
      } catch (err) {
        setError("Failed to load history");
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, []);

  return (
  <div className="min-h-screen bg-black text-white">
    <Navbar />
    <div className="px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">Your History</h1>
          <p className="text-gray-400">
            All the videos you've processed, in one place
          </p>
        </div>

        {loading && (
          <div className="flex justify-center py-12">
            <span className="w-6 h-6 border-2 border-gray-700 border-t-blue-500 rounded-full animate-spin"></span>
          </div>
        )}

        {error && (
          <p className="bg-red-900/40 border border-red-700 text-red-300 text-sm rounded-xl px-4 py-3">
            {error}
          </p>
        )}

        {!loading && history.length === 0 && !error && (
          <div className="text-center py-16">
            <p className="text-gray-500">
              No history yet. Process a video to see it here.
            </p>
          </div>
        )}

        <div className="flex flex-col gap-4">
          {history.map((item) => (
            <div
              key={item._id}
              className="bg-gray-900/80 border border-gray-700 rounded-xl px-6 py-5 hover:border-gray-600 transition"
            >
              <div className="flex justify-between items-start mb-2 gap-4">
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm hover:underline break-all"
                >
                  {item.videoUrl}
                </a>
                <span className="bg-gray-800 text-gray-300 text-xs px-2.5 py-1 rounded-full whitespace-nowrap">
                  {item.targetLanguage}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-3">
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <p className="text-gray-300 leading-relaxed line-clamp-3 text-sm">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
}

export default HistoryPage;