import { useEffect, useState } from "react"

/** Brief branded loading screen shown once when the app first mounts. */
function Preloader() {
  const [hidden, setHidden] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const hideTimer = setTimeout(() => setHidden(true), 550)
    const removeTimer = setTimeout(() => setRemoved(true), 950)
    return () => {
      clearTimeout(hideTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (removed) return null

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gray-950 transition-opacity duration-500 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-14 w-14">
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-orange-500/20 border-t-orange-500" />
          <span className="absolute inset-3 rounded-full bg-orange-600" />
        </div>
        <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
          Gajanan Traders
        </p>
      </div>
    </div>
  )
}

export default Preloader
