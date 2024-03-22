import { FC } from 'react'
import ModeToggle from '~/components/mode-toggle.tsx'

const App: FC = () => {
  return (
    <div className="flex h-[100dvh] w-[100dvw] items-center justify-center overflow-hidden bg-white dark:bg-black">
      <ModeToggle className="fixed right-4 top-4" />
      <button className="bg-gray-500 text-2xl text-white">Next episode</button>
    </div>
  )
}

export default App
