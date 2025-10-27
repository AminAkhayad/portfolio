// About.jsx
import { useLayoutEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const Article = () => {
  const root = useRef(null)

  // Init Lenis + koppeling aan GSAP/ScrollTrigger
  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // smoothWheel: true // optioneel
    })

    // koppel updates
    lenis.on('scroll', ScrollTrigger.update)

    // gebruik GSAP ticker als RAF
    const raf = (time) => {
      lenis.raf(time * 1000) // gsap.ticker geeft seconden
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  // Animaties
  useGSAP(
    () => {
      const tl = gsap.timeline()

      tl.from('.intro p', {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: 'power3.out',
      })

      tl.to('.intro', {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          const el = document.querySelector('.intro')
          if (el) el.style.display = 'none'
          ScrollTrigger.refresh()
        },
      })
    },
    { scope: root } // zorgt dat selectors binnen deze component scopen
  )

  return (
    <div ref={root} className="about-container container">
      <div id="intro" className="intro">
        <p>About</p>
      </div>

      <div className="hero-section">
        <h1>About Me</h1>

        <div className="hero-line-container">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
    
        <div className="hero-images-container">
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
        </div>
      </div>
    </div>
  )
}

export default Article
