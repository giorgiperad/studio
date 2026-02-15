import { ReactNode } from 'react'
import { motion } from 'framer-motion'

// BentoGrid: Apple-style asymmetric grid with staggered fade-in
const BentoGrid = ({ children }: { children: ReactNode }) => (
  <motion.div
    className="bento-grid grid grid-cols-1 md:grid-cols-6 gap-6"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.12 } },
    }}
  >
    {children}
  </motion.div>
)

export default BentoGrid
