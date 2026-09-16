import { useEffect, useRef, useState } from 'react'

export interface PointerPosition {
  x: number
  y: number
}

export function usePointerPosition(enabled = true): PointerPosition {
  const [position, setPosition] = useState<PointerPosition>({ x: 0, y: 0 })
  const positionRef = useRef(position)

  useEffect(() => {
    if (!enabled) return
    let frame = 0
    let nextPosition = positionRef.current
    const onPointerMove = (event: PointerEvent) => {
      nextPosition = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      }
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        positionRef.current = nextPosition
        setPosition(nextPosition)
        frame = 0
      })
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [enabled])

  return position
}
