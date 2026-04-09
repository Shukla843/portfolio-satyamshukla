import { motion } from 'framer-motion'
import { certificates } from '../data/portfolio'

const cardVariants = {
  hidden:  { y: 40, opacity: 0 },
  visible: (i) => ({ y: 0, opacity: 1, transition: { delay: i * 0.09, duration: 0.65, ease: 'easeOut' } }),
}

export default function Certificates() {
  return (
    <section id="certificates" className="bg-bg py-24 px-6 md:px-14">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">Certificates</div>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-1px] mb-3">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted text-[0.95rem] max-w-[500px] leading-[1.8] mb-12">
            Verified credentials that validate my skills and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {certificates.map((c, i) => (
            <motion.div
              key={c.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="cert-card relative overflow-hidden"
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
                style={{background:'radial-gradient(circle, rgba(123,47,255,0.12), transparent)'}} />

              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-2xl"
                style={{background:'linear-gradient(135deg,rgba(123,47,255,0.2),rgba(0,229,255,0.1))',border:'1px solid rgba(123,47,255,0.2)'}}>
                {c.icon}
              </div>

              <div className="text-[0.7rem] text-accent2 font-semibold tracking-[1px] uppercase mb-2">{c.issuer}</div>
              <div className="font-syne font-bold text-[0.95rem] leading-[1.35] mb-2">{c.name}</div>
              <div className="text-[0.74rem] text-muted font-code mb-4">📅 {c.date}</div>

              <a
                href={c.link}
                className="inline-flex items-center gap-1.5 text-[0.74rem] text-accent font-semibold
                  bg-accent/[0.06] border border-accent/[0.15] px-3 py-1.5 rounded-full
                  hover:bg-accent/[0.12] transition-colors duration-250"
              >
                ✅ Verify Certificate
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
