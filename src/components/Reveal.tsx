import type { ReactNode } from "react"
import { useReveal } from "../hooks/useReveal"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

/** Fades + slides its children up once they scroll into view. */
function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  )
}

export default Reveal
