"use client"
import { BlogPost } from '@/lib/types'
import { formatDate } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { motion } from 'framer-motion'
import AnimatedTag from './AnimatedTag'

interface BlogCardProps {
  index?: number
  large?: boolean
  post: BlogPost
}

const BlogCard: FC<BlogCardProps> = ({ post, large, index = 0 }) => {
  const { slug, title, cover, shortDescription, tags, publishedDate, readingTime } = post

  return (
    <motion.div
      className="glass-card bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/10 transition-transform duration-300 hover:scale-[1.03] group overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.08 }}
    >
      <Link
        href={`/blogs/${slug}`}
        className="flex items-start gap-4 no-underline transition-all duration-300 ease-out hover:shadow-2xl hover:bg-accent/5 rounded-2xl p-4"
      >
        {!large && (
          <h5 className="text-neutral/20 text-[56px] leading-[68px] font-extrabold drop-shadow-lg">0{index + 1}</h5>
        )}

        <div className="w-full">
          {large && (
            <>
              <figure className="relative mb-8 h-[200px] w-full md:h-[400px] overflow-hidden group">
                <Image
                  src={cover}
                  alt={title}
                  fill
                  className="object-cover rounded-2xl group-hover:scale-110 group-hover:-translate-y-2 group-hover:blur-[2px] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-transparent to-transparent opacity-80 pointer-events-none" />
              </figure>
              <div className="mb-1.5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <AnimatedTag key={tag.trim()} tag={tag} />
                ))}
              </div>
            </>
          )}

          <motion.h3
            className={`${large ? 'text-[32px] font-extrabold md:text-[44px]' : 'text-[22px] font-bold'} text-accent mt-2 mb-1.5 line-clamp-3 leading-[1.3] drop-shadow`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-primary-content mb-1.5 line-clamp-3 overflow-hidden text-base leading-[1.5] text-ellipsis opacity-90"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
          >
            {shortDescription}
          </motion.p>

          {!large && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <AnimatedTag key={tag.trim()} tag={tag} />
              ))}
            </div>
          )}

          <div className="mt-7 flex items-center">
            <time className="text-primary-content text-sm font-normal" dateTime={publishedDate}>
              {formatDate(publishedDate)}
            </time>
            <span className="text-primary-content relative ml-5 text-sm font-normal before:absolute before:top-1/2 before:left-[-11px] before:h-[2px] before:w-[2px] before:rounded-full before:bg-[#909090] before:content-['']">
              {readingTime}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default BlogCard
