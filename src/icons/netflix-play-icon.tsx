import { FC } from 'react'
import type { SVGProps } from 'react'

const NetflixPlayIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path fill="currentColor" d="M0 0v512l512-256z"></path>
    </svg>
  )
}

export default NetflixPlayIcon
