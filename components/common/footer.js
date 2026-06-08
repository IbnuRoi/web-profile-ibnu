const Footer = () => {
  return (
    <>
      <footer className="mt-20 py-20 pt-8 px-6 border-t border-slate-800 text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; 2026 Muhammad Ibnu Haudiroihan. Built with Next & Tailwind</p>
        <div className="flex gap-6">
          <a href="https://github.com/IbnuRoi" className="hover:text-cyan-400">
            Github
          </a>
          <a href="https://www.linkedin.com/in/muhammad-ibnu-haudiroihan/" className="hover:text-cyan-400">
            Linkedin
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ibnuroihan123@gmail.com" className="hover:text-cyan-400">
            E-mail
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
