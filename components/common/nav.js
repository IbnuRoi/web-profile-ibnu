"use client"

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import LinkButton from "../ui/link-button";
import RoundButton from "../ui/round-button";

const Nav = ({url, text, show}) => {
  return (
    <>
      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-mono font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            <a href="/">
                Dev.Portfolio
            </a>
          </div>
          <div className="hidden">
            <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                Home
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                Projects
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                Skills
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>
          {/* <Link href="/view-cv" className={`block px-4 py-2 rounded-full border border-slate-700 text-xs hover:border-cyan-400 hover:text-cyan-400 transition-all`}>
            View My Resume
          </Link>
          <a href="https://drive.google.com/uc?export=download&id=1Qe4PMpdlz1ybLM2B_SNDHsvbuO-sO20t" className={`block px-4 py-2 rounded-full border border-slate-700 text-xs hover:border-cyan-400 hover:text-cyan-400 transition-all`}>
            Download Resume
          </a> */}
          <RoundButton show={'hidden'} text={'View my Resume'}/>
          <LinkButton url={url} text={text} show={show}/>
        </div>
      </nav>
    </>
  );
};

export default Nav;
