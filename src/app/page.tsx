
import { getAllBlogs, getAllProjects, getAllTestimonials } from '@/services'
import HomeClient from './HomeClient'

export default async function Home() {
  const projects = await getAllProjects()
  const testimonials = await getAllTestimonials()
  const posts = await getAllBlogs()
  const latestPosts = posts.slice(0, 4)

  return <HomeClient projects={projects} testimonials={testimonials} latestPosts={latestPosts} />
}
