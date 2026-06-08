import Image from "next/image";
const ProjectCard = ({ item, idx }) => {
    return (
        <div
            // key={idx}
            className="group rounded-xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-cyan-600 hover:shadow-xl transition-all"
        >
            <div className="h-48 bg-slate-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-slate-600 font-bold text-2xl">
                        Project Preview
                    </span>
                    <Image
                        src={item.imageUrl}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>
                <div className="hidden absolute inset-0 bg-cyan-900/0 group-hover:bg-cyan-900/20 transition-colors lg:flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <a
                        href={`/projects/${item.id}`}
                        className="bg-white/90 text-slate-900 hover:bg-slate-900 hover:text-cyan-500 px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all"
                    >
                        Discover More
                    </a>
                </div>
            </div>

            <div className="p-6">
                <div className="flex gap-2 mb-4">
                    {item.techStacks.map((stack, idx) => (
                        <span
                            key={idx}
                            className={`px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded`}
                        >
                            {stack.name}
                        </span>
                    ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.name}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                    {item.description.short}
                </p>
                <div className="text-end mt-10 lg:hidden">
                    <a
                        href={`/projects/${item.id}`}
                        className="bg-slate-900/70 text-cyan-400 border border-cyan-400/70 px-4 py-2 rounded-full font-bold text-sm"
                    >
                        Discover More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard