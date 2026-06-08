import { ChevronsLeft, ChevronsRight, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react'
import ProjectCard from '../features/projects/project-card';
import useLimit from '@/public/hooks/useLimit';
import API from '@/public/config/axios';
import useProjects from '@/public/hooks/useProjects';

const ProjectsMain = () => {
  const [page, setPage] = useState(1)

  const limit = useLimit()

  const { projects, loading, error } = useProjects(page, limit)
  const pagination = projects?.meta
  return (
    <div className="container pt-20 mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h3 className="text-cyan-400 font-mono text-end md:text-start text-sm mb-2">
            PORTFOLIO
          </h3>
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        </div>
        <a
          href="https://github.com/IbnuRoi"
          className="text-cyan-400 lg:text-slate-400 hover:text-white flex items-center gap-2 text-sm lg:text-base border-b lg:border-transparent md:hover:border-cyan-400 pb-1 transition-all"
        >
          Explore on GitHub <ExternalLink size={14} />
        </a>
      </div>

      {loading ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.from({ length: limit }).map((_, idx) => (
            <div key={idx} className="flex flex-col gap-4 w-full">
              <div className="skeleton h-48 w-full bg-slate-800"></div>
              <div className="skeleton h-4 w-28 bg-slate-800"></div>
              <div className="skeleton h-4 w-full bg-slate-800"></div>
              <div className="skeleton h-4 w-full bg-slate-800"></div>
            </div>
          ))}
        </div> :

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects?.data?.map((project, idx) => (
            <ProjectCard key={idx} item={project} />
          ))}
        </div>
      }

      <div className="flex justify-center items-center mt-10">
        <div className="join">
          <button type='button' onClick={() => setPage(pagination?.prevPage)} disabled={!pagination?.prevPage} className={`join-item btn-ghost rounded-l-lg px-4 transition-all duration-300
          ${pagination?.prevPage
              ? "bg-slate-800 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
              : "bg-slate-800 text-slate-500 cursor-not-allowed border-none"
            }`}><ChevronsLeft size={20} strokeWidth={2} /></button>
          <button className="join-item btn text-cyan-400 bg-slate-800" disabled={true}>Page {pagination?.page || 1}</button>
          <button type='button' onClick={() => setPage(pagination?.nextPage)} disabled={!pagination?.nextPage} className={`join-item btn-ghost rounded-r-lg px-4 transition-all duration-300
            ${pagination?.nextPage
              ? "bg-slate-800 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
              : "bg-slate-800 text-slate-500 cursor-not-allowed border-none"
            }`}><ChevronsRight size={20} strokeWidth={2} /></button>
        </div>
      </div>

    </div>
  )
}

export default ProjectsMain