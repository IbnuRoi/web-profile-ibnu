"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 relative">
      <Link
        href="/admin/login"
        className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
      >
        <ArrowLeft size={16} /> Back to Sign In
      </Link>

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl text-center">
        <div className="w-12 h-12 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-xl flex items-center justify-center mx-auto mb-4">
          <ShieldAlert size={22} />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Registration Restricted
        </h1>
        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
          Public registration for administrative accounts is restricted for security.
          Only authorized portfolio owners can generate admin credentials.
        </p>
        <Link
          href="/admin/login"
          className="inline-block w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-2.5 px-4 rounded-lg transition-all text-sm shadow-lg shadow-cyan-500/20"
        >
          Return to Sign In
        </Link>
      </div>
    </div>
  );
}