"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Upload,
  CloudUpload,
  Check,
  ArrowRight,
  Loader2,
  FileText,
  Columns,
  HardDrive,
  Lightbulb,
  ChevronDown,
} from "lucide-react";

export default function UploadPage() {
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const [targetVar, setTargetVar] = useState("");
  const [protectedAttr, setProtectedAttr] = useState("");
  const [prediction, setPrediction] = useState("");

  const handleAnalyze = async () => {
    if (!file || !targetVar || !protectedAttr) {
      alert("Please upload file and select required fields.");
      return;
    }

    setAnalyzing(true);

    try {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("target", targetVar);
      formData.append("protected", protectedAttr);

      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Backend failed");
      }

      const data = await response.json();

      localStorage.setItem("analysis", JSON.stringify(data));

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Analysis failed");
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Upload & Analyze</h1>
        <p className="text-gray-500">
          Upload your dataset and detect bias automatically.
        </p>
      </div>

      {/* Upload Box */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8">
        <div className="flex gap-2 mb-5">
          {["Upload Data", "Settings", "Analyze", "Complete"].map(
            (step, i) => (
              <span
                key={step}
                className={`px-3 py-1 rounded-full text-sm ${
                  i === 0
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {step}
              </span>
            )
          )}
        </div>

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);

            const droppedFile = e.dataTransfer.files[0];

            if (droppedFile) {
              setFile(droppedFile);
              setUploaded(true);
            }
          }}
          className={`border-2 border-dashed rounded-2xl p-16 text-center transition ${
            dragOver
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
        >
          <input
            type="file"
            accept=".csv"
            hidden
            id="fileUpload"
            onChange={(e) => {
              const selected = e.target.files?.[0];

              if (selected) {
                setFile(selected);
                setUploaded(true);
              }
            }}
          />

          <label htmlFor="fileUpload" className="cursor-pointer">
            {uploaded ? (
              <>
                <Check className="mx-auto text-green-500 w-12 h-12 mb-4" />
                <p className="font-semibold">{file?.name}</p>
                <p className="text-sm text-gray-500">Uploaded Successfully</p>
              </>
            ) : (
              <>
                <CloudUpload className="mx-auto w-12 h-12 mb-4 text-gray-500" />
                <p className="font-semibold">
                  Drag & Drop CSV file here
                </p>
                <p className="text-sm text-gray-500">
                  or click to browse
                </p>
              </>
            )}
          </label>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-6">
          {/* Configure */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Configure Analysis
            </h2>

            {/* Target */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Target Variable
              </label>

              <select
                value={targetVar}
                onChange={(e) => setTargetVar(e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
              >
                <option value="">Select Target</option>
                <option value="hired">hired</option>
                <option value="approved">approved</option>
                <option value="selected">selected</option>
              </select>
            </div>

            {/* Protected */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Protected Attribute
              </label>

              <select
                value={protectedAttr}
                onChange={(e) => setProtectedAttr(e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
              >
                <option value="">Select Attribute</option>
                <option value="gender">gender</option>
                <option value="race">race</option>
                <option value="age">age</option>
              </select>
            </div>

            {/* Prediction */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">
                Prediction Column (Optional)
              </label>

              <select
                value={prediction}
                onChange={(e) => setPrediction(e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
              >
                <option value="">Select Prediction</option>
                <option value="prediction">prediction</option>
                <option value="score">score</option>
              </select>
            </div>

            {/* Button */}
            <button
              onClick={handleAnalyze}
              disabled={
                analyzing ||
                !uploaded ||
                !targetVar ||
                !protectedAttr
              }
              className="w-full bg-black text-white rounded-xl py-3 font-semibold flex justify-center items-center gap-2 disabled:opacity-50"
            >
              {analyzing ? (
                <>
                  <Loader2 className="animate-spin w-4 h-4" />
                  Analyzing...
                </>
              ) : (
                <>
                  Analyze Dataset
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Model */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">
              Configure Model
            </h2>
            <p className="text-gray-500 text-sm">
              Fairness metrics and future ML settings.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Data Info */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              About Your Data
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-xl p-4">
                <FileText className="mb-2 w-5 h-5" />
                <p className="text-sm text-gray-500">Rows</p>
                <p className="font-semibold">—</p>
              </div>

              <div className="border rounded-xl p-4">
                <Columns className="mb-2 w-5 h-5" />
                <p className="text-sm text-gray-500">Columns</p>
                <p className="font-semibold">—</p>
              </div>

              <div className="border rounded-xl p-4">
                <HardDrive className="mb-2 w-5 h-5" />
                <p className="text-sm text-gray-500">Size</p>
                <p className="font-semibold">—</p>
              </div>

              <div className="border rounded-xl p-4">
                <Lightbulb className="mb-2 w-5 h-5" />
                <p className="text-sm text-gray-500">Tip</p>
                <p className="font-semibold text-xs">
                  Include target & protected columns
                </p>
              </div>
            </div>
          </div>

          {/* Guide */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Quick Guide
            </h2>

            <div className="space-y-3 text-sm text-gray-600">
              <p>1. Upload CSV file</p>
              <p>2. Select target column</p>
              <p>3. Select protected column</p>
              <p>4. Run analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
