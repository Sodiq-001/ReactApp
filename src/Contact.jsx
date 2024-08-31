import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './CONTACT.css'
import './NAV.css'
function Contact() {
    let formik =useFormik({
      initialValues:{
        firstname:"",
        lastname:"",
        email:"",
        message:"",
        gender:"",

      },
      validationSchema:Yup.object({
        firstname: Yup.string().max(30,"You cannot exeed 30 characters").required("This field is required"),
        lastname: Yup.string().max(30,"You cannot exeed 30 characters").required("This field is required"),
        email: Yup.string().email().required("This field is required"),
        message: Yup.string().max(100,"You cannot exeed 100 characters").required("This field is required"),
        gender: Yup.string().required("Required")
      }),
      onSubmit:(values,actions)=>{
        console.log(values);
        actions.resetForm()
        
      }
    })
  
  return (
    <div style={{ fontFamily:'sans-serif', width:'80%',marginTop:'51px' }} className='style ddiv'>
      <form action="" onSubmit={formik.handleSubmit} style={{margin:"auto"}} className='form'>
        <h1 style={{textAlign:'center'}}>Contact Us</h1>
        <div className='first'>
          <section  style={{padding:"10px"}}>
            <label htmlFor="">First Name*</label><br/>
            <input name='firstname' id='firstname' onChange={formik.handleChange} 
            className={formik.errors.firstname && formik.touched.firstname?"invalid":""}
             value={formik.values.firstname} onBlur={formik.handleBlur} type="text" style={{width:'90%'}}/>
                    {formik.errors.firstname && formik.touched.firstname?<p className='para'>{formik.errors.firstname}</p>:""}

          </section>
          <section style={{padding:"10px"}}>
            <label htmlFor="">Last Name*</label><br/>
            <input type="text" className={formik.errors.lastname && formik.touched.lastname?"invalid":""} name='lastname' id='lastname' value={formik.values.lastname} 
            onChange={formik.handleChange} onBlur={formik.handleBlur} style={{width:'90%'}}/>
                     {formik.errors.lastname && formik.touched.lastname?<p className='para'>{formik.errors.lastname}</p>:""}

          </section>

        </div>
        <div>
          <section style={{padding:"10px"}}>
            <label htmlFor="">Email*</label><br/>
            <input type="email" name='email' onChange={formik.handleChange} 
            id='email' value={formik.values.email} onBlur={formik.handleBlur} 
            className={formik.errors.email && formik.touched.email?"invalid":""} style={{width:"96%"}}/>
                    {formik.errors.email && formik.touched.email?<p className='para'>{formik.errors.email}</p>:""}

          </section>
        </div>
        <div>
          <h3 style={{padding:"10px"}}>Query Type</h3>
    

          <div className='first'>
            <div>
          <section 
             style={{border: '1px solid #000', borderRadius: '5px', padding:"10px", marginLeft:'10px',}}>
            <input className={formik.errors.gender && formik.touched.gender?"invalid":""} onChange={formik.handleChange} 
            onBlur={formik.handleBlur} type="radio" name="gender" value="General Enquiry" id="" />
            <label htmlFor="">General Enquiry</label>
          </section>
          {formik.errors.gender && formik.touched.gender?<p className='para' style={{marginLeft:'8px'}}>{formik.errors.gender}</p>:""}
          </div>
          <div>
          <section className= {formik.errors.gender && formik.touched.gender?"invalid":""} style={{border: '1px solid #000', borderRadius: '5px', padding:"10px", marginLeft:'20px'}}>
            <input type="radio" name="gender" value="Support Request" id=""
             className={formik.errors.gender && formik.touched.gender?"invalid":""} onChange={formik.handleChange} 
             onBlur={formik.handleBlur} />
            <label htmlFor="">Support Request</label>
          </section>
          {formik.errors.gender && formik.touched.gender?<p className='para' style={{marginLeft:'19px'}}>{formik.errors.gender}</p>:""}
          </div>
          </div>
        </div>
        <div>
          <section style={{padding:"10px"}}>
            <label htmlFor="">Message*</label><br/>
            <input type="text" name='message' style={{width:'96%'}}onChange={formik.handleChange} 
            id='message' value={formik.values.message} onBlur={formik.handleBlur} 
            className={formik.errors.message && formik.touched.message?"invalid":""}/>
                {formik.errors.message && formik.touched.message?<p className='para'>{formik.errors.message}</p>:""}

          </section>
        </div>
        <div>
          <section style={{padding:"10px"}}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">I consent to being contacted by the team</label>
          </section>
        </div>
        <div>
          <section style={{padding:"10px"}}>
          <button type="submit" style={{width:'96%'}}>Send</button>
          </section>
        </div>
      </form>
      <footer>
      <div style={{textAlign:'center', backgroundColor:'#000' }}>
        <p style={{padding:'10px',color:'#fff'}}>Powered by Esuke</p>
      </div>
      </footer>
      
      
    </div>
  )
}

export default Contact