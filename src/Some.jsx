import React from 'react'

function Some(props) {
  return (
    <div>{2+2}Some
    <p style={{color:"red", backgroundColor:"orange"}}>{props.set}</p>
    </div>
  )
}

export default Some