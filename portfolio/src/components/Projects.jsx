import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const tagStyle = {
  mern: 'bg-accent/[0.12] text-accent border-accent/20',
  full: 'bg-accent2/[0.12] text-[#a78bfa] border-accent2/20',
  api:  'bg-accent3/[0.12] text-[#ff6b8a] border-accent3/20',
}

const cardVariants = {
  hidden:  { y: 50, opacity: 0 },
  visible: (i) => ({ y: 0, opacity: 1, transition: { delay: i * 0.1, duration: 0.7, ease: 'easeOut' } }),
}

export default function Projects() {
  return (
    <section id="projects" className="bg-bg2 py-24 px-6 md:px-14">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">Projects</div>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-1px] mb-3">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted text-[0.95rem] max-w-[500px] leading-[1.8] mb-12">
            Real-world applications built with modern full-stack technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="project-card"
            >
              {/* Thumbnail */}
              <div className={`h-48 relative flex items-center justify-center bg-gradient-to-br ${p.gradient}`}>
                <span className="text-5xl opacity-50 select-none">{p.emoji}</span>
                {/* Tags */}
                <div className="absolute top-3 left-3 flex gap-1.5">
                  {p.tags.map((t, j) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-full text-[0.68rem] font-semibold border backdrop-blur-sm ${tagStyle[p.tagColors[j]] || tagStyle.mern}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-syne font-bold text-[1.08rem] mb-2">{p.name}</h3>
                <p className="text-[0.83rem] text-muted leading-[1.75] mb-4">{p.desc}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.stack.map(s => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-[0.72rem] font-code text-muted bg-white/[0.04] rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2.5">
                  <a
                    href={p.live}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[0.78rem] font-semibold
                      border border-accent text-accent hover:bg-accent hover:text-bg transition-all duration-250"
                  >
                    🚀 Live Demo
                  </a>
                  <a
                    href={p.code}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[0.78rem] font-semibold
                      border border-white/[0.08] text-muted hover:border-white/30 hover:text-[#e8e8f0] transition-all duration-250"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
