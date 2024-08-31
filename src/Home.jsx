import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import spider from './spider.jpg'
// import axios from 'axios'
import './NAV.css'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './w3.css'

// import { Route, Routes } from 'react-router-dom'

function Home() {
  let formik =useFormik({
    initialValues:{
      email:"",

    },
    validationSchema:Yup.object({
      email:Yup.string().email().required("This field is required").max(50,"Email should be less than 50 charactres")
    }),
    onSubmit:(values,actions)=>{
      console.log(values);
      actions.resetForm()
      alert("Your Email has been sent. You will now recieve updates on the latest designs and special offers ")
      
    }
  })
  // let api ="https://randomuser.me/api/"
  // let [data,setData] =useState([])
  // axios.get(api).then((response)=>{
  //   console.log(response.data.results[0]);
  //   setData(response.data.results[0])


  // })
  // let navigate =useNavigate()
  // let hand=()=>{
  //     navigate('/contact')
  // }
  return (
    <div className='ddiv' style={{color:'#fff', fontFamily:'sans-serif', width:'80%',marginTop:'51px' }}>
      
      <nav className='nav' >
        <h1 style={{fontSize:'60px', marginLeft:'30px'}}>New Arrivals</h1>
        <h2 style={{fontSize:'60px', marginLeft:'30px'}}>Collection 2024</h2>
        <Link to={'/products'} className='link' style={{fontSize:'30px', marginLeft:'30px', color:'#fff', 
          backgroundColor:'#000', padding:'10px', textDecoration:'none',fontFamily:'sans-serif'}}>Shop now</Link>
      </nav>
      <form onSubmit={formik.handleSubmit} style={{backgroundColor:'black', padding:'20px', width:'100%',borderRadius:'0px'}}>
        <h1>Subscribe</h1>
        <p>To join our mailing list to recieve updates new arrivals <br/>
        and special offers on the latest designers, subscribe. </p>
        <input type="email" onChange={formik.handleChange} name="email" id=""  style={{width:'100%', padding:'15px'}} placeholder='Enter e-mail'
         value={formik.values.email} onBlur={formik.handleBlur} className={formik.errors.email && formik.touched.email?"invalid":""}/>
         {formik.errors.email && formik.touched.email?<p className='para'>{formik.errors.email}</p>:""}
        <br/>
        <br/>
        <button className='bttn' style={{ padding:'5px'}}>Subscribe</button>

      </form>
    
    
    <footer style={{display:'flex',flexWrap:'wrap', padding:'20px', color:'#000', margin:'auto'}}>
        <div style={{padding:'10px',fontSize:'18px', margin:'auto'}}>
          <h1>Store</h1>
          <li>Esuke Designs</li>
          <li>09099764190</li>
          <li>esukesikiru@gmail.com</li>
        </div>
        <div style={{padding:'10px',fontSize:'18px', margin:'auto'}}>
          <h1>We accept</h1>
          <li>Amex</li>
          <li>Credit card</li>
          <li>Transfer</li>
        </div>
        <div style={{padding:'10px',fontSize:'18px', margin:'auto'}}>
          <h1>Adress</h1>
          <address>
            3,osefiso street,<br/>
            Agbede Olorogbo,<br/>
            Ikorodu,<br/>
            Lagos.
          </address>
        </div>
      </footer>
      <div style={{textAlign:'center', backgroundColor:'#000' }}>
        <p style={{padding:'10px'}}>Powered by Esuke</p>
        

      </div>
      {/* <h1>{data.gender}</h1>
      <h1>One of the best learning ...</h1>
      <img onClick={hand} style={{width:"200px", height:"200px"}} 
      src={spider}/> */}
        {/* <h1>this is the home page</h1> */}
        {/* <Link to={"/about"}>Go to about</Link> */}
    </div>
  )
}

export default Home