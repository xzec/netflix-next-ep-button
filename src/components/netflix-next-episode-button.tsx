import { useEffect, type FC, useCallback, useRef } from 'react'
import PlayIcon from '~/icons/play-icon.tsx'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'

const NetflixNextEpisodeButton: FC = () => {
  const value = useMotionValue(0)
  const x = useTransform(value, [0, 100], ['-101%', '0%'])
  const backgroundPositionX = useTransform(value, [0, 100], ['100%', '0%'])
  const init = useRef(false)

  const startAnimation = useCallback(() => {
    animate(value, [0, 100], {
      duration: 3,
      ease: 'linear',
      delay: value.isAnimating() ? 0.25 : 0,
    })
  }, [value])

  useEffect(() => {
    if (!init.current) {
      startAnimation()
      init.current = true
    }
  }, [startAnimation])

  return (
    <div className="space-y-8">
      <button
        className="relative flex items-center overflow-hidden rounded-md bg-neutral-800 px-6 py-2 text-2xl font-medium text-white"
        onClick={startAnimation}
      >
        <PlayIcon className="mr-5" />
        Next episode
        <motion.div
          style={{ x }}
          className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full backdrop-invert"
        />
      </button>
      <motion.button
        className="relative flex items-center overflow-hidden rounded-md bg-gradient-to-r from-white from-50% to-neutral-500 to-50% bg-[length:200%_200%] text-2xl font-medium text-white"
        onClick={startAnimation}
        style={{ backgroundPositionX }}
      >
        <motion.div
          className="to-grey h-full w-full bg-gradient-to-r from-black from-50% to-white to-50% bg-[length:200%_200%] bg-clip-text px-6 py-2 font-semibold text-transparent"
          style={{ backgroundPositionX }}
        >
          <span className="mr-5">▶</span>
          Next episode
        </motion.div>
      </motion.button>
    </div>
  )
}

export default NetflixNextEpisodeButton
