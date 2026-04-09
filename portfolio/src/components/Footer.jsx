import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-bg3 border-t border-white/[0.06] px-6 md:px-14 py-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        
        <div className="font-syne font-extrabold text-lg">
          S<span className="text-accent">.</span>Shukla
        </div>

        <p className="text-[0.78rem] text-muted text-center">
          © {new Date().getFullYear()} Satyam Shukla · Built with ❤️ & MERN Stack · Bhopal, India
        </p>

        <div className="flex gap-3">
          {[
            { icon: <FaGithub />, href: 'https://github.com/Shukla843',  label: 'GitHub'   },
            { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/satyam-shukla-b17220238/', label: 'LinkedIn' },
            { icon: <FaTwitter />, href: 'https://x.com/shuklasatyam843',     label: 'Twitter'  },
            {icon:<FaInstagram/>, href:'https://www.instagram.com/mernwithsatyam06/', label:'Instagram'},
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-base
                glass-card hover:border-accent/30 hover:bg-accent/[0.08] transition-all duration-250"
            >
              {s.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}
