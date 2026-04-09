import { 
  FaGithub, 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt 
} from "react-icons/fa";

import { useState } from 'react'
import { motion } from 'framer-motion'


const fadeLeft  = { hidden: { x: -60, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } } }
const fadeRight = { hidden: { x:  60, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } } }

const links = [
  { icon: <FaEnvelope />, label: 'Gmail',    val: 'shuklasatyam843@gmail.com',           href: 'mailto:shuklasatyam843@gmail.com' },
  { icon: <FaLinkedin />, label: 'LinkedIn', val: 'linkedin.com/in/satyamshukla',     href: 'https://www.linkedin.com/in/satyam-shukla-b17220238/' },
  { icon: <FaGithub />, label: 'GitHub',   val: 'github.com/Shukla843',          href: 'https://github.com/Shukla843' },
  { icon: <FaMapMarkerAlt />, label: 'Location', val: 'Bhopal, Madhya Pradesh, India',    href: null },
 
]
 
export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true); setTimeout(() => setSent(false), 4000) }, 1500)
  }

  return (
    <section id="contact" className="bg-bg2 py-24 px-6 md:px-14">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">Contact</div>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-1px] mb-3">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-muted text-[0.95rem] max-w-[500px] leading-[1.8] mb-12">
            I'm actively looking for full-stack opportunities. Let's build something great.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* ── Info ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-muted text-[0.95rem] leading-[1.85] mb-8">
              Whether you have a job opportunity, a project to discuss, or just want to say hi —
              my inbox is always open. I'm currently available for full-time roles, internships,
              and freelance projects.
            </p>
            <div className="flex flex-col gap-3">
              {links.map(l => {
                const inner = (
                  <div
                    className="glass-card rounded-xl px-5 py-4 flex items-center gap-4
                      hover:border-accent/30 hover:translate-x-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center text-base"
                      style={{background:'linear-gradient(135deg,#7b2fff,#00e5ff)'}}>
                      {l.icon}
                    </div>
                    <div>
                      <div className="text-[0.72rem] text-muted">{l.label}</div>
                      <div className="text-[0.88rem] font-medium">{l.val}</div>
                    </div>
                  </div>
                )
                return l.href
                  ? <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{inner}</a>
                  : <div key={l.label}>{inner}</div>
              })}
            </div>
          </motion.div>

          {/* ── Form ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {[
                { name: 'name',    label: 'Your Name',    type: 'text',  placeholder: 'John Doe' },
                { name: 'email',   label: 'Email Address',type: 'email', placeholder: 'john@company.com' },
                { name: 'subject', label: 'Subject',      type: 'text',  placeholder: 'Job Opportunity / Project' },
              ].map(f => (
                <div key={f.name}>
                  <label className="block text-[0.78rem] font-semibold text-muted tracking-[1px] uppercase mb-2">{f.label}</label>
                  <input
                    type={f.type}
                    name={f.name}
                    value={form[f.name]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    required
                    className="w-full px-5 py-3.5 rounded-xl text-[0.9rem] text-[#e8e8f0] outline-none
                      bg-white/[0.04] border border-white/[0.08]
                      focus:border-accent/40 focus:shadow-[0_0_0_3px_rgba(0,229,255,0.06)]
                      transition-all duration-300 placeholder:text-muted/40"
                  />
                </div>
              ))}
              <div>
                <label className="block text-[0.78rem] font-semibold text-muted tracking-[1px] uppercase mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Satyam, I'd like to discuss..."
                  required
                  rows={5}
                  className="w-full px-5 py-3.5 rounded-xl text-[0.9rem] text-[#e8e8f0] outline-none resize-y
                    bg-white/[0.04] border border-white/[0.08]
                    focus:border-accent/40 focus:shadow-[0_0_0_3px_rgba(0,229,255,0.06)]
                    transition-all duration-300 placeholder:text-muted/40"
                />
              </div>
              <button
                type="submit"
                disabled={loading || sent}
                className={`w-full py-4 rounded-xl font-bold text-[0.95rem] text-white border-none cursor-pointer
                  transition-all duration-300
                  ${sent
                    ? 'bg-gradient-to-r from-green-500 to-green-600 shadow-none'
                    : 'bg-gradient-to-r from-accent2 to-accent hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(123,47,255,0.4)]'
                  }`}
              >
                {loading ? '⏳ Sending...' : sent ? '✅ Message Sent!' : 'Send Message 🚀'}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
