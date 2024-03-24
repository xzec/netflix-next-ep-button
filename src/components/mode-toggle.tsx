import { useEffect, type FC, useState } from 'react'
import SunIcon from '~/icons/sun-icon.tsx'
import MoonIcon from '~/icons/moon-icon.tsx'
import { cn } from '~/utils/cn.ts'

type Mode = 'light' | 'dark'

const initMode = (): Mode => {
  const savedMode =
    typeof window !== 'undefined' ? localStorage.getItem('mode') : null
  const prefersDark = window.matchMedia?.(
    '(prefers-color-scheme: dark)'
  ).matches

  return (savedMode as Mode) || (prefersDark ? 'dark' : 'light')
}

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
        'rounded-lg border border-zinc-800 p-1 hover:bg-zinc-100 dark:border-zinc-300 dark:hover:bg-zinc-900',
        className
      )}
      onClick={() => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))}
    >
      {mode === 'light' ? (
        <SunIcon className="text-2xl text-amber-500" />
      ) : (
        <MoonIcon className="text-2xl text-blue-600" />
      )}
    </button>
  )
}

export default ModeToggle
