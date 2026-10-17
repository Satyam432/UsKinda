import { Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function SoundToggle({defaultOn=false}:{defaultOn?:boolean}) {
  const [on,setOn]=useState(false); const ctx=useRef<AudioContext|null>(null); const nodes=useRef<OscillatorNode[]>([])
  const stop=()=>{nodes.current.forEach(n=>{try{n.stop()}catch{}});nodes.current=[];ctx.current?.close();ctx.current=null;setOn(false)}
  const start=()=>{const AudioCtx=window.AudioContext || (window as typeof window & {webkitAudioContext:typeof AudioContext}).webkitAudioContext; const c=new AudioCtx();ctx.current=c;[174,261.6].forEach((f,i)=>{const o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.value=f;g.gain.value=i?.012:.018;o.connect(g).connect(c.destination);o.start();nodes.current.push(o)});setOn(true)}
  useEffect(()=>()=>stop(),[])
  useEffect(()=>{if(defaultOn) {/* Autoplay intentionally avoided; preference applies after interaction. */}},[defaultOn])
  return <button className="icon-btn" onClick={()=>on?stop():start()} aria-label={on?'Turn ambient sound off':'Turn ambient sound on'}>{on?<Volume2/>:<VolumeX/>}</button>
}
