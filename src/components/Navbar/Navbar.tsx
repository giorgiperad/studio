'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BurgerIcon, CloseIcon } from '../../utils/icons'
import Logo from './Logo'

const navItems = [
  {
    label: '_მთავარი',
    href: '/',
  },
  {
    label: '_პროექტები',
    href: '/#projects',
  },
  {
    label: '_სერვისები',
    href: '/#services',
  },
  { label: '_ბლოგები', href: '/blogs' },
  {
    label: '_კონტაქტი',
    href: '/#contact',
  },
]

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsVisible(!isVisible)
  }

  return (
    <nav className="navbar-glass fixed top-0 left-0 w-full h-16 z-50 transition-all duration-300">
      <div className="mx-auto flex h-full w-dvw max-w-[1200px] items-center justify-between px-4 py-1">
        {isVisible ? (
          <div className="text-primary-content md:hidden font-mono tracking-widest text-lg">_მენიუ</div>
        ) : (
          <Link href="/">
            <div className="animate-fade-up text-primary-content relative flex items-center gap-3 transition-all duration-300 md:static">
              <Logo />
              <span className="gradient-text font-extrabold text-xl tracking-tight drop-shadow-sm">kima.ge</span>
            </div>
          </Link>
        )}

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isVisible ? (
              <CloseIcon className="text-primary-content" />
            ) : (
              <BurgerIcon className="text-primary-content" />
            )}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {isVisible && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-fade-in md:hidden" onClick={toggleMenu}></div>
        )}
        <ul
          className={`navbar-menu ${isVisible ? 'flex' : 'hidden'} animate-fade-in absolute top-16 left-0 z-50 h-dvh w-dvw flex-col md:static md:top-0 md:flex md:h-full md:w-[72%] md:flex-row lg:w-[70%] rounded-b-3xl shadow-2xl`}
        >
          {navItems.map(({ label, href }) => (
            <li
              key={href}
              onClick={() => setIsVisible(false)}
              className="border-border flex items-center border-b px-4 text-2xl md:border-y-0 md:border-e md:text-base md:first:border-s md:last:ml-auto md:last:border-none md:last:px-0 lg:px-8 relative group">
              <Link
                href={href}
                className={`nav-link w-full py-7 transition-all duration-200 md:py-0 font-semibold tracking-wide ${pathname === href ? 'active-nav-link' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
