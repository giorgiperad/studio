import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'
import { useEffect } from 'react'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'John Doe | Full-Stack Web Developer in Chicago'

const description =
  "Skilled full-stack web developer in Chicago. I build responsive, user-friendly websites with React, NextJS, and NodeJS. Let's bring your vision to life. Hire me today!"

const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'John Doe Portfolio',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@Basit_Miyanji',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    if (typeof window !== 'undefined' && !('scrollBehavior' in document.documentElement.style)) {
      import('smoothscroll-polyfill').then((smoothscroll) => {
        smoothscroll.polyfill();
      });
    }
  }, []);
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        {/* Visual FX Components */}
        <div id="__visualfx-cursor-root" />
        <div id="__visualfx-bg-root" />
        <div id="__visualfx-grain-root" />
        {/* Mount the provider to inject effects */}
        {typeof window !== 'undefined' && (
          <>{require('@/components/VisualFX/VisualFXProvider').default()}</>
        )}
        <ThemeMenu />
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
