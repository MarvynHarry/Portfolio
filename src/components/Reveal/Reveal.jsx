import { useEffect, useRef } from 'react'
import './Reveal.css'

// Anima la entrada del contenido la primera vez que aparece en pantalla
function Reveal({ as = 'div', className = '', delay = 0, children, ...props }) {
  const Tag = as
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible')
        observer.disconnect()
      }
    }, { rootMargin: '0px 0px -8% 0px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` }} {...props}>
      {children}
    </Tag>
  )
}

export default Reveal
