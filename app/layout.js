import { Geist, Geist_Mono } from "next/font/google";
import "../public/css/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
