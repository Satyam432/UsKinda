import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { story } from './config/story'
import { ChapterLayout } from './components/ChapterLayout'
import { StarField } from './components/StarField'
import { SoundToggle } from './components/SoundToggle'
import { PrimaryButton } from './components/PrimaryButton'
import { Opening } from './chapters/Opening'
import { Universe } from './chapters/Universe'
import { PlotTwist } from './chapters/PlotTwist'
import { Debugging } from './chapters/Debugging'
import { Compatibility } from './chapters/Compatibility'
import { RoastBattle } from './chapters/RoastBattle'
import { HyroxRecruitment } from './chapters/HyroxRecruitment'
import { Heartfelt } from './chapters/Heartfelt'
import { FinalChapter } from './chapters/FinalChapter'

export const CHAPTER_COUNT=9
export const clampChapter=(n:number)=>Number.isFinite(n)?Math.max(0,Math.min(CHAPTER_COUNT-1,n)):0
export const shouldShowInsideJoke=(enabled:boolean,from:number,to:number)=>enabled&&from===2&&to===3
export default function App(){
  const [chapter,setChapter]=useState(()=>clampChapter(Number(localStorage.getItem('cosmic-chapter')||0)))
  const [toast,setToast]=useState(''); const [intermission,setIntermission]=useState(false); const [credits,setCredits]=useState(false)
  useEffect(()=>localStorage.setItem('cosmic-chapter',String(chapter)),[chapter])
  useEffect(()=>{const move=(event:PointerEvent)=>{document.documentElement.style.setProperty('--pointer-x',`${event.clientX}px`);document.documentElement.style.setProperty('--pointer-y',`${event.clientY}px`)};window.addEventListener('pointermove',move,{passive:true});return()=>window.removeEventListener('pointermove',move)},[])
  useEffect(()=>{if(!toast)return;const id=setTimeout(()=>setToast(''),3200);return()=>clearTimeout(id)},[toast])
  const go=(n:number)=>{if(shouldShowInsideJoke(story.insideJokeEnabled,chapter,n)){setIntermission(true);return}setChapter(clampChapter(n))}
  const restart=()=>{setChapter(0);setIntermission(false);setCredits(false)}
  const pages=[<Opening onNext={()=>go(1)}/>,<Universe onNext={()=>go(2)}/>,<PlotTwist onNext={()=>go(3)}/>,<Debugging onNext={()=>go(4)} onSecret={setToast}/>,<Compatibility onNext={()=>go(5)} onSecret={setToast}/>,<RoastBattle onNext={()=>go(6)}/>,<HyroxRecruitment onNext={()=>go(7)}/>,<Heartfelt onNext={()=>go(8)}/>,<FinalChapter onReplay={restart} onCredits={()=>setCredits(true)}/>]
  return <div className="app-shell"><StarField onSecret={setToast}/><div className="pointer-glow"/><div className="sound"><SoundToggle defaultOn={story.soundEnabledByDefault}/></div><AnimatePresence mode="wait"><ChapterLayout key={chapter} index={chapter} total={CHAPTER_COUNT} onNavigate={setChapter} onRestart={restart} tone={chapter===7?'warm':chapter===8?'dawn':'night'}>{pages[chapter]}</ChapterLayout></AnimatePresence>
    <AnimatePresence>{intermission&&<motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><motion.aside role="dialog" aria-modal="true" aria-labelledby="intermission-title" className="intermission" initial={{scale:.9,rotate:-2}} animate={{scale:1,rotate:0}}><span>Bonus intermission / classified</span><h2 id="intermission-title">{story.insideJokeTitle}</h2><p>{story.insideJokeText}</p><small>No further questions will be taken at this time.</small><PrimaryButton onClick={()=>{setIntermission(false);setChapter(3)}}>Seal the evidence →</PrimaryButton></motion.aside></motion.div>}</AnimatePresence>
    <AnimatePresence>{credits&&<motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><aside role="dialog" aria-modal="true" aria-labelledby="credits-title" className="credits"><button className="close" onClick={()=>setCredits(false)} aria-label="Close credits"><X/></button><span>The unnecessarily official</span><h2 id="credits-title">Credits</h2><p>Written by: A slightly overthinking engineer.</p><p>Directed by: His inability to stop smiling.</p><p>Special appearance by: {story.recipientName||'You'}.</p><p>Funded by: Questionable sleeping habits.</p></aside></motion.div>}</AnimatePresence>
    <AnimatePresence>{toast&&<motion.div role="status" className="toast" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0}}>{toast}</motion.div>}</AnimatePresence>
  </div>
}
