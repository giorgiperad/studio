import { footerLinks, languages } from '@/appData'
import { socials } from '@/appData/personal'
import Logo from '../Navbar/Logo'

const Footer = () => {
  return (
    <footer className="bg-secondary/80 backdrop-blur-2xl relative flex min-h-[560px] flex-col justify-between gap-20 overflow-hidden px-4 py-14 md:p-14 rounded-t-3xl shadow-2xl border-t border-white/10">
      <div className="relative z-20 grid grid-cols-1 items-start gap-20 md:grid-cols-2 md:gap-12">
        <div className="glass-card rounded-2xl p-8 shadow-lg border border-white/10">
          <h5 className="mb-8 flex items-center gap-2">
            <Logo width={30} height={24} />
            <span className="text-accent text-xl font-extrabold tracking-tight drop-shadow">Logoipsum</span>
          </h5>
          <p className="text-tertiary-content text-base font-medium opacity-90">
            The first free end-to-end analytics service for the site, designed to work with enterprises of various levels and business segments.
          </p>
          <a
            href="#"
            className="text-accent mt-4 inline-flex items-center gap-2 text-sm font-semibold hover:underline transition-colors duration-200">
            More about us <span className="bg-accent inline-block size-[10px] rounded-full" />
          </a>
        </div>

        <div className="flex flex-wrap gap-8 glass-card rounded-2xl p-8 shadow-md border border-white/10">
          {footerLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="text-tertiary-content hover:text-neutral transition-colors duration-300 hover:underline">
              {link.title}.
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-20 flex flex-col-reverse gap-20 md:grid md:grid-cols-2 md:gap-12">
        <div className="grid grid-cols-2 gap-4">
          <ul className="flex flex-col gap-4">
            {socials.map((item, index) => (
              <li key={index} className="cursor-pointer bg-transparent">
                <a
                  href={item.href}
                  className="text-neutral transition-color hover:text-neutral/50 h-full w-full duration-300">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-tertiary-content flex flex-col self-end text-right text-xs md:text-center">
            <span>© 2025 — საავტორო უფლებები</span>
            <span>ყველა უფლება დაცულია</span>
          </p>
        </div>

        <div className="flex flex-col justify-between gap-[200px] md:flex-row md:gap-8">
          <div className="space-y-10 md:self-end glass-card rounded-2xl p-8 shadow-md border border-white/10">
            <div className="flex flex-col">
              <h5 className="text-accent mb-4 text-xl font-bold">დაგვიკავშირდით</h5>
              <a
                href="mailto:johndoe@gmail.com"
                className="text-accent hover:text-accent/70 text-base font-semibold transition-colors duration-200">
                johndoe@gmail.com
              </a>
              <a
                href="tel:+92 3123456789"
                className="text-accent hover:text-accent/70 text-base font-semibold transition-colors duration-200">
                +92 3123456789
              </a>
            </div>
            <div>
              <div>
                <h5 className="text-accent mb-4 text-xl font-bold">Location</h5>
                <address className="text-tertiary-content flex flex-col text-base font-medium">
                  <span>123456, Pakistan</span>
                  <span>Karachi 22/5/8, Office 4</span>
                </address>
              </div>
            </div>
          </div>

          <div className="md:self-end glass-card rounded-2xl p-8 shadow-md border border-white/10">
            <p className="text-accent mb-8 text-base font-bold md:text-right">Languages</p>
            <div className="flex gap-8 md:gap-4 lg:gap-8">
              {languages.map((language, idx) => (
                <span
                  key={language}
                  className={idx === 0 ? 'text-accent font-bold' : 'text-tertiary-content'}>
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent/10 via-primary/10 to-white/10 absolute top-1/2 -right-[40%] z-0 h-[120dvw] w-[120dvw] -translate-y-1/2 rounded-full p-14 md:top-0 md:-right-[255px] md:-bottom-[450px] md:size-[1030px] md:-translate-y-0 md:p-20 blur-2xl" />
    </footer>
  )
}

export default Footer
