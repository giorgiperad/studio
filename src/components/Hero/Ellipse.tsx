import { FC, HTMLAttributes, RefObject } from 'react'

interface EllipseProps extends HTMLAttributes<SVGElement> {
  ref: RefObject<SVGSVGElement>
}

const Ellipse: FC<EllipseProps> = ({ ref, ...props }) => {
  return (
    <svg
      ref={ref}
      width="412"
      height="413"
      viewBox="0 0 412 413"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <rect
        x="6"
        y="6"
        width="400"
        height="400"
        rx="40"
        stroke="currentColor"
        strokeWidth="12"
        strokeDasharray="32 32 64 64"
        fill="none"
      />
    </svg>
  )
}

export default Ellipse
