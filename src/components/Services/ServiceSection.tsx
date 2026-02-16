import { serviceData } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ServiceCard from './ServiceCard'
import { useSectionInView } from '@/hooks/useSectionInView'

const ServiceSection = () => {
  const sectionRef = useSectionInView();
  return (
    <section id="services" className="my-14" ref={sectionRef}>
      <SectionHeading
        title="// სერვისები / შეთავაზებები:"
        subtitle="გთავაზობთ სერვისების ფართო სპექტრს, რათა მიიღოთ საუკეთესო კოდი და დარჩეთ კონკურენტუნარიანი."
      />

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 md:mt-[3.75rem] md:grid-cols-3">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            shortDescription={service.shortDescription}
          />
        ))}
      </div>
    </section>
  )
}

export default ServiceSection
