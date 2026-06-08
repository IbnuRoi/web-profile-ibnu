import { Braces, Code2, Database, ExternalLink, Terminal } from "lucide-react";

import FooterMain from "../common/footer";

import Image from "next/image";
import ProjectCard from "../features/projects/project-card";
import ProjectCarousel from "../features/projects/project-carousel";

const techStack = [
  {
    icon: <Code2 />,
    name: "Frontend",
    tools: "Next, React, Tailwind",
  },
  {
    icon: <Terminal />,
    name: "Backend",
    tools: "Node.js & Express.js",
  },
  {
    icon: <Database />,
    name: "Database",
    tools: "MySQL & PostgreSQL",
  },
  {
    icon: <Braces />,
    name: "Programming Language",
    tools: "Javascript, Go, Python",
  },
];

const Main = () => {
  return (
    <>
      {/* Tech Stack Section */}
      <section className="py-20 bg-slate-900/50 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-start md:text-center mb-16">
            <h3 className="text-cyan-400 font-mono text-sm mb-2">01. SKILLS</h3>
            <h2 className="text-3xl font-bold text-white">Technical Stack</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-800/40 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 text-cyan-500 group-hover:text-cyan-400">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-200 mb-1">
                  {item.name}
                </h4>
                <p className="text-sm text-slate-500">{item.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="pb-20 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end px-6 mb-12 gap-4">
          <div>
            <h3 className="text-cyan-400 font-mono text-end md:text-start text-sm mb-2">
              02. PORTFOLIO
            </h3>
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          <a
            href="/projects"
            className="text-cyan-400 lg:text-slate-400 hover:text-white flex items-center gap-2 text-sm md:text-base border-b lg:border-transparent lg:hover:border-cyan-400 pb-1 transition-all"
          >
            Explore Projects <ExternalLink size={16} />
          </a>
        </div>

        <ProjectCarousel/>
        
      </section>

      {/* Contact and Footer */}
      <section className="pt-20 bg-linear-to-b from-slate-900 to-slate-800 border-t border-slate-800">
        <div id="contactMe" className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let’s Work Together
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-14">
            I am currently open to full-time and freelance opportunities. If you
            have any questions or would like to connect, my inbox is always
            open.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ibnuroihan123@gmail.com"
            className="bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 px-10 py-4 rounded-lg font-bold text-lg transition-all"
          >
            Let’s Connect
          </a>
        </div>

        <FooterMain />
      </section>
    </>
  );
};

export default Main;
