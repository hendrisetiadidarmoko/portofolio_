import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-col justify-center items-center gap-6 border-b border-gray-700 pb-8">

          <div>
            <p className="text-gray-400 text-sm text-center mt-2">
              Web Developer | Building modern and scalable web apps
            </p>
          </div>

          <div className="max-w-md mx-auto flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>

          <div className="flex gap-4 text-xl">
            <a href="https://github.com/hendrisetiadidarmoko" className="hover:text-cyan-400 transition"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/hendri-setiadi-darmoko-466850257/" className="hover:text-cyan-400 transition"><FaLinkedin /></a>
            <a href="https://www.instagram.com/hendri_darmoko/" className="hover:text-cyan-400 transition"><FaInstagram /></a>
            <a href="https://wa.me/6289651108899" target="_blank" className="hover:text-cyan-400 transition">
              <FaWhatsapp />
            </a>

            <a href="mailto:hendrisetiadidarmoko@gmail.com" className="hover:text-cyan-400 transition">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Hendri Setiadi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;