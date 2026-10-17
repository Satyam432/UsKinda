import { useState } from 'react'
import { motion } from 'framer-motion'
import { Dumbbell, Footprints, Heart, Trophy } from 'lucide-react'
import { story } from '../config/story'
import { PrimaryButton } from '../components/PrimaryButton'

export function HyroxRecruitment({onNext}:{onNext:()=>void}) {
  const [jobOpen,setJobOpen]=useState(false)
  const [response,setResponse]=useState<'accept'|'negotiate'|null>(null)
  const file=story.hyrox.file
  return <section className="hyrox scene">
    <span className="eyebrow">Special investigation / definitely legitimate</span><h1>{story.chapterTitles[6]}</h1><p className="subtitle">{story.hyrox.subtitle}</p>
    <div className="track-doodle" aria-hidden><Footprints/><motion.i initial={{width:0}} animate={{width:'72%'}} transition={{duration:1.5}}/><span>42</span><Heart/></div>
    {!jobOpen&&<motion.article className="classified-file" initial={{rotate:-1,y:10}} animate={{rotate:0,y:0}}><header><span>CONFIDENTIAL</span><b>HYROX PARTNER RECRUITMENT</b></header><dl><div><dt>Candidate</dt><dd>{file.candidate}</dd></div><div><dt>Position</dt><dd>{file.position}</dd></div><div><dt>Recruiter</dt><dd>{file.recruiter}</dd></div><div><dt>Recruitment status</dt><dd>{file.status}</dd></div></dl><ul>{story.hyrox.requirements.map(item=><li key={item}>✓ {item}</li>)}</ul><div className="shortlisted"><small>After a very thorough evaluation...</small><strong>Congratulations.<br/>You have been shortlisted.</strong></div><PrimaryButton onClick={()=>setJobOpen(true)}>View Actual Job Description</PrimaryButton></motion.article>}
    {jobOpen&&<motion.article className="job-card" initial={{opacity:0,rotateY:-12}} animate={{opacity:1,rotateY:0}}><div className="job-card-top"><Dumbbell/><span>JOB DESCRIPTION</span><Trophy/></div><h2>HYROX Partner <small>(Potentially Long-Term)</small></h2><div className="job-columns"><div><h3>Responsibilities</h3><ul>{story.hyrox.responsibilities.map(item=><li key={item}>{item}</li>)}</ul></div><div><h3>Benefits</h3><ul>{story.hyrox.benefits.map(item=><li key={item}>{item}</li>)}</ul></div></div><div className="hyrox-confession">{story.hyrox.confession.map(line=><p key={line}>{line}</p>)}</div>{!response?<div className="choice-row"><PrimaryButton onClick={()=>setResponse('accept')}>Accept HYROX Recruitment</PrimaryButton><PrimaryButton onClick={()=>setResponse('negotiate')}>Negotiate Benefits</PrimaryButton></div>:<motion.div className="recruitment-response" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}><p>{response==='accept'?'Excellent. HR will be in touch. HR is also me.':'Unfortunately, the recruiter is emotionally compromised.'}</p>{response==='negotiate'&&<p>Additional benefits approved: More attention, more laughter, and unlimited roasting privileges.</p>}<PrimaryButton onClick={onNext}>Now for the part I actually mean →</PrimaryButton></motion.div>}<small className="disclaimer">This is a fictional recruitment process conducted by one highly biased individual.</small></motion.article>}
  </section>
}
