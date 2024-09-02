// import React, { useRef, useState } from 'react'
// import {motion} from 'framer-motion'
// import './pop.css'
// function Pop() {
//     let [tog,setTog]=useState(false)
//     // let ues =useRef()

//     // let hand =()=>{
//     //     ues.current.className="sat"
//     // }
//     // let hhan =()=>{
//     //     ues.current.className.remove="sat"
//     // }
//     const hand=()=>{
//         setTog(!tog)

//     }
//   return (
//     <div>
//         <button className='btn' onClick={hand}>open</button>
//         { tog?  <div className='div'>
//             <button onClick={hand}>close</button>
//             <motion.div animate={{scale:1, x:1}} initial={{scale:0, x:0}}>
//                 <h1>This is a menu</h1>
//                 <p>lorem  c c cc c d ddddddddddd dddddddddd 
//                      eeeeeeeeee eeeeeeeeeee eeeeeeeeee eeeeeeeeeeee eeeeeeeee </p>
//             </motion.div>
//         </div> :''}
//         <motion.div animate={{scale:1}} initial={{scale:0}}>
//           framer
//         </motion.div>
//     </div>
//   )
// }

// export default Pop