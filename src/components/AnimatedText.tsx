import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function AnimatedText({children, delay=0, className=''}:{children:ReactNode, delay?:number, className?:string}) {
  return <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.65,delay}} className={className}>{children}</motion.div>
}
