import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './NAV.css'
import "./w3.css"
function Nav() {
  let inputRef=useRef()
let [showw,setShow]=useState(false)
  let style =()=>{
     setShow(!showw)
     if (showw == true) {
      inputRef.current.style.display = "none"
    } else {
      inputRef.current.style.display = "block"
      
     }
  }
  // let god =()=>{
  //   inputRef.current.className=""
  // }

  return (
    <div>
      {/* <button style={{fontSize:"20px", display:'none'}}>☰</button> */}
      <nav className='naav' style={{display:'flex', position:'fixed',top:'0',left:'0',right:'0'}}>
      <button className='show ' onClick={style} >☰</button>

      <label className='labe' style={{color:'black', fontSize:'30px'}}>DMS Clothes</label>

      </nav>

        <nav className='w3-sidebar baaad' ref={inputRef} style={{textAlign:'center',marginTop:'51px'}}>
        <br/>
            <br/>
            <br/>
             
            <Link to={"/"} className='link'  style={{marginTop:'50px', color:'black',textDecoration:'none', fontSize:'20px', }}>Home</Link><br/>
            <br/>
            <br/>
            <br/>
            <Link to={"/about"} className='link' style={{marginTop:'50px',textDecoration:'none', color:'black', fontSize:'20px'}}>About</Link><br/>
            {/* <Link to={"/mca"} style={{marginTop:'50px',textDecoration:'none', color:'black'}}>Learning paths</Link> */}
            <br/>
            <br/>
            <br/>
            <Link to={"/contact"} className='link' style={{marginTop:'50px',textDecoration:'none', color:'black', fontSize:'20px'}}>Contact</Link><br/>
            <br/>
            <br/>
            <br/>
            <Link to={"/products"} className='link' style={{marginTop:'50px',textDecoration:'none', color:'black', fontSize:'20px'}}>Products</Link><br/>
        </nav>
    </div>
  )
}

export default Nav