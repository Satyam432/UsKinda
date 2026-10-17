import { motion } from 'framer-motion'
import { story } from '../config/story'
import { AnimatedText } from '../components/AnimatedText'
import { PrimaryButton } from '../components/PrimaryButton'

export function Opening({onNext}:{onNext:()=>void}) {
  return <section className="opening scene"><div className="opening-copy">
    {story.recipientName&&<AnimatedText delay={.05} className="eyebrow">A small cosmic case file for {story.recipientName}</AnimatedText>}
    {story.openingMessage.map((line,i)=><AnimatedText key={line} delay={.25+i*.55} className={i===story.openingMessage.length-1?'opening-punch':''}><p>{line}</p></AnimatedText>)}
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.7}} className="opening-actions"><PrimaryButton onClick={onNext}>Begin the Investigation <span aria-hidden>✨</span></PrimaryButton><button className="text-btn" onClick={onNext}>Skip intro</button></motion.div>
  </div><p className="title-whisper">{story.websiteTitle}</p></section>
}
