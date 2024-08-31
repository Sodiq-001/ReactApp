import React from 'react'
import Jean from "./img/Jean.jpg"
import './NAV.css'
import Avatar from './img/team3.jpg'
import Team from './img/team1.jpg'
import Team1 from './img/team2.jpg'

// import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='divv' style={{color:'#000', fontFamily:'sans-serif', float:'right', width:'80%',marginTop:'51px' }}>
      {/* <p>this is the about page</p> */}
      {/* <h1>Why McAndersonn</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus amet <br />
         officia suscipit mollitia animi. Quaerat perferendis iusto error consectetur, ducimus blanditiis <br />
         modi rem voluptates dicta, earum aut distinctio doloremque dolorem.</p>
      this is the about page
        <Link to={"/"}>Return to home</Link> */}
        <h1 style={{textAlign:"center"}}>About us</h1>
     
    <div style={{display:'grid',gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', padding:'20px'}}>
        <div style={{width:'90%'}}>
          <h1>DMS Designs</h1>
          <p>Was founded by Admiral sodiq on the 22 of august 2024. He was able to transform the art of design
             into an extraordinary tool to build his company to its fullest potential.He was a student of the
              University of Lagos,Lagos and he graduated with a first class honors in Microbiology.
              He is a happily married man with four kids Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Excepturi dolorum quidem magni laudantium necessitatibus! Illo placeat atque blanditiis 
              pariatur a accusantium perferendis,repudiandae voluptatum enim debitis dolor quas nemo officiis.</p>
        </div>
        <div style={{padding:'20px'}}>
           <img src={Jean} style={{width:'100%', height:'450px'}} alt=''/>
        </div>
        </div>
        <h2 style={{textAlign:'center', width:'100%', backgroundColor:'skyblue'}}>Our Staff</h2>
        <div className='cllass'>

          <nav style={{padding:'10px'}}>
            <img src={Avatar} alt="" style={{width:'100%'}}/>
            
            <p style={{backgroundColor:'lightskyblue', padding:'5px'}}><h3>Manager : Abdulrahman</h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates 
              cumque incidunt quae, dolores placeat amet fugiat inventore ut quis omnis culpa. 
              Facere molestiae, aut nobis iusto unde modi inventore dolore! Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Perferendis veritatis laboriosam accusamus
              voluptate doloremque. Harum dolorum ipsam voluptatum debitis totam autem!
              Veritatis asperiores eaque magni quaerat minima culpa mollitia modi?</p>
          </nav>
          <nav style={{padding:'10px'}}>
            <img src={Team} alt="" style={{width:'100%'}}/>
            
            <p style={{backgroundColor:'lightskyblue', padding:'5px'}}><h3>Chief Distributor : Aisha</h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates 
              cumque incidunt quae, dolores placeat amet fugiat inventore ut quis omnis culpa. 
              Facere molestiae, aut nobis iusto unde modi inventore dolore! Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Perferendis veritatis laboriosam accusamus
              voluptate doloremque. Harum dolorum ipsam voluptatum debitis totam autem!
              Veritatis asperiores eaque magni quaerat minima culpa mollitia modi?</p>
          </nav>
          <nav style={{padding:'10px'}}>
            <img src={Team1} alt="" style={{width:'100%'}} />
            <p style={{backgroundColor:'lightskyblue', padding:'5px'}}> <h3>Head Designer : Mukthar</h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates 
              cumque incidunt quae, dolores placeat amet fugiat inventore ut quis omnis culpa. 
              Facere molestiae, aut nobis iusto unde modi inventore dolore! Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Perferendis veritatis laboriosam accusamus
              voluptate doloremque. Harum dolorum ipsam voluptatum debitis totam autem!
              Veritatis asperiores eaque magni quaerat minima culpa mollitia modi?</p>
          </nav>
        </div>
        <footer>
        <div style={{textAlign:'center', backgroundColor:'#000' }}>
        <p style={{padding:'10px',color:'#fff'}}>Powered by Esuke</p>  
      </div>
      </footer>
    </div>
  )
}

export default About