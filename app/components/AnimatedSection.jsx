import { motion } from 'framer-motion'

const AnimatedSection = ({ children }) => {
  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
      initial={animationVariants.hidden}
      whileInView={animationVariants.visible}
      viewport={{ once: true }}
      transition={{
        duration: 1.3,
        delay: 0.1,
        ease: 'linear',
        // type: 'spring',
        // bounce: 0.4,
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
