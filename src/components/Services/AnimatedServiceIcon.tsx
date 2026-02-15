"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.15, rotate: 12, transition: { type: "spring" as const, stiffness: 300 } },
  tap: { scale: 0.95, rotate: -8, transition: { type: "spring" as const, stiffness: 400 } },
}

const AnimatedServiceIcon = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    className="my-1 size-14 flex items-center justify-center"
    variants={iconVariants}
    initial="initial"
    whileHover="hover"
    whileTap="tap"
  >
    <Image src={src} alt={alt} width={56} height={56} />
  </motion.div>
)

export default AnimatedServiceIcon
