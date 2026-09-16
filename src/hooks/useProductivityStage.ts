import { useEffect, useState, type RefObject } from 'react'

export function useProductivityStage(sectionRef: RefObject<HTMLElement | null>, stageCount: number): number {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    let frame = 0
    const update = () => {
      frame = 0
      const bounds = section.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, -bounds.top / Math.max(1, bounds.height - window.innerHeight)))
      setStage(Math.min(stageCount - 1, Math.floor(progress * stageCount)))
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [sectionRef, stageCount])

  return stage
}
