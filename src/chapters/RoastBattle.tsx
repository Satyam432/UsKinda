import { useState } from 'react'
import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import { story } from '../config/story'
import { PrimaryButton } from '../components/PrimaryButton'

export function RoastBattle({onNext}:{onNext:()=>void}) {
  const [started,setStarted]=useState(false)
  const [choice,setChoice]=useState<'bully'|'nice'|null>(null)
  return <section className="roast scene">
    <span className="eyebrow">Case file 05 / 08</span><h1>{story.chapterTitles[5]}</h1><p className="subtitle">{story.roast.subtitle}</p>
    <div className="banter-stage" aria-label="Two playful characters trading affectionate banter">
      <motion.div className="banter-person left-person" animate={{rotate:[-2,2,-2]}} transition={{duration:4,repeat:Infinity}}><i/><span>◡</span></motion.div>
      <div className="banter-bubbles">{story.roast.exchanges.map(([a,b],i)=><motion.div key={a} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:i*.18}}><p>{a}</p><p>{b}</p></motion.div>)}</div>
      <motion.div className="banter-person right-person" animate={{rotate:[2,-2,2]}} transition={{duration:4.4,repeat:Infinity}}><i/><span>⌣</span></motion.div>
    </div>
    {!started&&<PrimaryButton onClick={()=>setStarted(true)}>Initiate Roast Battle <Flame aria-hidden/></PrimaryButton>}
    {started&&!choice&&<motion.div className="roast-choice" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}><h2>Choose your weapon.</h2><div className="choice-row"><PrimaryButton onClick={()=>setChoice('bully')}>Bully Him</PrimaryButton><PrimaryButton onClick={()=>setChoice('nice')}>Be Suspiciously Nice</PrimaryButton></div></motion.div>}
    {choice&&<motion.div className="roast-result" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}}>{(choice==='bully'?story.roast.bullyResult:story.roast.niceResult).map(line=><p key={line}>{line}</p>)}{choice==='bully'&&<div className="mercy-meter"><span>Mercy shown</span><b>0%</b><i/></div>}<div className="roast-ending">{story.roast.ending.map(line=><p key={line}>{line}</p>)}</div><PrimaryButton onClick={onNext}>Open the classified file →</PrimaryButton></motion.div>}
  </section>
}
