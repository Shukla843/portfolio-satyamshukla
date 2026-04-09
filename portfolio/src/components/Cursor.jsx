import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)
  const mx = useRef(0), my = useRef(0)
  const rx = useRef(0), ry = useRef(0)

  useEffect(() => {
    const move = (e) => { mx.current = e.clientX; my.current = e.clientY }
    document.addEventListener('mousemove', move)

    let frame
    const tick = () => {
      rx.current += (mx.current - rx.current) * 0.15
      ry.current += (my.current - ry.current) * 0.15
      if (cursorRef.current) {
        cursorRef.current.style.left = mx.current + 'px'
        cursorRef.current.style.top  = my.current + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + 'px'
        ringRef.current.style.top  = ry.current + 'px'
      }
      frame = requestAnimationFrame(tick)
    }
    tick()

    const expand = () => { cursorRef.current?.classList.add('cursor-expand'); ringRef.current?.classList.add('cursor-ring-expand') }
    const shrink = () => { cursorRef.current?.classList.remove('cursor-expand'); ringRef.current?.classList.remove('cursor-ring-expand') }

    document.querySelectorAll('a,button,.skill-chip,.project-card,.cert-card').forEach(el => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef}   className="cursor-ring" />
    </>
  )
}
