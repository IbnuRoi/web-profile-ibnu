"use client";

import {
  CodeXml,
  FolderOpen,
  FolderPlus,
  LayoutDashboard,
  LogOut,
  ExternalLink,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SideBarNav({ isOpen = false, onClose }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_username");
    document.cookie =
      "admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/admin/login");
  };

  const navItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin/dashboard",
      active: pathname === "/admin/dashboard",
    },
    {
      label: "Projects List",
      icon: FolderOpen,
      href: "/admin/dashboard/projects",
      active: pathname === "/admin/dashboard/projects",
    },
    {
      label: "Add Project",
      icon: FolderPlus,
      href: "/admin/dashboard/add-project",
      active: pathname === "/admin/dashboard/add-project",
    },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 flex flex-col h-full bg-slate-900 border-r border-slate-800 w-64 transition-transform duration-300 ease-in-out shrink-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Brand Header */}
        <div className="flex items-center justify-between px-4 py-4 sm:py-5 border-b border-slate-800 min-h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center shrink-0">
              <CodeXml size={18} className="text-slate-900" />
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-wide block">
                DevAdmin
              </span>
              <span className="text-[10px] text-cyan-400 font-mono block">
                PORTFOLIO CMS
              </span>
            </div>
          </div>

          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg lg:hidden cursor-pointer"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider px-3 mb-2">
            Management
          </p>

          {navItems.map(({ label, icon: Icon, href, active }) => (
            <Link
              key={label}
              href={href}
              onClick={() => onClose?.()}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all text-sm font-medium ${
                active
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <Icon size={18} className="shrink-0" />
              <span>{label}</span>
            </Link>
          ))}

          <div className="pt-4 mt-4 border-t border-slate-800/80">
            <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider px-3 mb-2">
              Website
            </p>
            <Link
              href="/"
              target="_blank"
              onClick={() => onClose?.()}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800/60 hover:text-slate-200 transition-all"
            >
              <ExternalLink size={18} className="shrink-0" />
              <span>View Live Site</span>
            </Link>
          </div>
        </nav>

        {/* Logout Footer */}
        <div className="p-3 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-400 hover:bg-red-950/30 hover:text-red-300 transition-all cursor-pointer"
          >
            <LogOut size={18} className="shrink-0" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}