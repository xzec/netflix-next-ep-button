import type { FC, SVGProps } from 'react'

const PlayIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15" {...props}>
    <title>Play</title>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.242 2.322a.5.5 0 0 1 .491-.014l9 4.75a.5.5 0 0 1 0 .884l-9 4.75A.5.5 0 0 1 3 12.25v-9.5a.5.5 0 0 1 .242-.428M4 3.579v7.842L11.429 7.5z"
      clipRule="evenodd"
    />
  </svg>
)

export default PlayIcon
