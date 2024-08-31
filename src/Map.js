import React, { useState } from 'react'
import"./MAP.css"
function Map() {
    let [collect, setCollect] =useState("")
    // console.log(collect); 
    let [value, setValue] = useState("")
    let can =[
        {
            author:"general",
            age:12,
            genre:"fiction"
        },
        {
            author:"baqi",
            age:15,
            genre:"horror"
        },
        {
            author:"tawwab",
            age:15,
            genre:"horror"
        },
        {
            author:"baqi",
            age:15,
            genre:"horror"
        },
        {
            author:"baqi",
            age:15,
            genre:"horror"
        },
        {
            author:"baqi",
            age:15,
            genre:"horror"
        },
        {
            author:"baqi",
            age:15,
            genre:"horror"
        },
        {
            author:"baqi",
            age:15,
            genre:"horror"
        },
        {
            author:"baqi",
            age:15,
            genre:"horror"
        },
        {
            author:"baqi",
            age:15,
            genre:"horror"
        },
    ]
    let handle=()=>{
        console.log("clicked");

    }
    let so =(e)=>{
        setValue(e.target.value)
        setCollect(value)
    }
  return (

    <div>
        { 
        can.map((item)=>(
            
            <table border={2}>
            <thead>
            <tr>
                <th>author</th>
                <th>age</th>
                <th>genre</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{item.author}</td>
                    <td>{item.age}</td>
                    <td>{item.genre}</td>
                </tr>
            </tbody>
        </table>
))
}
        {
            can.map((item)=>(
                <>
                <h2>author:{item.author}</h2>
                <h1>age:{item.age}</h1>
                <h3>genre:{item.genre}</h3>
                </>
            ))
        }
        <button onClick={handle}>click me</button>
        <input type='text' value={value} onChange={so}/>
    <p>{collect}</p>
    </div>
  )
}

export default Map