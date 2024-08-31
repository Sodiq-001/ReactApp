import React from 'react'
import Spider from "./spider.jpg"
function Esuke(props) {
  
  return (
    <div style={{textAlign:"center"}}>
        <h1>{props.book}</h1>
        <img style={{width:"200px", height:"200px"}} src={Spider}/>
       <p>{props.hi}</p>
    </div>
  )
}

export default Esuke