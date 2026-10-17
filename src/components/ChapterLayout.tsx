import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, RotateCcw } from 'lucide-react'
import { ProgressStars } from './ProgressStars'

export function ChapterLayout({children,index,total,onNavigate,onRestart,tone='night'}:{children:ReactNode,index:number,total:number,onNavigate:(n:number)=>void,onRestart:()=>void,tone?:'night'|'warm'|'dawn'}) {
  return <motion.main className={`chapter tone-${tone}`} initial={{opacity:0,scale:.985}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:1.015}} transition={{duration:.5}}>
    <div className="chapter-top"><button className="icon-btn" disabled={index===0} onClick={()=>onNavigate(index-1)} aria-label="Previous chapter"><ChevronLeft/></button><ProgressStars current={index} total={total} onSelect={onNavigate}/><button className="icon-btn" onClick={onRestart} aria-label="Restart story"><RotateCcw/></button></div>
    <div className="chapter-content">{children}</div>
  </motion.main>
}
