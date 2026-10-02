import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ item }) => {
  if (!item) return null;

  const shortDesc = item.description?.short || item.shortDescription || "";
  const techStacks = item.techStacks || [];

  return (
    <div className="group rounded-xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col h-full">
      <div className="h-48 bg-slate-750 relative overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          {item.imageUrl ? (
            <Image
              src={item.imageUrl}
              alt={item.name || "Project Preview"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          ) : (
            <span className="text-slate-600 font-bold text-2xl">
              Project Preview
            </span>
          )}
        </div>
        <div className="hidden absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] transition-all duration-300 lg:flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Link
            href={`/projects/${item.id}`}
            className="bg-cyan-400 text-slate-950 hover:bg-white px-5 py-2.5 rounded-full font-bold text-sm transform translate-y-3 group-hover:translate-y-0 transition-all shadow-lg shadow-cyan-500/20"
          >
            Discover More
          </Link>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {techStacks.slice(0, 4).map((stack, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-md font-mono"
              >
                {stack.name}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1">
            {item.name}
          </h3>
          <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
            {shortDesc}
          </p>
        </div>

        <div className="text-end pt-4 mt-auto lg:hidden border-t border-slate-700/50">
          <Link
            href={`/projects/${item.id}`}
            className="inline-block bg-slate-900/80 text-cyan-400 border border-cyan-400/50 hover:bg-cyan-400 hover:text-slate-950 px-4 py-1.5 rounded-full font-bold text-xs transition-colors"
          >
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;