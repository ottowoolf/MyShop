// import React from 'react'
// import { Spinner } from 'react-bootstrap'

// const Loader = () => {
//   return (
//     <Spinner
//       animation='border'
//       role='status'
//       style={{
//         width: '100px',
//         height: '100px',
//         margin: 'auto',
//         display: 'block',
//       }}
//     >
//       <span className='sr-only'>Loading...</span>
//     </Spinner>
//   )
// }

// export default Loader

import { useState } from "react"
import { css } from "@emotion/react"
import RiseLoader from "react-spinners/RiseLoader"

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: auto;
  border-color: blue;
`
function Loader() {
  return (
    <div className="sweet-loading">
      <RiseLoader color={"#B5CDE4"} css={override} size={30} />
    </div>
  )
}

export default Loader
