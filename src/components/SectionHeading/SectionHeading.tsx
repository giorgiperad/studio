interface SectionHeadingTypes {
  title: string
  subtitle?: string
  className?: string
}

const SectionHeading: React.FC<SectionHeadingTypes> = ({ title, subtitle, className }) => {
  // Provide Georgian defaults if not supplied
  const geTitle = title === '// Services / Offers:' ? '// სერვისები / შეთავაზებები:' : title;
  const geSubtitle = subtitle === 'I offer a wide range of services to ensure you have the best written code and stay ahead in the competition.'
    ? 'გთავაზობთ სერვისების ფართო სპექტრს, რათა მიიღოთ საუკეთესო კოდი და დარჩეთ კონკურენტუნარიანი.'
    : subtitle;
  return (
    <div className={`lg:max-w-[50dvw] ${className}`}>
      <h2 className="text-primary-content text-2xl font-bold tracking-wider">{geTitle}</h2>
      {geSubtitle && <p className="text-tertiary-content mt-5 text-lg text-pretty">{geSubtitle}</p>}
    </div>
  )
}

export default SectionHeading
