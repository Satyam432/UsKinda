import { motion } from 'framer-motion'
import type { ComponentProps, ReactNode } from 'react'

export function PrimaryButton({children, className='', ...props}: ComponentProps<typeof motion.button> & {children: ReactNode}) {
  return <motion.button whileHover={{y:-3, scale:1.02}} whileTap={{scale:.96}} className={`primary-btn ${className}`} {...props}>{children}</motion.button>
}
