import { type Variant, type Variants, motion } from 'framer-motion'
import { type FC, useEffect, useState } from 'react'
import MoonIcon from '~/icons/moon-icon.tsx'
import SunIcon from '~/icons/sun-icon.tsx'
import { cn } from '~/utils/cn.ts'

type Mode = 'light' | 'dark'

const initMode = (): Mode => {
  const savedMode = typeof window !== 'undefined' ? localStorage.getItem('mode') : null
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches

  return (savedMode as Mode) || (prefersDark ? 'dark' : 'light')
}

const variants: Record<Mode, Variant> = {
  light: {
    x: '0%',
  },
  dark: {
    x: '-50%',
  },
} satisfies Variants

interface ModeToggleProps {
  className?: string
}

const ModeToggle: FC<ModeToggleProps> = ({ className }) => {
  const [mode, setMode] = useState<Mode>(initMode())

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark')
    localStorage.setItem('mode', mode)
  }, [mode])

  return (
    <button
      className={cn(
        'h-[42px] w-[42px] overflow-hidden rounded-lg border border-zinc-800 hover:bg-zinc-100 dark:border-zinc-300 dark:hover:bg-zinc-900',
        className,
      )}
      onClick={() => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))}
    >
      <motion.div className="absolute top-0 left-0 flex gap-4 p-2" variants={variants} animate={mode}>
        <SunIcon className="text-2xl text-amber-500" />
        <MoonIcon className="text-2xl text-blue-600" />
      </motion.div>
    </button>
  )
}

export default ModeToggle
