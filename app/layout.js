import "./globals.css";

export const metadata = {
  title: "Ibnu Roihan | Fullstack Developer Portfolio",
  description: "Portfolio of Ibnu Roihan, Fullstack Web Developer specialized in Next.js, React, Node.js, Express, and PostgreSQL.",
  keywords: ["Ibnu Roihan", "Fullstack Developer", "Portfolio", "Web Developer", "Next.js", "React", "Node.js", "Express", "PostgreSQL"],
  authors: [{ name: "Ibnu Roihan" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
