"use client";
import { Project, Testimonial, BlogPost } from '@/lib/types';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero/Hero';
import ProjectSection from '@/components/Projects/ProjectSection';
import TestimonialSection from '@/components/Testimonials/TestimonialSection';
const BlogSection = dynamic(() => import('@/components/Blogs/BlogSection'), { ssr: false });

interface HomeClientClientProps {
  projects: Project[];
  testimonials: Testimonial[];
  latestPosts: BlogPost[];
}

const HomeClientClient: React.FC<HomeClientClientProps> = ({ projects, testimonials, latestPosts }) => {
  return (
    <main className="mx-auto max-w-[1200px] px-4 md:my-[3.75rem]">
      <Hero />
      <ProjectSection projects={projects} />
      <TestimonialSection testimonials={testimonials} />
      <BlogSection posts={latestPosts} />
    </main>
  );
}

export default HomeClientClient;
