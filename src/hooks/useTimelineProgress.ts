import { useEffect, useState, type RefObject } from 'react'
import { clampTimelineProgress, getTimelineActiveIndex } from '../utils/timeline'
import { useReducedMotion } from './useReducedMotion'

interface TimelineProgress {
  progress: number
  activeIndex: number
}

export function useTimelineProgress(
  sectionRef: RefObject<HTMLElement | null>,
  itemCount: number,
): TimelineProgress {
  const reducedMotion = useReducedMotion()
  const [timelineProgress, setTimelineProgress] = useState<TimelineProgress>({
    progress: 0,
    activeIndex: 0,
  })

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    let frame = 0

    const update = () => {
      frame = 0
      const bounds = section.getBoundingClientRect()
      const scrollableDistance = Math.max(1, bounds.height - window.innerHeight)
      const progress = reducedMotion
        ? 0
        : clampTimelineProgress(-bounds.top / scrollableDistance)
      setTimelineProgress({
        progress,
        activeIndex: getTimelineActiveIndex(progress, itemCount),
      })
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [itemCount, reducedMotion, sectionRef])

  return timelineProgress
}
