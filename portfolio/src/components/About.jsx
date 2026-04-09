import { motion } from 'framer-motion'

const fadeLeft  = { hidden: { x: -60, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } } }
const fadeRight = { hidden: { x:  60, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } } }

export default function About() {
  return (
    <section id="about" className="bg-bg2 py-24 px-6 md:px-14 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ── Image card ── */}
        <motion.div
          className="relative"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className="w-full aspect-square rounded-3xl overflow-hidden border border-white/[0.06] flex items-center justify-center relative"
            style={{background:'linear-gradient(135deg,#0f0f1a,#1a1a2e)'}}
          >
            <div className="absolute inset-0" style={{background:'linear-gradient(135deg,rgba(0,229,255,0.05),rgba(123,47,255,0.05))'}} />
            <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-[65%] h-[65%] opacity-80">
              {/* Laptop screen */}
              <rect x="40" y="60" width="220" height="145" rx="10" fill="rgba(0,229,255,0.06)" stroke="rgba(0,229,255,0.2)" strokeWidth="1.5"/>
              <rect x="52" y="72" width="196" height="120" rx="6" fill="rgba(13,13,30,0.9)"/>
              {/* Code lines */}
              <rect x="66" y="90"  width="30" height="7" rx="3" fill="rgba(123,47,255,0.7)"/>
              <rect x="102" y="90" width="60" height="7" rx="3" fill="rgba(0,229,255,0.5)"/>
              <rect x="66" y="106" width="20" height="7" rx="3" fill="rgba(255,60,110,0.6)"/>
              <rect x="92" y="106" width="80" height="7" rx="3" fill="rgba(255,255,255,0.15)"/>
              <rect x="66" y="122" width="40" height="7" rx="3" fill="rgba(123,47,255,0.5)"/>
              <rect x="112" y="122" width="50" height="7" rx="3" fill="rgba(0,229,255,0.4)"/>
              <rect x="66" y="138" width="20" height="7" rx="3" fill="rgba(255,255,255,0.08)"/>
              <rect x="92" y="138" width="90" height="7" rx="3" fill="rgba(255,255,255,0.12)"/>
              <rect x="66" y="154" width="55" height="7" rx="3" fill="rgba(0,229,255,0.3)"/>
              <rect x="66" y="170" width="35" height="7" rx="3" fill="rgba(123,47,255,0.4)"/>
              <rect x="107" y="170" width="70" height="7" rx="3" fill="rgba(255,255,255,0.1)"/>
              {/* Laptop base */}
              <rect x="20" y="205" width="260" height="14" rx="7" fill="rgba(0,229,255,0.08)" stroke="rgba(0,229,255,0.15)" strokeWidth="1"/>
              <rect x="115" y="205" width="70" height="8" rx="4" fill="rgba(0,229,255,0.12)"/>
            </svg>
          </div>
          {/* Accent blob */}
          <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-2xl -z-10 opacity-30"
            style={{background:'linear-gradient(135deg,#00e5ff,#7b2fff)'}} />
        </motion.div>

        {/* ── Content ── */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="section-tag">About Me</div>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-1px] mb-5">
            Building the <span className="gradient-text">Future</span>,<br />One Stack at a Time
          </h2>
          <p className="text-muted text-[0.95rem] leading-[1.9] mb-7">
            I'm <strong className="text-[#e8e8f0] font-semibold">Satyam Shukla</strong>, a dedicated MERN Stack Developer
            based in Bhopal, India. I specialize in building{' '}
            <strong className="text-[#e8e8f0] font-semibold">end-to-end web applications</strong>{' '}
            that are fast, scalable, and visually compelling — from pixel-perfect UIs to robust REST APIs.
          </p>

          {/* Tags 
          <div className="flex flex-wrap gap-2.5 mb-8">
            {['React.js','Node.js','MongoDB','Express.js','REST APIs','Git & GitHub'].map(tag => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-[0.78rem] font-code text-accent
                  bg-accent/[0.06] border border-accent/[0.15]"
              >
                {tag}
              </span>
            ))}
          </div> */}

          {/* Education card */}
          <div className="glass-card rounded-xl p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-xl"
              style={{background:'linear-gradient(135deg,#7b2fff,#00e5ff)'}}>🎓</div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[0.9rem] truncate">Sagar Institute of Research & Technology</div>
              <div className="text-[0.78rem] text-muted">B.Tech — Computer Science & Engineering · Bhopal, MP</div>
            </div>
            <span className="text-[0.72rem] font-code text-accent bg-accent/[0.08] border border-accent/[0.15] rounded-md px-2.5 py-1 whitespace-nowrap">
              2022 – 2026
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
