import React from 'react'
import jeans1 from './img/jeans1.jpg'
import jeans2 from './img/jeans2.jpg'
import jeans3 from './img/jeans3.jpg'
import jeans4 from './img/jeans4.jpg'

function Trousers() {
  return (
    <div style={{color:'#000', fontFamily:'sans-serif', float:'right', width:'998px', textAlign:'center'  }}>
      <h1>Our trousers</h1>
      <img src={jeans1} alt=''/>
      <img src={jeans2} alt=''/>
      <img src={jeans3} alt=''/>
      <img src={jeans4} alt=''/>
    </div>
  )
}

export default Trousers