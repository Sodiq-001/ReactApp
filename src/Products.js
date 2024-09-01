import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './NAV.css'
import './all.css'
import jeans1 from './img/jeans6.jpg'
import jjean from './img/jackets7.jpg'
import "./fontawesome-free-6.6.0-web/css/all.css"
import "./fontawesome-free-6.6.0-web/js/all"
// import jeans2 from './img/jeans2.jpg'
// import jeans3 from './img/jeans3.jpg'
// import jeans4 from './img/jeans4.jpg'
import jack from './img/jackets3.jpg'
import shirt from './img/men shirts10.jpg'
// import { Formik, useFormik } from 'formik'
import './PRODUCTS.css'

function Products() {
  let inputRef=useRef()
  let reff =useRef()
  let rref =useRef()
  let reef =useRef()
  let hhand =()=>{
    reef.current.style.display = "block"
  }
  let ssee=()=>{
    reef.current.style.display = "none"
  }
  let handleCart=()=>{
    // console.log(e.target);
    // inputRef.current.style.display="show"
    inputRef.current.style.display = "block"
  }
  let seet =()=>{
    inputRef.current.style.display = "none"
  }
  let handle=()=>{
    // console.log(e.target);
    // inputRef.current.style.display="show"
    reff.current.style.display = "block"
  }
  let sett =()=>{
    reff.current.style.display = "none"
  }
  let hand=()=>{
    // console.log(e.target);
    // inputRef.current.style.display="show"
    rref.current.style.display = "block"
  }
  let sset =()=>{
    rref.current.style.display = "none"
  }

  return (
    <div className='ddiv' style={{color:'#000', fontFamily:'sans-serif', width:'80%',marginTop:'51px' }}>
    <div className='divv fixed'>
            <h1 style={{padding:'20px'}}>Our products</h1>
             
            <Link className='class' to={"/products/shirts"}>Shirts</Link>
            <Link className='class' to={"/products/shorts"}>Shorts</Link>
            <Link className='class' to={"/products/trousers"}>Trousers</Link>
            <Link className='class' to={"/products/jackets"}>Jackets</Link>
            <div className='fas fa-cart-plus fa-6x sset dropbtn' ><span className='tool'>Cart</span></div>
            <div className='dropdown'></div>

            </div>
            <h1 style={{color:'skyblue'}}>Latest Arrivals September 2024</h1>
            <h2 style={{color:'skyblue'}}>Shop Now ...</h2>
            <div style={{display:'flex'}}>
            <div className='container'>
               <img className='img' src={jeans1} alt='' onMouseOver={handleCart} onMouseOut={seet}/>
               <button className='btn' ref={inputRef}>Add to cart</button>

               </div>
               <div className='container'>
               <img className='img' src={shirt} alt='' onMouseOver={handle} onMouseOut={sett}/>
               <button className='btn' ref={reff}>Add to cart</button>
               </div>
               <div className='container'>
               <img className='img' src={jack} alt='' onMouseOver={hand} onMouseOut={sset}/>
               <button className='btn' ref={rref}>Add to cart</button>
            </div>
            <div className='container'>
              <img className='img' src={jjean} alt='' onMouseOver={hhand} onMouseOut={ssee}/>
              <button className='btn' ref={reef}>Add to cart</button>

            </div>
            </div>                   
            <footer>
            </footer>
    </div>
  )
}

export default Products