"use client";
import { skillList } from '@/appData'
import BlogSection from '@/components/Blogs/BlogSection'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import Skills from '@/components/Skills/Skills'
import TestimonialSection from '@/components/Testimonials/TestimonialSection'

export default function HomeClient({ projects, testimonials, latestPosts }: {
  projects: any[];
  testimonials: any[];
  latestPosts: any[];
}) {
  return (
    <main>
      <Hero />
      <Skills skills={skillList} />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <ProjectSection projects={projects} />
        <ServiceSection />
        <BlogSection posts={latestPosts} />
        <TestimonialSection testimonials={testimonials} />
        <ContactSection />
      </div>
    </main>
  )
}