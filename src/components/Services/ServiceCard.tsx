import Image from 'next/image'

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
  return (
    <div className="bg-secondary border-border flex flex-col items-center rounded-[14px] border p-5">
      <Image src={icon} alt={geTitles[title] || title} className="my-1 size-14" />
      <h5 className="text-accent mt-2 mb-5 text-center text-base font-semibold">{geTitles[title] || title}</h5>
      <div className="bg-primary rounded-2xl p-4">
        <p className="text-primary-content text-center text-sm font-normal">{geDescriptions[shortDescription] || shortDescription}</p>
      </div>
    </div>
  )
}

export default ServiceCard
