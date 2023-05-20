import * as React from "react"

const RestoreComponent = (props) => (
  <svg width={150} height={180} xmlns="http://www.w3.org/2000/svg" {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={150}
      height={175}
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path
        d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9a9 9 0 0 0-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7a6.995 6.995 0 0 1-11.06 5.7l-1.42 1.44A9 9 0 1 0 12 3z"
        fill="#303a52"
        className="color000 svgShape"
      />
    </svg>
  </svg>
)

export default RestoreComponent
