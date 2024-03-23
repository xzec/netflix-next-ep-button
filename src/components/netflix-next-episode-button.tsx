import { useEffect, type FC, useCallback, useRef, useState } from 'react'
import NetflixPlayIcon from '~/icons/netflix-play-icon.tsx'
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from 'framer-motion'
import Slider from '~/components/slider.tsx'
import PauseIcon from '~/icons/pause-icon.tsx'
import PlayIcon from '~/icons/play-icon.tsx'

const NetflixNextEpisodeButton: FC = () => {
  const loading = useMotionValue(0)
  const positionX = useTransform(loading, [0, 100], ['-101%', '0%'])
  const backgroundPositionX = useTransform(loading, [0, 100], ['100%', '0%'])
  const init = useRef(false)
  const [value, setValue] = useState(0)

  useMotionValueEvent(loading, 'change', (latest) => setValue(latest))

  const startAnimation = useCallback(() => {
    animate(loading, [0, 100], {
      duration: 3,
      ease: 'linear',
    })
  }, [loading])

  useEffect(() => {
    if (!init.current) {
      startAnimation()
      init.current = true
    }
  }, [startAnimation])

  const toggleAnimation = () => {
    if (!loading.animation) {
      startAnimation()
      return
    }
    const state = loading.animation?.state
    if (state === 'running') loading.animation.pause()
    else loading.animation.play()
    loading.set(loading.getPrevious()! || 0)
  }

  return (
    <div className="space-y-8">
      <div className="relative">
        <button
          className="absolute -left-4 top-1/2 -translate-x-full -translate-y-1/2"
          onClick={toggleAnimation}
        >
          {!loading.animation || loading.animation.state === 'paused' ? (
            <PlayIcon className="h-6 w-6" />
          ) : (
            <PauseIcon className="h-6 w-6" />
          )}
        </button>
        <Slider
          defaultValue={[0]}
          max={100}
          step={1}
          value={[value]}
          onValueChange={(val) => loading.jump(val[0]!)}
        />
      </div>
      <button
        className="relative flex items-center overflow-hidden rounded-md bg-neutral-800 px-6 py-2 text-2xl font-medium text-white"
        onClick={startAnimation}
      >
        <NetflixPlayIcon className="mr-5" />
        Next episode
        <motion.div
          style={{ x: positionX }}
          className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full backdrop-invert"
        />
      </button>
      <motion.button
        className="relative flex items-center overflow-hidden rounded-md bg-gradient-to-r from-white from-50% to-neutral-500 to-50% bg-[length:200%_200%] text-2xl font-medium text-white"
        onClick={startAnimation}
        style={{ backgroundPositionX }}
      >
        <motion.div
          className="to-grey h-full w-full space-x-5 bg-gradient-to-r from-black from-50% to-white to-50% bg-[length:200%_200%] bg-clip-text px-6 py-2 font-semibold text-transparent"
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
