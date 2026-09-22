import { useEffect, useRef, useState } from "react"

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

/** Animates from 0 to `target` once `isActive` becomes true. */
export function useCountUp(target: number, isActive: boolean, duration = 1600) {
  const [reducedMotion] = useState(prefersReducedMotion)
  const [value, setValue] = useState(() => (reducedMotion ? target : 0))
  const startedRef = useRef(false)

  useEffect(() => {
    if (!isActive || startedRef.current || reducedMotion) return
    startedRef.current = true

    let raf = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isActive, target, duration, reducedMotion])

  return value
}
