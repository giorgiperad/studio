// Custom Magnetic Cursor
import { useEffect } from 'react'

export default function MagneticCursor() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const cursor = document.createElement('div')
    const dot = document.createElement('div')
    cursor.id = 'magnetic-cursor-outer'
    dot.id = 'magnetic-cursor-inner'
    document.body.appendChild(cursor)
    document.body.appendChild(dot)
    document.body.style.cursor = 'none'

    let mouseX = 0, mouseY = 0, outerX = 0, outerY = 0
    const lerp = (a, b, n) => (1 - n) * a + n * b
    function animate() {
      outerX = lerp(outerX, mouseX, 0.15)
      outerY = lerp(outerY, mouseY, 0.15)
      cursor.style.transform = `translate3d(${outerX - 30}px,${outerY - 30}px,0)`
      dot.style.transform = `translate3d(${mouseX - 3}px,${mouseY - 3}px,0)`
      requestAnimationFrame(animate)
    }
    animate()
    function onMove(e) {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', onMove)
    // Expand on hover
    const hoverables = 'a,button,.card,.glass-card,[role="button"]'
    function onEnter() {
      cursor.classList.add('magnetic-cursor-hover')
    }
    function onLeave() {
      cursor.classList.remove('magnetic-cursor-hover')
    }
    document.querySelectorAll(hoverables).forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.body.style.cursor = ''
      cursor.remove()
      dot.remove()
      document.querySelectorAll(hoverables).forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])
  return null
}
