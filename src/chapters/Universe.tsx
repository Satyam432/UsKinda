import { useState } from 'react'
import { motion } from 'framer-motion'
import { story } from '../config/story'
import { AnimatedText } from '../components/AnimatedText'
import { PrimaryButton } from '../components/PrimaryButton'

export function Universe({onNext}:{onNext:()=>void}) {const [answer,setAnswer]=useState<string|null>(null);return <section className="universe scene">
  <div className="cosmos-art" aria-hidden><motion.div className="planet planet-a" animate={{y:[-5,7,-5],rotate:360}} transition={{duration:18,repeat:Infinity}}>◌</motion.div><svg viewBox="0 0 320 100"><motion.path d="M35 55 C110 2 215 105 285 44" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 9" initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2}}/></svg><motion.div className="planet planet-b" animate={{y:[6,-7,6],rotate:-360}} transition={{duration:21,repeat:Infinity}}>◉</motion.div><motion.i className="meeting-star one" animate={{x:48}} transition={{duration:4,repeat:Infinity,repeatType:'reverse'}}/><motion.i className="meeting-star two" animate={{x:-48}} transition={{duration:4,repeat:Infinity,repeatType:'reverse'}}/></div>
  <AnimatedText><span className="eyebrow">Case file 01 / 06</span><h1>{story.chapterTitles[1]}</h1></AnimatedText>
  <div className="story-lines">{story.chapterText.universe.map((x,i)=><AnimatedText delay={.25+i*.25} key={x}><p>{x}</p></AnimatedText>)}</div><h2>Coincidence?</h2>
  {!answer?<div className="choice-row"><PrimaryButton onClick={()=>setAnswer('absolutely')}>Absolutely</PrimaryButton><PrimaryButton onClick={()=>setAnswer('suspicious')}>Seems Suspicious 👀</PrimaryButton></div>:<motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="answer"><p>{answer==='absolutely'?'Wow. Defending the universe already? Interesting.':'THANK YOU. Someone finally understands.'}</p><p>Personally, I think the universe has excellent taste.</p><PrimaryButton onClick={onNext}>Review Exhibit B →</PrimaryButton></motion.div>}
  </section>}
