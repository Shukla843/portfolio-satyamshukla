import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

const links = ['About', 'Skills', 'Projects', 'Certificates', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-14 py-4 flex items-center justify-between
      border-b border-white/[0.06] transition-all duration-300
      ${scrolled ? 'bg-bg/95 backdrop-blur-xl' : 'bg-bg/70 backdrop-blur-md'}`}>

      {/* Logo */}
      <div className="font-syne font-extrabold text-xl tracking-tight">
        S<span className="text-accent">.</span>Shukla
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {links.slice(0, 4).map(l => (
          <Link
            key={l}
            to={l.toLowerCase()}
            smooth duration={600}
            offset={-80}
            className="text-[0.8rem] font-medium tracking-[1px] uppercase text-muted
              hover:text-accent cursor-pointer transition-colors duration-300
              relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px]
              after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            {l}
          </Link>
        ))}
        <Link
          to="contact"
          smooth duration={600}
          offset={-80}
          className="px-5 py-2 border border-accent text-accent text-[0.8rem] font-semibold
            tracking-[1px] uppercase rounded-full hover:bg-accent hover:text-bg
            transition-all duration-300 cursor-pointer"
        >
          Hire Me
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-bg2/95 backdrop-blur-xl border-b border-white/[0.06] py-4 flex flex-col items-center gap-4 md:hidden">
          {links.map(l => (
            <Link
              key={l}
              to={l.toLowerCase()}
              smooth duration={600}
              offset={-80}
              onClick={() => setOpen(false)}
              className="text-sm font-medium tracking-[1px] uppercase text-muted hover:text-accent cursor-pointer transition-colors"
            >
              {l}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
