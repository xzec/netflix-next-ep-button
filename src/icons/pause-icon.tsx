import type { FC, SVGProps } from 'react'

const PauseIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15" {...props}>
    <title>Pause</title>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.05 2.75a.55.55 0 0 0-1.1 0v9.5a.55.55 0 0 0 1.1 0zm4 0a.55.55 0 0 0-1.1 0v9.5a.55.55 0 0 0 1.1 0z"
      clipRule="evenodd"
    />
  </svg>
)

export default PauseIcon
