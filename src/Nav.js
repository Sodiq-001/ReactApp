import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './NAV.css'
import "./w3.css"
import {motion} from 'framer-motion'

function Nav() {
//  let [stat,setStat]=useState(true)
//  const style =()=>{
//  setStat(!stat)
let good=useRef()
//  }
let [tog,setTog]=useState(true)
    let hand=()=>{
      
        setTog(!tog)
      // good.current.className="guo"
    }
  return (
    <div>
    
      {/* <nav className='naav' style={{display:'flex', position:'fixed',top:'0',left:'0',right:'0'}}> */}
      <nav className='w3-container w3-top w3-hide-large w3-xlarge '
       style={{display:'flex', position:'fixed',top:'0',left:'0',right:'0', backgroundColor:'aquamarine'}}>
      <button className='show ' onClick={hand} >☰</button>

  <label className='labe' ref={good} style={{color:'black', fontSize:'30px'}}>DMS Clothes</label>

      </nav>

      {tog?  <motion.nav   animate={{scale:1, x:1}} initial={{scale:0, x:0}}className='w3-sidebar baaad ' ref={good}
       style={{textAlign:'center',marginTop:'51px'}}>
        <br/>
        <h1>DMS Clothes</h1>
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
        </motion.nav> : ''}
    </div>
  )
}

export default Nav