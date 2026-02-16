
import { getAllBlogs, getAllProjects, getAllTestimonials } from '@/services'
import HomeClientClient from './HomeClientClient'

export default async function Home() {
  const projects = await getAllProjects()
  const testimonials = await getAllTestimonials()
  const posts = await getAllBlogs()
  const latestPosts = posts.slice(0, 4)

  return <HomeClientClient projects={projects} testimonials={testimonials} latestPosts={latestPosts} />
}
