"use client";

import React, { useState } from "react";
import SideBarNav from "@/components/features/dashboard/sideBar";
import { Menu, CodeXml } from "lucide-react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-slate-950 overflow-hidden">
      {/* Mobile Top Navigation Header */}
      <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 z-30 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center shrink-0">
            <CodeXml size={18} className="text-slate-900" />
          </div>
          <div>
            <span className="text-sm font-bold text-white tracking-wide block">
              DevAdmin
            </span>
            <span className="text-[9px] text-cyan-400 font-mono block">
              PORTFOLIO CMS
            </span>
          </div>
        </div>

        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          aria-label="Open sidebar menu"
        >
          <Menu size={22} />
        </button>
      </header>

      {/* Sidebar Component with Drawer support */}
      <SideBarNav isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto min-w-0 bg-slate-900">
        {children}
      </main>
    </div>
  );
}