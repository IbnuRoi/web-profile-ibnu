"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FolderPlus,
  Trash2,
  Edit,
  ExternalLink,
  Eye,
  Calendar,
  AlertTriangle,
  Loader2,
  RefreshCw,
} from "lucide-react";
import API from "@/lib/axios";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [notification, setNotification] = useState({ type: "", message: "" });

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const { data } = await API.get("/public/projects?page=1&limit=50");
      setProjects(data?.data || []);
    } catch (err) {
      setNotification({
        type: "error",
        message: "Failed to load projects: " + (err.response?.data?.message || err.message),
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async () => {
    if (!projectToDelete) return;
    setDeletingId(projectToDelete.id);
    try {
      await API.delete(`/private/projects/${projectToDelete.id}`);
      setNotification({
        type: "success",
        message: `Project "${projectToDelete.name}" deleted successfully.`,
      });
      setProjects((prev) => prev.filter((p) => p.id !== projectToDelete.id));
      setProjectToDelete(null);
    } catch (err) {
      setNotification({
        type: "error",
        message:
          "Failed to delete project: " +
          (err.response?.data?.message || err.message),
      });
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white">Projects Management</h1>
          <p className="text-xs sm:text-sm text-slate-400">
            View, edit, or remove projects from your portfolio
          </p>
        </div>
        <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <button
            onClick={fetchProjects}
            className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors cursor-pointer"
            title="Refresh list"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
          </button>
          <Link
            href="/admin/dashboard/add-project"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-3.5 sm:px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 text-xs sm:text-sm"
          >
            <FolderPlus size={16} /> Add New Project
          </Link>
        </div>
      </div>

      {/* Notification banner */}
      {notification.message && (
        <div
          className={`p-4 rounded-xl text-sm flex items-center justify-between ${
            notification.type === "error"
              ? "bg-red-950/60 border border-red-800 text-red-300"
              : "bg-emerald-950/60 border border-emerald-800 text-emerald-300"
          }`}
        >
          <span>{notification.message}</span>
          <button
            onClick={() => setNotification({ type: "", message: "" })}
            className="text-xs uppercase font-mono hover:underline cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Projects List Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center gap-3 text-slate-500">
            <Loader2 size={32} className="animate-spin text-cyan-400" />
            <p className="text-sm">Loading projects...</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="py-20 text-center text-slate-500 space-y-4">
            <p>No projects found in the database.</p>
            <Link
              href="/admin/dashboard/add-project"
              className="inline-block text-cyan-400 text-sm hover:underline"
            >
              Create your first project &rarr;
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-800/60 text-xs font-mono uppercase text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6 min-w-[220px]">Project</th>
                  <th className="py-4 px-6 whitespace-nowrap">Type</th>
                  <th className="py-4 px-6 whitespace-nowrap">Date</th>
                  <th className="py-4 px-6 min-w-[160px]">Tech Stacks</th>
                  <th className="py-4 px-6 text-right whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {projects.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 overflow-hidden relative shrink-0">
                          {item.imageUrl ? (
                            <Image
                              src={item.imageUrl}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-500 font-mono">
                              No Img
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-white">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-400 line-clamp-1 max-w-xs">
                            {item.description?.short || item.shortDescription}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-medium rounded-full whitespace-nowrap shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                        {item.projectType}
                      </span>
                    </td>

                    <td className="py-4 px-6 text-slate-400 text-xs whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} className="shrink-0" /> {item.date}
                      </div>
                    </td>

                    <td className="py-4 px-6">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {item.techStacks?.slice(0, 3).map((stack, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 bg-slate-800 text-slate-300 text-[11px] rounded"
                          >
                            {stack.name}
                          </span>
                        ))}
                        {item.techStacks?.length > 3 && (
                          <span className="text-[11px] text-slate-500">
                            +{item.techStacks.length - 3}
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/projects/${item.id}`}
                          target="_blank"
                          title="View Live Page"
                          className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                        >
                          <Eye size={16} />
                        </Link>
                        <Link
                          href={`/admin/dashboard/edit-project/${item.id}`}
                          title="Edit Project"
                          className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-colors"
                        >
                          <Edit size={16} />
                        </Link>
                        <button
                          onClick={() => setProjectToDelete(item)}
                          title="Delete Project"
                          className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {projectToDelete && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center gap-3 text-red-400 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-800 flex items-center justify-center">
                <AlertTriangle size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Delete Project</h3>
            </div>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Are you sure you want to delete{" "}
              <strong className="text-white">&ldquo;{projectToDelete.name}&rdquo;</strong>?
              This will permanently delete the project from the database and remove
              its banner image from Cloudinary.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setProjectToDelete(null)}
                disabled={deletingId !== null}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deletingId !== null}
                className="px-4 py-2 text-sm bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {deletingId ? (
                  <>
                    <Loader2 size={14} className="animate-spin" /> Deleting...
                  </>
                ) : (
                  "Delete Forever"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
