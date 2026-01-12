import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <>
      <section className="pt-32 pb-20 px-6 container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Hero Left Section */}
        <div className="lg:w-1/2 space-y-6">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
            <Terminal size={16} />
            <span>Hello, world! I am</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            Muhammad Ibnu <span className="text-cyan-400">Haudiroihan</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-slate-400">
            <span className="text-cyan-400">Full Stack</span> Engineer
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-lg text-lg">
            Crafting visually appealing and functional digital experiences with Next.js and React.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="#contactMe" className="bg-cyan-500 hover:bg-cyan-600 hover:text-slate-700 text-slate-900 px-8 py-3 rounded-lg font-bold transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
              Contact Me
            </a>
            <a href="" className="hidden border border-slate-700 hover:border-slate-500 hover:text-slate-400 px-8 py-3 rounded-lg font-medium transition-all">
                Contact Me
            </a>
          </div>

          <div className="flex gap-6 pt-2 text-slate-500">
            <a href="https://github.com/IbnuRoi">
                <Github className="hover:text-white cursor-pointer transition-colors"/>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-ibnu-haudiroihan/">
                <Linkedin className="hover:text-white cursor-pointer transition-colors"/>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ibnuroihan123@gmail.com">
                <Mail className="hover:text-white cursor-pointer transition-colors"/>
            </a>
          </div>
        </div>

        {/* Hero Right Section */}
        <div className="lg:w-1/2 flex justify-center relative">
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-80 h-80 lg:w-112.5 lg:h-112.5 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-800/50 backdrop-blur-sm group">
                <div className="w-full h-8 bg-slate-900 flex items-center px-4 gap-2 border-b border-slate-700">
                    <div className=" w-3 h-3 rounded-full bg-red-500"></div>
                    <div className=" w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className=" w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-6 font-mono text-sm text-slate-300">
                    <p><span className="text-purple-400">const</span> developer = {'{'}</p>
                    <p className="pl-4">name: <span className="text-green-400">'Ibnu'</span>,</p>
                    <p className="pl-4">role: <span className="text-green-400">'Full Stack'</span>,</p>
                    <p className="pl-4">skills: [<span className="text-green-400">'Next'</span>, <span className="text-yellow-400">'React'</span>, <span className="text-cyan-400">'Go'</span>],</p>
                    <p className="pl-4">hardworker: <span className="text-cyan-400">true</span></p>
                    <p>{'};'}</p>
                    <br/>
                    <p className="text-slate-500">// Siap bekerja sama dengan Anda</p>
                    <p><span className="text-blue-400">developer</span>.build(<span className="text-green-400">'Great Products'</span>);</p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
