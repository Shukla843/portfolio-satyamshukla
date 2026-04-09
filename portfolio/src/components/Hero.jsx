import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-scroll'
import image7 from '../data/image7.jpeg';
import image2 from '../data/image2.jpeg';
import image3 from '../data/image3.jpeg';
import image4 from '../data/image4.jpeg';

export default function Hero() {
  const labelRef  = useRef(null)
  const line1Ref  = useRef(null)
  const line2Ref  = useRef(null)
  const roleRef   = useRef(null)
  const descRef   = useRef(null)
  const btnsRef   = useRef(null)
  const statsRef  = useRef(null)
  const visualRef = useRef(null)
  const gridRef   = useRef(null)

  useEffect(() => {
    // ── PRE-PROMOTE every animated element to its own GPU layer ──────────
    // GSAP animating opacity without will-change forces the browser to
    // promote elements mid-animation → causes a full repaint / blur flash.
    // Setting willChange + translateZ(0) BEFORE the timeline starts
    // tells the browser to allocate compositing layers up front.
    const leftEls = [
      labelRef.current,
      line1Ref.current,
      line2Ref.current,
      roleRef.current,
      descRef.current,
      btnsRef.current,
      statsRef.current,
    ]
    const rightEls = [visualRef.current]

    ;[...leftEls, ...rightEls].forEach(el => {
      if (!el) return
      el.style.willChange = 'transform, opacity'
      el.style.transform  = 'translateZ(0)'
    })

    if (gridRef.current) {
      gridRef.current.style.willChange = 'transform'
      gridRef.current.style.transform  = 'translateZ(0)'
    }

    // ── Set initial opacity:0 via JS so CSS never shows a flash ──────────
    ;[...leftEls, rightEls[0]].forEach(el => {
      if (el) el.style.opacity = '0'
    })

    // ── TIMELINE ─────────────────────────────────────────────────────────
    // gsap.set() the FROM positions first, then .to() only the end state.
    // This avoids gsap.from() which re-reads layout and can trigger repaints.
    gsap.set(labelRef.current,          { y: 28 })
    gsap.set(line1Ref.current,          { y: 70 })
    gsap.set(line2Ref.current,          { y: 70 })
    gsap.set(roleRef.current,           { y: 18 })
    gsap.set(descRef.current,           { y: 18 })
    gsap.set(btnsRef.current.children,  { y: 18 })
    gsap.set(statsRef.current.children, { y: 18 })

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', clearProps: 'willChange' },
      delay: 0.25,
    })

    tl.to(labelRef.current,
        { y: 0, opacity: 1, duration: 0.65 }, 0)
      .to(line1Ref.current,
        { y: 0, opacity: 1, duration: 0.75 }, 0.15)
      .to(line2Ref.current,
        { y: 0, opacity: 1, duration: 0.75 }, 0.28)
      .to(roleRef.current,
        { y: 0, opacity: 1, duration: 0.6  }, 0.42)
      .to(descRef.current,
        { y: 0, opacity: 1, duration: 0.6  }, 0.52)
      .to(btnsRef.current.children,
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.13 }, 0.62)
      .to(statsRef.current.children,
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1  }, 0.75)

    // ── RIGHT VISUAL ──────────────────────────────────────────────────────
    gsap.set(visualRef.current, { x: 75 })
    gsap.to(visualRef.current, {
      x: 0, opacity: 1,
      duration: 1.1, ease: 'power2.out', delay: 0.45,
      clearProps: 'willChange',
    })

    // ── PARALLAX ──────────────────────────────────────────────────────────
    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth  - 0.5) * 18
      const ny = (e.clientY / window.innerHeight - 0.5) * 18
      gsap.to(gridRef.current, {
        x: nx, y: ny,
        duration: 1.5, ease: 'power1.out', overwrite: 'auto',
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      tl.kill()
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-14 pt-28 pb-20 overflow-hidden"
      style={{ isolation: 'isolate' }}
    >
      {/* BG gradient */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      {/* Grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
        }}
      />

      {/* Particles */}
      <div className="particle p1" /><div className="particle p2" /><div className="particle p3" />
      <div className="particle p4" /><div className="particle p5" />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ── LEFT ── */}
        <div>
          <div
            ref={labelRef}
            className="inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[2px] uppercase
              text-accent bg-accent/[0.08] border border-accent/20 px-4 py-2 rounded-full mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-[pulseDot_2s_ease-in-out_infinite]" />
            Available for Hire
          </div>

          <h1 className="font-syne font-extrabold leading-[1.05] tracking-[-2px] text-[clamp(3rem,6vw,5.5rem)] mb-4">
            <span className="block overflow-hidden"><span ref={line1Ref} className="block">Satyam</span></span>
            <span className="block overflow-hidden">
              <span ref={line2Ref} className="block gradient-text">Shukla</span>
            </span>
          </h1>

          <p ref={roleRef} className="font-code text-[1.05rem] text-accent2 mb-6">
            <span className="text-accent">&lt;</span>
            MERN Stack Developer
            <span className="text-accent">/&gt;</span>
          </p>

          <p ref={descRef} className="text-muted text-[0.95rem] leading-[1.85] max-w-[480px] mb-9">
            Passionate full-stack developer from Bhopal crafting scalable web applications
            with <strong className="text-[#e8e8f0] font-medium">MongoDB, Express, React & Node.js</strong>.
            Currently pursuing B.Tech at SIRT Bhopal.
          </p>

          <div ref={btnsRef} className="flex gap-4 flex-wrap">
            <Link to="projects" smooth duration={600} offset={-80}>
              <button className="btn-primary">View My Work</button>
            </Link>
            <Link to="contact" smooth duration={600} offset={-80}>
              <button className="btn-secondary">Let's Connect</button>
            </Link>
          </div>

          <div ref={statsRef} className="flex gap-8 mt-12 pt-8 border-t border-white/[0.06]">
            {[['10+','Projects'],['5+','Certs'],['2+','Years Exp']].map(([n,l]) => (
              <div key={l} className="text-center">
                <div className="font-syne font-extrabold text-[2rem] gradient-text">{n}</div>
                <div className="text-[0.72rem] text-muted uppercase tracking-[1px] mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT (visual) ── */}
        <div ref={visualRef} className="hidden lg:flex justify-center items-center">
          <div className="relative w-[340px] h-[340px]">

            <div className="absolute ring-1-anim" style={{inset:'-40px',borderRadius:'50%',border:'1px solid rgba(123,47,255,0.15)'}} />
            <div className="absolute ring-2-anim" style={{inset:'-20px',borderRadius:'50%',border:'1px solid rgba(0,229,255,0.2)'}}>
              <span style={{position:'absolute',top:'-3px',left:'50%',transform:'translateX(-50%)',width:'6px',height:'6px',background:'#00e5ff',borderRadius:'50%',boxShadow:'0 0 12px #00e5ff',display:'block'}} />
            </div>

            <div className="w-[340px] h-[340px] rounded-full overflow-hidden relative z-10 flex items-center justify-center"
              style={{background:'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)',border:'3px solid rgba(0,229,255,0.3)',boxShadow:'0 0 60px rgba(0,229,255,0.2), 0 0 120px rgba(123,47,255,0.1)'}}>
              <img src={image7} alt="Avatar"  loading='lazy' className="w-full h-full rounded-full object-cover border-2 border-accent  object-[center_top]" />
            </div>

            <div className="absolute bottom-5 -right-6 rounded-xl px-4 py-3 flex items-center gap-2.5 z-20"
              style={{background:'rgba(15,15,26,0.97)',border:'1px solid rgba(255,255,255,0.09)',boxShadow:'0 8px 32px rgba(0,0,0,0.55)'}}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-[pulseDot_2s_ease-in-out_infinite]" />
              <div>
                <div className="text-[0.82rem] font-semibold leading-tight"></div>
                <div className="text-[0.72rem] text-muted">Full-stack / MERN</div>
              </div>
            </div>

            <div className="absolute top-5 -left-8 rounded-xl px-4 py-3 z-20 font-code text-[0.76rem]"
              style={{background:'rgba(15,15,26,0.97)',border:'1px solid rgba(0,229,255,0.22)',boxShadow:'0 4px 20px rgba(0,0,0,0.45)'}}>
              <span className="text-accent2">const</span> role = <span className="text-accent">"Dev"</span>;
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}