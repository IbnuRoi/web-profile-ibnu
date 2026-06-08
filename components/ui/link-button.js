import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const linkButton = ({url, text, show}) => {
  return (
    <>
      <Link href={url || "/"} className={`${show} justify-center items-center gap-1 text-sm font-medium text-cyan-400 lg:text-slate-400 lg:hover:text-cyan-400 transition-colors`}>
        <ArrowLeft size={16} strokeWidth={3} /> {text || ""}
      </Link>
    </>
  )
}

export default linkButton