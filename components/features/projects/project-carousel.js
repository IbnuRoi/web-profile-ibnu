"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./project-card";
import useCarousel from "@/public/hooks/useCarousel";
import API from "@/public/config/axios";


const ProjectCarousel = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getProjectsCarousel = async () => {
    setLoading(true)
    setError(null)

    try {
      const { data } = await API.get('public/carousel')

      setProjects(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProjectsCarousel()
  }, [])

  const {
    carouselRef,
    activeIndex,
    scrollToItem,
    handlePrev,
    handleNext,
    dots,
    maxIndex
  } = useCarousel(projects?.data?.length)

  return (
    <>
      {loading ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col gap-4 w-full">
          <div className="skeleton h-48 w-full bg-slate-800"></div>
          <div className="skeleton h-4 w-28 bg-slate-800"></div>
          <div className="skeleton h-4 w-full bg-slate-800"></div>
          <div className="skeleton h-4 w-full bg-slate-800"></div>
        </div>
      </div> :
        <div className="relative w-full mx-auto px-4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

          {/* LEFT BUTTON */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`
          hidden lg:flex
          btn btn-circle absolute left-1 top-1/2 -translate-y-1/2 z-10
        bg-cyan-400 text-slate-900
        hover:bg-slate-200 hover:text-cyan-500
          transition-opacity duration-300
        ${!isHovered
                ? "opacity-0 pointer-events-none"
                : activeIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100"
              }
        `}
          >
            <ChevronLeft size={20} strokeWidth={3} />
          </button>

          {/* CAROUSEL */}
          <div
            ref={carouselRef}
            className={`
          carousel carousel-center
          w-full
          space-x-4
          overflow-x-auto
          scroll-smooth
          no-scrollbar
          px-2
          `}


          >
            {projects?.data?.map((project, idx) => (
              <div
                key={idx}
                className={`carousel-item
              relative
              w-full
              md:w-[calc(51%-1rem)]
              lg:w-[calc(33.8%-1rem)]
            `}
              >
                <ProjectCard item={project} />
              </div>
            ))}
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={handleNext}
            disabled={activeIndex === maxIndex}
            className={`hidden lg:flex
          btn btn-circle absolute right-1 top-1/2 -translate-y-1/2 z-10
        bg-cyan-400 text-slate-900
        hover:bg-slate-200 hover:text-cyan-500
          transition-opacity duration-300
        ${!isHovered
                ? "opacity-0 pointer-events-none"
                : activeIndex === maxIndex
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100"
              }`}
          >
            <ChevronRight size={20} strokeWidth={3} />
          </button>

          {/* DOTS */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: dots }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToItem(idx)}
                className={`
              h-1.5 rounded-full transition-all duration-300

              ${activeIndex === idx
                    ? "bg-cyan-400 w-5"
                    : "bg-slate-600 w-1.5 hover:bg-slate-400"
                  }
            `}
              />
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default ProjectCarousel;