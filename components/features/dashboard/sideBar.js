"use client"

import { CodeXml, FileText, FolderOpen, LayoutDashboard } from 'lucide-react';
import { useState } from 'react'

const navItems = [
    {
        section: 'Feature',
        items: [
            { label: 'Dashboard', icon: LayoutDashboard, href: '/admin/dashboard', badge: null },
            { label: 'Projects', icon: FolderOpen, href: '/admin/dashboard', badge: 8 },
            { label: 'Curriculum Vitae', icon: FileText, href: '/admin', badge: 3 },
        ],
    },
]

export default function SideBarNav() {
    const [collapsed, setCollapsed] = useState(false)
    const [active, setActive] = useState('Dashboard')

    return (
        <aside className={`flex flex-col h-screen bg-slate-800 border-r border-slate-700 transition-all duration-300 ${collapsed ? 'w-16' : 'w-60'}`}>
            <div className="flex items-center gap-3 px-4 py-5 border-b border-slate-700 min-h-16">
                <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center shrink-0">
                    <CodeXml size={16} className="text-slate-900" />
                </div>
                {!collapsed && (
                    <span className="text-base font-medium text-slate-100 whitespace-nowrap">
                        DevAdmin
                    </span>
                )}
            </div>

            <nav className="flex-1 overflow-y-auto py-2">
                {navItems.map(({ section, items }) => (
                    <div key={section} className="px-2 mb-2">
                        {!collapsed && (
                            <p className="text-sm font-medium text-slate-500 uppercase tracking-widest px-2 mb-1">
                                {section}
                            </p>
                        )}
                        {items.map(({ label, icon: Icon, href, badge }) => (
                            <a key={label} href={href} onClick={() => setActive(label)} className={`
                                flex justify-center items-center gap-3 rounded-lg px-3 py-2 mb-0.5 transition-colors
                                ${collapsed ? 'justify-center px-0' : ''}
                                ${active === label ? 'bg-cyan-400/50 text-slate-200' : 'text-slate-400 hover:bg-cyan-400/80 hover:text-slate-200'}
                                `}>
                                <Icon size={16} className="shrink-0" />
                                {!collapsed && (
                                    <>
                                        <span className="flex-1 text-sm">{label}</span>
                                        {badge && (
                                            <span className="text-sm font-medium bg-cyan-900 text-cyan-400 px-2 py-0.5 rounded-full">
                                                {badge}
                                            </span>
                                        )}
                                    </>
                                )}
                            </a>
                        ))}
                    </div>
                ))}
            </nav>
        </aside>
    )
}