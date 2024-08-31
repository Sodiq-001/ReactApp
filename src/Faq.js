import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Faq() {
  return (
    <div>
        <h1>Products</h1>
        {/* <p>lorem ipsue dmcjcjjcjc dmdmdmdm dmdmdmdm dmdmdmd <br/>
             mdmdmd kwwiwiw wkwkwkwkwmssks msssmsmsm wmsmsm</p> */}
             <nav>
              <Link to={"/faq/bag"}>Bag</Link>
              <Link to={"/faq/laptop"}>Laptop</Link>
              <Link to={"/faq/show"}>Shoe</Link>

             </nav>


             <Outlet />
    </div>
  )
}

export default Faq