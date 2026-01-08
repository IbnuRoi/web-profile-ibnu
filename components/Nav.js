

const Nav = () => {
    return(
        <>
            <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        DEV.PORTFOLIO
                    </div>
                    <div>
                        <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                            <li className="hover:text-cyan-400 cursor-pointer transition-colors">Home</li>
                            <li className="hover:text-cyan-400 cursor-pointer transition-colors">Projects</li>
                            <li className="hover:text-cyan-400 cursor-pointer transition-colors">Skills</li>
                            <li className="hover:text-cyan-400 cursor-pointer transition-colors">Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;