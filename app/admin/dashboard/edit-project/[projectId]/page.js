"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Upload,
  Plus,
  Trash2,
  Loader2,
  CheckCircle,
} from "lucide-react";
import API from "@/lib/axios";

export default function EditProjectPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params?.projectId;

  const [form, setForm] = useState({
    name: "",
    projectType: "",
    date: "",
    shortDescription: "",
    description: "",
    challenge: "",
    solution: "",
    githubLink: "",
    livePreview: "",
  });

  const [existingImageUrl, setExistingImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [keyFeatures, setKeyFeatures] = useState([""]);
  const [techStacks, setTechStacks] = useState([
    { category: "Frontend", name: "" },
  ]);

  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!projectId) return;

    const fetchProjectData = async () => {
      try {
        const { data } = await API.get(`/public/projects/${projectId}`);
        const p = data?.data;
        if (!p) throw new Error("Project not found");

        let parsedDate = "";
        if (p.date) {
          const d = new Date(p.date);
          if (!isNaN(d.getTime())) {
            parsedDate = d.toISOString().split("T")[0];
          }
        }

        setForm({
          name: p.name || "",
          projectType: p.projectType || "",
          date: parsedDate,
          shortDescription: p.description?.short || p.shortDescription || "",
          description: p.description?.long || p.description?.full || p.description || "",
          challenge: p.techChallenge?.challenge || p.challenge || "",
          solution: p.techChallenge?.solution || p.solution || "",
          githubLink: p.sourceCode || p.githubLink || "",
          livePreview: p.livePreview || "",
        });

        setExistingImageUrl(p.imageUrl || "");

        if (p.keyFeatures?.length > 0) {
          setKeyFeatures(p.keyFeatures.map((f) => (typeof f === "string" ? f : f.feature)));
        }

        if (p.techStacks?.length > 0) {
          setTechStacks(
            p.techStacks.map((t) => ({
              category: t.category || "Frontend",
              name: t.name || "",
            }))
          );
        }
      } catch (err) {
        setError(
          err.response?.data?.message || err.message || "Failed to load project details"
        );
      } finally {
        setFetching(false);
      }
    };

    fetchProjectData();
  }, [projectId]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleFeatureChange = (index, value) => {
    const updated = [...keyFeatures];
    updated[index] = value;
    setKeyFeatures(updated);
  };

  const addFeature = () => {
    setKeyFeatures([...keyFeatures, ""]);
  };

  const removeFeature = (index) => {
    setKeyFeatures(keyFeatures.filter((_, i) => i !== index));
  };

  const handleTechChange = (index, field, value) => {
    const updated = [...techStacks];
    updated[index][field] = value;
    setTechStacks(updated);
  };

  const addTechStack = () => {
    setTechStacks([...techStacks, { category: "Frontend", name: "" }]);
  };

  const removeTechStack = (index) => {
    setTechStacks(techStacks.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const filteredFeatures = keyFeatures.filter((f) => f.trim() !== "");
    const filteredTechStacks = techStacks.filter((t) => t.name.trim() !== "");

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("projectType", form.projectType);
      formData.append("date", form.date);
      formData.append("shortDescription", form.shortDescription);
      formData.append("description", form.description);
      formData.append("challenge", form.challenge);
      formData.append("solution", form.solution);
      formData.append("githubLink", form.githubLink || "");
      formData.append("livePreview", form.livePreview || "");
      if (imageFile) {
        formData.append("image", imageFile);
      }
      formData.append("keyFeatures", JSON.stringify(filteredFeatures));
      formData.append("techStacks", JSON.stringify(filteredTechStacks));

      await API.put(`/private/projects/${projectId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess(true);
      setTimeout(() => {
        router.push("/admin/dashboard/projects");
      }, 1200);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to update project. Please verify all inputs."
      );
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="p-20 flex flex-col items-center justify-center gap-3 text-slate-500">
        <Loader2 size={32} className="animate-spin text-cyan-400" />
        <p className="text-sm">Loading project information...</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-6">
      {/* Back button */}
      <div>
        <Link
          href="/admin/dashboard/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors mb-2"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>
        <h1 className="text-xl sm:text-2xl font-bold text-white">Edit Project</h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Update the details and content for &quot;{form.name}&quot;
        </p>
      </div>

      {error && (
        <div className="p-4 bg-red-950/60 border border-red-800 rounded-xl text-red-300 text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800 rounded-xl text-emerald-300 text-sm flex items-center gap-2">
          <CheckCircle size={18} /> Project updated successfully! Redirecting...
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        {/* Basic Details */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 space-y-5">
          <h2 className="text-sm sm:text-base font-bold text-white font-mono uppercase tracking-wider text-cyan-400">
            01. Basic Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                Project Name *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                Project Type / Tag *
              </label>
              <input
                type="text"
                required
                value={form.projectType}
                onChange={(e) =>
                  setForm({ ...form, projectType: e.target.value })
                }
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                Date Completed *
              </label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                Live Preview URL
              </label>
              <input
                type="url"
                value={form.livePreview}
                onChange={(e) =>
                  setForm({ ...form, livePreview: e.target.value })
                }
                placeholder="https://example.com"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                GitHub Repository URL
              </label>
              <input
                type="url"
                value={form.githubLink}
                onChange={(e) =>
                  setForm({ ...form, githubLink: e.target.value })
                }
                placeholder="https://github.com/..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
              Short Description *
            </label>
            <textarea
              required
              rows={2}
              value={form.shortDescription}
              onChange={(e) =>
                setForm({ ...form, shortDescription: e.target.value })
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
              Full Project Description *
            </label>
            <textarea
              required
              rows={4}
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                Challenge Faced *
              </label>
              <textarea
                required
                rows={3}
                value={form.challenge}
                onChange={(e) =>
                  setForm({ ...form, challenge: e.target.value })
                }
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                Solution Implemented *
              </label>
              <textarea
                required
                rows={3}
                value={form.solution}
                onChange={(e) =>
                  setForm({ ...form, solution: e.target.value })
                }
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Banner Image Update */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-cyan-400">
            02. Project Banner Image
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-64 aspect-video bg-slate-800 rounded-xl border border-dashed border-slate-700 overflow-hidden flex items-center justify-center relative">
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="New Preview"
                  fill
                  className="object-cover"
                />
              ) : existingImageUrl ? (
                <Image
                  src={existingImageUrl}
                  alt="Current Banner"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="text-center p-4 text-slate-500">
                  <Upload size={24} className="mx-auto mb-1 text-slate-400" />
                  <span className="text-xs">No image</span>
                </div>
              )}
            </div>

            <div className="flex-1 space-y-2">
              <label className="block text-xs font-mono uppercase text-slate-300">
                Replace Banner Image (Leave empty to keep existing image)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-cyan-500/10 file:text-cyan-400 hover:file:bg-cyan-500/20 text-sm text-slate-400 cursor-pointer"
              />
              <p className="text-xs text-slate-500">
                Uploading a new file will automatically replace the image in Cloudinary.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-cyan-400">
              03. Key Features
            </h2>
            <button
              type="button"
              onClick={addFeature}
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer"
            >
              <Plus size={14} /> Add Feature
            </button>
          </div>

          <div className="space-y-3">
            {keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  type="text"
                  value={feat}
                  onChange={(e) => handleFeatureChange(idx, e.target.value)}
                  placeholder={`Feature bullet #${idx + 1}`}
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2 text-white text-sm focus:border-cyan-500 focus:outline-none"
                />
                {keyFeatures.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFeature(idx)}
                    className="p-2 text-slate-500 hover:text-red-400 transition-colors cursor-pointer"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stacks */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm sm:text-base font-bold text-white font-mono uppercase tracking-wider text-cyan-400">
              04. Tech Stacks
            </h2>
            <button
              type="button"
              onClick={addTechStack}
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer"
            >
              <Plus size={14} /> Add Technology
            </button>
          </div>

          <div className="space-y-3">
            {techStacks.map((stack, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                <select
                  value={stack.category}
                  onChange={(e) =>
                    handleTechChange(idx, "category", e.target.value)
                  }
                  className="w-full sm:w-36 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:border-cyan-500 focus:outline-none"
                >
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Database">Database</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Language">Language</option>
                  <option value="Tools">Tools</option>
                </select>

                <div className="flex items-center gap-2 flex-1">
                  <input
                    type="text"
                    value={stack.name}
                    onChange={(e) =>
                      handleTechChange(idx, "name", e.target.value)
                    }
                    placeholder="Technology name (e.g. React, PostgreSQL)"
                    className="flex-1 w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2 text-white text-sm focus:border-cyan-500 focus:outline-none"
                  />

                  {techStacks.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeTechStack(idx)}
                      className="p-2 text-slate-500 hover:text-red-400 transition-colors cursor-pointer shrink-0"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3 sm:gap-4 pt-4">
          <Link
            href="/admin/dashboard/projects"
            className="text-center px-6 py-2.5 text-slate-400 hover:text-white text-sm rounded-xl transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto justify-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-2.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 text-sm flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Saving Changes...
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
