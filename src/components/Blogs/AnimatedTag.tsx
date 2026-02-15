import { motion } from 'framer-motion'

const AnimatedTag = ({ tag }: { tag: string }) => (
  <motion.div
    className="bg-gradient-to-r from-accent/80 to-primary/60 inline-block rounded-md px-2 py-[5px] capitalize backdrop-blur-[80px] shadow-md"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.12, boxShadow: '0 0 12px #00fff7' }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <span className="text-tag text-xs font-bold text-white animate-gradient-x">{tag}</span>
  </motion.div>
)

export default AnimatedTag
