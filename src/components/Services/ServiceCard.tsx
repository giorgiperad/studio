
import { useState } from 'react'
import AnimatedServiceIcon from './AnimatedServiceIcon'
"use client"
"use client"
import { useState } from 'react'
import AnimatedServiceIcon from './AnimatedServiceIcon'

interface ServiceCardTypes {
  icon: string
  title: string
  shortDescription: string
}

const geTitles: Record<string, string> = {
  'JavaScript Development': 'JavaScript დეველოპმენტი',
  'React.js Development': 'React.js დეველოპმენტი',
  'Node.js Backend': 'Node.js ბექენდი',
  'Next.js Development': 'Next.js დეველოპმენტი',
  'TypeScript Development': 'TypeScript დეველოპმენტი',
  'Tailwind CSS Styling': 'Tailwind CSS სტილიზაცია',
}
const geDescriptions: Record<string, string> = {
  'Creating dynamic and interactive web applications using JavaScript.': 'დინამიური და ინტერაქტიული ვებ აპლიკაციების შექმნა JavaScript-ით.',
  'Building modern and responsive user interfaces with React.js.': 'თანამედროვე და ადაპტირებადი ინტერფეისების შექმნა React.js-ით.',
  'Developing scalable server-side applications using Node.js.': 'მასშტაბირებადი სერვერის აპლიკაციების შექმნა Node.js-ით.',
  'Creating server-rendered React applications with Next.js.': 'სერვერზე რენდერებადი React აპლიკაციების შექმნა Next.js-ით.',
  'Ensuring robust and maintainable code with TypeScript.': 'მტკიცე და მარტივად მოსავლელი კოდის უზრუნველყოფა TypeScript-ით.',
  'Designing beautiful and responsive interfaces with Tailwind CSS.': 'ლამაზი და ადაპტირებადი ინტერფეისების დიზაინი Tailwind CSS-ით.',
}
const ServiceCard: React.FC<ServiceCardTypes> = ({ title, shortDescription, icon }) => {
  const [flipped, setFlipped] = useState(false)
  // Ripple effect
  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const card = e.currentTarget
    const circle = document.createElement('span')
    circle.className = 'ripple'
    circle.style.left = `${e.nativeEvent.offsetX}px`
    circle.style.top = `${e.nativeEvent.offsetY}px`
    card.appendChild(circle)
    setTimeout(() => circle.remove(), 600)
    setFlipped((f) => !f)
  }
  return (
    <div
      className={`relative glass-card bg-white/10 backdrop-blur-lg border border-white/10 flex flex-col items-center rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-[1.03] group cursor-pointer animated-gradient-border ${flipped ? 'flipped' : ''}`}
      onClick={handleClick}
      style={{ perspective: 1200 }}
    >
      <div className="absolute inset-0 rounded-2xl pointer-events-none animated-gradient-border z-0" />
      <div className={`relative w-full h-full flex flex-col items-center transition-transform duration-700 ${flipped ? 'rotate-y-180' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}>
        {/* Front */}
        <div className={`w-full flex flex-col items-center ${flipped ? 'invisible' : 'visible'} transition-opacity duration-300`} style={{ backfaceVisibility: 'hidden' }}>
          <AnimatedServiceIcon src={icon} alt={geTitles[title] || title} />
          <h5 className="text-accent mt-2 mb-5 text-center text-lg font-extrabold drop-shadow">{geTitles[title] || title}</h5>
          <div className="bg-primary/80 rounded-2xl p-4 shadow-inner">
            <p className="text-primary-content text-center text-base font-medium opacity-90">{geDescriptions[shortDescription] || shortDescription}</p>
          </div>
        </div>
        {/* Back (details) */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center bg-primary/90 rounded-2xl p-6 text-center text-white font-bold text-lg transition-opacity duration-300 ${flipped ? 'visible' : 'invisible'}`} style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <span>დეტალური ინფორმაცია მალე...</span>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
// Animated gradient border (CSS)
// Add to globals.css:
// .animated-gradient-border { background: linear-gradient(120deg, #00fff7 0%, #7f5cff 100%); opacity: 0.18; filter: blur(8px); z-index: 0; }
// .ripple { position: absolute; width: 80px; height: 80px; background: rgba(127,92,255,0.25); border-radius: 50%; transform: scale(0); animation: ripple 0.6s linear; pointer-events: none; z-index: 10; }
// @keyframes ripple { to { transform: scale(2.5); opacity: 0; } }
// .flipped { }
// .rotate-y-180 { transform: rotateY(180deg); }
