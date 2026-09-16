export function getTimelineActiveIndex(progress: number, itemCount: number): number {
  if (itemCount <= 1) return 0
  return Math.min(itemCount - 1, Math.max(0, Math.round(progress * (itemCount - 1))))
}

export function clampTimelineProgress(progress: number): number {
  return Math.min(1, Math.max(0, progress))
}
