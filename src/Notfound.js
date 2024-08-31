import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div style={{textAlign:'center', }}>
      <h1>Page not found ...</h1>
        <Link to={"/"}>click here to go back to home page</Link>
        {/* https://randomuser.me/api/ */}
        {/* output out {gender and state} */}
      
    </div>
  )
}

export default Notfound