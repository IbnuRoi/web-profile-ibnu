"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FolderOpen,
  PlusCircle,
  Eye,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import API from "@/lib/axios";

export default function DashboardPage() {
  const [projects, setProjects] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("Admin");

  useEffect(() => {
    const savedUser = localStorage.getItem("admin_username");
    if (savedUser) setUsername(savedUser);

    const fetchDashboardData = async () => {
      try {
        const { data } = await API.get("/public/projects?page=1&limit=5");
        setProjects(data?.data || []);
        setTotalCount(data?.meta?.totalProjects || 0);
      } catch (err) {
        console.error("Failed to load dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 sm:space-y-8">
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-800 p-4 sm:p-6 rounded-2xl">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
            Welcome back, <span className="text-cyan-400">{username}</span>!
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Manage your showcase projects and monitor portfolio content.
          </p>
        </div>
        <Link
          href="/admin/dashboard/add-project"
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 text-sm"
        >
          <PlusCircle size={18} /> Add New Project
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-slate-850/80 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-cyan-500/40 transition-all">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Total Projects
            </span>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <FolderOpen size={20} />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white">
            {loading ? "..." : totalCount}
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Published across your portfolio
          </p>
        </div>

        <div className="bg-slate-850/80 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-cyan-500/40 transition-all">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Featured on Home
            </span>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Sparkles size={20} />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white">
            {loading ? "..." : Math.min(totalCount, 6)}
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Displayed in homepage carousel
          </p>
        </div>

        <div className="bg-slate-850/80 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-cyan-500/40 transition-all">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Quick Actions
            </span>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Layers size={20} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="/admin/dashboard/projects"
              className="text-sm text-cyan-400 hover:underline flex items-center gap-1.5"
            >
              Manage all projects <ArrowRight size={14} />
            </Link>
            <Link
              href="/projects"
              target="_blank"
              className="text-sm text-slate-400 hover:text-white flex items-center gap-1.5"
            >
              Preview portfolio gallery <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Projects Table Preview */}
      <div className="bg-slate-850/60 border border-slate-800 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-white">Recent Projects</h2>
          <Link
            href="/admin/dashboard/projects"
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            View all
          </Link>
        </div>

        {loading ? (
          <div className="py-12 text-center text-slate-500 text-sm">
            Loading recent projects...
          </div>
        ) : projects.length === 0 ? (
          <div className="py-12 text-center text-slate-500 text-sm">
            No projects added yet. Click &quot;Add New Project&quot; to create your first portfolio entry!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-slate-400 uppercase border-b border-slate-800">
                <tr>
                  <th className="pb-3 font-mono min-w-[200px]">Project Name</th>
                  <th className="pb-3 font-mono whitespace-nowrap">Type</th>
                  <th className="pb-3 font-mono whitespace-nowrap">Date</th>
                  <th className="pb-3 font-mono text-right whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {projects.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 font-medium text-white">{item.name}</td>
                    <td className="py-4 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-medium rounded-full whitespace-nowrap shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                        {item.projectType}
                      </span>
                    </td>
                    <td className="py-4 text-slate-400 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-xs">
                        <Calendar size={13} className="shrink-0" /> {item.date}
                      </div>
                    </td>
                    <td className="py-4 text-right whitespace-nowrap">
                      <Link
                        href={`/projects/${item.id}`}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-cyan-400 text-xs transition-colors"
                      >
                        <Eye size={14} /> Preview
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}