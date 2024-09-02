import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NAV.css'
import './all.css'
import jeans1 from './img/jeans6.jpg'
import jjean from './img/jackets7.jpg'
import "./fontawesome-free-6.6.0-web/css/all.css"
import "./fontawesome-free-6.6.0-web/js/all"
import { motion } from 'framer-motion'
// import jeans2 from './img/jeans2.jpg'
// import jeans3 from './img/jeans3.jpg'
// import jeans4 from './img/jeans4.jpg'
import jack from './img/jackets3.jpg'
import shirt from './img/men shirts10.jpg'
import cart from './cart.png'
// import { Formik, useFormik } from 'formik'
import './PRODUCTS.css'

function Products() {
  let [sart,setSart]=useState(false)

let bard =()=>{
   setSart(!sart)
}
// let zada =()=>{
//   setSart(false)
// }
  return (
    <div className='ddiv'  style={{color:'#000', fontFamily:'sans-serif', width:'80%',marginTop:'51px' }}>
    <div className='divv fixed'>
            <h1 style={{padding:'20px'}}>Our products</h1>
             
            <Link className='class' to={"/products/shirts"}>Shirts</Link>
            <Link className='class' to={"/products/shorts"}>Shorts</Link>
            <Link className='class' to={"/products/trousers"}>Trousers</Link>
            <Link className='class' to={"/products/jackets"}>Jackets</Link>
            <div className=' dropbtn' ><img src={cart} alt='' onClick={bard} className='immg' style={{color:'#adff2f'}}/>
            <motion.span  animate={{scale:1}} initial={{scale:0}} className='tool' >Cart</motion.span></div>
          

            </div>
            <div>
            <h1 style={{color:'skyblue'}}>Latest Arrivals September 2024</h1>
            <h2 style={{color:'skyblue'}}>Shop Now ..</h2>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
            <div className='container'>
               <img className='img' src={jeans1} alt='' />
               <motion.button  animate={{scale:1, x:1}} initial={{scale:0, x:0}} className='btn' >Add to cart</motion.button>

               </div>
               <div className='container'>
               <img className='img' src={shirt} alt='' />
               <motion.button  animate={{scale:1, x:1}} initial={{scale:0, x:0}} className='btn'>Add to cart</motion.button>
               </div>
               <div className='container'>
               <img className='img' src={jack} alt=''/>
               <motion.button  animate={{scale:1, x:1}} initial={{scale:0, x:0}} className='btn'>Add to cart</motion.button>
            </div>
            <div className='container'>
              <img className='img' src={jjean} alt='' />
              <motion.button  animate={{scale:1, x:1}} initial={{scale:0, x:0}} className='btn'>Add to cart</motion.button>

            </div>
            </div>
            {sart? <motion.div  animate={{scale:1, x:1}} initial={{scale:0, x:0}} className='ask'></motion.div> :''}

            <footer>
            </footer>
    </div>
  )
}

export default Products