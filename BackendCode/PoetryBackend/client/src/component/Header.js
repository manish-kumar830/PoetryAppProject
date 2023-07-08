import React from 'react'
import { Link } from "react-router-dom"


function Header() {
   return (
      <nav>
         <div className='bg-primary' style={{ height: '09vh', color: 'white', display:'flex',
                                              justifyContent:'space-between', alignItems:'center'}}>


            <div>
               <h1 style={{fontSize:'30px', marginLeft:'20px'}}>Admin Panel</h1>
            </div>

            <div style={{marginRight:'20px'}}>
               <Link style={{ margin: '10px', fontWeight: 'bold', color:'white', textDecoration:'none' }} to="/">Home </Link>
               {/* <Link style={{margin:'10px'}} to="/edit" className='navbar-brand'>Edit </Link> */}
               <Link style={{ margin: '10px', fontWeight: 'bold', color:'white', textDecoration:'none' }} to="/upload">Upload </Link>
            </div>




         </div>
      </nav>
   )
}

export default Header
