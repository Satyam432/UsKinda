import { story } from '../config/story'
import { AnimatedText } from '../components/AnimatedText'
import { PrimaryButton } from '../components/PrimaryButton'

export function Heartfelt({onNext}:{onNext:()=>void}) {
  const [visible,setVisible]=useState(2)
  const complete=visible>=story.romanticMessage.length
  return <section className="heartfelt scene">
    <AnimatedText><span className="eyebrow">No exhibit number this time</span><h1>Okay, jokes aside...</h1></AnimatedText>
    <AnimatedText delay={.35}><h2>There’s something I actually mean.</h2></AnimatedText>
    <div className="letter" aria-live="polite">{story.romanticMessage.slice(0,visible).map((line,i)=><motion.p key={line} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.65}} className={i===4||i===8||i===11?'emphasis':''}>{line}</motion.p>)}</div>
    {!complete?<PrimaryButton onClick={()=>setVisible(v=>Math.min(v+2,story.romanticMessage.length))}>Keep reading <span aria-hidden>↓</span></PrimaryButton>:<><div className="together-stars" aria-hidden><i/><span>♡</span><i/></div><AnimatedText><PrimaryButton onClick={onNext}>There’s one more thing...</PrimaryButton></AnimatedText></>}
  </section>
}
import { useState } from 'react'
import { motion } from 'framer-motion'
