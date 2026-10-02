import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <>
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12">
        {/* Hero Left Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
            <Terminal size={16} />
            <span>Hello, world! I am</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight break-words">
            Muhammad Ibnu <span className="text-cyan-400">Haudiroihan</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-400">
            <span className="text-cyan-400">Full Stack</span> Engineer
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-lg text-base sm:text-lg">
            Crafting visually appealing and functional digital experiences with Next.js and React.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 sm:pt-4">
            <a
              href="#contactMe"
              className="bg-cyan-500 hover:bg-cyan-600 hover:text-slate-700 text-slate-900 px-6 sm:px-8 py-3 rounded-lg font-bold transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] text-sm sm:text-base text-center"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 pt-2 text-slate-500">
            <a
              href="https://github.com/IbnuRoi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="hover:text-white cursor-pointer transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ibnu-haudiroihan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="hover:text-white cursor-pointer transition-colors" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ibnuroihan123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send Email"
            >
              <Mail className="hover:text-white cursor-pointer transition-colors" />
            </a>
          </div>
        </div>

        {/* Hero Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-800/50 backdrop-blur-sm group">
            <div className="w-full h-8 bg-slate-900 flex items-center px-4 gap-2 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto">
              <p><span className="text-purple-400">const</span> developer = {'{'}</p>
              <p className="pl-4">name: <span className="text-green-400">&apos;Ibnu&apos;</span>,</p>
              <p className="pl-4">role: <span className="text-green-400">&apos;Full Stack&apos;</span>,</p>
              <p className="pl-4">skills: [<span className="text-green-400">&apos;Next.js&apos;</span>, <span className="text-yellow-400">&apos;React.js&apos;</span>, <span className="text-lime-400">&apos;Node.js&apos;</span>],</p>
              <p className="pl-4">hardworker: <span className="text-cyan-400">true</span></p>
              <p>{'};'}</p>
              <br />
              <p className="text-slate-500">{'// Siap bekerja sama dengan Anda'}</p>
              <p><span className="text-blue-400">developer</span>.build(<span className="text-green-400">&apos;Great Products&apos;</span>);</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
