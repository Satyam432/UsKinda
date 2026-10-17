export function ProgressStars({current,total=7,onSelect}:{current:number,total?:number,onSelect:(n:number)=>void}) {
  return <nav aria-label="Story chapters" className="progress-stars">{Array.from({length:total},(_,i)=><button key={i} onClick={()=>onSelect(i)} aria-label={`Go to chapter ${i+1}`} aria-current={i===current?'step':undefined} className={i===current?'active':i<current?'visited':''}>★</button>)}</nav>
}
