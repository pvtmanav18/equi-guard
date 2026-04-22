"use client";
import { useState } from "react";

export default function Home() {
  const [resume, setResume] = useState("");
  const [result, setResult] = useState<null | {
    original_score: number;
    shadow_score: number;
    bias_detected: boolean;
    bias_gap: number;
    verdict: string;
  }>(null);
  const [loading, setLoading] = useState(false);

  const evaluate = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("http://127.0.0.1:8000/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resume_text: resume }),
      });
      const data = await res.json();
      setResult(data);
    } catch {
      alert("Backend not reachable. Make sure uvicorn is running.");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">⚖️ EquiGuard</h1>
        <p className="text-gray-500 mt-2 text-lg">
          AI Bias Detection for Hiring Systems
        </p>
      </div>

      {/* Input Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-8 mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Paste Candidate Resume
        </label>
        <textarea
          className="w-full border border-gray-200 rounded-xl p-4 text-sm text-gray-800 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Paste the full resume text here..."
          value={resume}
          onChange={(e) => setResume(e.target.value)}
        />
        <button
          onClick={evaluate}
          disabled={loading || !resume.trim()}
          className="mt-4 w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 text-white font-semibold py-3 rounded-xl transition-all duration-200"
        >
          {loading ? "Analyzing..." : "🔍 Evaluate Candidate"}
        </button>
      </div>

      {/* Result Card */}
      {result && (
        <div
          className={`w-full max-w-2xl rounded-2xl shadow-md p-8 ${
            result.bias_detected
              ? "bg-red-50 border border-red-200"
              : "bg-green-50 border border-green-200"
          }`}
        >
          {/* Verdict Banner */}
          <div
            className={`text-center text-xl font-bold py-3 rounded-xl mb-6 ${
              result.bias_detected
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {result.bias_detected
              ? "🚨 BIAS DETECTED — Evaluation Flagged"
              : "✅ PASS — No Significant Bias Found"}
          </div>

          {/* Score Grid */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">
                Original Score
              </p>
              <p className="text-3xl font-bold text-gray-800">
                {result.original_score}
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">
                Shadow Twin
              </p>
              <p className="text-3xl font-bold text-gray-800">
                {result.shadow_score}
              </p>
            </div>
            <div
              className={`rounded-xl p-4 shadow-sm ${
                result.bias_detected ? "bg-red-100" : "bg-green-100"
              }`}
            >
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                Bias Gap
              </p>
              <p
                className={`text-3xl font-bold ${
                  result.bias_detected ? "text-red-600" : "text-green-600"
                }`}
              >
                {result.bias_gap}pts
              </p>
            </div>
          </div>

          {/* Explanation */}
          <p className="text-sm text-gray-500 mt-6 text-center">
            {result.bias_detected
              ? "The AI scored this candidate differently when demographic identifiers were changed. This indicates potential discriminatory bias."
              : "The AI scored both versions similarly. No significant demographic bias was detected."}
          </p>
        </div>
      )}
    </main>
  );
}