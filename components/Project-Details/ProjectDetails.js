import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Github,
  Layers,
} from "lucide-react";

import FooterMain from "../Footer";
import Image from "next/image";

const ProjectDetailMain = ({ checkMatchDetail }) => {
  const btnDemo = checkMatchDetail.href[0];
  const btnSource = checkMatchDetail.href[1];
  const challenges = checkMatchDetail.challenges[0];

  return (
    <>
      {/* Project Hero Section */}
      <header className="pt-32 pb-12 px-6 container mx-auto">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm mb-4">
            <span className="px-3 py-1 bg-cyan-950/50 border border-cyan-900 rounded-full">
              {checkMatchDetail.projectType}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {checkMatchDetail.date}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {checkMatchDetail.name}
          </h1>

          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-8">
            {checkMatchDetail.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={btnDemo.link}
              className={`bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20 ${btnDemo.btnClass}`}
            >
              <ExternalLink /> {btnDemo.btnText}
            </a>
            <a
              href={btnSource.link}
              className={`border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 px-6 py-3 rounded-lg flex font-medium items-center gap-2 transition-all ${btnSource.btnClass}`}
            >
              <Github /> {btnSource.btnText}
            </a>
          </div>
        </div>
      </header>

      {/* Main Showcase Image */}
      <section className="container mx-auto px-6 mb-20">
        <div className="w-full aspect-video rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden relative shadow-2xl group">
          {/* Placeholder UI Illustration */}
          <div className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-slate-800 to-slate-900">
            <div className="text-center opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              <div className="hidden w-24 h-24 mx-auto mb-4 rounded-full border-4 border-slate-700 border-t-cyan-500 animate-spin"></div>
              <span className="hidden text-slate-500 font-mono text-lg">
                Project Screenshot Placeholder
              </span>
              <Image
                src={checkMatchDetail.img}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Overlay Detail */}
          <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-slate-900 to-transparent opacity-100">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div className="">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
                Project Overview
              </h2>
              {checkMatchDetail.description.map((data, idx) => (
                <p
                  key={data.id}
                  className="text-slate-400 leading-relaxed text-lg mb-6"
                >
                  {data.overview}
                </p>
              ))}
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {checkMatchDetail.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50"
                  >
                    <CheckCircle2
                      className="text-cyan-400 shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges Section */}
            <div className="bg-slate-800/30 border-l-4 border-cyan-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-white mb-3">
                Technical Challenges
              </h3>
              <p className="text-slate-400 mb-4">{challenges.challenge}</p>
              <div className="flex items-center gap-2 text-sm text-cyan-400 font-mono">
                <span className="px-2 py-1 bg-cyan-950 rounded">Solution:</span>
                <span>{challenges.solution}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tech Stack & Info */}
          <div className="space-y-8 sticky top-24 h-fit">
            {/* Tech Stack Card */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="text-cyan-400" size={20} />
                Tech Stack
              </h3>

              <div className="space-y-4">
                {checkMatchDetail.detailStack.map((item, idx) => (
                  <div key={item.id}>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {item.title}
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.stack.map((data, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-700 text-slate-200 text-sm rounded-md border border-slate-600"
                        >
                          {data.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Role Info */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <ul className="space-y-4 text-sm">
                {checkMatchDetail.roleInfo.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between border-b border-slate-700 pb-2"
                  >
                    <span className="text-slate-500">{item.title}</span>
                    <span className="text-white font-medium">{item.info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Nav */}
      <section className="border-t border-slate-800 bg-slate-900 py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center text-slate-500 text-sm mb-4 font-mono">
            <span className="uppercase">Next Project</span>
            <span>{checkMatchDetail.id} / 2</span>
          </div>
          {checkMatchDetail.nextProject.map((item, idx) => (
            <a key={idx} href={`/project-details/${item.href}`} className="group block">
              <h2 className="text-3xl md:text-5xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                {item.title}
                <ChevronRight
                  className="transform group-hover:translate-x-4 transition-transform text-cyan-500"
                  size={48}
                />
              </h2>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <FooterMain />
    </>
  );
};

export default ProjectDetailMain;
