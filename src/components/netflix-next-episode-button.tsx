import { useEffect, type FC, useCallback, useRef } from 'react'
import PlayIcon from '~/icons/play-icon.tsx'
import { animate, motion, useMotionValue } from 'framer-motion'

const NetflixNextEpisodeButton: FC = () => {
  const x = useMotionValue<string>('-101%')
  const init = useRef(false)

  const handleStartAnimation = useCallback(() => {
    animate(x, ['-101%', '0%'], {
      duration: 3,
      ease: 'linear',
      delay: x.isAnimating() ? 0.25 : 0,
    })
  }, [x])

  useEffect(() => {
    if (!init.current) {
      handleStartAnimation()
      init.current = true
    }
  }, [handleStartAnimation])

  return (
    <button
      className="relative flex items-center overflow-hidden rounded-md bg-gray-700 px-6 py-2 text-2xl font-medium text-white"
      onClick={handleStartAnimation}
    >
      <PlayIcon className="mr-5" />
      Next episode
      <motion.div
        style={{ x }}
        className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full backdrop-invert"
      />
    </button>
  )
}

export default NetflixNextEpisodeButton
