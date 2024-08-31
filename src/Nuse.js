import React, { useState } from 'react'

function Nuse() {
    
    let[cond,setCond] = useState(false)
    // let [spark,setSpark] =useState("spark")
    let handle =()=>{
        setCond(true)
    }
    // console.log(spark);
    let [value,setValue] = useState("")
    let [output,setOutput] = useState("")
    let hand = (e)=>{
        setValue(e.target.value)
        setOutput(value.length)

    }
  return (
    <div>
        
       {/* cond? <h1>i am a boy</h1> */}
       <button onClick={handle}>rect</button>
       <input type='text'value={value} onChange={hand}/>
       <p>{output}</p>


       {
        //   cond?<><p>good</p><h1>i am a boy</h1></> :<><p>bad</p><h1>i am a girl</h1></> 
       }
    
        
        
        {/* <button onClick={handle}>ggggg</button>
        <p>{spark}</p> */}
    </div>
  )
}

export default Nuse