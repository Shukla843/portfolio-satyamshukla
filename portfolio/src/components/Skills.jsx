import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skillCategories, skillBars } from '../data/portfolio'

gsap.registerPlugin(ScrollTrigger)

const cardVariants = {
  hidden:  { y: 40, opacity: 0 },
  visible: (i) => ({ y: 0, opacity: 1, transition: { delay: i * 0.1, duration: 0.7, ease: 'easeOut' } }),
}

export default function Skills() {
  const barsRef = useRef([])

  useEffect(() => {
    barsRef.current.forEach((bar, i) => {
      if (!bar) return
      ScrollTrigger.create({
        trigger: bar,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(bar, { width: bar.dataset.pct + '%', duration: 1.2, ease: 'power2.out', delay: i * 0.1 })
        },
      })
    })
  }, [])

  return (
    <section id="skills" className="bg-bg py-24 px-6 md:px-14">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">Skills</div>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-1px] mb-3">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted text-[0.95rem] max-w-[500px] leading-[1.8] mb-12">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  xl:grid-rows-2 gap-5 mb-16">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card rounded-2xl p-7 relative overflow-hidden group
                hover:-translate-y-1 hover:border-accent/20 hover:shadow-glow-accent
                transition-all duration-300"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent2 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              <div className="text-[0.82rem] font-bold tracking-[1px] uppercase text-muted mb-5 flex items-center gap-2">
                <span>{cat.icon}</span>{cat.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(s => (
                  <div key={s.name} className="skill-chip">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    {s.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill bars */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-syne font-bold text-[1.1rem] mb-6">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5">
            {skillBars.map((bar, i) => (
              <div key={bar.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-[0.85rem] font-medium">{bar.name}</span>
                  <span className="text-[0.78rem] font-code text-accent">{bar.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{background:'rgba(255,255,255,0.06)'}}>
                  <div
                    ref={el => barsRef.current[i] = el}
                    className="skill-bar-fill"
                    data-pct={bar.pct}
                    style={{ width: 0 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
