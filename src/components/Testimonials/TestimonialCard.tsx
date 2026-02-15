import { Testimonial } from '@/lib/types'
import { isInViewport } from '@/utils'
import { StarIcon } from '@/utils/icons'
import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'

interface TestimonialCardProps {
  testimonial: Testimonial
  handleActiveCard: () => void
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  testimonial: { name, title, feedback, image, stars },
  handleActiveCard,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let observer: IntersectionObserver | undefined
    if (cardRef.current) {
      observer = isInViewport(cardRef.current, handleActiveCard)
    }
    return () => {
      observer?.disconnect()
    }
  }, [handleActiveCard])

  return (
    <div
      ref={cardRef}
      className="glass-card bg-white/10 backdrop-blur-lg border border-white/10 flex max-w-full shrink-0 flex-col items-center justify-between gap-4 rounded-2xl shadow-lg p-6 text-center sm:max-w-[425px] transition-transform duration-300 hover:scale-[1.03]">
      <p className="text-neutral text-center leading-8 text-lg font-medium before:content-['“'] after:content-['”'] opacity-90">
        {feedback}
      </p>
      <div>
        <div className="mb-4 flex items-center gap-1.5">
          {Array.from({ length: 5 }, (_, idx) => (
            <StarIcon key={idx} className={idx < stars ? 'text-tag' : 'text-transparent'} />
          ))}
        </div>
        <div>
          <Image src={image} alt={name} width={50} height={50} className="mx-auto rounded-full" />
          <p className="text-neutral text-lg font-semibold">{name}</p>
          <p className="text-neutral/60 text-sm">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
