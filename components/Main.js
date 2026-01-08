import { Code2, Database, ExternalLink, Terminal } from "lucide-react";

const techStack = [
  {
    icon: <Code2 />,
    name: "Frontend",
    tools: "Next, React, Tailwind",
  },
  {
    icon: <Terminal />,
    name: "Backend",
    tools: "Javascript, Go, Python",
  },
  {
    icon: <Database />,
    name: "Database",
    tools: "MySQL, PostgreSQL",
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
            <h2 className="text-3xl font-bold text-white">
              Teknologi yang Saya Gunakan
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
      <section className="md:py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h3 className="text-cyan-400 font-mono text-end md:text-start text-sm mb-2">
              02. PORTFOLIO
            </h3>
            <h2 className="text-3xl font-bold text-white">Proyek Unggulan</h2>
          </div>
          <a
            href=""
            className="text-slate-400 hover:text-white flex items-center gap-2 text-sm border-b border-transparent hover:border-cyan-400 pb-1 transition-all"
          >
            Lihat Github <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="group rounded-xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-slate-600 hover:shadow-xl transition-all"
            >
              <div className="h-48 bg-slate-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="text-slate-600 font-bold text-2xl">
                    Project Preview {item}
                  </span>
                </div>
                <div className="absolute inset-0 bg-cyan-900/0 group-hover:bg-cyan-900/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <a
                    href=""
                    className="bg-white/90 text-slate-900 px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all"
                  >
                    Lihat Detail
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded">Node.js</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    E-Commerce Dashboard
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                    Platform manajemen analitik penjualan real-time dengan integrasi payment gateway dan visualisasi data chart.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact and Footer */}
      <section className="py-20 bg-linear-to-b from-slate-900 to-slate-800 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Tertarik Bekerja Sama?</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-14">
                Saya sedang terbuka untuk kesempatan full-time atau freelance. Jika Anda memiliki pertanyaan atau sekedar ingin menyapa, inbox saya selalu terbuka!
            </p>
            <a href="" className="bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 px-10 py-4 rounded-lg font-bold text-lg transition-all">
                Kirim E-mail Sekarang
            </a>
        </div>

        <footer className="mt-20 pt-8 px-6 border-t border-slate-800 text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 Muhammad Ibnu Haudiroihan. Built with Next & Tailwind</p>
            <div className="flex gap-6">
                <a href="" className="hover:text-cyan-400">Github</a>
                <a href="" className="hover:text-cyan-400">Linkedin</a>
                <a href="" className="hover:text-cyan-400">E-mail</a>
            </div>
        </footer>
      </section>
    </>
  );
};

export default Main;
