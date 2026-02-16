
import { Project, Testimonial, BlogPost } from '@/lib/types';
import HomeClientClient from './HomeClientClient';

interface HomeClientProps {
  projects: Project[];
  testimonials: Testimonial[];
  latestPosts: BlogPost[];
}

const HomeClient = ({ projects, testimonials, latestPosts }: HomeClientProps) => {
  return (
    <HomeClientClient projects={projects} testimonials={testimonials} latestPosts={latestPosts} />
  );
};

export default HomeClient;
