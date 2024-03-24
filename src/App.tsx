import { FC } from 'react'
import ModeToggle from '~/components/mode-toggle.tsx'
import NetflixNextEpisodeButton from '~/components/netflix-next-episode-button.tsx'

const App: FC = () => {
  return (
    <div className="flex h-[100dvh] w-[100dvw] items-center justify-center overflow-hidden bg-white dark:bg-black">
      <ModeToggle className="fixed right-2 top-2" />
      <NetflixNextEpisodeButton />
    </div>
  )
}

export default App
