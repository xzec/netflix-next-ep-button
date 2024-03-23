import { useEffect, type FC, useCallback, useRef } from 'react'
import PlayIcon from '~/icons/play-icon.tsx'
import { animate, motion, useMotionValue } from 'framer-motion'

const NetflixNextEpisodeButton: FC = () => {
  const x = useMotionValue<string>('-100%')
  const backgroundPositionX = useMotionValue<string>('100%')
  const init = useRef(false)

  const startAnimation = useCallback(() => {
    animate(x, ['-100%', '0%'], {
      duration: 3,
      ease: 'linear',
      delay: x.isAnimating() ? 0.25 : 0,
    })
    animate(backgroundPositionX, ['100%', '0%'], {
      duration: 3,
      ease: 'linear',
      delay: backgroundPositionX.isAnimating() ? 0.25 : 0,
    })
  }, [x, backgroundPositionX])

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
