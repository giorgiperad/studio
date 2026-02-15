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
    <div className="glass-card bg-white/10 backdrop-blur-lg border border-white/10 flex flex-col items-center rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-[1.03]">
      <Image src={icon} alt={geTitles[title] || title} className="my-1 size-14" />
      <h5 className="text-accent mt-2 mb-5 text-center text-lg font-extrabold drop-shadow">{geTitles[title] || title}</h5>
      <div className="bg-primary/80 rounded-2xl p-4 shadow-inner">
        <p className="text-primary-content text-center text-base font-medium opacity-90">{geDescriptions[shortDescription] || shortDescription}</p>
      </div>
    </div>
  )
}

export default ServiceCard
