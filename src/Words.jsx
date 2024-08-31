import React, { useState } from 'react'

function Words() {
    let [solve,setSolve] =useState(Number(""))
    let [news,setNews] =useState("")
    let answer =(e)=>{
      setNews(e.target.value)
        setSolve(news.split(" "))
    }
  return (
    <div>
        <textarea value={news} onChange={answer}/>
        <p>word count:{solve.length}</p>
    </div>
  )
}

export default Words