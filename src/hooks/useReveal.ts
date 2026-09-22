import { useEffect, useRef, useState } from "react"

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

/**
 * Reveals an element with a fade/slide transition the first time it
 * scrolls into view, then disconnects. Respects prefers-reduced-motion
 * by starting revealed, with no animation.
 */
export function useReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (isVisible) return
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px", ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [isVisible, options])

  return { ref, isVisible }
}
