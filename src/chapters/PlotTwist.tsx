import { useState } from 'react'
import { motion } from 'framer-motion'
import { PhoneCall, MessageCircle } from 'lucide-react'
import { story } from '../config/story'
import { PrimaryButton } from '../components/PrimaryButton'

export function PlotTwist({onNext}:{onNext:()=>void}) {const [minutes,setMinutes]=useState(0);return <section className="plot scene"><span className="eyebrow">Case file 02 / 06</span><h1>{story.chapterTitles[2]}</h1>
  <div className="phone-scene" aria-hidden><motion.div animate={{rotate:[-4,2,-4]}} transition={{duration:3,repeat:Infinity}}><PhoneCall/></motion.div><span className="call-line"/><motion.div animate={{rotate:[4,-2,4]}} transition={{duration:3.4,repeat:Infinity}}><PhoneCall/></motion.div>{[1,2,3].map(i=><motion.i key={i} className={`bubble b${i}`} animate={{y:[5,-18],opacity:[0,1,0]}} transition={{duration:3,delay:i,repeat:Infinity}}><MessageCircle/></motion.i>)}</div>
  <div className="timeline">{story.chapterText.plot.map(([title,body],i)=><motion.article key={title} initial={{opacity:0,x:-15}} animate={{opacity:1,x:0}} transition={{delay:i*.2}}><span>0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></motion.article>)}</div>
  <div className="call-card"><span className="live-dot"/> {minutes?'Actual duration: Let’s not discuss that.':'Call duration: Just 5 more minutes'}{minutes>1&&<strong> + {minutes*17} fictional minutes</strong>}</div>
  <PrimaryButton onClick={()=>setMinutes(m=>m+1)}>One more minute?</PrimaryButton>{minutes>0&&<motion.div initial={{opacity:0}} animate={{opacity:1}} className="answer"><p>And this is why we never sleep on time.</p><PrimaryButton onClick={onNext}>Continue the investigation →</PrimaryButton></motion.div>}
  </section>}
