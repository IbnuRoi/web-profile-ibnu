import Link from 'next/link';
import React from 'react'

const roundButton = ({show, url, text}) => {
    return (
        <>
            <Link href={url || "/"} className={`${show} block px-4 py-2 rounded-full border border-slate-700 text-xs hover:border-cyan-400 hover:text-cyan-400 transition-all`}>
                {text || ""}
            </Link>
        </>
    )
}

export default roundButton