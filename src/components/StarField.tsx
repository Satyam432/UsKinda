import { motion } from 'framer-motion'
import { useState } from 'react'

const stars = Array.from({length:42},(_,i)=>({left:`${(i*37)%100}%`,top:`${(i*61)%96}%`,size:1+(i%3),delay:(i%9)*.3}))
export function StarField({onSecret}:{onSecret:(message:string)=>void}) {
  const [moonClicks,setMoonClicks]=useState(0)
  const clickMoon=()=>{const n=moonClicks+1;setMoonClicks(n);if(n%3===0)onSecret("Psst. He’s probably smiling at his screen right now.")}
  return <div className="star-field">
    {stars.map((s,i)=>i===7?<button aria-label="A curious little star" onClick={()=>onSecret('Achievement unlocked: You found a completely unnecessary feature.')} className="star secret-star" key={i} style={{left:s.left,top:s.top,width:s.size,height:s.size,animationDelay:`${s.delay}s`}} />:<i aria-hidden className="star" key={i} style={{left:s.left,top:s.top,width:s.size,height:s.size,animationDelay:`${s.delay}s`}} />)}
    <motion.button aria-label="Moon — perhaps it has a secret" onClick={clickMoon} className="moon" animate={{rotate:[-3,3,-3],y:[0,-5,0]}} transition={{duration:6,repeat:Infinity}}>☾<span>✦</span></motion.button>
    <i className="shooting-star" />
  </div>
}
