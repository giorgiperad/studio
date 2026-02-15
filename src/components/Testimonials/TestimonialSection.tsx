'use client'

import { Testimonial } from '@/lib/types'
import { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import TestimonialCard from './TestimonialCard'

interface TestimonialSectionProps {
  testimonials: Testimonial[]
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  const [activeCard, setActiveCard] = useState(0)

  return (
      const fadeRef = useScrollFadeIn(0.4);
      <section id="testimonials" className="glass" ref={fadeRef}>
      <SectionHeading
        title="// შეფასებები"
        subtitle="ნუ ენდობით მხოლოდ ჩვენს სიტყვებს - იხილეთ რას ამბობენ ჩვენი მომხმარებლები თავიანთ გამოცდილებაზე."
      />

      <div className="hide-scrollbar my-8 flex gap-8 overflow-x-auto">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard
            key={idx}
            testimonial={testimonial}
            handleActiveCard={() => {
              setActiveCard(idx)
            }}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-1 sm:hidden">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            className={`${idx === activeCard ? 'bg-accent size-[12px]' : 'size-[10px] bg-white/50'} rounded-full`}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection
