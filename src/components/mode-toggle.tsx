import { useEffect, type FC, useState } from 'react'

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
    <div className={className}>
      <button
        onClick={() => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))}
      >
        {mode === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  )
}

export default ModeToggle
