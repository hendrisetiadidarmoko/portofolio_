import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="contact" className="mt-20 border-t border-white/10 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-center gap-6 border-b border-white/10 pb-8">
          <div>
            <p className="mt-2 text-center text-sm text-slate-400">
              Web Developer | Building modern and scalable web apps
            </p>
          </div>

          <div className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#home" className="transition hover:text-cyan-300">Home</a>
            <a href="#about" className="transition hover:text-cyan-300">About</a>
            <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
            <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </div>

          <div className="flex gap-4 text-xl">
            <a href="https://github.com/hendrisetiadidarmoko" className="transition hover:text-cyan-300"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/hendri-setiadi-darmoko-466850257/" className="transition hover:text-cyan-300"><FaLinkedin /></a>
            <a href="https://www.instagram.com/hendri_darmoko/" className="transition hover:text-cyan-300"><FaInstagram /></a>
            <a href="https://wa.me/6289651108899" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">
              <FaWhatsapp />
            </a>

            <a href="mailto:hendrisetiadidarmoko@gmail.com" className="transition hover:text-cyan-300">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Hendri Setiadi Darmoko. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
